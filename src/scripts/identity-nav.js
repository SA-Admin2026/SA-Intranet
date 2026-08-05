// Identity-aware navigation. Reads the signed-in user's Entra groups from Cloudflare
// Access (`/cdn-cgi/access/get-identity`) and hides links to sections the user can't open.
// This is UX only — the real gate is the Cloudflare Access policy at the edge; a hidden
// link that's reached anyway still denies.
//
// Behaviour:
//   • Not behind Access / local dev (fetch fails)  → fail-OPEN, show everything.
//   • Behind Access, identity has the group        → show the section.
//   • Behind Access, identity lacks the group      → fail-CLOSED, hide the section
//     (so a not-yet-launched gated section stays hidden until its group flows).
//
// RESTRICTED maps a section's URL prefix to the group identifiers allowed to see it.
// IMPORTANT: fill these with the EXACT values `get-identity` returns once Entra groups
// exist — Entra often emits group **object IDs (GUIDs)**, not names. We match against each
// group's name, id, and email, so either works; reconcile to the real identifiers then.
(function () {
  var RESTRICTED = {
    '/operations/': ['operations-team', 'executive-team'],
    // '/hr-admin/': ['hr', 'executive-team'],   // future
    // '/comp/':     ['hr', 'executive-team'],    // future
  };

  // Home launcher marks gated links with [data-gate="<prefix>"] and default-hides them via
  // CSS, so a denied section never flashes; we reveal on allow. Starlight sidebar links
  // aren't pre-marked, so those we hide on deny.
  function apply(prefix, allowed) {
    document.querySelectorAll('[data-gate="' + prefix + '"]').forEach(function (el) {
      el.style.display = allowed ? '' : 'none';
    });
    if (!allowed) {
      document.querySelectorAll('a[href^="' + prefix + '"]').forEach(function (a) {
        if (a.hasAttribute('data-gate')) return;
        var d = a.closest('details'); // Starlight sidebar group
        var host = a.closest('.card') || (d ? d.closest('li') : null) || a.closest('li') || a;
        if (host) host.style.display = 'none';
      });
    }
  }
  function revealAll() {
    document.querySelectorAll('[data-gate]').forEach(function (el) { el.style.display = ''; });
  }

  fetch('/cdn-cgi/access/get-identity', { credentials: 'same-origin' })
    .then(function (r) { if (!r.ok) throw new Error('no-access'); return r.json(); })
    .then(function (id) {
      var groups = [];
      (id.groups || []).forEach(function (g) {
        ['name', 'id', 'email'].forEach(function (k) {
          if (g && g[k]) groups.push(String(g[k]).toLowerCase());
        });
      });
      Object.keys(RESTRICTED).forEach(function (prefix) {
        var allowed = RESTRICTED[prefix].map(function (x) { return x.toLowerCase(); });
        apply(prefix, groups.some(function (g) { return allowed.indexOf(g) >= 0; }));
      });
    })
    .catch(function () { revealAll(); /* not behind Access (dev) — fail open; edge enforces in prod */ });
})();
