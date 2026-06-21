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
    </>
  );
}
