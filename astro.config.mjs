// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// ---------------------------------------------------------------------------
// The ONE composed intranet build (Path A). Every area — Operations Manual,
// Training, and the migrated Confluence spaces — is a top-level folder under
// src/content/docs/<section>/ and renders in a single Starlight site at the
// domain root (no per-section `base`). One nav, one search index, relative
// cross-links. Content is assembled into src/content/docs/ by
// scripts/assemble-content.mjs (run automatically by `npm run build`).
// ---------------------------------------------------------------------------

const DOCS = fileURLToPath(new URL('./src/content/docs', import.meta.url));

// <section-search> — a section-scoped search box (used on the Reference landing).
const sectionSearchScript = fs.readFileSync(
  fileURLToPath(new URL('./src/scripts/section-search.js', import.meta.url)),
  'utf8'
);
// Identity-aware nav — hides links to sections the signed-in user's Entra groups can't open.
const identityNavScript = fs.readFileSync(
  fileURLToPath(new URL('./src/scripts/identity-nav.js', import.meta.url)),
  'utf8'
);

// Sections in display order. `label` is the sidebar group heading; the folder
// name (key) is both the content directory and the URL prefix.
const SECTIONS = [
  { dir: 'operations-manual', label: 'Operations Manual' },
  { dir: 'reference', label: 'Reference' },
  { dir: 'training', label: 'Training' },
  { dir: 'administrative', label: 'Administrative' },
  { dir: 'offerings', label: 'Offerings' },
  { dir: 'internal-systems', label: 'Internal Systems' },
  { dir: 'data-centric-architecture', label: 'Data-Centric Architecture' },
  // Access-gated pilot (roadmap Phase 3): operations-team workspace, distinct from the
  // all-staff Operations Manual. Hidden from non-members by identity-nav; enforced at the
  // edge by a Cloudflare Access policy (operations-team + executive-team) once Entra is wired.
  { dir: 'operations', label: 'Operations' },
];

// ---------------------------------------------------------------------------
// Sidebar labels. Folder/group labels are derived from the folder's own page
// title when it has one, else prettified from the slug; leaf links use the
// page title. We build the tree from the filesystem (rather than Starlight's
// `autogenerate`) purely so GROUP headings read cleanly — same hierarchy, same
// pages, just "Human Resources" instead of "human-resources". No structure change.
// ---------------------------------------------------------------------------

