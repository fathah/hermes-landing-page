import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DownloadSection from "../components/DownloadSection";
import { HOW_IT_WORKS, DOCS_URL, GITHUB_URL } from "../data/content";

const description =
  "Download Hermes One for macOS, Windows, and Linux. Free, open source, and MIT licensed. Pick your platform and get your agent running in minutes.";

export const metadata: Metadata = {
  title: "Download",
  description,
  alternates: { canonical: "/download" },
  openGraph: { title: "Download | Hermes One", description, url: "/download" },
};

const PLATFORMS = [
  {
    name: "macOS",
    detail: "Apple Silicon & Intel · .dmg",
    note: "macOS 11 Big Sur or later",
  },
  {
    name: "Windows",
    detail: "Installer & portable · .exe",
    note: "Windows 10 or later (64-bit)",
  },
  {
    name: "Linux",
    detail: "AppImage, .deb & .rpm",
    note: "Most modern distributions",
  },
];

export default function DownloadPage() {
  return (
    <div className="min-h-full bg-zinc-950 text-zinc-100 font-sans">
      <Navbar />

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-36">
        {/* Header */}
        <header className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Download
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Get Hermes for your machine.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            Free, open source, and MIT licensed. We&apos;ve detected your
            platform below — grab the build and you&apos;ll be up and running in
            minutes.
          </p>
        </header>

        {/* Download buttons (auto-detects OS) */}
        <div className="mt-14 rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-8 sm:p-10">
          <DownloadSection />
        </div>

        {/* All platforms */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-800/50 sm:grid-cols-3">
          {PLATFORMS.map((p) => (
            <div key={p.name} className="bg-zinc-950 p-6">
              <h3 className="text-sm font-semibold text-white">{p.name}</h3>
              <p className="mt-1.5 text-sm text-zinc-400">{p.detail}</p>
              <p className="mt-1 text-xs text-zinc-600">{p.note}</p>
            </div>
          ))}
        </div>

        {/* Getting started */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-bold text-white">
            After you install
          </h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-800/50 sm:grid-cols-3">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="bg-zinc-950 p-7">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 font-mono text-sm font-semibold text-white">
                  {step.step}
                </div>
                <h3 className="mb-2 text-sm font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Help links */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-8 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-xl font-bold text-white">Need a hand?</h2>
            <p className="mt-1 text-sm text-zinc-400">
              Read the docs to get set up, or grab the source and build it
              yourself.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
            >
              Read the docs
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
