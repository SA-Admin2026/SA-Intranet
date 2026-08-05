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

// Inline script that defines the <topic-progress> custom element (per-topic progress
// rollup injected into Training topic landings). Read at config load and injected into
// every page's <head> via Starlight's `head` option.
const topicProgressScript = fs.readFileSync(
  fileURLToPath(new URL('./src/scripts/topic-progress.js', import.meta.url)),
  'utf8'
);
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

// Training keeps the learning-category structure it had as its own site: a
// "Knowledge map" link plus topics grouped into a handful of categories, all nested
// under the one Training section. (Everything else is a flat autogenerate.)
const pretty = (name) =>
  name
    .replace(/-{2,}/g, ' ')
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

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
  const topicGroup = (dir) => ({
    label: TRAINING_LABELS[dir] || pretty(dir),
    collapsed: true,
    items: [{ autogenerate: { directory: `training/${dir}` } }],
  });
  const topicDirs = fs.existsSync(trainingDir)
    ? fs.readdirSync(trainingDir, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name)
    : [];
  const categorized = new Set(TRAINING_CATEGORIES.flatMap((c) => c.dirs));
  const leftover = topicDirs.filter((d) => !categorized.has(d));
  return [
    { label: 'Knowledge map', link: '/training/map/', badge: { text: 'new', variant: 'success' } },
    { label: 'SPARQL lab', link: '/training/languages/sparql/lab/', badge: { text: 'interactive', variant: 'tip' } },
    ...TRAINING_CATEGORIES.map((c) => ({
      label: c.label,
      items: c.dirs.filter(has).map(topicGroup),
    })).filter((c) => c.items.length),
    ...(leftover.length ? [{ label: 'More', items: leftover.map(topicGroup) }] : []),
  ];
}

// Only surface a sidebar group once its content directory actually exists, so
// the build stays green while sections are folded in one stage at a time.
const sidebar = SECTIONS.filter((s) => fs.existsSync(path.join(DOCS, s.dir))).map((s) =>
  s.dir === 'training'
    ? { label: s.label, collapsed: true, items: trainingSidebarItems() }
    : { label: s.label, collapsed: true, items: [{ autogenerate: { directory: s.dir } }] }
);

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
        // Adds the per-lesson "mark complete" + related-lessons tools on Training
        // pages; a no-op passthrough everywhere else.
        Footer: './src/components/Footer.astro',
      },
      description:
        'The Semantic Arts intranet — operations, training, and reference, in one place.',
      // Pagefind client-side full-text search is built in and indexes the whole build.
      sidebar,
      // Defines the <topic-progress> and <section-search> custom elements.
      head: [
        { tag: 'script', content: topicProgressScript },
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
