import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScreensSection from "../components/ScreensSection";

export const metadata: Metadata = {
  title: "Preview - Hermes One",
  description:
    "A look at every Hermes One screen — chat, sessions, agents, memory, schedules, gateway, and more. Everything in one native app.",
};

export default function PreviewPage() {
  return (
    <div className="min-h-full bg-zinc-950 text-zinc-100 font-sans">
      <Navbar />

      <main className="pt-20">
        {/* Header */}
        <header className="mx-auto max-w-2xl px-6 pt-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Preview
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            See Hermes in action.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            Every screen in one native app — from your first conversation to
            advanced scheduling, memory, and multi-platform gateways.
          </p>
        </header>

        <ScreensSection />
      </main>

      <Footer />
    </div>
  );
}
