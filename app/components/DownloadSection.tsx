import DownloadButtons from "./DownloadButtons";
import {
  getLatestRelease,
  buildDownloadOptions,
  RELEASES_URL,
} from "../lib/release";

// Server component: the latest release is resolved at build time and baked into
// the static export, so download links are ready on first paint with no
// client-side GitHub request or loading skeleton.
export default async function DownloadSection() {
  const { version, tag } = await getLatestRelease();
  const options = buildDownloadOptions(version, tag);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <DownloadButtons
        options={options}
        releasesUrl={RELEASES_URL}
        version={`v${version}`}
      />
    </div>
  );
}
