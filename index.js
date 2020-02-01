/**
 * @name date-time-stamp
 * @author eartharoid <contact@eartharoid.me>
 * @description A date / timestamp formatter (based on "time-stamp" by Jon Schlinkert)
 * @license GNU-GPLv3
 */

// regex for format placeholders
var regex = /(?=(YYYY|YY|MMMM|MMM|MM|M|DDDD|DDD|DD|D|HH|hh|h|mm|m|ss|s|ii|ampm|AMPM))\1/g;

// remove leading 0 for singular numbers
const single = (x) => {
    if(x[0] == 0) {
        return x.substring(1);
    } else {
        return x;
    }
}

// convert 24h time to 12h time 
const h12 = (h) => {
    if (h > 12) return h - 12;
}

// function for each format code
var placeholders = {
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
    AMPM: (d) => {return d.getHours() >= 12 ? 'PM' : 'AM'}
};


/**
 * @description Format a date/time string using placeholders within a string
 * @param {string} f - string to format (default is 'HH:mm:ss')
 * @param {Date} d - specific time to use, otherwise uses current time
 */
module.exports = (f, d) => {
    if (typeof f !== 'string') {
        d = f;
        f = 'HH:mm:ss';
    }

    if (!d) d = new Date();
    return f.replace(regex, function (match, key) {
        // console.debug(key)
        return placeholders[key](d);
    });
};


/**
 * @description Format date in a preset style
 * @param {string} f - 'full', 'long', 'medium', or 'short'
 * @param {Date} d - specific time to use, otherwise uses current time
 */
module.exports.date = (f, d) => {
    if(!d) d = new Date();
    if(!f) f = "short";
    return d.toLocaleString("en-GB", {dateStyle: f});
};


/**
 * @description Format time in a preset style
 * @param {string} f - 'full', 'long', 'medium', or 'short'
 * @param {Date} d - specific time to use, otherwise uses current time
 */
module.exports.time = (f, d) => {
    if(!d) d = new Date();
    if(!f) f = "medium";
    return d.toLocaleString("en-GB", {timeStyle: f});
};

/**
 * @description Return 'AM' or 'PM' based on time, same as using AMPM placeholder
 * @param {Date} d - specific time to use, otherwise uses current time
 */
module.exports.ampm = (d) => {
    if(!d) d = new Date();
    return d.getHours() >= 12 ? 'PM' : 'AM'
};

/**
 * @description Return 'AM' or 'PM' based on time, same as using AMPM placeholder
 * @param {Date} d - specific time to use, otherwise uses current time
 */
module.exports.AMPM = module.exports.ampm;