# Sem Arts Intranet

The single source-of-truth repo for the Semantic Arts internal intranet — one Entra-gated
Cloudflare site with role/project access. **Decision (2026-08-03): ONE repo**, organized as
`spaces/<name>/` folders mirroring the old Confluence spaces.

See [`ARCHITECTURE.md`](ARCHITECTURE.md) for the full design and [`wireframe-home.html`](wireframe-home.html)
for the home-page wireframe.

## Why one repo
- The intranet is **one composed Astro build** (unified nav, relative cross-links) → one repo = one
  build / deploy / CMS config.
- **Access is enforced at the edge, not by repo boundaries:** Cloudflare Access gates *reads* by URL
  path; the bot-route Entra-group check gates *writes*. Splitting repos buys nothing on access.
- The **bot route** means contributors never hold GitHub write, so there's no "monorepo = write-all"
  problem.

## ⚠️ Guardrails (load-bearing)
- **GitHub read access to this repo stays restricted to a small admin group + the GitHub App/bot —
  never org-wide.** A `git clone` bypasses every Cloudflare gate, so the repo is only as protected as
  its read access. Everyone else consumes content through the gated site.
- **No secrets in this repo, ever** (policy). Secret files are removed at migration; credentials live
  in the team's secure store.
- **Escape hatch:** a genuinely need-to-know space may get its own tighter private repo mounted into
  the build separately — evaluate **PSI CRO 2025** and **Clients and Partners** for this.

## Structure
```
astro.config.mjs    the ONE composed Starlight build (all sections, one nav + search)
src/content/docs/   committed content, one folder per section — the source of truth the site builds from
  index.mdx           home / launcher (authored)
  operations-manual/  · training/ · administrative/ · offerings/ · internal-systems/ · data-centric-architecture/
src/components/      SiteTitle (wordmark) + Footer (Training per-lesson tools)
src/pages/training/  map.astro — the /training/map/ knowledge graph
src/lib/             training-graph.ts — build-time cross-link graph for Training
scripts/
  assemble-content.mjs  migration tool: (re)builds src/content/docs/ from the sources below
  confluence_to_markdown.py  the reusable Confluence→Markdown converter
spaces/<name>/       Confluence-migrated staging (source for assemble; attachments git-ignored)
ARCHITECTURE.md      full architecture + phased roadmap
```

### How the build works
`npm run build` runs `astro build` over the **committed** `src/content/docs/` — Cloudflare needs
nothing else (no sibling repos, no assembly step at deploy). `npm run assemble` is the migration tool
that (re)populates those section folders from their sources — the `spaces/` folders (in-repo) and the
sibling `sa-ops-manual` / `sa-training-materials` repos in `~/git`. Run it after a source changes, then
commit the result. A path-aware rehype pass in `astro.config.mjs` prefixes each migrated section's
absolute links (`/accounting-guide/…` → `/operations-manual/accounting-guide/…`) at build.

## Space inventory (Phase 1: migrate out of Confluence)
**Folded into this repo (content spaces):**
- `spaces/administrative/` — Administrative (← SA-Admin-Docs)
- `spaces/offerings/` — Offerings (← SA-Offerings)
- `spaces/internal-systems/` — Internal Systems (← SA-Internal-Systems, secrets scrubbed)
- `spaces/data-centric-architecture/` — Data Centric Architecture (← SA-DCA-Docs)

**Already-built Astro apps — integrate as sections at Phase 4:**
- Operations Manual (SA-Operations-Manual) · Training / LMS (SA-Training-Materials)

**Still to migrate (4):** Clients and Partners · Domain Knowledge Base · PSI CRO 2025 · Software Development
**Out of scope:** Dave Extracuricular · Data-Centric Architecture Forum · Book Club

## Status
**Phase 4 (unified Astro build) — DONE 2026-08-05.** One composed Starlight site now renders all six
sections from `src/content/docs/`: home + Operations Manual (55 pp.) + Training (240 pp., with the
`/training/map/` knowledge graph and the mark-complete / related-lessons LMS tools) + the four migrated
spaces (Administrative 70, Offerings 87, Internal Systems 77, DCA 17). **548 pages, one nav, one Pagefind
search index.** `npm run build` is green locally.

### Open decisions before deploy
1. **Media hosting.** Attachments (~187 MB in spaces + Training/Ops media) are assembled into `public/`
   but **git-ignored** — and one Administrative summit `.pptx` is 26 MB, over **Cloudflare Pages' 25 MB/file
   limit**. Decide per `spaces/MEDIA-DEFERRED.md`: small images committed in-repo, large media (PowerPoints,
   video) to SharePoint/Stream and linked. Until then a deploy has working text but broken image/attachment links.
2. **Cloudflare Pages build settings.** Switch the project from "serve static `site/`" to **build command
   `npm run build`, output dir `dist`**. The old committed `site/` tree is superseded by the build and can
   be removed once the Pages project is repointed.
3. **Archive staging.** After the committed `src/content/docs/` is confirmed, `spaces/` and the sibling
   `sa-*` snapshot repos can be archived (assembly won't regenerate those sections without them, but the
   committed output still builds).

Next after that: Entra IdP + Cloudflare path-gating (roadmap Phases 5–7).
