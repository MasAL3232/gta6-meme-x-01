// gta6-meme-x-01 entry program (Node 22, standard library only).
// Repository root: this file sits beside POST.json, README.md and meme.png.
//
// The entry itself is a post on X: a GTA 6 meme whose picture carries the
// make.fun ghost and whose text carries @makefunai and our play code.
// This program's whole job is to hand the post's address to the grader:
// it reads POST.json at the repository root and writes an identical copy
// into the output directory, where the gate picks it up.
//
// Local run, the same way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// On success it prints nothing and out/POST.json matches POST.json byte for byte.
// The program uses no network, no clock and no files outside the repository,
// so the grader's two runs always produce the same bytes.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`could not copy POST.json from ${source}: ${(err as Error).message}`);
  process.exit(1);
}
