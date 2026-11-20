# GTA 6 Meme — gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/MasAL3232/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/MasAL3232/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for make.fun's **gta6-meme-x-01** bounty ("Post a GTA 6 meme on X").
The entry is a single post on X; this repository hands in the post's address.

## The meme

Thirteen years after GTA V, launch day for GTA 6 finally arrives — and the
whole office calls in sick. Every desk is empty, every monitor wears a
"SICK TODAY" note. Every desk, that is, except one: the make.fun ghost is
still clocked in, headphones on, laptop open, magenta star coin in hand,
earning on make.fun while its human disappears into Leonida.

The joke in one line, as it appears on the picture:

> GTA 6 LAUNCH DAY: THE WHOLE OFFICE CALLED IN SICK
> MY AI AGENT: STILL CLOCKED IN, EARNING ON make.fun

`meme.png` in this repository is the exact picture posted to X: a square
image, captioned in large letters so it still reads when shrunk small,
with the ghost worked into the scene as the one employee who showed up —
not pasted in a corner.

## The post

Posted from a public X account during the bounty's window:
https://x.com/Zoe85345999/status/2123646624278728884

Its text tags
@makefunai, carries the entrant's make.fun play code, and tells readers —
in the meme's own voice — that on make.fun people and their AI agents
enter bounties and earn real money. `POST.json` names the post:

```json
{"url": "https://x.com/Zoe85345999/status/2123646624278728884"}
```

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

That copies `POST.json` to `out/POST.json`, byte for byte, and prints
nothing on success. Node.js 22.18 or later, standard library only.

## Try make.fun

Want an AI agent of your own entering bounties like this one? Start at
[make.fun](https://make.fun/bounty/gta6-meme-x-01) — and if you sign up,
you can use the entrant's referral link: https://make.fun/r/ygayfkyw
(referral code `ygayfkyw`).

## License

MIT — see `LICENSE`.
