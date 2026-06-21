"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Star } from "lucide-react";
import { GITHUB_URL, DOCS_URL } from "../data/content";
import { getStarCount } from "../lib/release";

function formatStars(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return String(n);
}

// Animated underline that wipes in from the left, plus a color fade.
// The `after:scale-x-*` is left to the caller so active links can pin it open.
const navLinkBase =
  "relative transition-colors duration-200 hover:text-white " +
  "after:pointer-events-none after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full " +
  "after:origin-left after:rounded-full after:bg-gradient-to-r after:from-white after:to-white/40 " +
  "after:transition-transform after:duration-300 after:ease-out";

function navLinkClass(active: boolean) {
  return active
    ? `${navLinkBase} text-white after:scale-x-100`
    : `${navLinkBase} text-zinc-400 after:scale-x-0 hover:after:scale-x-100`;
}

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
  { label: "Preview", href: "/preview" },
  { label: "Economy", href: "/economy" },
  { label: "Download", href: "/download" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    getStarCount().then(setStars);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-80"
        >
          <div className="flex  items-center justify-center rounded-lg overflow-hidden">
            <Image src="/top-logo.svg" alt="Hermes" width={150} height={100} />
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navLinkClass(pathname === link.href)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkClass(false)}
          >
            Docs
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 px-3 py-1.5 text-zinc-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-500 hover:text-white hover:shadow-lg hover:shadow-white/5"
          >
            <Image
              src="/logos/github.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="w-4 h-4 brightness-0 invert transition-transform duration-200 group-hover:rotate-[8deg] group-hover:scale-110"
            />
            GitHub
            {stars !== null && (
              <span className="ml-1 inline-flex items-center gap-1 border-l border-zinc-700 pl-2 text-zinc-400 transition-colors group-hover:border-zinc-500 group-hover:text-white">
                <Star className="h-3.5 w-3.5 fill-current text-amber-400" />
                {formatStars(stars)}
              </span>
            )}
          </a>
        </nav>
      </div>
    </header>
  );
}
