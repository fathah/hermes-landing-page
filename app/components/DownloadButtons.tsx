"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";

type OS = "mac" | "windows" | "linux" | "unknown";
type MacArch = "arm64" | "x64" | null;

function detectOS(): OS {
  if (typeof window === "undefined") return "unknown";
  const ua = window.navigator.userAgent.toLowerCase();
  if (ua.includes("mac")) return "mac";
  if (ua.includes("win")) return "windows";
  if (ua.includes("linux")) return "linux";
  return "unknown";
}

function detectMacArch(): MacArch {
  if (typeof window === "undefined") return null;
  const ua = window.navigator.userAgent.toLowerCase();
  if (!ua.includes("mac")) return null;
  try {
    // WebGL renderer contains "Apple M1" / "Apple M2" etc. on Apple Silicon
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") ?? canvas.getContext("experimental-webgl");
    if (gl) {
      const ctx = gl as WebGLRenderingContext;
      const ext = ctx.getExtension("WEBGL_debug_renderer_info");
      if (ext) {
        const renderer = ctx.getParameter(
          ext.UNMASKED_RENDERER_WEBGL,
        ) as string;
        if (/apple m\d/i.test(renderer)) return "arm64";
      }
    }
  } catch {
    // ignore — fall through to x64
  }
  return "x64";
}

const noopSubscribe = () => () => {};
function getOSSnapshot(): OS {
  return detectOS();
}
function getOSServerSnapshot(): OS {
  return "unknown";
}
function getMacArchSnapshot(): MacArch {
  return detectMacArch();
}
function getMacArchServerSnapshot(): MacArch {
  return null;
}

const OS_LOGOS: Record<Exclude<OS, "unknown">, { src: string; alt: string }> = {
  mac: { src: "/logos/apple.svg", alt: "Apple" },
  windows: { src: "/logos/windows.svg", alt: "Windows" },
  linux: { src: "/logos/linux.svg", alt: "Linux" },
};

const LABEL_LOGOS: Record<string, { src: string; alt: string }> = {
  "Apple Silicon": { src: "/logos/apple.svg", alt: "Apple" },
  "Intel Mac": { src: "/logos/apple.svg", alt: "Apple" },
  Windows: { src: "/logos/windows.svg", alt: "Windows" },
  "Windows Portable": { src: "/logos/windows.svg", alt: "Windows" },
  Linux: { src: "/logos/linux.svg", alt: "Linux" },
  Debian: { src: "/logos/debian.svg", alt: "Debian" },
  Fedora: { src: "/logos/fedora.svg", alt: "Fedora" },
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
  const logo = (label && LABEL_LOGOS[label]) ?? OS_LOGOS[os];
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

type DownloadOption = {
  os: OS;
  label: string;
  url: string;
  ext: string;
};

export default function DownloadButtons({
  options,
  releasesUrl,
  version,
}: {
  options: DownloadOption[];
  releasesUrl: string;
  version: string;
}) {
  const os = useSyncExternalStore(
    noopSubscribe,
    getOSSnapshot,
    getOSServerSnapshot,
  );
  const macArch = useSyncExternalStore(
    noopSubscribe,
    getMacArchSnapshot,
    getMacArchServerSnapshot,
  );

  if (os === "unknown") {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="h-14 w-64 rounded-xl bg-white/10 animate-pulse" />
        <div className="h-4 w-48 rounded bg-white/5 animate-pulse" />
      </div>
    );
  }

  const allForOS = options.filter((d) => d.os === os);

  const primaryOptions =
    os === "mac" && macArch
      ? allForOS.filter((d) =>
          macArch === "arm64"
            ? d.label === "Apple Silicon"
            : d.label === "Intel Mac",
        )
      : allForOS;

  const secondaryOptions = options.filter((d) => !primaryOptions.includes(d));

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* Primary CTA */}
      {primaryOptions.length > 0 && (
        <div className="flex flex-wrap justify-center gap-3">
          {primaryOptions.map((opt) => (
            <a
              key={opt.label}
              href={opt.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-zinc-900 shadow-lg shadow-white/20 transition-all hover:bg-zinc-100 hover:shadow-white/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <OSIcon os={opt.os} label={opt.label} className="brightness-0" />
              Download for {opt.label}
              <span className="rounded-md bg-zinc-900/15 px-1.5 py-0.5 text-xs font-mono">
                {opt.ext}
              </span>
            </a>
          ))}
        </div>
      )}

      {/* Other platforms */}
      <div className="flex flex-col items-center gap-3">
        {primaryOptions.length > 0 && (
          <p className="text-xs text-zinc-500">Also available for</p>
        )}
        <div className="flex flex-wrap justify-center gap-2">
          {(primaryOptions.length === 0 ? options : secondaryOptions).map(
            (opt) => (
              <a
                key={opt.label}
                href={opt.url}
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
                <span className="text-zinc-500 font-mono text-xs">
                  {opt.ext}
                </span>
              </a>
            ),
          )}
        </div>
      </div>

      <p className="text-xs text-zinc-600 text-center max-w-sm">
        {version} · Free & open source · MIT license ·{" "}
        <a
          href={releasesUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 underline underline-offset-2 hover:text-zinc-300"
        >
          All releases
        </a>
      </p>
    </div>
  );
}
