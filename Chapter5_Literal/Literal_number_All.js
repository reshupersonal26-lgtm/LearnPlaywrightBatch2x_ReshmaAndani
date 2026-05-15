// All number types & literals in JavaScript

// 1. Integer (decimal)
let int = 42;
console.log(int);

// 2. Floating point
let float = 3.14;
console.log(float);

// 3. Scientific (exponential) notation
let sci = 5e3;   // 5 * 10^3 = 5000
let sci2 = 1.5e-2; // 0.015
console.log(sci, sci2);

// 4. Binary (0b or 0B prefix)
let bin = 0b1010; // 10 in decimal
console.log(bin);                                                   

// 5. Octal (0o or 0O prefix)
let oct = 0o17; // 15 in decimal
console.log(oct);

// 6. Hexadecimal (0x or 0X prefix)
let hex = 0xFF; // 255 in decimal
console.log(hex);

// 7. BigInt (n suffix) - for integers beyond 2^53
let big = 123456789012345678901234567890n;
console.log(big);

// 8. Special numeric values
let inf = Infinity;
let negInf = -Infinity;
let nan = NaN;

console.log(inf);    // Infinity
console.log(negInf); // -Infinity
console.log(nan);    // NaN

// 9. Number with underscores (ES2021, for readability)
let readable = 1_000_000; // 1000000
console.log(readable);

// 10. Number object wrapper
let numObj = new Number(42); 
console.log(numObj);
