import type { MetadataRoute } from "next";
import { SITE_URL } from "./data/content";

// Required for `output: export` (static HTML export).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
