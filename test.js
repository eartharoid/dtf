const dtf = require("./index.js");

console.log(" ");

console.log(`YYYY = ${dtf("YYYY")}`);
console.log(`YY = ${dtf("YY")}`);

console.log(" ");

console.log(`MMMM = ${dtf("MMMM")}`);
console.log(`MMM = ${dtf("MMM")}`);
console.log(`MM = ${dtf("MM")}`);
console.log(`M = ${dtf("M")}`);

console.log(" ");

console.log(`DDDD = ${dtf("DDDD")}`);
console.log(`DDD = ${dtf("DDD")}`);
console.log(`DD = ${dtf("DD")}`);
console.log(`D = ${dtf("D")}`);

console.log(" ");

console.log(`HH = ${dtf("HH")}`);
console.log(`hh = ${dtf("hh")}`);
console.log(`h = ${dtf("h")}`);
console.log(`ampm = ${dtf("ampm")} (${dtf("h ampm")}), same as .ampm()`);
console.log(`AMPM = ${dtf("AMPM")} (${dtf("h AMPM")}), same as .AMPM()`);

console.log(" ");

console.log(`mm = ${dtf("mm")}`);
console.log(`m = ${dtf("m")}`);

console.log(" ");

console.log(`ss = ${dtf("ss")}`);
console.log(`s = ${dtf("s")}`);

console.log(" ");
console.log(`ii = ${dtf("ii")} (ms)`);

console.log(" ");

console.log(`.date(): ${dtf.date()}`);
console.log(`.date("full"): ${dtf.date("full")}`);

console.log(" ");


console.log(`.time(): ${dtf.time()}`);
console.log(`.time("short"): ${dtf.time("short")}`);

console.log(" ");

console.log(`.ampm(): ${dtf.ampm()} (${dtf("h")} ${dtf.ampm()})`)
console.log(`.AMPM(): ${dtf.AMPM()} (${dtf("h")} ${dtf.AMPM()})`)

console.log(" ");

console.log(`HH:mm:ss on DD/MM/YYYY (DDD, D MMMM YYYY) = ${dtf("HH:mm:ss on DD/MM/YYYY (DDD, D MMMM YYYY)")}`);

console.log(" ");