const REPO = "fathah/hermes-desktop";

export const RELEASES_URL = `https://github.com/${REPO}/releases`;

export async function getLatestRelease(): Promise<{ version: string; tag: string }> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${REPO}/releases/latest`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) throw new Error("fetch failed");
    const data = await res.json();
    const tag: string = data.tag_name ?? "v0.5.0";
    const version = tag.replace(/^v/, "");
    return { version, tag };
  } catch {
    return { version: "0.5.0", tag: "v0.5.0" };
  }
}

export function buildDownloadOptions(version: string, tag: string) {
  const base = `https://github.com/${REPO}/releases/download/${tag}`;
  const v = version;

  return [
    { os: "mac" as const, label: "macOS (Apple Silicon)", url: `${base}/hermes-desktop-${v}-arm64.dmg`, ext: ".dmg" },
    { os: "mac" as const, label: "macOS (Intel)", url: `${base}/hermes-desktop-${v}-x64.dmg`, ext: ".dmg" },
    { os: "windows" as const, label: "Windows (Setup)", url: `${base}/hermes-desktop-${v}-setup.exe`, ext: ".exe" },
    { os: "windows" as const, label: "Windows (Portable)", url: `${base}/hermes-desktop-${v}-portable.exe`, ext: ".exe" },
    { os: "linux" as const, label: "Linux (AppImage)", url: `${base}/hermes-desktop-${v}.AppImage`, ext: ".AppImage" },
    { os: "linux" as const, label: "Linux (Debian)", url: `${base}/hermes-desktop_${v}_amd64.deb`, ext: ".deb" },
    { os: "linux" as const, label: "Linux (Fedora)", url: `${base}/hermes-desktop-${v}.rpm`, ext: ".rpm" },
  ];
}
