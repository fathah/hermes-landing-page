import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FEATURES, DOCS_URL, RELEASES_URL } from "../data/content";

const description =
  "Everything Hermes One does: a closed learning loop, deep memory, multi-platform messaging, scheduled automations, model freedom, and 14 built-in toolsets.";

export const metadata: Metadata = {
  title: "Features",
  description,
  alternates: { canonical: "/features" },
  openGraph: { title: "Features | Hermes One", description, url: "/features" },
};

export default function FeaturesPage() {
  return (
    <div className="min-h-full bg-zinc-950 text-zinc-100 font-sans">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-36">
        {/* Header */}
        <header className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Features
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            One agent. Every capability.
          </h1>
          <p className="mt-5 text-lg text-zinc-400 leading-relaxed">
            Hermes learns, delegates, schedules, and runs anywhere. No CLI
            required, no lock-in, and nothing to glue together — it all ships in
            a single native app.
          </p>
        </header>

        {/* Feature grid */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-800/50 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-zinc-950 p-7 transition-colors hover:bg-zinc-900/60"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                {f.icon}
              </div>
              <h3 className="mb-2 text-sm font-semibold text-white">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-500">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-8 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-xl font-bold text-white">
              Ready to put it to work?
            </h2>
            <p className="mt-1 text-sm text-zinc-400">
              Download Hermes for macOS, Windows, or Linux — free and open
              source.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <a
              href={RELEASES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
            >
              Download
            </a>
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
            >
              Read the docs
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
