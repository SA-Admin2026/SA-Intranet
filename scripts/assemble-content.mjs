#!/usr/bin/env node
// Assembles src/content/docs/<section>/ from the intranet's content sources.
//
// The COMMITTED src/content/docs/<section>/ tree is the source of truth the site
// builds from (Cloudflare runs `astro build` over it — no siblings, no re-assembly
// at deploy). This script is the reproducible migration tool that (re)populates
// those sections from their upstreams. It is idempotent: it wipes and rewrites
// each managed section, and leaves hand-authored files (like index.mdx) alone.
//
// Run it whenever a source changes, then commit the result:  npm run assemble
//
// Sources are folded in stage by stage — see ARCHITECTURE.md Phase 4.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DOCS = path.join(ROOT, 'src', 'content', 'docs');
const PUBLIC = path.join(ROOT, 'public');
const SPACES = path.join(ROOT, 'spaces');

// Files that are repo bookkeeping, not intranet content. NOTE: README.md is NOT
// excluded — this converter uses README.md as each folder's landing page (like a
// GitHub folder README); assembly renames those to index.md so the folder resolves
// at /section/folder/ instead of /section/folder/readme/.
const EXCLUDE = new Set(['MIGRATION-FLAGS.md', 'MEDIA-DEFERRED.md']);

// The default Confluence "empty space" home page — carries no real content.
const isBoilerplate = (md) => md.includes('Welcome to your new space!');

