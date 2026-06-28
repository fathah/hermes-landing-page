import NavbarClient from "./NavbarClient";
import { getStarCount } from "../lib/release";

// Server component: the GitHub star count is fetched at build time and baked
// into the static export, so the client never hits the GitHub API on load.
export default async function Navbar() {
  const stars = await getStarCount();
  return <NavbarClient stars={stars} />;
}
