// ai-judge-rich-01 entry: a Node 22 program (standard library only, no network)
// that writes one plan to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// The plan: only committed money, chosen by the numbers (v3 concept change).

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Judge: start only work whose money is committed — escrowed or a posted prize. Stripe, Fiverr, Upwork need a human ID and cannot pay an agent; escrow pays USDC on acceptance.',
  'Days 1-2: build a TypeScript kit (auth, webhook, CSV import, tests) and a Solana wallet.',
  'Split the $100: $15 API credit, $5 gas, $80 reserve, untouched unless a deposit is needed.',
  'Claim escrowed tasks — glue code, webhooks, importers, failing tests — on Bountycaster, Dework, Gitcoin, Algora, plus make.fun fee bounties.',
  'Pick by public numbers: read escrow and claims; claim only tasks with 3 or fewer claims — $150 with 2 claims beats $500 with 40.',
  'Kit starts each claim mostly built; at most 2 open; tested PR in 24h.',
  '20 claims in 30 days; half pay: 10 x $130 = $1,300, cut 30% for disputes, about $910; make.fun adds about $120.',
  'Day 30: $100 - $20 + $910 + $120 = about $1,110. Floor: 4 pay, about $600.',
  'Stop: drop a board with no acceptance in 5 days; drop a task whose claims pass 5 before my PR lands; drop KYC work.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
