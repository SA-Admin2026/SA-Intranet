# Access & Identity Plan — Track A (roadmap Phases 2–4)

**Status:** planning · **Date:** 2026-08-05 · Companion to [`ARCHITECTURE.md`](ARCHITECTURE.md).

Stand up **Microsoft Entra ID** as the identity source and enforce **group → URL-path**
access at the Cloudflare edge, then hide what a person can't open. This is the identity
arc; the content/shell arc (one unified site, 7 sections) is already live.

## Current → target

- **Current:** Cloudflare Access on the domain with **GitHub login + a shared email
  allowlist**, gating the whole site uniformly — on the list ⇒ you see everything.
- **Target:** **Entra ID** is the directory of record; **group membership** maps to the
  URL paths you may reach (**default-deny**); one SSO login covers the intranet and every
  app behind the same gate; nav shows only what you can open.

## Framing (why now, given content is mostly company-wide)

Almost everything live today is legitimately **all-staff**. Phase 2's job is therefore to
(1) stand up the identity infrastructure + group model, and (2) prove **path→group** on one
pilot, so gating is ready when genuinely-restricted content arrives (HR-admin/comp, project
spaces, client data). The pilot is also the first home for that restricted content.

## Group model (Entra security groups)

| Group | Membership |
| --- | --- |
| `all-staff` | Everyone, **including consultants** (decided 2026-08-05: consultants are internal). |
| `operations-team` | Operations staff. |
| `marketing-team` | Marketing/sales. |
| `developers` | Engineering. |
| `consultants` | Consulting staff (also in `all-staff`). |
| `project-<name>` | One per active engagement; the employees on it. |
| `executive-team` | Leadership — **all-access**, appended to every policy. |

Overlap is expected; policies combine with **OR** (in any allowed group ⇒ permitted).

## Access policy map (group → path)

`executive-team` is implicitly on every row. Default-deny otherwise.

| Path | Who can reach it |
| --- | --- |
| `/`, `/reference/*`, `/training/*`, `/operations-manual/*`, `/data-centric-architecture/*`, `/offerings/*` | **all-staff** |
| `/administrative/*` | all-staff *(revisit — some HR content may narrow to HR/exec later)* |
| `/internal-systems/*` | developers + operations-team *(candidate to narrow)* |
| **`/operations/*`** *(new — PILOT)* | **operations-team** |
| `/hr-admin/*`, `/comp/*` *(future)* | HR + executive |
| `/projects/<name>/*` *(Phase 5)* | `project-<name>` |

> **Note:** the **Operations Manual** (`/operations-manual/*`) stays **all-staff** — it's
> firm-wide reference. The **pilot** is a *new* `/operations/*` workspace for the operations
> team's own material, gated to `operations-team`. That's what proves the model.

## Responsibilities

### Global Admin (one-time — JT / IT)
1. **Confirm licensing:** Entra ID **P1** (included in M365 Business Premium) for group-based
   policies + group claims.
2. **Create the security groups** above; populate membership (start with `all-staff`,
   `operations-team`, `executive-team`).
3. **Register the app / enable group claims** so the token carries group membership.
4. **Add Entra as an IdP** in Cloudflare Zero Trust (Azure AD connector).
5. **Author Access policies** per the map above; keep GitHub + allowlist as a **fallback**
   during cutover, then retire it.

### In-repo (Claude — needs no admin)
- **Identity-aware navigation** — a small client script that calls Cloudflare's
  `/cdn-cgi/access/get-identity` to read the signed-in user's groups and hides nav/sidebar
  links they can't open (restricted links otherwise show but deny on click).
- **Policy map as code/doc** — keep this table authoritative; mirror it in the Cloudflare
  Access config.
- **`/operations/` pilot scaffold** — a new gated section (placeholder content) to prove the
  path→group flow end to end.
- **Access test matrix** — verify every (group × section) combination before rollout.

## Identity-aware navigation (how)

The site is static, so no server is needed: Cloudflare Access exposes
`/cdn-cgi/access/get-identity` (JSON: the user + their Entra groups) to authenticated
requests. A tiny script reads it, then hides sidebar/home/nav entries whose section the user
isn't in. Enforcement still lives at the edge (this is UX only — a hidden link that's somehow
reached still denies at the edge).

## Access test matrix (fill before rollout)

| Group ↓ / Section → | `/reference` | `/operations-manual` | `/operations` (pilot) | `/internal-systems` | `/hr-admin` (future) |
| --- | --- | --- | --- | --- | --- |
| all-staff (non-ops) | ✓ | ✓ | ✗ | ? | ✗ |
| operations-team | ✓ | ✓ | ✓ | ? | ✗ |
| executive-team | ✓ | ✓ | ✓ | ✓ | ✓ |
| consultant (all-staff) | ✓ | ✓ | ✗ | ? | ✗ |

Re-run whenever a policy changes.

## Rollout sequence

1. Confirm Entra **P1 licensing**.
2. Create groups + seed membership (`all-staff`, `operations-team`, `executive-team`).
3. Wire **Entra as IdP** in Cloudflare (login works; nothing newly gated yet).
4. Turn on **default-deny + all-staff** everywhere → **parity with today** (safety check).
5. Gate the **`/operations/` pilot** to `operations-team`; verify allow + deny.
6. Ship **identity-aware nav**.
7. Run the **access test matrix**.
8. Retire the email allowlist. → Then Phases 5 (project spaces) and 6 (apps) build on this.

## Open items / to confirm

- **Domain** — pin `intranet.semanticarts.com`? (Currently the default Cloudflare Pages
  domain.) Cutover affects `SITE_URL` + the Access application hostname.
- **Verify current Cloudflare setup** — assumed: Cloudflare Zero Trust **Access** app on the
  domain, GitHub IdP + email allowlist policy. Confirm before editing.
- **Entra P1 licensing** — confirm before starting.
- Which **HR content** (if any) narrows from all-staff to HR/exec when `/hr-admin` is created.
