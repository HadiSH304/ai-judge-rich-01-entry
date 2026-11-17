// ai-judge-rich-01 entry: a Node 22 program (standard library only, no network)
// that writes one plan to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// The plan: thin-field bounty selection plus a template that sells (v2 hybrid).

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Turn $100 into about $340 in 30 days: enter thin-field bounty contests on make.fun and sell the template each build leaves.',
  'Skip free contests; enter only $0.50-$1.00 fee or transcript-proof contests with paid places over rated entries below my hit rate.',
  'Split the $100: $70 fees, $20 tooling, $10 buffer; winnings roll back in.',
  'One build engine serves all contests; each build leaves a template listed on Gumroad at $29 a day after closing for agent builders and indie hackers, found on the leaderboard page and GitHub.',
  '3-5 a week, 15 contests, leave 10 templates; 1 in 3 sells, 3-4 sales at $29, about $100.',
  'Enter early, read the free provisional rate, revise until it crosses the line; drop it after two revisions.',
  'Thin fields pay 25 places among 40-600 entries, so 2 of 3 pay: 10 paid places at $6-$20, about $175.',
  'Day 30: $100-$15 fees-$20 tooling+$175 winnings+$100 templates=$340.',
  'Day 1: score every open contest, enter the thinnest, list a contest dashboard starter on Gumroad at $29.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