// --- Media policy ----------------------------------------------------------
// Cloudflare Pages rejects any file > 25 MiB and we don't want large binaries in
// git. Per spaces/MEDIA-DEFERRED.md: small media (images, PDFs, docs) ships in-repo;
// large media (the big PowerPoint decks) is held back and its links are stubbed to a
// clear note rather than a broken download. 10 MB cleanly captures the five large
// decks while keeping everything else — all 300+ images included.
const MEDIA_MAX_BYTES = 10 * 1024 * 1024;
const skippedMedia = []; // { section, href, name }

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Copy an attachments tree into public/, skipping files over the size cap. `hrefBase`
// is how links to these files appear in the section's Markdown: `/attachments` for the
// already-Astro sections (rehype prefixes the section at build) and
// `/<section>/attachments` for the migrated spaces (rewritten absolute at assembly).
function copyAttachmentsFiltered(srcDir, destDir, section, hrefBase) {
  for (const e of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const s = path.join(srcDir, e.name);
    const d = path.join(destDir, e.name);
    const href = `${hrefBase}/${e.name}`;
    if (e.isDirectory()) {
      fs.mkdirSync(d, { recursive: true });
      copyAttachmentsFiltered(s, d, section, href);
    } else if (fs.statSync(s).size > MEDIA_MAX_BYTES) {
      skippedMedia.push({ section, href, name: e.name });
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

// Rewrite links to held-back files so the page shows a clear note instead of a link
// that 404s. Handles both forms the Confluence export produced:
//   1. Thumbnail download: `[![](atlassian-thumb-url)](href)`  (image is the label)
//   2. Plain text link:    `[label](href)`
const STUB_NOTE = '_(large file — hosted separately; ask Operations for access)_';
function stubSkippedMedia() {
  for (const { section, href } of skippedMedia) {
    const h = escapeRe(href);
    const thumb = new RegExp(`\\[!\\[[^\\]]*\\]\\([^)]*\\)\\]\\(${h}(?:\\s+"[^"]*")?\\)`, 'g');
    const plain = new RegExp(`\\[([^\\]]*)\\]\\(${h}(?:\\s+"[^"]*")?\\)`, 'g');
    for (const file of walkMd(path.join(DOCS, section))) {
      const md = fs.readFileSync(file, 'utf8');
      const out = md
        .replace(thumb, `📎 ${STUB_NOTE}`)
        .replace(plain, `$1 ${STUB_NOTE}`);
      if (out !== md) fs.writeFileSync(file, out);
    }
  }
}

const titleize = (slug) =>
  slug
    .replace(/-+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

// Pull the `title:` out of a markdown file's YAML frontmatter (best-effort).
function frontmatterTitle(md) {
  const m = md.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const t = m[1].match(/^title:\s*(.+)$/m);
  if (!t) return null;
  return t[1].trim().replace(/^["']|["']$/g, '');
}

function walkMd(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'attachments') continue;
      out.push(...walkMd(p));
    } else if (e.name.endsWith('.md') && !EXCLUDE.has(e.name)) {
      out.push(p);
    }
  }
  return out;
}

function rmrf(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
}

// Rewrite relative attachment refs (`](attachments/…` / `](./attachments/…`) to the
// section-absolute public path so they render uniformly from any page depth and skip
// Astro's markdown image pipeline (absolute paths aren't validated → no build break on
// deferred/large media). Section = the URL prefix the content is mounted under.
function rewriteAttachments(md, section) {
  // Handles every relative form the export produced: `attachments/`, `./attachments/`,
  // and `../`…`../attachments/` (up to any depth).
  return md.replace(
    /\]\((?:\.\.?\/)*attachments\//g,
    `](/${section}/attachments/`
  );
}

// A linked list of a directory's immediate children (folders + leaf pages), used to
// build landing pages so `/section/…/` is never a 404 and navigation always works.
function childList(dir, urlPrefix) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.name !== 'attachments' && e.name !== 'index.md')
    .map((e) => {
      const isDir = e.isDirectory();
      const slug = isDir ? e.name : e.name.replace(/\.md$/, '');
      const idx = isDir ? path.join(dir, e.name, 'index.md') : path.join(dir, e.name);
      let title = titleize(slug);
      try {
        title = frontmatterTitle(fs.readFileSync(idx, 'utf8')) || title;
      } catch {}
      return { slug, title };
    })
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((e) => `- [${e.title}](${urlPrefix}${e.slug}/)`)
    .join('\n');
}

// Ensure a directory has an index.md. If one exists but is Confluence boilerplate,
// replace it; if it's real content, leave it untouched. Missing → synthesize.
function ensureIndex(dir, urlPrefix, label, blurb) {
  const idx = path.join(dir, 'index.md');
  if (fs.existsSync(idx) && !isBoilerplate(fs.readFileSync(idx, 'utf8'))) return;
  const list = childList(dir, urlPrefix);
  const body = blurb ? `${blurb}\n\n${list}\n` : `${list}\n`;
  fs.writeFileSync(idx, `---\ntitle: ${label}\n---\n\n${body}`);
}

// --- Section: migrated Confluence spaces -----------------------------------
const SPACE_META = {
  administrative: {
    label: 'Administrative',
    blurb: 'HR, marketing & sales, company reference, and firm summits.',
  },
  offerings: {
    label: 'Offerings',
    blurb: 'What we offer clients — services, tooling, and engagement models.',
  },
  'internal-systems': {
    label: 'Internal Systems',
    blurb: 'The tools and systems that run the business.',
  },
  'data-centric-architecture': {
    label: 'Data-Centric Architecture',
    blurb: 'The ideas at the core of our practice.',
  },
};

function assembleSpaces() {
  for (const [section, meta] of Object.entries(SPACE_META)) {
    const src = path.join(SPACES, section);
    if (!fs.existsSync(src)) {
      console.warn(`[assemble] space not found, skipping: ${section}`);
      continue;
    }
    const dest = path.join(DOCS, section);
    rmrf(dest);
    fs.mkdirSync(dest, { recursive: true });

    let count = 0;
    for (const file of walkMd(src)) {
      let rel = path.relative(src, file);
      // README.md is this converter's folder-landing convention → index.md.
      if (path.basename(rel) === 'README.md') {
        rel = path.join(path.dirname(rel), 'index.md');
      }
      const md = rewriteAttachments(fs.readFileSync(file, 'utf8'), section);
      const outPath = path.join(dest, rel);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, md);
      count++;
    }

    // Every folder needs a resolvable landing. Walk deepest-first so child lists see
    // any indexes we synthesize. Root gets the section blurb; inner folders get a
    // titleized heading. Real (non-boilerplate) landings are left as-is.
    const dirs = [];
    (function collect(d) {
      for (const e of fs.readdirSync(d, { withFileTypes: true })) {
        if (e.isDirectory() && e.name !== 'attachments') {
          const p = path.join(d, e.name);
          collect(p);
          dirs.push(p);
        }
      }
    })(dest);
    for (const d of dirs) {
      const urlPrefix = `/${section}/${path.relative(dest, d).split(path.sep).join('/')}/`;
      ensureIndex(d, urlPrefix, titleize(path.basename(d)), '');
    }
    ensureIndex(dest, `/${section}/`, meta.label, meta.blurb);

    // Attachments → public/ (committed), minus files over the media cap (stubbed).
    const att = path.join(src, 'attachments');
    if (fs.existsSync(att)) {
      const outAtt = path.join(PUBLIC, section, 'attachments');
      rmrf(outAtt);
      fs.mkdirSync(outAtt, { recursive: true });
      copyAttachmentsFiltered(att, outAtt, section, `/${section}/attachments`);
    }

    console.log(`[assemble] ${section}: ${count} pages + landing`);
  }
}

