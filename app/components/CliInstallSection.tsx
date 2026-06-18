"use client";

import { useSyncExternalStore, useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

type OS = "mac" | "windows" | "linux" | "unknown";

function detectOS(): OS {
  if (typeof window === "undefined") return "unknown";
  const ua = window.navigator.userAgent.toLowerCase();
  if (ua.includes("mac")) return "mac";
  if (ua.includes("win")) return "windows";
  if (ua.includes("linux")) return "linux";
  return "unknown";
}

const noopSubscribe = () => () => {};
function getOSSnapshot(): OS {
  return detectOS();
}
function getOSServerSnapshot(): OS {
  return "unknown";
}

const COMMANDS = {
  mac: {
    label: "macOS / Linux / WSL2",
    shell: "bash",
    cmd: "curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash",
    after: "source ~/.bashrc && hermes",
  },
  linux: {
    label: "Linux / macOS / WSL2",
    shell: "bash",
    cmd: "curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash",
    after: "source ~/.bashrc && hermes",
  },
  windows: {
    label: "Windows (PowerShell)",
    shell: "powershell",
    cmd: "iex (irm https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.ps1)",
    after: "hermes",
  },
  unknown: {
    label: "macOS / Linux / WSL2",
    shell: "bash",
    cmd: "curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash",
    after: "source ~/.bashrc && hermes",
  },
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      onClick={copy}
      className="shrink-0 rounded-md p-1.5 text-zinc-500 hover:text-zinc-300 transition-colors"
      aria-label="Copy command"
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-400" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  );
}

export default function CliInstallSection() {
  const os = useSyncExternalStore(
    noopSubscribe,
    getOSSnapshot,
    getOSServerSnapshot,
  );
  const info = COMMANDS[os];

  const altOS =
    os === "windows"
      ? { key: "mac" as const, label: "macOS / Linux" }
      : { key: "windows" as const, label: "Windows (PowerShell)" };
  const altInfo = COMMANDS[altOS.key];

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-2xl mx-auto">
      {/* Primary command for detected OS */}
      <div className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800 bg-zinc-900">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <Terminal className="w-3.5 h-3.5" />
            <span>{info.label}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-zinc-600 font-mono">
              {info.shell}
            </span>
            <CopyButton text={info.cmd} />
          </div>
        </div>
        <div className="px-4 py-3.5 overflow-x-auto">
          <code className="text-sm text-white font-mono whitespace-nowrap">
            {info.cmd}
          </code>
        </div>
      </div>

      {/* After install */}
      <div className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800 bg-zinc-900">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <Terminal className="w-3.5 h-3.5" />
            <span>After install</span>
          </div>
          <CopyButton text={info.after} />
        </div>
        <div className="px-4 py-3.5 overflow-x-auto">
          <code className="text-sm text-green-400 font-mono whitespace-nowrap">
            {info.after}
          </code>
        </div>
      </div>

      {/* Alt OS toggle */}
      <p className="text-xs text-zinc-600">
        On {altOS.label}?{" "}
        <a
          href={`https://hermes-agent.nousresearch.com/docs/getting-started/${altOS.key === "windows" ? "windows" : "linux"}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 underline underline-offset-2 hover:text-white transition-colors"
        >
          {altInfo.shell === "powershell"
            ? `iex (irm …install.ps1)`
            : `curl -fsSL …install.sh | bash`}
        </a>
      </p>

      {os === "windows" && (
        <p className="text-xs text-zinc-600 text-center max-w-sm">
          For the most battle-tested Windows path, run the Linux one-liner
          inside <span className="text-zinc-400">WSL2</span> instead. Native
          Windows is early beta.
        </p>
      )}
    </div>
  );
}
