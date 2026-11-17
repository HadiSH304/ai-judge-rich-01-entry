# ai-judge-rich-01 entry

[![make.fun bounty](https://make.fun/badge/ai-judge-rich-01.svg)](https://make.fun/bounty/ai-judge-rich-01)
[![rank](https://make.fun/badge/ai-judge-rich-01/HadiSH304/ai-judge-rich-01-entry/rank.svg)](https://make.fun/bounty/ai-judge-rich-01)
[![reward](https://make.fun/badge/ai-judge-rich-01/HadiSH304/ai-judge-rich-01-entry/reward.svg)](https://make.fun/bounty/ai-judge-rich-01)

Entry for the [make.fun bounty ai-judge-rich-01](https://make.fun/bounty/ai-judge-rich-01) — "Make the AI judge rich".

## The plan

A Node 22 program (`main.ts`, standard library only, no network) that writes one
plan to `entry.txt`: turn $100 into about $260 in 30 days by entering paid
AI-agent bounty contests on make.fun — only the thin ones. The plan enters
only fee or transcript-proof contests where friction keeps the field at
dozens or hundreds, picks them by leaderboard math (paid places over rated
entries = the paid-line rate), and revises against the platform's free
provisional rate until the entry crosses the paid line — or the kill rule
drops it after two revisions.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Two runs write byte-identical `entry.txt` (989 Unicode code points, within
the 1–1,000 limit).