// --- Sections: already-Astro sites (Operations Manual, Training) -----------
// These are folded in from their sibling repos (in ~/git alongside this one). Their
// Markdown already uses Starlight conventions (index.md landings, section-absolute
// links, `/attachments/…`), so they copy verbatim — the rehype pass in astro.config
// prefixes their absolute links with the section at build. Sibling repos are only
// needed to (re)run assembly; the committed output builds without them.
const SIBLINGS = path.resolve(ROOT, '..');

// Training's one MDX landing page moves one directory deeper (docs/index.mdx →
// docs/training/index.mdx), so its relative component import breaks; rewrite it to the
// path alias. Also drop the hero logo image (the CSS hides it, and the relative asset
// path would break) — leaves the branded splash text intact.
function fixTrainingIndex(dest) {
  const idx = path.join(dest, 'index.mdx');
  if (!fs.existsSync(idx)) return;
  let md = fs.readFileSync(idx, 'utf8');
  md = md.replace(
    /from ['"](?:\.\.\/)+components\/ProgressOverview\.astro['"]/,
    `from '@components/ProgressOverview.astro'`
  );
  md = md.replace(/\n[ \t]*image:\n[ \t]*file:[^\n]*/, '');
  fs.writeFileSync(idx, md);
}

const ASTRO_SECTIONS = [
  {
    section: 'operations-manual',
    repo: 'sa-ops-manual',
    contentDir: 'src/content/docs',
    attachmentsDir: 'public/attachments',
  },
  {
    section: 'training',
    repo: 'sa-training-materials',
    contentDir: 'src/content/docs',
    attachmentsDir: 'public/attachments',
    fixup: fixTrainingIndex,
  },
];

function copyMd(srcDir, destDir) {
  let count = 0;
  for (const e of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const s = path.join(srcDir, e.name);
    const d = path.join(destDir, e.name);
    if (e.isDirectory()) {
      fs.mkdirSync(d, { recursive: true });
      count += copyMd(s, d);
    } else if (/\.mdx?$/.test(e.name)) {
      fs.copyFileSync(s, d);
      count++;
    }
  }
  return count;
}

function assembleAstroSections() {
  for (const sec of ASTRO_SECTIONS) {
    const repoRoot = path.join(SIBLINGS, sec.repo);
    const src = path.join(repoRoot, sec.contentDir);
    if (!fs.existsSync(src)) {
      console.warn(
        `[assemble] ${sec.section}: source repo not found (${sec.repo}) — skipping. ` +
          `Committed content, if any, is left in place.`
      );
      continue;
    }
    const dest = path.join(DOCS, sec.section);
    rmrf(dest);
    fs.mkdirSync(dest, { recursive: true });
    const count = copyMd(src, dest);
    if (sec.fixup) sec.fixup(dest);

    const att = path.join(repoRoot, sec.attachmentsDir);
    if (fs.existsSync(att)) {
      const outAtt = path.join(PUBLIC, sec.section, 'attachments');
      rmrf(outAtt);
      fs.mkdirSync(outAtt, { recursive: true });
      // These sections' Markdown links attachments as `/attachments/…`; rehype adds
      // the section prefix at build.
      copyAttachmentsFiltered(att, outAtt, sec.section, `/attachments`);
    }
    console.log(`[assemble] ${sec.section}: ${count} pages (from ${sec.repo})`);
  }
}

fs.mkdirSync(DOCS, { recursive: true });
assembleSpaces();
assembleAstroSections();
stubSkippedMedia();
if (skippedMedia.length) {
  console.log(
    `[assemble] held back ${skippedMedia.length} large file(s) (> ${MEDIA_MAX_BYTES / 1024 / 1024} MB), links stubbed:`
  );
  for (const m of skippedMedia) console.log(`  - ${m.section}: ${m.name}`);
}
console.log('[assemble] done.');
