// Take 2 nos and print max no using ternary op

let a = 10;
let b = 15;

let max = a > b ? console.log(a + " is max no") : console.log(b + " is max no");


// // Take 3 nos and print max no using ternary op

let x = 90;
let y = 15;
let z = 20;


let max = (x > y && x > z) ? console.log(x + " is max no") :
    (y > z && y > x) ? console.log(y + " is max no") :
        (z > x && z > y) ? console.log(z + " is max no") : console.log("None");



// what will be the o/p
let a = 5;
console.log(a++ + ++a - --a + a-- + ++a);
console.log(a);




