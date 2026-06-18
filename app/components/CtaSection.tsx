import DownloadSection from "./DownloadSection";
import CliInstallSection from "./CliInstallSection";

export default function CtaSection() {
  return (
    <>
      {/* CLI Install */}
      <section className="bg-zinc-900/40 border-y border-zinc-800/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-white">
              Prefer the terminal?
            </h2>
            <p className="mt-3 text-zinc-400 max-w-lg mx-auto">
              Install Hermes Agent directly with a single command. No desktop
              app needed. Works on macOS, Linux, WSL2, and Windows.
            </p>
          </div>
          <CliInstallSection />
          <p className="mt-8 text-center text-xs text-zinc-600">
            Handles everything: Python 3.11, Node.js, ripgrep, ffmpeg, and more.
            No admin required.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden border-t border-zinc-800/50 py-24 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-100 w-100 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Get Hermes Desktop
          </h2>
          <p className="mb-10 text-zinc-400">
            Free, open source, and available for macOS, Windows, and Linux.
          </p>
          <DownloadSection />
        </div>
      </section>
    </>
  );
}
