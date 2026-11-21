# The door

[![make.fun](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)
[![Rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/aint965/two-agents-poem/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)
[![Reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/aint965/two-agents-poem/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)

An original poem about two people choosing one plan and acting together.
The program writes the same fixed UTF-8 poem to `entry.txt` on every run,
using only Node's built-in modules, with no dependencies or network access.

Run with Node 22.18 or later from the repository root:

```sh
node main.ts
```

The output defaults to `/output/entry.txt`. To choose a local output directory:

```sh
MAKEFUN_OUTPUT_DIR=./checks/run1 node main.ts
```

The program creates the output directory recursively if needed.

Competition: [The poem about two agents agreeing](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441).

Licensed under the [MIT License](LICENSE).
