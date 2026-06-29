import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GITHUB_URL, SITE_URL } from "../data/content";

const LAST_UPDATED = "June 28, 2026";

const description =
  "The terms that govern your use of the Hermes One website, desktop app, and related open-source software.";

export const metadata: Metadata = {
  title: "Terms of Service",
  description,
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | Hermes One",
    description,
    url: "/terms",
  },
};

const SECTIONS = [
  { id: "agreement", label: "Agreement to terms" },
  { id: "the-software", label: "The software" },
  { id: "license", label: "License" },
  { id: "your-responsibilities", label: "Your responsibilities" },
  { id: "third-party-services", label: "Third-party services & models" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "intellectual-property", label: "Intellectual property" },
  { id: "disclaimer", label: "Disclaimer of warranties" },
  { id: "liability", label: "Limitation of liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "changes", label: "Changes to these terms" },
  { id: "termination", label: "Termination" },
  { id: "governing-law", label: "Governing law" },
  { id: "contact", label: "Contact" },
];

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            These terms govern your use of the Hermes One website, the Hermes One
            desktop application, and the related open-source software. Please read
            them carefully — by using our software or services, you agree to them.
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            Last updated: {LAST_UPDATED}
          </p>
        </header>

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
          <section id="agreement" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">
              1. Agreement to terms
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) form a binding
                agreement between you and the Hermes One team (&ldquo;Hermes
                One,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) covering your access to and use of{" "}
                <a
                  href={SITE_URL}
                  className="text-zinc-300 underline underline-offset-2 hover:text-white"
                >
                  hermesone.org
                </a>{" "}
                (the &ldquo;Site&rdquo;), the Hermes One desktop application (the
                &ldquo;App&rdquo;), and any related documentation, downloads, and
                services (together, the &ldquo;Services&rdquo;).
              </p>
              <p>
                If you do not agree to these Terms, do not use the Services. If
                you are using the Services on behalf of an organization, you
                represent that you have authority to bind that organization to
                these Terms.
              </p>
            </div>
          </section>

          <section id="the-software" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">2. The software</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                Hermes One is an independent, open-source AI agent platform. The
                App runs primarily on your own device and, in local mode, stores
                your data on your machine. Hermes One is powered by the
                open-source Hermes Agent from Nous Research, but is a separate,
                third-party product and is not affiliated with, sponsored by, or
                endorsed by Nous Research.
              </p>
              <p>
                The Services are provided free of charge. We do not require you to
                create an account with us to download or run the App. Any costs
                you incur from third-party model providers, infrastructure, or
                messaging platforms are your own responsibility (see Section 5).
              </p>
            </div>
          </section>

          <section id="license" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">3. License</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                The Hermes One software is released under the MIT License. Your
                rights to use, copy, modify, and distribute the source code are
                governed by that license, which is available in our{" "}
                <a
                  href={`${GITHUB_URL}/blob/main/LICENSE`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 underline underline-offset-2 hover:text-white"
                >
                  GitHub repository
                </a>
                . In the event of a conflict between these Terms and the MIT
                License with respect to the source code, the MIT License
                controls.
              </p>
              <p>
                These Terms additionally govern the Site, the official binary
                distributions of the App, and our hosted services (such as the
                registry and marketplace), which are offered as a convenience and
                may be subject to their own usage limits.
              </p>
            </div>
          </section>

          <section id="your-responsibilities" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">
              4. Your responsibilities
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>You are solely responsible for:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-zinc-600">
                <li>
                  The API keys, credentials, and accounts you connect to the App,
                  and for keeping them secure.
                </li>
                <li>
                  The prompts, instructions, tools, and automations you give your
                  agent, and the actions it takes on your behalf.
                </li>
                <li>
                  Reviewing the output of an autonomous agent before relying on
                  it. AI systems can produce inaccurate, incomplete, or harmful
                  results.
                </li>
                <li>
                  Complying with the terms of any third-party service you connect
                  (model providers, messaging platforms, infrastructure
                  providers, and so on).
                </li>
                <li>
                  Backing up your data. In local mode your data lives on your
                  device; we cannot recover it for you.
                </li>
              </ul>
            </div>
          </section>

          <section id="third-party-services" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">
              5. Third-party services &amp; models
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                Hermes One is designed with no model lock-in. You bring your own
                model providers and connect your own integrations. When you do,
                your data — including prompts, files, and context — is sent
                directly from the App to those third parties under their terms
                and privacy policies, not ours.
              </p>
              <p>
                We do not control and are not responsible for third-party
                services, their availability, their pricing, or how they handle
                your data. Your use of any third-party service is solely between
                you and that provider.
              </p>
            </div>
          </section>

          <section id="acceptable-use" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">6. Acceptable use</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>You agree not to use the Services to:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-zinc-600">
                <li>Violate any applicable law or regulation.</li>
                <li>
                  Infringe the intellectual property, privacy, or other rights of
                  others.
                </li>
                <li>
                  Generate or distribute malware, spam, or content intended to
                  harass, defraud, or harm others.
                </li>
                <li>
                  Attempt to gain unauthorized access to, disrupt, or overload
                  our hosted services or infrastructure.
                </li>
                <li>
                  Misrepresent your affiliation with Hermes One or Nous Research.
                </li>
              </ul>
              <p>
                We may suspend access to our hosted services for conduct that
                threatens their security, integrity, or availability.
              </p>
            </div>
          </section>

          <section id="intellectual-property" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">
              7. Intellectual property
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                The source code is licensed under the MIT License. The Hermes One
                name, logo, and brand assets remain the property of the Hermes One
                team and are not granted to you under the MIT License. You may
                refer to Hermes One descriptively, but you may not use our marks
                in a way that suggests endorsement or affiliation without
                permission.
              </p>
              <p>
                You retain all rights to the content you create with the App.
              </p>
            </div>
          </section>

          <section id="disclaimer" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">
              8. Disclaimer of warranties
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-5 text-sm uppercase tracking-wide text-zinc-400">
                The Services are provided &ldquo;as is&rdquo; and &ldquo;as
                available,&rdquo; without warranties of any kind, whether express,
                implied, or statutory, including any implied warranties of
                merchantability, fitness for a particular purpose, title, and
                non-infringement.
              </p>
              <p>
                We do not warrant that the Services will be uninterrupted,
                secure, error-free, or that any output of an AI agent will be
                accurate or reliable. You use the Services at your own risk.
              </p>
            </div>
          </section>

          <section id="liability" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">
              9. Limitation of liability
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                To the maximum extent permitted by law, Hermes One and its
                contributors will not be liable for any indirect, incidental,
                special, consequential, or punitive damages, or for any loss of
                profits, data, or goodwill, arising out of or related to your use
                of the Services — even if we have been advised of the possibility
                of such damages.
              </p>
              <p>
                Because the Services are provided free of charge, our total
                aggregate liability to you for any claim relating to the Services
                will not exceed one hundred U.S. dollars (USD $100).
              </p>
            </div>
          </section>

          <section id="indemnification" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">
              10. Indemnification
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                You agree to indemnify and hold harmless Hermes One and its
                contributors from any claims, damages, liabilities, and expenses
                (including reasonable legal fees) arising from your use of the
                Services, your violation of these Terms, or your violation of any
                law or third-party right.
              </p>
            </div>
          </section>

          <section id="changes" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">
              11. Changes to these terms
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                We may update these Terms from time to time. When we do, we will
                revise the &ldquo;Last updated&rdquo; date above. Material changes
                may be announced through our community channels. Your continued use
                of the Services after changes take effect constitutes acceptance
                of the revised Terms.
              </p>
            </div>
          </section>

          <section id="termination" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">12. Termination</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                You may stop using the Services at any time. We may suspend or
                terminate your access to our hosted services if you breach these
                Terms or use the Services in a way that could cause harm or legal
                liability. The MIT License rights to the source code survive in
                accordance with that license.
              </p>
            </div>
          </section>

          <section id="governing-law" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-white">13. Governing law</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-400">
              <p>
                These Terms are governed by general principles of contract law,
                without regard to conflict-of-laws rules. If any provision is
                found unenforceable, the remaining provisions will remain in full
                effect. Our failure to enforce any provision is not a waiver of
                our right to do so later.
              </p>
            </div>
          </section>

          <section id="contact" className="scroll-mt-28">
            <div className="rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-8">
              <h2 className="text-xl font-bold text-white">14. Contact</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Questions about these Terms? Reach us through our community
                channels or open an issue on GitHub.
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
