// Build-time knowledge graph for the Training section, derived from the content's
// internal cross-links. Nodes = lessons, edges = a page linking to another page.
//
// Unified-build note: this is scoped to src/content/docs/training and emits FULL
// `/training/…` routes, so node ids equal the pages' real URLs (and equal
// `location.pathname`). Migrated markdown links are section-absolute (`/ontology/…`,
// written when Training was its own site), so link targets are normalized by
// prefixing `/training`. That keeps the map, the related-lessons footer, and the
// progress panel all keyed on the same identifiers. Memoized per build.
import fs from 'node:fs';
import path from 'node:path';

const DOCS = path.resolve('src/content/docs/training');
const SECTION = '/training';
const LINK_RE = /\]\((\/[^)#\s]+)/g;

const TOPIC_CATEGORY: Record<string, string> = {
  'new-ontologist-orientation': 'Start here',
  'data-centricity': 'Foundations',
  'data-centric-methodology---documenting-our-approach': 'Foundations',
  'knowlege-graphs-knowledge-bases': 'Foundations',
  'uris-uniform-resource-identifiers': 'Foundations',
  'semantic-slums': 'Foundations',
  ontology: 'Modeling & ontologies',
  'ontology-quality-metrics': 'Modeling & ontologies',
  languages: 'Modeling & ontologies',
  'ontology-tools': 'Tools & technology',
  'graph-technology': 'Tools & technology',
  'triple-stores---maintenance-and-evolution': 'Tools & technology',
  software: 'Tools & technology',
  'data-sources': 'Tools & technology',
  squads: 'Practice & team',
  'dialog-mapping': 'Practice & team',
  'ai-usage': 'Practice & team',
  'encryption-security': 'Practice & team',
  'conferences-and-workshops': 'Practice & team',
  reference: 'Reference',
};

export const CAT_COLOR: Record<string, string> = {
  'Start here': '#3358cc',
  Foundations: '#0f6e56',
  'Modeling & ontologies': '#534ab7',
  'Tools & technology': '#d85a30',
  'Practice & team': '#993556',
  Reference: '#5f5e5a',
  More: '#5f5e5a',
};

export const CATEGORY_ORDER = [
  'Start here',
  'Foundations',
  'Modeling & ontologies',
  'Tools & technology',
  'Practice & team',
  'Reference',
];

export type GNode = { id: string; title: string; topic: string; category: string; color: string; deg: number };
export type Graph = {
  nodes: GNode[];
  edges: { source: string; target: string }[];
  related: Map<string, { id: string; title: string }[]>;
  byCategory: Map<string, string[]>;
};

let _cache: Graph | null = null;

function walk(dir: string, out: string[] = []): string[] {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(md|mdx)$/.test(e.name)) out.push(p);
  }
  return out;
}

// Full section-rooted route, e.g. src/content/docs/training/ontology/index.md → /training/ontology/
function routeOf(file: string): string {
  let rel = path.relative(DOCS, file).replace(/\\/g, '/').replace(/\.(md|mdx)$/, '');
  rel = rel.replace(/\/?index$/, '');
  return SECTION + '/' + (rel ? rel + '/' : '');
}

function titleOf(text: string, fallback: string): string {
  const fm = text.match(/^---\n([\s\S]*?)\n---/);
  const m = fm && fm[1].match(/^title:\s*"?(.*?)"?\s*$/m);
  return m ? m[1] : fallback;
}

export function buildGraph(): Graph {
  if (_cache) return _cache;
  const byRoute = new Map<string, GNode>();
  const bodies = new Map<string, string>();
  const byCategory = new Map<string, string[]>();

  for (const f of walk(DOCS)) {
    const rel = path.relative(DOCS, f).replace(/\\/g, '/');
    const topic = rel.includes('/') ? rel.split('/')[0] : '';
    if (!topic) continue; // skip section root pages (landing/map) as lessons
    const route = routeOf(f);
    const text = fs.readFileSync(f, 'utf8');
    const category = TOPIC_CATEGORY[topic] || 'More';
    byRoute.set(route, {
      id: route,
      title: titleOf(text, path.basename(f)),
      topic,
      category,
      color: CAT_COLOR[category] || '#5f5e5a',
      deg: 0,
    });
    bodies.set(route, text);
    const list = byCategory.get(category) ?? [];
    list.push(route);
    byCategory.set(category, list);
  }

  const edges: { source: string; target: string }[] = [];
  const related = new Map<string, { id: string; title: string }[]>();
  const seen = new Set<string>();
  const addRel = (a: string, b: string) => {
    const n = byRoute.get(b);
    if (!n) return;
    const arr = related.get(a) ?? [];
    if (!arr.some((x) => x.id === b)) {
      arr.push({ id: b, title: n.title });
      related.set(a, arr);
    }
  };

  for (const [route, body] of bodies) {
    for (const m of body.matchAll(LINK_RE)) {
      // Section-absolute link in source → full route by prefixing the section.
      let to = SECTION + m[1];
      if (!to.endsWith('/')) to += '/';
      if (!byRoute.has(to) || to === route) continue;
      const key = route < to ? `${route}|${to}` : `${to}|${route}`;
      if (!seen.has(key)) {
        seen.add(key);
        edges.push({ source: route, target: to });
        byRoute.get(route)!.deg++;
        byRoute.get(to)!.deg++;
      }
      addRel(route, to);
      addRel(to, route);
    }
  }

  _cache = { nodes: [...byRoute.values()], edges, related, byCategory };
  return _cache;
}
