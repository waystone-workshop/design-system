const { cpSync, mkdirSync } = require("node:fs");
const { join, isAbsolute } = require("node:path");
exports.copyAssets = function copyAssets(destination) {
  if (!isAbsolute(destination)) throw new Error("Design assets need an absolute destination.");
  mkdirSync(destination, { recursive: true });
  for (const folder of ["styles", "assets"])
    cpSync(join(__dirname, folder), join(destination, folder), { recursive: true });
};
