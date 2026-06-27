import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Markdown } from "../../components/Markdown";
import { getDoc } from "../../lib/docs";
import { DOCS_NAV } from "../../lib/docs-nav";

export const dynamicParams = false;

/** Pre-render every doc in the nav (skip the "" overview, served by /docs). */
export function generateStaticParams() {
  return DOCS_NAV.filter((d) => d.slug).map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) return { title: "Not found" };
  return {
    title: doc.title,
    description: doc.description,
    alternates: { canonical: `/docs/${slug}` },
    openGraph: { title: `${doc.title} | Hermes One`, description: doc.description, url: `/docs/${slug}` },
  };
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) notFound();
  return (
    <article>
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-white">{doc.title}</h1>
      <Markdown>{doc.body}</Markdown>
    </article>
  );
}
