import fs from "node:fs";
import archiver from "archiver";
const manifest = JSON.parse(fs.readFileSync(new URL("../dist/manifest.json", import.meta.url)));

const output = fs.createWriteStream(`package/${manifest.name.replaceAll(" ", "-")}-${manifest.version}.zip`);
const archive = archiver("zip", { zlib: { level: 9 } });

archive.pipe(output);
archive.directory("dist/", false);
archive.finalize();
