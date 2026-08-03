#!/usr/bin/env python3
"""Confluence HTML space export -> 1:1 Markdown (folder-per-parent), matching the pilot.

Rebuilt from the migration spec (the original pilot converter was never saved). Deterministic
and idempotent: wipes and rewrites the content in the output repo each run, and prints a flag
list (MIGRATION-FLAGS.md). No network.

Usage:
    PYTHONPATH=~/git/_pylibs python3 scripts/confluence_to_markdown.py <export_dir> <out_repo>

  <export_dir> = the space folder inside the unzipped export (contains index.html, attachments/)
  <out_repo>   = the target repo directory (content is written at its root)
"""
from __future__ import annotations

import os
import re
import shutil
import sys
from pathlib import Path

sys.path.insert(0, str(Path.home() / "git" / "_pylibs"))
from bs4 import BeautifulSoup  # noqa: E402
from markdownify import markdownify as to_md  # noqa: E402

SRC = Path(sys.argv[1]).resolve()
OUT = Path(sys.argv[2]).resolve()
INDEX = SRC / "index.html"
ATTACH_SRC = SRC / "attachments"
ATTACH_OUT = OUT / "attachments"
LARGE_MB = 10  # flag attachments larger than this

flags: dict[str, list[str]] = {
    "orphan_pages": [], "unresolved_links": [], "missing_attachments": [],
    "empty_pages": [], "large_attachments": [], "no_main_content": [],
}
_copied: set[str] = set()


def slugify(title: str) -> str:
    s = title.lower()
    s = re.sub(r"[^a-z0-9\s-]", "", s)
    s = re.sub(r"\s+", "-", s.strip())
    return s or "untitled"


def page_id(href: str) -> str:
    m = re.search(r"_(\d+)\.html$", href) or re.search(r"^(\d+)\.html$", href)
    return m.group(1) if m else href.rsplit(".", 1)[0]


# --------------------------------------------------------------------------- #
# 1) Parse the "Available Pages" tree from index.html
# --------------------------------------------------------------------------- #
def parse_tree() -> list[dict]:
    # html5lib parses the (malformed) Confluence index with browser-correct nesting;
    # html.parser flattens it. Each <li> may carry several child <ul> groups.
    soup = BeautifulSoup(INDEX.read_text(encoding="utf-8", errors="ignore"), "html5lib")
    h = next((x for x in soup.find_all(["h1", "h2"]) if "available pages" in x.get_text().lower()), None)
    ul = h.find_next("ul") if h else None

    def walk(ul):
        out = []
        if not ul:
            return out
        for li in ul.find_all("li", recursive=False):
            a = li.find("a")
            if not a or not a.get("href"):
                continue
            kids = []
            for child_ul in li.find_all("ul", recursive=False):
                kids += walk(child_ul)
            out.append({"href": a["href"], "title": a.get_text().strip(), "children": kids})
        return out

    return walk(ul)


# --------------------------------------------------------------------------- #
# 2) Assign output paths (folder-per-parent + README.md hubs)
# --------------------------------------------------------------------------- #
def assign(nodes: list[dict], out_rel: Path, used_top: bool = False):
    used: dict[Path, set] = {}
    for n in nodes:
        n["id"] = page_id(n["href"])
        base = slugify(n["title"])
        seen = used.setdefault(out_rel, set())
        slug = base if base not in seen else f"{base}-{n['id']}"
        seen.add(slug)
        n["slug"] = slug
        if n["children"]:
            n["dir"] = out_rel / slug
            n["md"] = n["dir"] / "README.md"
            assign(n["children"], n["dir"])
        else:
            n["md"] = out_rel / f"{slug}.md"


def index_by_href(nodes, acc):
    for n in nodes:
        acc[n["href"]] = n
        index_by_href(n["children"], acc)
    return acc


# --------------------------------------------------------------------------- #
# 3) Convert one page's #main-content to Markdown, rewriting links/attachments
# --------------------------------------------------------------------------- #
def rel(from_md: Path, to_path: Path) -> str:
    return os.path.relpath(OUT / to_path, start=(OUT / from_md).parent).replace(os.sep, "/")


def copy_attachment(src_rel: str, from_md: Path) -> str | None:
    """Copy attachments/<pid>/<file> into the repo; return a relative link, or None if missing."""
    src_rel = src_rel.split("?", 1)[0].split("#", 1)[0]  # drop Confluence ?width=/#anchor suffixes
    src = SRC / src_rel
    if not src.is_file():
        flags["missing_attachments"].append(f"{from_md} -> {src_rel}")
        return None
    dest = OUT / src_rel  # mirror attachments/<pid>/<file>
    if src_rel not in _copied:
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dest)
        _copied.add(src_rel)
        mb = src.stat().st_size / 1e6
        if mb > LARGE_MB:
            flags["large_attachments"].append(f"{src_rel} ({mb:.0f} MB)")
    return rel(from_md, Path(src_rel))


