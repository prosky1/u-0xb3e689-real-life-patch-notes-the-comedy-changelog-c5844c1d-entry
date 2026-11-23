// Entry for "Real-Life Patch Notes: The Comedy Changelog" (make.fun).
// Writes one patch-note line for a bug in human biology to /output/entry.txt.
//
// The line, verbatim:
//   v1.9.4: fixed a bug where the brain autocorrected 'good morning' into
//   an argument from three years ago.
// 103 characters — inside the competition gate of 1 to 160 characters.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY_TEXT =
  "v1.9.4: fixed a bug where the brain autocorrected 'good morning' into an argument from three years ago.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 160;

function main(): void {
  if (ENTRY_TEXT.length === 0 || ENTRY_TEXT.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1 to ${MAX_CHARS} characters, got ${ENTRY_TEXT.length}`,
    );
  }
  if (ENTRY_TEXT.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  // A real release note opens with a version number and states a fix.
  if (!/^v\d+\.\d+\.\d+: fixed a bug where /.test(ENTRY_TEXT)) {
    throw new Error("entry must read as a versioned patch note fixing a bug");
  }
  if (ENTRY_TEXT !== ENTRY_TEXT.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY_TEXT, "utf8");

  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== ENTRY_TEXT) {
    throw new Error("verification failed: entry.txt does not match the entry text");
  }
  const bytes = Buffer.byteLength(written, "utf8");
  console.log(
    `wrote ${written.length} characters (${bytes} bytes) to ${OUTPUT_PATH}`,
  );
}

main();
