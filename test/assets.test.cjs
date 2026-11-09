const test = require("node:test"), assert = require("node:assert/strict");
const { mkdtempSync, readFileSync, existsSync, rmSync } = require("node:fs");
const { tmpdir } = require("node:os"), { join } = require("node:path");
const { copyAssets } = require("..");
test("consumers can bundle the complete versioned asset contract", () => {
  const target = mkdtempSync(join(tmpdir(), "workshop-assets-"));
  try {
    copyAssets(target);
    const tokens = readFileSync(join(target,"styles/tokens.css"),"utf8");
    for (const name of ["bg","text","text-muted","accent","focus","font-sans","radius-control"])
      assert.match(tokens, new RegExp(`--ww-${name}:`));
    assert.ok(existsSync(join(target,"assets/mark.svg")));
    assert.match(readFileSync(join(target,"assets/icons.svg"),"utf8"), /id="sparkles"/);
  } finally { rmSync(target, {recursive:true,force:true}); }
});