def convert_page(node: dict, href2md: dict, space_prefix: str) -> str:
    path = SRC / node["href"]
    soup = BeautifulSoup(path.read_text(encoding="utf-8", errors="ignore"), "html.parser")
    tt = soup.find(id="title-text")
    title = tt.get_text().strip() if tt else node["title"]
    if space_prefix and title.startswith(space_prefix):
        title = title[len(space_prefix):].strip()
    node["title"] = title or node["title"]

    main = soup.find(id="main-content") or soup.find(class_="wiki-content") or soup.body
    if main is None:
        flags["no_main_content"].append(node["href"])
        body_md = ""
    else:
        for tag in main.find_all(["script", "style"]):
            tag.decompose()
        for img in main.find_all("img"):
            src = img.get("src", "")
            if src.startswith("attachments/"):
                new = copy_attachment(src, node["md"])
                if new:
                    img["src"] = new
        for a in main.find_all("a"):
            href = a.get("href", "")
            base, _, anchor = href.partition("#")
            if base in href2md:
                a["href"] = rel(node["md"], href2md[base]["md"]) + (("#" + anchor) if anchor else "")
            elif base.startswith("attachments/"):
                new = copy_attachment(base, node["md"])
                if new:
                    a["href"] = new
        body_md = to_md(str(main), heading_style="ATX", bullets="-").strip()

    if len(re.sub(r"[#>*_\-\s]", "", body_md)) < 15:
        flags["empty_pages"].append(str(node["md"]))

    fm = (f'---\ntitle: "{title.replace(chr(34), "")}"\n'
          f'confluence_id: {node["id"]}\nsource: {node["href"]}\n---\n\n')
    return fm + f"# {title}\n\n" + body_md + "\n"


def section_nav(node: dict) -> str:
    kids = node["children"]
    if not kids:
        return ""
    lines = ["", "<!-- section-nav:start -->", "", "## In this section", ""]
    for c in kids:
        lines.append(f"- [{c['title']}]({rel(node['md'], c['md'])})")
    lines += ["", "<!-- section-nav:end -->", ""]
    return "\n".join(lines)


def write_node(node: dict, href2md: dict, space_prefix: str):
    body = convert_page(node, href2md, space_prefix)
    out_path = OUT / node["md"]
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(body + section_nav(node), encoding="utf-8")
    for c in node["children"]:
        write_node(c, href2md, space_prefix)


# --------------------------------------------------------------------------- #
# Orphans: page HTML files not present in the index tree
# --------------------------------------------------------------------------- #
def handle_orphans(href2md: dict, space_prefix: str):
    unfiled = Path("_unfiled")
    for p in sorted(SRC.glob("*.html")):
        if p.name == "index.html" or p.name in href2md:
            continue
        soup = BeautifulSoup(p.read_text(encoding="utf-8", errors="ignore"), "html.parser")
        if soup.find(id="main-content") is None:
            continue  # not a real content page (redirect/attachment wrapper)
        tt = soup.find(id="title-text")
        title = (tt.get_text().strip() if tt else p.stem)
        if space_prefix and title.startswith(space_prefix):
            title = title[len(space_prefix):].strip()
        node = {"href": p.name, "title": title, "children": [],
                "id": page_id(p.name), "slug": slugify(title),
                "md": unfiled / f"{slugify(title)}.md"}
        href2md[p.name] = node
        flags["orphan_pages"].append(p.name)
        write_node(node, href2md, space_prefix)


def write_flags(n_pages: int):
    titles = {
        "orphan_pages": "Pages not in the space tree (filed under _unfiled/)",
        "unresolved_links": "Unresolved internal links",
        "missing_attachments": "Referenced attachments not found on disk",
        "empty_pages": "Empty / near-empty pages",
        "no_main_content": "Pages with no main content block",
        "large_attachments": f"Large attachments (> {LARGE_MB} MB — consider externalizing)",
    }
    lines = ["# Migration flags", "",
             f"Converted **{n_pages} pages** and **{len(_copied)} attachments** 1:1 from the "
             "Confluence HTML export. Advisory only — no content meaning was changed.", ""]
    for k, t in titles.items():
        items = list(dict.fromkeys(flags[k]))
        lines.append(f"## {t} ({len(items)})")
        lines.extend(f"- {x}" for x in items) if items else lines.append("- none")
        lines.append("")
    (OUT / "MIGRATION-FLAGS.md").write_text("\n".join(lines), encoding="utf-8")


def main():
    if not INDEX.exists():
        print(f"ERROR: no index.html in {SRC}", file=sys.stderr)
        return 1
    tree = parse_tree()
    if not tree:
        print("ERROR: could not parse the page tree from index.html", file=sys.stderr)
        return 1

    # space name prefix ("<Space> : ") to strip from page titles
    home = tree[0]
    home_tt = BeautifulSoup((SRC / home["href"]).read_text(encoding="utf-8", errors="ignore"),
                            "html.parser").find(id="title-text")
    space_prefix = ""
    if home_tt and " : " in home_tt.get_text():
        space_prefix = home_tt.get_text().split(" : ", 1)[0].strip() + " : "

    # clean previous content (keep scripts/ and .git)
    for item in OUT.iterdir() if OUT.exists() else []:
        if item.name in ("scripts", ".git", ".gitignore", "README-repo.md"):
            continue
        shutil.rmtree(item) if item.is_dir() else item.unlink()
    OUT.mkdir(parents=True, exist_ok=True)

    # Home page -> repo README.md; its children at the repo root.
    home["md"] = Path("README.md")
    home["id"] = page_id(home["href"])
    home["slug"] = "README"
    assign(home["children"], Path("."))
    href2md = index_by_href([home], {})

    write_node(home, href2md, space_prefix)
    handle_orphans(href2md, space_prefix)

    n_pages = len(href2md)
    write_flags(n_pages)
    print(f"OK: {n_pages} pages, {len(_copied)} attachments -> {OUT}")
    for k, v in flags.items():
        if v:
            print(f"  {k}: {len(v)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
