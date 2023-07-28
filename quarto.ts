const seq = require("readline-sync");

let t = 1;
let a = 0;

let m = 0

while(m < 10){
    m++
    let s = t + a;
    console.log(s);

    a = t
    t = s
}
