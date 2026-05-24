import Image from "next/image";
import { GITHUB_URL, DOCS_URL } from "../data/content";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg overflow-hidden">
            <Image
              src="/icon.svg"
              alt="Hermes"
              width={28}
              height={28}
              className="w-7 h-7"
            />
          </div>
          <span className="text-sm font-semibold tracking-tight text-white">
            Hermes Agent
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#screens" className="hover:text-white transition-colors">
            Screens
          </a>
          <a href="#download" className="hover:text-white transition-colors">
            Download
          </a>
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Docs
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 px-3 py-1.5 text-zinc-300 hover:border-zinc-500 hover:text-white transition-all"
          >
            <Image
              src="/logos/github.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="w-4 h-4 brightness-0 invert"
            />
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
