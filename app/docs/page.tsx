import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Markdown } from "../components/Markdown";
import { getDoc } from "../lib/docs";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Hermes One documentation — getting started, architecture, configuration, features, and development.",
  alternates: { canonical: "/docs" },
  openGraph: { title: "Documentation | Hermes One", url: "/docs" },
};

export default function DocsIndexPage() {
  const doc = getDoc("");
  if (!doc) notFound();
  return (
    <article>
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-white">{doc.title}</h1>
      <Markdown>{doc.body}</Markdown>
    </article>
  );
}