// Domain initialisms to upper-case in any derived label (case-insensitive, plural-aware).
const ACRONYMS = new Set([
  'rdf', 'owl', 'shacl', 'sparql', 'sparlq', 'uri', 'url', 'iri', 'aws', 'gcp', 'gdpr', 'api', 'etl',
  'oke', 'cmc', 'dca', 'dcaf', 'dcc', 'hal', 'db', 'llm', 'ai', 'hr', 'it', 'qb', 'ip', 'sa', 'pdf',
  'ui', 'ux', 'crm', 'erp', 'sql', 'json', 'yaml', 'html', 'css', 'ssh', 'vpn', 'mfa', 'sso', 'kg',
  'lpg', 'ci', 'cd', 'nlp', 'ectd', 'bfo', 'oke',
]);
// Short words kept lowercase mid-title (never the first word).
const SMALL = new Set(['a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'in', 'of', 'on', 'or', 'the', 'to', 'vs', 'via', 'with']);

// Upper-case any token that is a known acronym (handles a trailing plural 's': uris → URIs).
const fixAcronyms = (label) =>
  label.replace(/[A-Za-z]+/g, (w) => {
    const lw = w.toLowerCase();
    if (ACRONYMS.has(lw)) return w.toUpperCase();
    if (lw.endsWith('s') && ACRONYMS.has(lw.slice(0, -1))) return lw.slice(0, -1).toUpperCase() + 's';
    return w;
  });

// slug → "Title Case With Small Words Lowercased", then acronym-corrected.
const prettyLabel = (slug) => {
  const words = slug.replace(/-{2,}/g, ' ').replace(/-/g, ' ').replace(/\s+/g, ' ').trim().split(' ');
  const cased = words
    .map((w, i) => (i > 0 && SMALL.has(w.toLowerCase()) ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');
  return fixAcronyms(cased);
};
// Back-compat alias (TRAINING_LABELS fallback).
const pretty = prettyLabel;

// Pull `title:` from a markdown file's frontmatter (best-effort).
const readTitle = (fileAbs) => {
  try {
    const md = fs.readFileSync(fileAbs, 'utf8');
    const fm = md.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fm) return null;
    const t = fm[1].match(/^title:\s*(.+)$/m);
    return t ? t[1].trim().replace(/^["']|["']$/g, '') : null;
  } catch {
    return null;
  }
};
const folderIndex = (dirAbs) =>
  ['index.md', 'index.mdx'].map((f) => path.join(dirAbs, f)).find((p) => fs.existsSync(p)) || null;
// A folder/leaf's label: trust an existing page title (acronym-corrected), else prettify the slug.
const labelFor = (name, title) => (title ? fixAcronyms(title) : prettyLabel(name));

// Build Starlight sidebar items for the CHILDREN of dirAbs (excludes dirAbs's own index).
// Folders → collapsible groups (with the folder's landing as the first entry); pages → links.
function buildItems(dirAbs, urlPrefix) {
  const entries = fs
    .readdirSync(dirAbs, { withFileTypes: true })
    .filter((e) => e.name !== 'attachments' && !e.name.startsWith('.'));
  const items = [];
  for (const e of entries) {
    if (e.isDirectory()) {
      const g = groupFor(e.name, path.join(dirAbs, e.name), `${urlPrefix}${e.name}/`);
      if (g.items.length) items.push(g);
    } else if (/\.mdx?$/.test(e.name) && !/^index\.mdx?$/.test(e.name)) {
      const slug = e.name.replace(/\.mdx?$/, '');
      items.push({ label: labelFor(slug, readTitle(path.join(dirAbs, e.name))), link: `${urlPrefix}${slug}/` });
    }
  }
  items.sort((a, b) => a.label.localeCompare(b.label, undefined, { numeric: true }));
  return items;
}
// A collapsible group for one folder: its landing (if any) first, then its children.
function groupFor(name, dirAbs, urlPrefix) {
  const idx = folderIndex(dirAbs);
  const label = labelFor(name, idx ? readTitle(idx) : null);
  const items = [];
  if (idx) items.push({ label, link: urlPrefix });
  items.push(...buildItems(dirAbs, urlPrefix));
  return { label, collapsed: true, items };
}

const TRAINING_LABELS = {
  'new-ontologist-orientation': 'New ontologist orientation',
  'data-centricity': 'Data-centricity',
  'data-centric-methodology---documenting-our-approach': 'Data-centric methodology',
  'knowlege-graphs-knowledge-bases': 'Knowledge graphs & knowledge bases',
  'uris-uniform-resource-identifiers': 'URIs',
  'semantic-slums': 'Semantic slums',
  ontology: 'Ontology',
  'ontology-quality-metrics': 'Ontology quality metrics',
  languages: 'Languages (RDF, OWL, SHACL, SPARQL)',
  'ontology-tools': 'Ontology tools',
  'graph-technology': 'Graph technology',
  'triple-stores---maintenance-and-evolution': 'Triple stores',
  software: 'Software & dev tools',
  'data-sources': 'Data sources',
  squads: 'Squads',
  'dialog-mapping': 'Dialog mapping',
  'ai-usage': 'AI usage',
  'encryption-security': 'Encryption & security',
  'conferences-and-workshops': 'Conferences & workshops',
  reference: 'Reference',
};

const TRAINING_CATEGORIES = [
  { label: 'Start here', dirs: ['new-ontologist-orientation'] },
  {
    label: 'Foundations',
    dirs: [
      'data-centricity',
      'data-centric-methodology---documenting-our-approach',
      'knowlege-graphs-knowledge-bases',
      'uris-uniform-resource-identifiers',
      'semantic-slums',
    ],
  },
  { label: 'Modeling & ontologies', dirs: ['ontology', 'ontology-quality-metrics', 'languages'] },
  {
    label: 'Tools & technology',
    dirs: [
      'ontology-tools',
      'graph-technology',
      'triple-stores---maintenance-and-evolution',
      'software',
      'data-sources',
    ],
  },
  {
    label: 'Practice & team',
    dirs: ['squads', 'dialog-mapping', 'ai-usage', 'encryption-security', 'conferences-and-workshops'],
  },
  { label: 'Reference', dirs: ['reference'] },
];

function trainingSidebarItems() {
  const trainingDir = path.join(DOCS, 'training');
  const has = (dir) => fs.existsSync(path.join(trainingDir, dir));
  // Curated category labels stay; the topic's tree is walked for clean group labels.
  const topicGroup = (dir) => {
    const g = groupFor(dir, path.join(trainingDir, dir), `/training/${dir}/`);
    return { ...g, label: TRAINING_LABELS[dir] || g.label };
  };
  const topicDirs = fs.existsSync(trainingDir)
    ? fs.readdirSync(trainingDir, { withFileTypes: true })
        .filter((d) => d.isDirectory() && !d.name.startsWith('.'))
        .map((d) => d.name)
    : [];
  const categorized = new Set(TRAINING_CATEGORIES.flatMap((c) => c.dirs));
  const leftover = topicDirs.filter((d) => !categorized.has(d));
  return [
    ...TRAINING_CATEGORIES.map((c) => ({
      label: c.label,
      collapsed: true,
      items: c.dirs.filter(has).map(topicGroup),
    })).filter((c) => c.items.length),
    ...(leftover.length ? [{ label: 'More', collapsed: true, items: leftover.map(topicGroup) }] : []),
  ];
}

// Only surface a sidebar group once its content directory actually exists, so
// the build stays green while sections are folded in one stage at a time.
const sidebar = SECTIONS.filter((s) => fs.existsSync(path.join(DOCS, s.dir))).map((s) => {
  if (s.dir === 'training') return { label: s.label, collapsed: true, items: trainingSidebarItems() };
  const dirAbs = path.join(DOCS, s.dir);
  const idx = folderIndex(dirAbs);
  const items = [];
  if (idx) items.push({ label: labelFor(s.label, readTitle(idx)), link: `/${s.dir}/` });
  items.push(...buildItems(dirAbs, `/${s.dir}/`));
  return { label: s.label, collapsed: true, items };
});

// Migrated content links with section-root-absolute hrefs (e.g. the Operations
// Manual links to `/accounting-guide/…`, written when it was its own site with a
// `base`). In the unified root build those must be prefixed with the section
// folder → `/operations-manual/accounting-guide/…`. This rehype pass derives the
// section from each file's path and prefixes absolute href/src that don't already
// point at that section. External (`//`, `http:`), anchor (`#`) and already-correct
// links are left untouched.
function rehypeSectionBase() {
  const sectionDirs = new Set(SECTIONS.map((s) => s.dir));
  return (tree, file) => {
    // file.path is absolute; find the section folder immediately under docs/.
    const rel = path.relative(DOCS, file.path || '');
    const seg = rel.split(path.sep)[0];
    if (!sectionDirs.has(seg)) return; // home page and anything outside a section
    const base = '/' + seg;
    const fix = (v) =>
      typeof v === 'string' &&
      v.startsWith('/') &&
      !v.startsWith('//') &&
      v !== '/' && // leave the home link alone
      v !== base &&
      !v.startsWith(base + '/')
        ? base + v
        : v;
    const walk = (n) => {
      if (n.type === 'element' && n.properties) {
        for (const a of ['href', 'src']) {
          if (a in n.properties) n.properties[a] = fix(n.properties[a]);
        }
      } else if (
        (n.type === 'mdxJsxFlowElement' || n.type === 'mdxJsxTextElement') &&
        Array.isArray(n.attributes)
      ) {
        // MDX components (<LinkCard href="/…" />) — attributes, not hast properties.
        for (const attr of n.attributes) {
          if (attr && (attr.name === 'href' || attr.name === 'src')) {
            attr.value = fix(attr.value);
          }
        }
      }
      (n.children || []).forEach(walk);
    };
    walk(tree);
  };
}

// https://astro.build/config
// Pure static site → Cloudflare Pages, gated by Cloudflare Access at the edge.
// No server/adapter and no app-level auth: the login-to-view gate lives at the
// edge; editing is Sveltia/Decap → GitHub via a bot route.
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  markdown: { rehypePlugins: [rehypeSectionBase] },
  integrations: [
    starlight({
      title: 'Semantic Arts',
      tagline: 'Intranet',
      customCss: ['./src/styles/brand.css'],
      components: {
        SiteTitle: './src/components/SiteTitle.astro',
        // Consistent cross-section nav in the header on every page (keeps native search + theme).
        Header: './src/components/Header.astro',
      },
      description:
        'The Semantic Arts intranet — operations, training, and reference, in one place.',
      // Pagefind client-side full-text search is built in and indexes the whole build.
      sidebar,
      // Defines the <section-search> custom element + identity-aware nav.
      head: [
        { tag: 'script', content: sectionSearchScript },
        { tag: 'script', content: identityNavScript },
      ],
      // "Edit page" → repo edit URL when EDIT_BASE_URL is set (Cloudflare env). Harmless when unset.
      ...(process.env.EDIT_BASE_URL
        ? { editLink: { baseUrl: process.env.EDIT_BASE_URL } }
        : {}),
    }),
  ],
});
