import { FEATURES } from "../data/content";

export default function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Not just a chat app</h2>
        <p className="mt-4 text-zinc-400 max-w-lg mx-auto">
          Hermes Agent learns, delegates, schedules, and runs anywhere. Hermes
          Desktop puts the full power in a native app — no CLI required.
        </p>
      </div>
      <div className="grid gap-px bg-zinc-800/50 sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border border-zinc-800/50">
        {FEATURES.map((f) => (
          <div key={f.title} className="bg-zinc-950 p-7 hover:bg-zinc-900/60 transition-colors">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400">
              {f.icon}
            </div>
            <h3 className="mb-2 text-sm font-semibold text-white">{f.title}</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
