# dtstamp
 A simple date and timestamp formatter with placeholders.
 
 Originally made for [leeks-lazy-logger](https://www.npmjs.com/package/leekslazylogger) [(github)](https://github.com/eartharoid/leeks-lazy-logger)


## Install
`npm i dtstamp` or `yarn install dtstamp`.

You can test it with `npm test` or `yarn test`.

## How to use
**Look at `test.js` for examples**
### Require the package:
```js
const timestamp = require("dtstamp");
```
### Format a string using placeholders
```js
var time = timestamp("HH:mm:ss DD/MM/YY") // -> 20:47:06 01/01/20
```


```js
var time = timestamp("HH:mm:ss on DD/MM/YYYY (DDD, n_D MMMM YYYY)") // -> 20:37:20 on 01/02/2020 (Sat, 1st February 2020)
```


```js
var time = timestamp("h ampm on DDDD") // -> 8 PM on Saturday
```


## Placeholders
```
YYYY: 2020
YY: 20

MMMM: February
MMM: Feb
MM: 02
M: 2

DDDD = Saturday
DDD = Sat
DD = 01
D = 1

HH: 20 (24h)
hh: 08 (12h)
h: 8 (12h)

ampm = PM (8 PM), same as .ampm()
AMPM = PM (8 PM), same as .AMPM()

mm = 05
m = 5

ss = 20
s = 20

ii = 123 (ms)

n_YY = 21st (year of the century)
n_M = 2nd (month of the year)
n_D = 2nd (day of the month)
n_HH = 14th (hour of the day)
n_h = 2nd (hour of the morning/afternoon)
n_m = 40th (minute of the hour)
n_s = 9th (second of the minute)
```

## Other functions
- `.ampm()`: returns `AM` or `PM`
- `.AMPM()`: returns `AM` or `PM`

- `.nth(n)` return `(n)st`, `(n)nd`, `(n)rd` or `(n)th`, `n` being a number


- `.time(presetLength)`: Formats time using a preset style
  - `full`, `long`, `medium`, or `short` (default is `medium`)
- `.date(presetLength)`: Formats date using a preset style
  - `full`, `long`, `medium`, or `short` (default is `short`)

## Using a specific date / time
You can pass your own `Date` object when using any of the functions, so the time or date is formatted according to the time your specifiy, not the current time.

```js
timestamp("DDDD, D MMM YYYY", myDateObject);

timestamp.date("full", myDateObject);

timestamp.time("short", myDateObject);

timestamp.ampm(myDateObject);
```

## Support
[![Discord](https://discordapp.com/api/guilds/451745464480432129/widget.png?style=banner4)](https://discord.gg/pXc9vyC)

#### Credits
- Based on [time-stamp by Jon Schlinkert](https://github.com/jonschlinkert/time-stamp)
- [Wessel](https://github.com/passthewessel) helped wth RegEx
