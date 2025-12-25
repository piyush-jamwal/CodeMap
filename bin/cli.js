#!/usr/bin/env node

const { parseFile } = require("../src/index");

function showUsage() {
  console.log("Usage: js-dependency-tracer <entry-file>");
  console.log("Example: js-dependency-tracer src/index.ts");
}

const entry = process.argv[2];

if (!entry) {
  showUsage();
  process.exit(1);
}

console.log(JSON.stringify(parseFile(entry), null, 2));
