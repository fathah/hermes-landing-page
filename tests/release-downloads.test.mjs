import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";

// Execute the real TypeScript module without adding a test runner dependency.
const source = readFileSync(new URL("../app/lib/release.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext },
});
const { buildDownloadOptions } = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
);

for (const version of ["0.7.7", "0.7.8"]) {
  test(`Linux ${version} defaults to the actual x64 AppImage asset`, () => {
    const options = buildDownloadOptions(version, `v${version}`);
    const linux = options.filter((option) => option.os === "linux");
    assert.deepEqual(linux.map((option) => option.label), ["Linux", "Debian", "Fedora"]);
    assert.equal(linux[0].ext, ".AppImage");
    assert.equal(
      linux[0].url,
      `https://github.com/fathah/hermes-desktop/releases/download/v${version}/hermes-desktop-${version}-x86_64.AppImage`,
    );
  });
}
