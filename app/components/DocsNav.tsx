"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOCS_NAV, docHref } from "../lib/docs-nav";

export default function DocsNav() {
  const pathname = usePathname();
  return (
    <nav className="space-y-1">
      {DOCS_NAV.map((item) => {
        const href = docHref(item.slug);
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
              active
                ? "bg-zinc-800/70 font-medium text-white"
                : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
            }`}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
