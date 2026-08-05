// <section-search data-prefix="/reference/" data-label="Reference"> — a search box
// scoped to one section. Uses the site's Pagefind index (built at deploy) and filters
// results to the given URL prefix. Loaded site-wide via Starlight head; only renders
// where the element is placed (currently the Reference landing). Degrades gracefully
// when Pagefind isn't present (e.g. `astro dev`).
(function () {
  const esc = (s) =>
    String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  class SectionSearch extends HTMLElement {
    connectedCallback() {
      const prefix = this.getAttribute('data-prefix') || '/';
      const label = this.getAttribute('data-label') || 'this section';
      this.innerHTML =
        `<div class="ss-box"><input class="ss-input" type="search" autocomplete="off" ` +
        `placeholder="Search ${esc(label)}…" aria-label="Search ${esc(label)}"/>` +
        `<div class="ss-results" hidden></div></div>`;
      const input = this.querySelector('.ss-input');
      const out = this.querySelector('.ss-results');
      let pf = undefined;
      const getPf = async () => {
        if (pf !== undefined) return pf;
        try {
          pf = await import(/* @vite-ignore */ '/pagefind/pagefind.js');
        } catch {
          pf = null;
        }
        return pf;
      };
      let timer;
      input.addEventListener('input', () => {
        clearTimeout(timer);
        const q = input.value.trim();
        timer = setTimeout(async () => {
          if (q.length < 2) { out.hidden = true; out.innerHTML = ''; return; }
          const p = await getPf();
          out.hidden = false;
          if (!p) { out.innerHTML = '<p class="ss-note">Search runs on the deployed site — use the top-bar search here.</p>'; return; }
          const res = await p.search(q);
          const data = await Promise.all(res.results.slice(0, 20).map((r) => r.data()));
          const hits = data.filter((d) => d.url.startsWith(prefix)).slice(0, 8);
          out.innerHTML = hits.length
            ? hits
                .map(
                  (d) =>
                    `<a class="ss-hit" href="${d.url}"><span class="ss-t">${esc((d.meta && d.meta.title) || d.url)}</span><span class="ss-x">${d.excerpt}</span></a>`
                )
                .join('')
            : '<p class="ss-note">No matches in this section.</p>';
        }, 180);
      });
    }
  }
  if (!customElements.get('section-search')) customElements.define('section-search', SectionSearch);
})();
