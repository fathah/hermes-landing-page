import Link from "next/link";
import { BookOpen } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DocsNav from "../components/DocsNav";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full bg-zinc-950 text-zinc-100 font-sans">
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-32">
        <div className="lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12">
          <aside className="mb-10 lg:mb-0">
            <div className="lg:sticky lg:top-28">
              <Link
                href="/docs"
                className="mb-4 flex items-center gap-2 text-sm font-semibold text-white"
              >
                <BookOpen className="h-4 w-4 text-amber-400" />
                Documentation
              </Link>
              <DocsNav />
            </div>
          </aside>
          <main className="min-w-0">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
