import Image from "next/image";
import { GITHUB_URL, DOCS_URL } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-zinc-600 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded overflow-hidden">
            <Image src="/icon.svg" alt="Hermes" width={20} height={20} className="w-5 h-5" />
          </div>
          <span>Hermes Agent Desktop</span>
        </div>
        <div className="flex items-center gap-5">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">
            GitHub
          </a>
          <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">
            Docs
          </a>
          <a href={`${GITHUB_URL}/issues`} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">
            Issues
          </a>
          <a href={`${GITHUB_URL}/blob/main/LICENSE`} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">
            MIT License
          </a>
        </div>
      </div>
    </footer>
  );
}
