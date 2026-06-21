import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GITHUB_URL, DOCS_URL } from "../data/content";

const description =
  "Hermes One is an independent, open-source AI agent platform with deep memory, multi-platform messaging, and no model lock-in — powered by Nous Research's Hermes Agent.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: "About | Hermes One", description, url: "/about" },
};

const VALUES = [
  {
    title: "Open by default",
    desc: "Hermes is free and MIT-licensed. The whole platform is on GitHub — fork it, audit it, or self-host it on a $5 VPS.",
  },
  {
    title: "No lock-in",
    desc: "Bring any model from any provider, and switch with a single command. Your agent, your memory, your data — never trapped behind one vendor.",
  },
  {
    title: "Always improving",
    desc: "A true closed learning loop: the agent curates its own memory, writes its own skills after complex tasks, and refines them as it works.",
  },
  {
    title: "Lives where you do",
    desc: "Telegram, Discord, Slack, WhatsApp, Signal, and CLI from one gateway, with conversation continuity across every platform.",
  },
];

const STATS = [
  { value: "14", label: "Built-in toolsets" },
  { value: "7", label: "Terminal backends" },
  { value: "300+", label: "Models supported" },
  { value: "MIT", label: "Open-source license" },
];

export default function AboutPage() {
  return (
    <div className="min-h-full bg-zinc-950 text-zinc-100 font-sans">
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 pb-24 pt-36">
        {/* Header */}
        <header>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
            About
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The agent that learns as it works.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            Hermes One is an autonomous AI agent platform built around a simple
            idea: your assistant should get better the more you use it — without
            handing your data or your model choice to anyone else.
          </p>
        </header>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-800/50 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-zinc-950 p-6 text-center">
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-xs text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="mt-16 space-y-6 text-zinc-400 leading-relaxed">
          <h2 className="text-2xl font-bold text-white">Why we built it</h2>
          <p>
            Most AI assistants forget you the moment a session ends, lock you
            into a single provider, and live behind a wall of configuration.
            Hermes takes the opposite approach. It carries persistent memory
            across sessions, models you as a user over time, and exposes
            everything through a native desktop app — no terminal required.
          </p>
          <p>
            Under the hood, Hermes runs a closed learning loop. After complex
            tasks it can author its own reusable skills, then improve them during
            future use. It delegates work to isolated subagents, schedules
            automations in plain language, and runs across seven terminal
            backends — from your laptop to a GPU cluster — costing nearly nothing
            when idle.
          </p>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white">What we believe</h2>
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-800/50 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-zinc-950 p-7">
                <h3 className="mb-2 text-sm font-semibold text-white">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Star history */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white">Star history</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Hermes is open source — here&apos;s how the community has grown over
            time.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-4">
            <a
              href="https://www.star-history.com/fathah/hermes-desktop#history"
              target="_blank"
              rel="noopener noreferrer"
            >
              <picture>
                <source
                  media="(prefers-color-scheme: dark)"
                  srcSet="https://api.star-history.com/chart?repos=fathah/hermes-desktop&type=Date&theme=dark"
                />
                <source
                  media="(prefers-color-scheme: light)"
                  srcSet="https://api.star-history.com/chart?repos=fathah/hermes-desktop&type=Date"
                />
                <img
                  alt="Star History Chart"
                  src="https://api.star-history.com/chart?repos=fathah/hermes-desktop&type=Date"
                  className="w-full rounded-lg"
                />
              </picture>
            </a>
          </div>
        </div>

        {/* Builder note + CTA */}
        <div className="mt-16 rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-8">
          <h2 className="text-xl font-bold text-white">
            An independent project
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Hermes One is an independent project, built and maintained by the
            Hermes One team. It&apos;s powered by the open-source Hermes Agent
            from Nous Research, but is a separate, third-party product — not
            affiliated with or endorsed by Nous Research. It&apos;s free for
            anyone to use, study, and extend.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
            >
              View on GitHub
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
