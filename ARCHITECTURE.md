# Semantic Arts intranet — architecture

**Status:** proposal for review · **Author:** COO Platform (for JT) · **Date:** 2026-07-31

## Purpose

Consolidate the firm's internal content and tools into **one navigable intranet** with precise,
role- and project-aware access control. It ends the "many separate sites" sprawl (one front door,
one login) and gives us a single place that access rules apply to consistently.

## Context

Three areas are already migrated to Cloudflare Pages + Cloudflare Access — the **Operations Manual**,
**Training**, and **Admin Docs** — currently separate sites gated by a shared email allowlist. This plan
folds those (plus new areas like the **handbook/HR** and **project spaces**, and eventually custom apps)
into one intranet whose access "works exactly right."

Note on HR/handbook specifically: putting it on a **static** intranet page eliminates any AI-hallucination
risk — employees read the exact documents, verbatim and searchable; nothing is generated. The "which
state?" step becomes a navigation selector, not an AI interview, and it reaches everyone (no Claude
account needed).

## Core principle: identity + groups are the single source of truth

Access must not live in hand-kept allowlists — those drift and that is how access goes wrong. Instead:

- **Microsoft Entra ID is the directory of record.** Groups define who's who; IT/HR manage membership once,
  in the system that already runs M365 for all staff.
- **Cloudflare Access enforces it.** It reads Entra group membership and maps each group to the URL paths
  it may reach, denying unauthorized requests **at the edge**.
- **One login (SSO)** covers the intranet and every app behind the same gate.

**Prerequisite:** confirm Entra licensing with IT. M365 Business Premium includes Entra ID **P1** (the
group-based features); emitting group claims to Cloudflare generally works even on lower tiers — verify. A
one-time **Global Admin** setup is required (app registration + group claims in the token).

## Identity & groups (Entra)

Confirmed groups:

- **all-staff** — everyone; company-wide content.
- **operations-team**
- **marketing-team**
- **developers**
- **consultants**
- **per-project** — one group per active project/engagement; membership = the employees on it.
- **executive-team** — **full visibility to everything** (a superset, included in every policy).

**Overlap is expected and supported.** A person can be in several groups (e.g., a *developer* also on
*project-Dematic*). Entra handles multi-membership natively; access policies combine with **OR** (in *any*
allowed group → permitted). The **executive-team** group is appended to every section's policy so leadership
sees all.

## Access model (path → group)

Access is enforced by **URL path**, so content is organized into folders that line up with who-may-see-them.
Representative map (executive-team implicitly added to every row):

| Section (path)                         | Who can reach it            |
| -------------------------------------- | --------------------------- |
| `/`, `/handbook/*`, `/training/*`, `/operations-manual/*` | all-staff |
| `/operations/*`                        | operations-team             |
| `/marketing/*`                         | marketing-team              |
| `/engineering/*`                       | developers                  |
| `/consulting/*`                        | consultants                 |
| `/projects/<name>/*`                   | project-`<name>`            |
| `/hr-admin/*`, `/comp/*`               | HR / executive-team only    |

Default-deny: you must be in an allowed group to reach a path. Cloudflare logs every allow/deny (auditable).

## Site architecture

- **One Cloudflare Pages site**, one domain (e.g. `intranet.semanticarts.com`), a unified top nav.
- Content is Markdown on the **same Astro/Starlight stack** as the current migrations; the three existing
  sites fold in as sections.
- **Identity-aware navigation:** Cloudflare passes a signed identity token (carrying the user's groups) to
  the site; a thin **Cloudflare Function** reads it and renders the nav to show only the sections a person can
  open. So it's mostly static content + a small identity shell — clean UX *and* correct enforcement.

## Custom apps (same SSO)

The intranet is a **launcher**; apps live behind the *same* Cloudflare Access (shared login), each gated to
a group — the intranet doesn't have to contain them:

The apps intended to fold in (as of 2026-08-06):

- **COO operating system (sa-cos)** — today a *local* Python dashboard; must be **hosted** to join, then a
  leadership-gated tile.
- **Applicant tracking (ATS)** — third-party SaaS; link or embed behind SSO, HR/hiring-gated.
- **WebVisitors** — web-visitor identification / analytics; link or embed, marketing/executive-gated.
- **Evaluation dashboard** — the Financial Evaluation Dashboard (weekly-updated); host and embed as a
  leadership/finance-gated tile.
- **New in-house apps** — build as intranet sections (Cloudflare Pages Functions + D1) so they share identity
  from day one (the training-LMS progress engine is a mini-example).

## Why this is "exactly right"

- **One place to manage people** (Entra groups) — no parallel lists to drift out of sync.
- **Edge enforcement + default-deny** — unauthorized requests are stopped before content loads.
- **Auditable** — Access logs every decision.
- **Access test matrix** — before rollout, verify every (group × section) combination, especially the
  sensitive ones; re-run when policies change.

## Caveats / trade-offs

- Entra IdP + group claims need a one-time Global Admin setup + a licensing check.
- **Path-based gating** means the information architecture must follow access boundaries — design folders
  around who-sees-what.
- The **COO OS must be hosted** to join (local today).
- **State-addendum routing is navigation, not access** — everyone can see every state; you just help them
  find theirs. Reserve groups for genuine need-to-know.
- **Hiding nav links** requires the thin identity function; without it, restricted links show but deny on
  click.
- **Consultants**: decide whether they are internal staff (in `all-staff`) or external — it affects what
  company-wide content they can see.

## Phased roadmap

1. **Intranet shell** — one site + domain + nav; fold in the three existing migrations as sections (all
   company-wide to start).
2. **Entra as IdP** in Cloudflare Access + define the core groups (all-staff, operations, marketing,
   developers, consultants, executive).
3. **First role-gated section** (Operations team) — prove the path → group model on one before scaling.
4. **Identity-aware nav** (the edge function).
5. **Project spaces** — a repeatable `/projects/<name>/` pattern with a per-project group.
6. **Apps** — bring in the COO OS (once hosted), the ATS, WebVisitors (web-visitor analytics), and the
   Evaluation dashboard as gated tiles.

## Open decisions

- Domain / subdomain (`intranet.semanticarts.com`?).
- Consultants: internal vs. external (drives `all-staff` membership and data exposure).
- Which project spaces to start with.
- **One repo vs. many — DECIDED 2026-08-03: ONE repo.** A single `sa-intranet` content repo organized as `spaces/<space-name>/` folders (mirroring Confluence). Rationale: the intranet is one composed Astro build (unified nav, relative cross-links) → one repo = one build/deploy/CMS config; access is enforced at the edge (Cloudflare Access on URL paths for reads; the bot route's Entra-group check for writes) **not** by repo boundaries, so splitting repos buys nothing on access; and the bot route means contributors never hold GitHub write, removing the "monorepo = write-all" objection.
  - **Load-bearing guardrail:** the repo is only as protected as its **GitHub read access** — a `git clone` bypasses every Cloudflare gate. So the intranet repo's GitHub access is **restricted to a small admin group + the GitHub App/bot, never org-wide**; everyone else consumes content only through the gated site. And **no secrets in the repo, ever** (policy).
  - **Escape hatch (used sparingly):** a genuinely need-to-know space may get its own tighter private repo mounted into the build separately. Evaluate **PSI CRO 2025** and **Clients and Partners** for this when they migrate.
  - **Existing per-space repos** (SA-Operations-Manual, SA-Training-Materials, SA-Admin-Docs, SA-Offerings, SA-Internal-Systems, SA-DCA-Docs) are clean, secret-scanned **staging snapshots**; fold their content into the one repo at Phase 4 and archive the originals.
