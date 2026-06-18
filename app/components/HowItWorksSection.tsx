import { HOW_IT_WORKS } from "../data/content";

export default function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <h2 className="mb-4 text-3xl font-bold text-white">
        Up and running in minutes
      </h2>
      <p className="mb-12 text-zinc-400">
        Hermes Desktop walks you through the full setup on first launch. No
        terminal needed.
      </p>
      <div className="grid gap-6 sm:grid-cols-3">
        {HOW_IT_WORKS.map((item) => (
          <div
            key={item.step}
            className="relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7 text-left hover:border-zinc-700 transition-colors"
          >
            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white text-sm font-bold">
              {item.step}
            </div>
            <h3 className="mb-2 text-sm font-semibold text-white">
              {item.title}
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
