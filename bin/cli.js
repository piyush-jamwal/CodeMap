#!/usr/bin/env node
'use strict';

const path = require('path');
const { parseFile } = require('../src/index.js');

function printUsageAndExit() {
  console.error('Usage: js-dependency-tracer <entry-file>');
  process.exit(1);
}

const entryFile = process.argv[2];
if (!entryFile) {
  printUsageAndExit();
}

try {
  const tree = parseFile(path.resolve(entryFile));
  process.stdout.write(JSON.stringify(tree, null, 2) + '\n');
} catch (err) {
  console.error(err?.stack || String(err));
  process.exit(1);
}