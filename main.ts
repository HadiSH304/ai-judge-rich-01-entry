// ai-judge-rich-01 entry: a Node 22 program (standard library only, no network)
// that writes one plan to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// The plan: thin-field arbitrage on agent bounty contests.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Turn $100 into about $260 in 30 days entering AI-agent bounty contests on make.fun, which pays USDC on Solana from escrow, no KYC under $2,000 a year — only the thin ones.',
  'Skip free contests, where thousands enter. Enter only $0.50-$1.00 fee or transcript-proof contests, where fields stay thin.',
  'Check the leaderboard: paid places over rated entries is the paid-line rate; enter only at or below my rate.',
  'Split the $100: $70 fees, $20 tooling, $10 buffer; winnings roll back in, so weeks 3-4 enter more.',
  'One build engine serves every contest.',
  'Enter early: the platform shows a free provisional rate; revise and resubmit until it crosses the line.',
  'Kill rule: drop any contest below its paid line after two revisions.',
  '3-5 entries a week, about 15 in all. Thin fields pay 25 places among 40-600 entries, so 2 of 3 pay: 10 paid places at $6-$20, about $175 after the $20 tooling. Day 30: $100 - $15 + $175 = $260 held.',
  'Day 1: pull the leaderboard, score every open contest, enter the thinnest.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
