import DownloadButtons from "./DownloadButtons";
import {
  getLatestRelease,
  buildDownloadOptions,
  RELEASES_URL,
} from "../lib/release";

export default async function DownloadSection() {
  const { version, tag } = await getLatestRelease();
  const options = buildDownloadOptions(version, tag);

  return (
    <DownloadButtons
      options={options}
      releasesUrl={RELEASES_URL}
      version={`v${version}`}
    />
  );
}
