/**
 * @name dtstamp
 * @author eartharoid <contact@eartharoid.me>
 * @description A date / timestamp formatter (based on "time-stamp" by Jon Schlinkert)
 * @license MIT
 */

// regex for format placeholders
const regex = /\b(?=(YYYY|YY|MMMM|MMM|MM|M|DDDD|DDD|DD|D|HH|hh|h|mm|m|ss|s|ii|ampm|AMPM|n_YY|n_M|n_D|n_h|n_HH|n_m|n_s|n_ii]))\1\b/g;

// for nth() function
const nStr = {
    1: "st",
    2: "nd",
    3: "rd"
};

// remove leading 0 for singular numbers
const single = (x) => { return x[0] == 0 ? x.substring(1) - 12 : x; };

// convert 24h time to 12h time 
const h12 = (h) => { return h > 12 ? h - 12 : h; };

/**
 * @description Returns 'st', 'nd', 'rd' or 'th' with the number (eg. nth)
 * @param {number} n - an integer 
 */
const nth = (n) => { return n+=nStr[n.toString().slice(-1)]  || "th"; };

// function for each format code
const placeholders = {
    YYYY: (d) => {return d.toLocaleString("en-GB", {year: "numeric"})},
    YY: (d) => {return d.toLocaleString("en-GB", {year: "2-digit"})},
    MMMM: (d) => {return d.toLocaleString("en-GB", {month: "long"})},
    MMM: (d) => {return d.toLocaleString("en-GB", {month: "short"})},
    MM: (d) => {return d.toLocaleString("en-GB", {month: "2-digit"})},
    M: (d) => {return d.toLocaleString("en-GB", {month: "numeric"})},
    DDDD: (d) => {return d.toLocaleString("en-GB", {weekday: "long"})},
    DDD: (d) => {return d.toLocaleString("en-GB", {weekday: "short"})},
    DD: (d) => {return ('0' + d.getDate()).slice(-2)},
    D: (d) => {return single(d.getDate())},
    HH: (d) => {return d.getHours()},
    hh: (d) => {return ('0' + h12(d.getHours())).slice(-2)},
    h: (d) => {return single(h12(d.getHours()))},
    mm: (d) => {return ('0' + d.getMinutes()).slice(-2)},
    m: (d) => {return single(d.getMinutes())},
    ss: (d) => {return ('0' + d.getSeconds()).slice(-2)},
    s: (d) => {return single(d.getSeconds())},
    ii: (d) => {return d.getMilliseconds()},
    ampm: (d) => {return d.getHours() >= 12 ? 'PM' : 'AM'},
    AMPM: (d) => {return d.getHours() >= 12 ? 'PM' : 'AM'},
    n_YY: (d) => {return nth(parseInt(placeholders.YY(d)) + 1)},
    n_M: (d) => {return nth(parseInt(placeholders.M(d)))},
    n_D: (d) => {return nth(parseInt(placeholders.D(d)))},
    n_HH: (d) => {return nth(parseInt(placeholders.HH(d)))},
    n_h: (d) => {return nth(parseInt(placeholders.h(d)))},
    n_m: (d) => {return nth(parseInt(placeholders.m(d)))},
    n_s: (d) => {return nth(parseInt(placeholders.s(d)))}
};

/**
 * @description Format a date/time string using placeholders within a string
 * @param {string} f - string to format (default is 'HH:mm:ss')
 * @param {Date} d - specific time to use, otherwise uses current time
 */
module.exports = (f, d) => {
    if (typeof f !== 'string') { d = f; f = 'HH:mm:ss'; };
    return f.replace(regex, function (key) { return placeholders[key](!d ? new Date() : d); });
};

/**
 * @description Format date in a preset style
 * @param {string} f - 'full', 'long', 'medium', or 'short'
 * @param {Date} d - specific time to use, otherwise uses current time
 */
module.exports.date = (f, d) => { return (!d ? new Date() : d).toLocaleString("en-GB", {dateStyle: !f ? "short" : f}); };

/**
 * @description Format time in a preset style
 * @param {string} f - 'full', 'long', 'medium', or 'short'
 * @param {Date} d - specific time to use, otherwise uses current time
 */
module.exports.time = (f, d) => { return (!d ? new Date() : d).toLocaleString("en-GB", {timeStyle: !f ? "medium" : f}); };

/**
 * @description Returns 'AM' or 'PM' based on time, same as using AMPM placeholder
 * @param {Date} d - specific time to use, otherwise uses current time
 */
module.exports.ampm = (d) => { return (!d ? new Date() : d).getHours() >= 12 ? 'PM' : 'AM' };

/**
 * @description Returns 'AM' or 'PM' based on time, same as using AMPM placeholder
 * @param {Date} d - specific time to use, otherwise uses current time
 */
module.exports.AMPM = module.exports.ampm;

/**
 * @description Returns 'st', 'nd', 'rd' or 'th' with the number (eg. nth)
 * @param {number} n - an integer 
 */
module.exports.nth = nth;