// <topic-progress> — a per-topic progress rollup shown on each Training topic landing.
// The lesson list is injected at build time (see scripts/assemble-content.mjs) as a
// data-lessons attribute; completion reads the same localStorage keys the per-lesson
// "Mark complete" control writes (sat:done:<route>), so the two stay in sync and this
// updates live when a lesson is marked elsewhere.
(function () {
  const KEY = (r) => 'sat:done:' + r;
  const esc = (s) =>
    String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  class TopicProgress extends HTMLElement {
    connectedCallback() {
      try {
        this.lessons = JSON.parse(this.getAttribute('data-lessons') || '[]');
      } catch {
        this.lessons = [];
      }
      this.topic = this.getAttribute('data-topic') || 'this topic';
      this._render = this._render.bind(this);
      this._render();
      document.addEventListener('sat:progress', this._render);
      window.addEventListener('storage', this._render);
    }
    disconnectedCallback() {
      document.removeEventListener('sat:progress', this._render);
      window.removeEventListener('storage', this._render);
    }
    _render() {
      const total = this.lessons.length;
      if (!total) { this.hidden = true; return; }
      const done = this.lessons.filter((l) => localStorage.getItem(KEY(l.route)) === '1').length;
      const pct = Math.round((100 * done) / total);
      const items = this.lessons
        .map((l) => {
          const d = localStorage.getItem(KEY(l.route)) === '1';
          return `<li class="${d ? 'is-done' : ''}"><span class="tp-mark">${d ? '✓' : '○'}</span><a href="${esc(l.route)}">${esc(l.title)}</a></li>`;
        })
        .join('');
      this.innerHTML = `
        <section class="tp-box" aria-label="Your progress in ${esc(this.topic)}">
          <div class="tp-head"><strong>Your progress — ${esc(this.topic)}</strong><span class="tp-count">${done} / ${total} lessons</span></div>
          <div class="tp-bar"><div class="tp-fill" style="width:${pct}%"></div></div>
          <details class="tp-list"><summary>${done === total ? 'All lessons complete 🎉' : 'Show lessons'}</summary><ul>${items}</ul></details>
        </section>`;
    }
  }
  if (!customElements.get('topic-progress')) customElements.define('topic-progress', TopicProgress);
})();
