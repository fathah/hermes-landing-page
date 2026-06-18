import DownloadSection from "./DownloadSection";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center overflow-hidden w-full">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-150 w-150 rounded-full bg-gray-500/5 blur-3xl" />
      </div>
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white-400/30 to-transparent" />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          Community-built · Open source · MIT
        </div>

        <h1 className="text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl font-bold">
          <span className="opacity-60"> Your AI agent.</span> Always improving.
        </h1>

        <p className="max-w-xl  text-zinc-500 leading-relaxed">
          The only agent with a built-in learning loop. It creates skills from
          experience, improves them during use, and builds a deepening model of
          who you are across sessions.
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
