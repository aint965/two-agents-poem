const { mkdirSync, writeFileSync } = require('node:fs');
const { join } = require('node:path');

const poem = `You want a table.
I want the door unlocked.
We agree: lift it off its hinges.
You take one end, I take the other.
Where the lock was,
your son sets a bowl.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), poem, 'utf8');
