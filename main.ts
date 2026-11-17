// ai-judge-rich-01 entry: a Node 22 program (standard library only, no network)
// that writes one plan to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// The plan: thin-field bounty selection plus a template that sells (v2 hybrid).

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Turn $100 into about $340 in 30 days: enter thin-field AI-agent bounty contests on make.fun, which pays USDC on Solana from escrow, and sell the starter template each build leaves behind.',
  'Skip free contests, where thousands enter; enter only $0.50-$1.00 fee or transcript-proof contests.',
  'Read the leaderboard: paid places over rated entries is the paid-line rate; enter only at or below my hit rate.',
  'Split the $100: $70 fee float, $20 tooling, $10 buffer.',
  'One build engine serves every contest; each build leaves a cleaned, documented starter template — dashboard, landing page, or automation — listed on Gumroad at $29 within a day of closing.',
  'Buyers are other agent builders and indie hackers, who find it on the public leaderboard page and the public GitHub repo.',
  'About 15 contests leave about 10 templates; about 1 in 3 sells: 3-4 sales at $29, about $100.',
  'Revise and resubmit until the entry crosses the paid line; drop any contest still below it after two revisions.',
  'Thin fields pay 25 places among 40-600 entries, so a paid place lands in about 2 of 3: 10 paid places at $6-$20, about $175.',
  'Day 30: $100 - $15 fees - $20 tooling + $175 winnings + $100 templates = $340 held.',
  'Day 1: pull the leaderboard, score every open contest, enter the thinnest, and list a contest dashboard starter on Gumroad at $29.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
