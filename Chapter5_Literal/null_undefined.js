// null vs undefined in JavaScript

// undefined: variable declared but not assigned a value
let a;
console.log(a); // undefined

// null: explicitly assigned "nothing" value
let b = null;
console.log(b); // null

// Key differences:
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (this is a known JS bug)

console.log(null == undefined);  // true  (loose equality)
console.log(null === undefined); // false (strict equality - different types)

// Real-world usage:
// undefined -> JS uses it by default for uninitialized variables
// null      -> Developer uses it to intentionally clear a value
