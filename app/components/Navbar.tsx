"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Star, X } from "lucide-react";
import { GITHUB_URL, REGISTRY_URL } from "../data/content";
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getStarCount().then(setStars);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  const docsActive = pathname === "/docs" || pathname.startsWith("/docs/");
  const starBadge =
    stars !== null ? (
      <span className="ml-1 inline-flex items-center gap-1 border-l border-zinc-700 pl-2 text-zinc-400 transition-colors group-hover:border-zinc-500 group-hover:text-white">
        <Star className="h-3.5 w-3.5 fill-current text-amber-400" />
        {formatStars(stars)}
      </span>
    ) : null;

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

        {/* Desktop nav */}
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
          <Link href="/docs" className={navLinkClass(docsActive)}>
            Docs
          </Link>
          <a
            href={REGISTRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkClass(false)}
          >
            Registry
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
            {starBadge}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav className="md:hidden border-t border-zinc-800/60 bg-zinc-950/95 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-1 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2.5 transition-colors ${
                  pathname === link.href
                    ? "bg-zinc-800/70 text-white"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/docs"
              className={`rounded-lg px-3 py-2.5 transition-colors ${
                docsActive
                  ? "bg-zinc-800/70 text-white"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              Docs
            </Link>
            <a
              href={REGISTRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2.5 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
            >
              Registry
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 px-3 py-2.5 text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
            >
              <Image
                src="/logos/github.svg"
                alt="GitHub"
                width={20}
                height={20}
                className="w-4 h-4 brightness-0 invert"
              />
              GitHub
              {starBadge}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
