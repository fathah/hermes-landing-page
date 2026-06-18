import Image from "next/image";
import { GITHUB_URL, DOCS_URL, RELEASES_URL } from "../data/content";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Screens", href: "#screens" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Hermes One Economy", href: "#economy" },
    { label: "Download", href: "#download" },
  ],
  resources: [
    { label: "Documentation", href: DOCS_URL, external: true },
    { label: "GitHub", href: GITHUB_URL, external: true },
    { label: "Releases", href: RELEASES_URL, external: true },
    { label: "Changelog", href: `${GITHUB_URL}/releases`, external: true },
    {
      label: "MIT License",
      href: `${GITHUB_URL}/blob/main/LICENSE`,
      external: true,
    },
  ],
  community: [
    {
      label: "Discord",
      href: "https://discord.gg/nousresearch",
      external: true,
    },
    { label: "Telegram", href: "https://t.me/hermesagent", external: true },
    { label: "Report a Bug", href: `${GITHUB_URL}/issues/new`, external: true },
    { label: "Discussions", href: `${GITHUB_URL}/discussions`, external: true },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        {/* Top: Brand + columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5">
                <Image
                  src="/hermesone.png"
                  alt="Hermes"
                  width={40}
                  height={40}
                />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Hermes One
              </span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              The autonomous agent platform with built-in learning, deep memory,
              and multi-platform connectivity. Free, open source, and runs
              anywhere.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-500 transition-colors hover:border-zinc-600 hover:text-white"
                aria-label="GitHub"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.692.48C19.138 20.167 22 16.424 22 12.017 22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
              <a
                href="https://discord.gg/HAxktyvy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-500 transition-colors hover:border-zinc-600 hover:text-white"
                aria-label="Discord"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.484 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.87.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a
                href="https://x.com/HermesOneApp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-500 transition-colors hover:border-zinc-600 hover:text-white"
                aria-label="Twitter"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zM9.51 4.166c-.268.007-.528.083-.748.222-.22.14-.39.338-.5.574-.11.236-.153.498-.13.758.023.26.115.51.27.724l1.92 2.56c-.36.052-.86.148-1.44.3-.84.22-1.8.56-2.58 1.1-.39.27-.74.59-.99.98-.25.39-.39.86-.3 1.36.15.86.8 1.5 1.52 1.92.72.42 1.56.65 2.38.8.82.15 1.62.2 2.25.23.63.03 1.1.05 1.37.14.13.03.18.08.2.11.02.03.06.1.04.25-.04.3-.24.72-.58 1.1-.68.76-1.84 1.52-2.64 1.88-.4.18-.56.36-.56.52 0 .16.1.38.5.5.8.24 1.86.02 2.78-.4.92-.42 1.74-1.1 2.2-1.92.46-.82.56-1.78.14-2.7-.42-.92-1.36-1.7-2.78-2.28l-4.42-1.84c-.14-.06-.18-.12-.18-.16 0-.04.02-.1.14-.16.24-.12.68-.22 1.16-.26.96-.08 2.04.06 2.58.2.54.14.9.06 1.12-.18.22-.24.26-.6.12-.96-.14-.36-.44-.68-.86-.88-.84-.4-2.28-.72-3.78-.78a14.4 14.4 0 00-.64 0h.04z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-zinc-600 transition-colors hover:text-white"
                    >
                      {link.label}
                      {link.external && (
                        <svg
                          className="ml-1 inline h-3 w-3 opacity-40"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-zinc-800/50" />

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-zinc-600 sm:flex-row">
          <p>&copy; {year} Hermes One - Open source under the MIT license.</p>
          <p className="flex items-center gap-1.5">
            Built by
            <a
              href="https://hermesone.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 underline underline-offset-2 hover:text-white transition-colors"
            >
              Hermes One
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
