"use client";

import toast from "react-hot-toast";

import {
  Zap,
  Users,
  ArrowRightLeft,
  Copy,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function OneEconomySection() {
  const hdContractAddress = "0xfda75f77a22b4f4b783bbbb21915ef64d149bba3";

  return (
    <section id="economy" className="relative overflow-hidden  py-24">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-125 w-125 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white mb-4">
            Hermes One Economy
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            The economy that powers autonomous agents.
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Hermes powers its agent ecosystem with a community maintained
            economy on the Base network, powered by{" "}
            <strong className="text-white">$HD</strong> - enabling seamless
            token transactions across all Hermes services.
          </p>
        </div>

        <div className="grid gap-px bg-zinc-800/50 sm:grid-cols-3 rounded-2xl overflow-hidden border border-zinc-800/50">
          <div className="bg-zinc-950 p-8 text-center hover:bg-zinc-900/60 transition-colors">
            <div className="mb-4 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-sm font-semibold text-white">
              Base Network
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Powered by Base, a secure and scalable Ethereum L2 network,
              providing efficient transactions for agents, creators, and users.
            </p>
          </div>

          <div className="bg-zinc-950 p-8 text-center hover:bg-zinc-900/60 transition-colors">
            <div className="mb-4 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-sm font-semibold text-white">
              Community Governed
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Decisions are shaped by the community through governance, ensuring
              a decentralized and transparent economy.
            </p>
          </div>

          <div className="bg-zinc-950 p-8 text-center hover:bg-zinc-900/60 transition-colors">
            <div className="mb-4 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
              <ArrowRightLeft className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-sm font-semibold text-white">$HD Token</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              The community-driven token supporting the broader Hermes
              ecosystem, governance, and community initiatives.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-1 max-w-lg mx-auto">
          <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/40 p-6 text-center">
            <p className="text-xs text-zinc-500 mb-1">Contract Address</p>
            <code className="text-sm text-white/90 font-mono break-all select-all">
              {hdContractAddress}
            </code>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(hdContractAddress);
                  toast.success("Contract address copied!");
                }}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors cursor-pointer whitespace-nowrap"
              >
                Copy CA
                <Copy className="h-4 w-4" />
              </button>
              <a
                href="https://bankr.bot/launches/0xfda75f77a22b4f4b783bbbb21915ef64d149bba3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-zinc-100 transition-colors whitespace-nowrap"
              >
                Buy $HD
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://basescan.org/tx/0x54a47389f49660d21418a61f4381a6c3dbfc1b50664c07366c792e6ea02a4bd6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors whitespace-nowrap"
              >
                Base Scan
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
