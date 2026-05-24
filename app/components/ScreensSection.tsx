import Image from "next/image";
import { SCREENS } from "../data/content";

export default function ScreensSection() {
  return (
    <section id="screens" className="py-24 border-y border-zinc-800/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Purpose-built screens
          </h2>
          <p className="mt-4 text-zinc-400 max-w-lg mx-auto">
            Everything in one place — from first conversation to advanced
            scheduling and memory.
          </p>
        </div>
        <div className="flex flex-col gap-24">
          {SCREENS.map((s, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={s.label}
                className={`flex flex-col gap-10 items-center md:flex-row ${isEven ? "" : "md:flex-row-reverse"}`}
              >
                <div
                  className="w-full md:w-3/5 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/60 shadow-xl shadow-black/30 transition-transform duration-500 hover:transform-[perspective(1200px)_rotateY(0deg)]"
                  style={{
                    transform: `perspective(1500px) rotateY(${isEven ? "10deg" : "-10deg"})`,
                  }}
                >
                  {s.preview ? (
                    <Image
                      src={s.preview}
                      alt={`Hermes ${s.label} screen`}
                      width={900}
                      height={560}
                      className="w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-56 text-zinc-700 text-sm">
                      No preview
                    </div>
                  )}
                </div>
                <div
                  className={`w-full md:w-2/5 flex flex-col gap-4 ${isEven ? "md:pl-4" : "md:pr-4"}`}
                >
                  <div className="inline-flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400">
                      {s.icon}
                    </span>
                    <h3 className="text-xl font-semibold text-white">
                      {s.label}
                    </h3>
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
