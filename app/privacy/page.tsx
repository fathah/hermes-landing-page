import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GITHUB_URL, SITE_URL } from "../data/content";

const LAST_UPDATED = "June 28, 2026";

const description =
  "How Hermes One handles your data. Local-first by design: the desktop app keeps your data on your device, and you bring your own model providers.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Hermes One",
    description,
    url: "/privacy",
  },
};

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "local-first", label: "Local-first by design" },
  { id: "the-app", label: "Data in the app" },
  { id: "the-website", label: "Data on the website" },
  { id: "third-parties", label: "Third-party providers" },
  { id: "cookies", label: "Cookies & analytics" },
  { id: "retention", label: "Data retention" },
  { id: "security", label: "Security" },
  { id: "your-rights", label: "Your rights" },
  { id: "children", label: "Children's privacy" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-full bg-zinc-950 text-zinc-100 font-sans">
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 pb-24 pt-36">
        {/* Header */}
        <header>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Legal
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            Hermes One is built local-first. The desktop app keeps your data on
            your own device, and you connect your own model providers — so most of
            your data never touches our servers at all. This policy explains
            exactly what we do and don&apos;t collect.
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            Last updated: {LAST_UPDATED}
          </p>
        </header>

        {/* Highlight callouts */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-800/50 sm:grid-cols-3">
          {[
            {
              title: "No account needed",
              desc: "Download and run the app without signing up with us.",
            },
            {
              title: "Your data stays local",
              desc: "In local mode, conversations and memory live on your device.",
            },
            {
              title: "You own your keys",
              desc: "Your provider credentials are stored by you, used by you.",
            },
          ].map((c) => (
            <div key={c.title} className="bg-zinc-950 p-6">
              <h3 className="text-sm font-semibold text-white">{c.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Table of contents */}
        <nav
          aria-label="Table of contents"
          className="mt-12 rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-6"
        >
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            On this page
          </h2>
          <ol className="grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
            {SECTIONS.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  <span className="mr-2 text-zinc-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Body */}
        <div className="mt-16 space-y-14">
          <section id="overview" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">1. Overview</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                This Privacy Policy explains how the Hermes One team
                (&ldquo;Hermes One,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) handles information in connection with{" "}
                <a
                  href={SITE_URL}
                  className="text-zinc-300 underline underline-offset-2 hover:text-white"
                >
                  hermesone.org
                </a>{" "}
                (the &ldquo;Site&rdquo;) and the Hermes One desktop application
                (the &ldquo;App&rdquo;).
              </p>
              <p>
                The short version: the App is local-first and open source, you
                bring your own model providers, and we run a simple informational
                website with privacy-respecting analytics. We do not sell your
                data, and we never have.
              </p>
            </div>
          </section>

          <section id="local-first" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">
              2. Local-first by design
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                The App runs on your device. In local mode, it installs to a
                directory on your machine (for example,{" "}
                <code className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-[0.85em] text-zinc-300">
                  ~/.hermes
                </code>
                ) and stores your conversations, memory, profiles, skills, and
                settings there. That data is yours. We do not receive it, and we
                cannot read it.
              </p>
              <p>
                Because the source is open, you can audit exactly how the App
                handles data in our{" "}
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 underline underline-offset-2 hover:text-white"
                >
                  GitHub repository
                </a>
                .
              </p>
            </div>
          </section>

          <section id="the-app" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">3. Data in the app</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>The App may handle the following on your device:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-zinc-600">
                <li>
                  <span className="text-zinc-300">Conversations and memory</span>{" "}
                  — chat history, session summaries, and the user model your agent
                  builds over time.
                </li>
                <li>
                  <span className="text-zinc-300">Credentials</span> — API keys
                  and tokens for the providers and platforms you connect, stored
                  locally so the App can talk to them on your behalf.
                </li>
                <li>
                  <span className="text-zinc-300">Configuration</span> — profiles,
                  personas, enabled tools, schedules, and preferences.
                </li>
                <li>
                  <span className="text-zinc-300">Files and tool output</span> —
                  any files you share with the agent or that its tools generate.
                </li>
              </ul>
              <p>
                If you connect the App to a remote Hermes API server instead of
                running locally, this data is stored on the server you choose,
                under your control.
              </p>
            </div>
          </section>

          <section id="the-website" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">
              4. Data on the website
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                The Site is an informational marketing and documentation site. You
                do not need an account to use it. We collect only:
              </p>
              <ul className="list-disc space-y-2 pl-5 marker:text-zinc-600">
                <li>
                  <span className="text-zinc-300">Usage analytics</span> —
                  aggregate, privacy-respecting metrics about page visits (see
                  Section 6).
                </li>
                <li>
                  <span className="text-zinc-300">Standard server logs</span> —
                  information such as IP address and browser type that web and CDN
                  infrastructure records automatically to deliver and secure the
                  Site.
                </li>
              </ul>
              <p>
                If you choose to contact us, join our community channels, or
                download a release, you interact with the relevant third-party
                platform (GitHub, Discord, and so on) under their privacy
                policies.
              </p>
            </div>
          </section>

          <section id="third-parties" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">
              5. Third-party providers
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                Hermes One has no model lock-in: you bring your own providers.
                When your agent runs, the App sends your prompts, context, and any
                attached data <span className="text-zinc-300">directly</span> from
                your device to the model providers, messaging platforms, and
                infrastructure you have configured. That data is handled under
                each provider&apos;s own terms and privacy policy — not ours.
              </p>
              <p>
                We do not act as an intermediary for that traffic and we do not
                receive a copy of it. Please review the privacy policies of any
                provider you connect, since their handling of your data is solely
                between you and them.
              </p>
            </div>
          </section>

          <section id="cookies" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">
              6. Cookies &amp; analytics
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                The Site uses Google Analytics to understand aggregate traffic
                patterns — which pages are visited, roughly where visitors come
                from, and how the Site performs. This helps us improve the
                project. Google may set cookies to provide this service; you can
                block or delete cookies in your browser settings, and most
                browsers offer a &ldquo;Do Not Track&rdquo; option.
              </p>
              <p>
                We use analytics only in aggregate. We do not use it to build
                advertising profiles, and we do not sell analytics data.
              </p>
            </div>
          </section>

          <section id="retention" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">7. Data retention</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                Data the App stores locally is retained until you delete it — you
                control it directly on your device. Aggregate analytics are
                retained according to our analytics provider&apos;s standard
                retention periods. Server logs are retained only as long as needed
                for operation and security.
              </p>
            </div>
          </section>

          <section id="security" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">8. Security</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                Because Hermes One is local-first, the security of your data
                largely depends on the security of your own device and accounts.
                Keep your operating system updated, protect your API keys, and use
                strong credentials for the providers you connect. For our hosted
                Site and services we apply reasonable safeguards, but no method of
                transmission or storage is perfectly secure.
              </p>
            </div>
          </section>

          <section id="your-rights" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">9. Your rights</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                Depending on where you live, you may have rights to access,
                correct, export, or delete personal data, and to object to certain
                processing. For data stored locally by the App, you can exercise
                these rights yourself at any time by viewing, editing, exporting,
                or deleting it directly in the App. For any data we hold (such as
                analytics), contact us and we will respond consistent with
                applicable law.
              </p>
            </div>
          </section>

          <section id="children" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">
              10. Children&apos;s privacy
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                The Services are not directed to children under 13 (or the minimum
                age required in your jurisdiction), and we do not knowingly collect
                personal information from them. If you believe a child has provided
                us personal information, please contact us so we can address it.
              </p>
            </div>
          </section>

          <section id="changes" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">
              11. Changes to this policy
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                We may update this Privacy Policy from time to time. When we do, we
                will revise the &ldquo;Last updated&rdquo; date above and, for
                material changes, may announce them through our community channels.
                Your continued use of the Services after an update constitutes
                acceptance of the revised policy.
              </p>
            </div>
          </section>

          <section id="contact" className="scroll-mt-28">
            <div className="rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-8">
              <h2 className="text-xl font-bold text-white">12. Contact</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Questions about your privacy or this policy? Reach us through our
                community channels or open an issue on GitHub.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={`${GITHUB_URL}/issues/new`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                >
                  Open a GitHub issue
                </a>
                <a
                  href="https://discord.gg/HAxktyvy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
                >
                  Join our Discord
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
