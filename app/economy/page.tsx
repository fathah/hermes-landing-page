import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OneEconomySection from "../components/OneEconomySection";
import EconomyLottie from "../components/EconomyLottie";

export const metadata: Metadata = {
  title: "Economy - Hermes One",
  description:
    "The Hermes One Economy is a community-maintained economy on the Base network, powered by the $HD token, enabling seamless transactions across all Hermes services.",
};

const USES = [
  {
    title: "Agent services",
    desc: "Settle usage across Hermes services with a single token — no juggling balances between providers.",
  },
  {
    title: "Creator rewards",
    desc: "Skill, MCP, and agent authors can be rewarded by the community for what they ship to the ecosystem.",
  },
  {
    title: "Governance",
    desc: "$HD holders help steer the direction of the economy through community-led decisions.",
  },
  {
    title: "Low-cost transfers",
    desc: "Built on Base, an Ethereum L2, so transactions stay fast and inexpensive for everyone.",
  },
];

export default function EconomyPage() {
  return (
    <div className="min-h-full bg-zinc-950 text-zinc-100 font-sans">
      <Navbar />

      <main className="pt-20">
        {/* Reused core economy section: pillars + contract address */}
        <OneEconomySection />

        {/* What $HD powers */}
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <h2 className="text-center text-2xl font-bold text-white">
            What $HD powers
          </h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-800/50 sm:grid-cols-2">
            {USES.map((u) => (
              <div key={u.title} className="bg-zinc-950 p-7">
                <h3 className="mb-2 text-sm font-semibold text-white">
                  {u.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {u.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-zinc-600">
            $HD is a community-driven token. Nothing here is financial advice —
            do your own research before interacting with any token or contract.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
