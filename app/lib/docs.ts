import { readFileSync } from "node:fs";
import { join } from "node:path";
import { DOCS_NAV } from "./docs-nav";

/** Markdown docs live in `content/docs/`. With `output: "export"` these are read
 *  at build time during static generation (`process.cwd()` is the project root). */
const DOCS_DIR = join(process.cwd(), "content", "docs");

const SLUG_RE = /^[a-z0-9-]+$/;

/** Map a route slug to its file ("" → README.md, "features" → features.md). */
function fileFor(slug: string): string | null {
  if (slug === "") return "README.md";
  return SLUG_RE.test(slug) ? `${slug}.md` : null;
}

/**
 * Rewrite intra-docs links so the markdown's relative `*.md` links resolve to
 * `/docs/*` routes: `README.md` → `/docs`, `features.md` → `/docs/features`,
 * preserving any `#anchor`. Absolute/external links are left untouched.
 */
export function rewriteDocLinks(md: string): string {
  return md.replace(
    /\]\((?!https?:|\/|#)([A-Za-z0-9._/-]+?)\.md(#[^)]*)?\)/g,
    (_m, name, hash) => {
      const anchor = hash ?? "";
      return name === "README" ? `](/docs${anchor})` : `](/docs/${name}${anchor})`;
    },
  );
}

export interface Doc {
  slug: string;
  title: string;
  /** Markdown body with the leading H1 stripped (rendered as the page heading). */
  body: string;
  /** First paragraph, for metadata descriptions. */
  description: string;
}

/** Read and prepare a doc, or null when the slug has no backing file. */
export function getDoc(slug: string): Doc | null {
  const file = fileFor(slug);
  if (!file) return null;
  let raw: string;
  try {
    raw = readFileSync(join(DOCS_DIR, file), "utf-8");
  } catch {
    return null;
  }

  const md = rewriteDocLinks(raw);
  const h1 = md.match(/^#\s+(.+?)\s*$/m);
  const rawTitle = h1?.[1] ?? DOCS_NAV.find((d) => d.slug === slug)?.title ?? slug;
  const title = rawTitle.replace(/[`*_]/g, "");
  // Drop the first H1 (shown via the page header) and read the first paragraph.
  const body = h1 ? md.replace(h1[0], "").replace(/^\s+/, "") : md;
  const firstPara = body.split(/\n\s*\n/).find((b) => b.trim() && !b.startsWith("#"));
  const description = (firstPara ?? "")
    .replace(/\s+/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim()
    .slice(0, 160);

  return { slug, title, body, description };
}
