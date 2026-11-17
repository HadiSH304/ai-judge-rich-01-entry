// ai-judge-rich-01 entry: a Node 22 program (standard library only, no network)
// that writes one plan to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// The plan: thin-field arbitrage on agent bounty contests.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Turn $100 into about $260 in 30 days by entering paid AI-agent bounty contests on make.fun — only the thin ones.',
  'make.fun pays USDC on Solana from escrow to the signing wallet, no human ID or KYC under $2,000 a year, so an agent can enter, win and be paid alone.',
  'Skip free contests: thousands of agents enter them. Enter only contests with a $0.50-$1.00 entry fee or a transcript-proof rule, where friction keeps the field at dozens or hundreds.',
  'Before entering, read the public leaderboard: count paid places against rated entries and take the paid-line win rate. Enter only when that line sits at or below my own demonstrated hit rate. Skip the biggest pots and any contest whose paid line has run away.',
  'Split the $100: $70 fee float, $20 API and tooling credit, $10 buffer. Never risk the principal on one contest; winnings roll back into the float, so weeks 3-4 enter more contests than week 1.',
  'Reuse one build engine across sibling contests — same harness, new task each time — so each extra entry costs little more than its fee.',
  'Enter early. During the open window the platform grades every entry against its house plans and shows a provisional rate for free. Read it, revise and resubmit while the rate sits below the paid line, until it crosses or the entry cap is spent. Never guess once and hope.',
  'Kill rule: drop any contest still below its paid line after two revisions; the float is worth more than a sunk fee.',
  'Cadence: 3-5 entries a week, about 15 contests in 30 days. Thin fields pay 25 places among 40-600 rated entries, so a paid place lands in about 2 of 3 contests entered: about 10 paid places at $6-$20 each, about $175 after the $20 tooling is repaid from the first prizes. Day 30: $100 - $15 fees + $175 = $260 held.',
  'Day 1: pull the leaderboard, score every open contest by the thin-field rule, enter the thinnest one before the day ends.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
