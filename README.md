# 2048 Game

## Where to play?
🌈 [Demo](link) 🌈

## How to play?

### Directions and Keys

You have 6 keyboard keys (Latin lower case letters) for 6 existing directions:

| Direction                 | Keyboard key |
| ------------------------- | :----------: |
| north (top)               |      w       |
| north-east (top-right)    |      e       |
| north-west (top-left)     |      q       |
| south (bottom)            |      s       |
| south-east (bottom-right) |      d       |
| south-west (bottom-left)  |      a       |

### Shifting rules

Shifting works according to common [2048](https://play2048.co/) rules [EN](<https://en.wikipedia.org/wiki/2048_(video_game)>)) taking into account
appropriate hexagonal direction.

| before shift → |   after |
| -------------: | ------: |
|            2 2 |       4 |
|          2 2 2 |     2 4 |
|          2 2 4 |     4 4 |
|          4 2 2 |     4 4 |
|        2 4 2 4 | 2 4 2 4 |
|        2 2 4 4 |     4 8 |

### Levels

2048 game can be run on three different levels:
* **small** -> radius 2
* **medium** -> radius 3
* **large** -> radius 4

Just add **radius** parameter to the URL to play different level!

See [Example](https://aszlacheta.github.io/2048-game?radius=3).
