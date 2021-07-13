# dtf

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/eartharoid/dtf/lint-and-test?label=Test&logo=github&style=flat-square)

Simple and somewhat-localised timestamp formatting.

> Note that in some cases, especially if you want to use standard formats and in other locales, it may be better to use the built-in [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)
 or [`Intl`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) functions.

## Installation

Install with npm/pnpm/yarn:

`npm i @eartharoid/dtf`

## Usage

```js
const DTF = require('@eartharoid/dtf');
const dtf = new DTF();

// a new `Date` will be created
const timestamp = dtf.fill('DD/MM/YYYY HH:mm:ss');
console.log(timestamp); // => `13/07/2021 14:44:51`

// custom `Date` and use UTC time
const timestamp = dtf.fill('DD/MM/YYYY HH:mm:ss', new Date(), true);
console.log(timestamp); // => `13/07/2021 13:44:51`

```

See [DTF#fill](#dtffillformat-date-utc).

### Placeholders

|Placeholder|Description|Example|
|-|-|-|
|`YYYY`|The full year number|2021|
|`YY`|The short year number|21|
|`MMMM`|The full month name|July|
|`MMM`|The short month name|Jul|
|`MM`|The zero-padded month number|07|
|`M`|The non-padded month number|7|
|`DDDD`|The full day name|Tuesday|
|`DDD`|The short day name|Tue|
|`DD`|The zero-padded date number|13|
|`D_`|The date followed by its ordinal suffix|13th|
|`D`|The non-padded date number|13|
|`HH`|The zero-padded 24h hour number|14|
|`hh`|The zero-padded 12h hour number|02|
|`h`|The non-padded 12h hour number|2|
|`mm`|The zero-padded minute number|18|
|`m`|The non-padded minute number|18|
|`ss`|The zero-padded second number|09|
|`s`|The non-padded second number|9|
|`SSS`|The zero-padded millisecond number|638|
|`AMPM`|AM or PM|PM|

### API

#### `new DTF(locale?)`

> Create a new DTF instance.

- `locale?` - the [locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation) of this DTF instance (default is `'en'`)

#### `DTF#locale`

> The locale of this DTF instance.

#### `DTF#fill(format?, date?, utc?)`

> Fill a given or the default timestamp format using the current date or the `Date` provided.

- `format?` - the [placeholder](#placeholders) string (default is `'HH:mm:ss'`)
- `date?` - the `Date` object used to fill the placeholders (defaults to a new `Date` object)
- `utc?` - use UTC time? (default is `false`)

#### `DTF#AMPM(date?, utc?)`

> Returns `'AM'` or `'PM'` based on the time

- `date?` - the date to use (defaults to a new `Date` object)
- `utc?` - use UTC time? (default is `false`)

#### `DTF#suffix(number)`

> Appends `st`, `nd`, `rd`, or `th` to the given number for an English locale. I don't know what it does for other locales.

- `number` - the number to append the ordinal suffix to

#### `DTF#convert24To12(h)`

> Converts a 24h number to 12h.

- `h` - the 24h number

## Support

[![Discord support server](https://discordapp.com/api/guilds/451745464480432129/widget.png?style=banner4)](https://go.eartharoid.me/discord)

## Donate

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/eartharoid)

**or [sponsor me](https://github.com/sponsors/eartharoid).**

## License

[MIT license](https://github.com/eartharoid/dtf/blob/master/LICENSE).

© 2021 Isaac Saunders
