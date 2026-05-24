"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";

type OS = "mac" | "windows" | "linux" | "unknown";

const RELEASES_URL = "https://github.com/fathah/hermes-desktop/releases/latest";

const DOWNLOAD_OPTIONS: {
  os: OS;
  label: string;
  ext: string;
  note?: string;
}[] = [
  { os: "mac", label: "macOS", ext: ".dmg" },
  { os: "windows", label: "Windows", ext: ".exe" },
  { os: "linux", label: "Linux (AppImage)", ext: ".AppImage" },
  { os: "linux", label: "Linux (Debian)", ext: ".deb" },
  { os: "linux", label: "Linux (Fedora)", ext: ".rpm" },
];

function detectOS(): OS {
  if (typeof window === "undefined") return "unknown";
  const ua = window.navigator.userAgent.toLowerCase();
  if (ua.includes("mac")) return "mac";
  if (ua.includes("win")) return "windows";
  if (ua.includes("linux")) return "linux";
  return "unknown";
}

const OS_LOGOS: Record<Exclude<OS, "unknown">, { src: string; alt: string }> = {
  mac: { src: "/logos/apple.svg", alt: "Apple" },
  windows: { src: "/logos/windows.svg", alt: "Windows" },
  linux: { src: "/logos/linux.svg", alt: "Linux" },
};

const LINUX_DISTRO_LOGOS: Record<string, { src: string; alt: string }> = {
  "Linux (Debian)": { src: "/logos/debian.svg", alt: "Debian" },
  "Linux (Fedora)": { src: "/logos/fedora.svg", alt: "Fedora" },
  "Linux (AppImage)": { src: "/logos/linux.svg", alt: "Linux" },
};

function OSIcon({
  os,
  label,
  className,
}: {
  os: OS;
  label?: string;
  className?: string;
}) {
  if (os === "unknown") return null;
  const logo = (label && LINUX_DISTRO_LOGOS[label]) ?? OS_LOGOS[os];
  if (!logo) return null;
  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={20}
      height={20}
      className={`w-5 h-5 ${className ?? ""}`}
    />
  );
}

const noopSubscribe = () => () => {};

function getOSSnapshot(): OS {
  return detectOS();
}

function getOSServerSnapshot(): OS {
  return "unknown";
}

export default function DownloadSection() {
  const os = useSyncExternalStore(
    noopSubscribe,
    getOSSnapshot,
    getOSServerSnapshot,
  );
  const mounted = os !== "unknown" || typeof window !== "undefined";

  const primaryOptions = DOWNLOAD_OPTIONS.filter((d) => d.os === os);
  const secondaryOptions = DOWNLOAD_OPTIONS.filter((d) => d.os !== os);

  if (!mounted || os === "unknown") {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="h-14 w-64 rounded-xl bg-white/10 animate-pulse" />
        <div className="h-4 w-48 rounded bg-white/5 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* Primary CTA — user's OS */}
      {primaryOptions.length > 0 && (
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-wrap justify-center gap-3">
            {primaryOptions.map((opt) => (
              <a
                key={opt.label}
                href={RELEASES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-amber-400 px-7 py-3.5 text-sm font-semibold text-zinc-900 shadow-lg shadow-amber-400/20 transition-all hover:bg-amber-300 hover:shadow-amber-300/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <OSIcon
                  os={opt.os}
                  label={opt.label}
                  className="brightness-0"
                />
                Download for {opt.label}
                <span className="rounded-md bg-zinc-900/15 px-1.5 py-0.5 text-xs font-mono">
                  {opt.ext}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* All platforms */}
      <div className="flex flex-col items-center gap-3">
        {primaryOptions.length > 0 && (
          <p className="text-xs text-zinc-500">Also available for</p>
        )}
        <div className="flex flex-wrap justify-center gap-2">
          {(primaryOptions.length === 0
            ? DOWNLOAD_OPTIONS
            : secondaryOptions
          ).map((opt) => (
            <a
              key={opt.label}
              href={RELEASES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/60 px-4 py-2 text-sm text-zinc-300 transition-all hover:border-zinc-500 hover:bg-zinc-800 hover:text-white"
            >
              <OSIcon
                os={opt.os}
                label={opt.label}
                className="brightness-0 invert"
              />
              {opt.label}
              <span className="text-zinc-500 font-mono text-xs">{opt.ext}</span>
            </a>
          ))}
        </div>
      </div>

      <p className="text-xs text-zinc-600 text-center max-w-sm">
        Free & open source · MIT license ·{" "}
        <a
          href="https://github.com/fathah/hermes-desktop"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 underline underline-offset-2 hover:text-zinc-300"
        >
          View on GitHub
        </a>
      </p>
    </div>
  );
}
