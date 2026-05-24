import DownloadSection from "./DownloadSection";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-40 pb-28 text-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-150 w-150 rounded-full bg-amber-400/5 blur-3xl" />
      </div>
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-amber-400/30 to-transparent" />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-1.5 text-xs font-medium text-amber-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
          </span>
          Community-built · Open source · MIT
        </div>

        <h1
          className="text-5xl  tracking-tight text-white sm:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-silkscreen)" }}
        >
          Your AI agent.{" "}
          <span className="bg-linear-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent whitespace-nowrap">
            Always improving.
          </span>
        </h1>

        <p className="max-w-xl text-lg text-zinc-400 leading-relaxed">
          The only agent with a built-in learning loop. It creates skills from
          experience, improves them during use, and builds a deepening model of
          who you are across sessions. Talk to it from Telegram while it works
          on a cloud VM.
        </p>
        <p className="max-w-xl text-sm text-zinc-600 leading-relaxed">
          A community-maintained desktop companion for{" "}
          <a
            href="https://github.com/NousResearch/hermes-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 underline underline-offset-2 hover:text-zinc-300"
          >
            Hermes Agent by Nous Research
          </a>
        </p>

        <div id="download" className="w-full mt-4">
          <DownloadSection />
        </div>
      </div>
    </section>
  );
}
