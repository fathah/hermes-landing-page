"use client";

import { useEffect, useState } from "react";
import DownloadButtons from "./DownloadButtons";
import {
  getLatestRelease,
  buildDownloadOptions,
  RELEASES_URL,
} from "../lib/release";

type DownloadOption = {
  os: "mac" | "windows" | "linux";
  label: string;
  url: string;
  ext: string;
};

export default function DownloadSection() {
  const [options, setOptions] = useState<DownloadOption[]>([]);
  const [version, setVersion] = useState("");

  useEffect(() => {
    getLatestRelease().then(({ version, tag }) => {
      setOptions(buildDownloadOptions(version, tag));
      setVersion(`v${version}`);
    });
  }, []);

  if (!options.length) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="h-14 w-64 rounded-xl bg-white/10 animate-pulse" />
        <div className="h-4 w-48 rounded bg-white/5 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <DownloadButtons
        options={options}
        releasesUrl={RELEASES_URL}
        version={version}
      />
    </div>
  );
}
