# date-time-stamp
 A simple date and timestamp formatter with placeholders.
 
 Originally made for [leeks-lazy-logger](https://www.npmjs.com/package/leekslazylogger) [(github)](https://github.com/eartharoid/leeks-lazy-logger)


## Install
`npm i date-time-stamp` or `yarn date-time-stamp`

You can test it with `npm test`

## How to use
### Require the package:
```js
const timestamp = require("date-time-stamp");
```
### Format a string using placeholders
```js
var time = timestamp("HH:mm:ss DD/MM/YY") // -> 20:47:06 01/01/20
```
or

```js
var time = timestamp("HH:mm:ss on DD/MM/YYYY (DDD, D MMMM YYYY)") // -> 20:37:20 on 01/02/2020 (Sat, 1 February 2020)
```
```js
var time = timestamp("h ampm on DDDD") // -> 8 PM on Saturday
```
or

## Placeholders
```
YYYY: 2020
YY: 20

MMMM: February
MMM: Feb
MM: 02
M: 2

HH: 20 (24h)
hh: 08 (12h)
h: 8 (12h, single)

ampm = PM (8 PM), same as .ampm()
AMPM = PM (8 PM), same as .AMPM()

mm = 05
m = 5

ss = 20
s = 20

ii = 123 (ms)
```

## Other functions
- `.ampm()`: returns `AM` or `PM`
- `.AMPM()`: returns `AM` or `PM`


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

#### Credits
- Based on [time-stamp by Jon Schlinkert](https://github.com/jonschlinkert/time-stamp)