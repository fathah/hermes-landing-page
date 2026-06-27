/** Ordered docs navigation. Pure data so both server (page) and client (nav)
 *  modules can import it. Slugs map to `content/docs/<slug>.md`
 *  (overview → README.md). */
export interface DocNavItem {
  slug: string;
  title: string;
}

export const DOCS_NAV: DocNavItem[] = [
  { slug: "", title: "Overview" },
  { slug: "getting-started", title: "Getting started" },
  { slug: "architecture", title: "Architecture" },
  { slug: "configuration", title: "Configuration" },
  { slug: "features", title: "Features" },
  { slug: "providers-and-integrations", title: "Providers & integrations" },
  { slug: "registry-and-marketplace", title: "Registry & marketplace" },
  { slug: "development", title: "Development" },
];

/** Path for a doc slug ("" → /docs, "features" → /docs/features). */
export function docHref(slug: string): string {
  return slug ? `/docs/${slug}` : "/docs";
}
