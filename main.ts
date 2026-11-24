// This entry writes the answer for "One Word for the Boss" to the output directory.
// It creates the output directory if needed, then writes the single-word answer
// to entry.txt using the standard library only (no external dependencies).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "Alignment";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`entry.txt: wrote ${answer.length} characters`);
