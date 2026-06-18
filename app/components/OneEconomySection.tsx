export default function OneEconomySection() {
  const h1ContractAddress = "0x4d7e9b6c8db1e12bcba7771729a88b232c86fba3";
  const hdContractAddress = "0xfda75f77a22b4f4b783bbbb21915ef64d149bba3";

  return (
    <section className="relative overflow-hidden border-t border-zinc-800/50 py-24">
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
            Hermes powers its agent ecosystem with two tokens on the Base
            network - <strong className="text-white">$H1</strong> (in-house) and{" "}
            <strong className="text-white">$HD</strong> (community) - enabling
            seamless token transactions across all Hermes services.
          </p>
        </div>

        <div className="grid gap-px bg-zinc-800/50 sm:grid-cols-3 rounded-2xl overflow-hidden border border-zinc-800/50">
          <div className="bg-zinc-950 p-8 text-center hover:bg-zinc-900/60 transition-colors">
            <div className="mb-4 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-sm font-semibold text-white">$H1 Token</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              The official in-house token powering core Hermes One services,
              transactions, and platform operations.
            </p>
          </div>

          <div className="bg-zinc-950 p-8 text-center hover:bg-zinc-900/60 transition-colors">
            <div className="mb-4 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-sm font-semibold text-white">
              Base Network
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Built on Base - Coinbase&apos;s L2 chain - for fast, low-cost, and
              secure on-chain transactions.
            </p>
          </div>

          <div className="bg-zinc-950 p-8 text-center hover:bg-zinc-900/60 transition-colors">
            <div className="mb-4 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-sm font-semibold text-white">$HD Token</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              The community-driven token supporting the broader Hermes
              ecosystem, governance, and community initiatives.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/40 p-6 text-center">
            <p className="text-xs text-zinc-500 mb-1">$H1 &middot; In-house</p>
            <code className="text-sm text-white/90 font-mono break-all select-all">
              {h1ContractAddress}
            </code>
            <div className="mt-4">
              <a
                href="https://bankr.bot/launches/0x4d7e9b6c8db1e12bcba7771729a88b232c86fba3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-zinc-100 transition-colors"
              >
                Buy $H1
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/40 p-6 text-center">
            <p className="text-xs text-zinc-500 mb-1">$HD &middot; Community</p>
            <code className="text-sm text-white/90 font-mono break-all select-all">
              {hdContractAddress}
            </code>
            <div className="mt-4">
              <a
                href="https://bankr.bot/launches/0xfda75f77a22b4f4b783bbbb21915ef64d149bba3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-700 transition-colors"
              >
                Buy $HD
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
