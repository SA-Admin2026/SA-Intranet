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
spaces/<name>/     one folder per migrated Confluence space (Markdown + attachments)
scripts/           the reusable Confluence→Markdown converter
ARCHITECTURE.md    full architecture + phased roadmap
wireframe-home.html home-page wireframe (light "console", SA-branded)
```
The Astro app that renders these spaces into the unified, identity-aware site is added at Phase 4.

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
Skeleton stood up 2026-08-03. Next (Phase 4): scaffold the single Astro/Starlight app over `spaces/`,
then Entra IdP + Cloudflare path-gating (Phases 5–7). The 6 per-space `SA-*` repos are clean staging
snapshots; archive them once their content is confirmed folded in here.
