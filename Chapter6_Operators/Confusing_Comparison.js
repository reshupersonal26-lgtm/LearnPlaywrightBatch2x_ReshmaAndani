// == (Loose Equality) vs === (Strict Equality) in JS

// ---- NUMBER vs STRING ----
console.log("==  vs ===".padEnd(45), "==     | ===");
console.log("-".repeat(50));

// Type coercion: string -> number
console.log(`1 == '1'       : ${1 == '1'}        | ${1 === '1'}`);
console.log(`0 == ''        : ${0 == ''}        | ${0 === ''}`);
console.log(`1 == true      : ${1 == true}        | ${1 === true}`);
console.log(`0 == false     : ${0 == false}       | ${0 === false}`);

// ---- null vs undefined ----
console.log(`\nnull == undefined : ${null == undefined}       | ${null === undefined}`);

// ---- NaN ----
console.log(`\nNaN == NaN       : ${NaN == NaN}       | ${NaN === NaN}`);

// ---- EMPTY vs FALSY ----
console.log(`\nfalse == ''      : ${false == ''}       | ${false === ''}`);
console.log(`false == []      : ${false == []}       | ${false === []}`);
console.log(`false == {}      : ${false == {}}       | ${false === {}}`);
console.log(`'' == []         : ${'' == []}        | ${'' === []}`);
console.log(`'' == {}         : ${'' == {}}        | ${'' === {}}`);
console.log(`0 == []          : ${0 == []}         | ${0 === []}`);
console.log(`0 == {}          : ${0 == {}}         | ${0 === {}}`);

// ---- ARRAYS & OBJECTS (reference comparison) ----
console.log(`\n[] == []         : ${[] == []}        | ${[] === []}`);
console.log(`{} == {}         : ${{} == {}}        | ${{} === {}}`);

const a = []; const b = a;
console.log(`same ref []==[]  : ${a == b}        | ${a === b}`);

// ---- SPECIAL: null / undefined with 0 / '' ----
console.log(`\nnull == 0        : ${null == 0}        | ${null === 0}`);
console.log(`null == ''       : ${null == ''}       | ${null === ''}`);
console.log(`undefined == 0   : ${undefined == 0}   | ${undefined === 0}`);
console.log(`undefined == ''  : ${undefined == ''}  | ${undefined === ''}`);

// ---- OBJECT vs PRIMITIVE (valueOf / toString coercion) ----
const obj = { valueOf: () => 42 };
console.log(`\nobj == 42        : ${obj == 42}        | ${obj === 42}`);

const obj2 = { toString: () => 'hello' };
console.log(`obj2 == 'hello'  : ${obj2 == 'hello'}  | ${obj2 === 'hello'}`);

// ---- SUMMARY ----
console.log(`\n----- KEY TAKEAWAYS -----`);
console.log(`Use === always, unless you explicitly want type coercion`);
console.log(`== allows coercion; === checks type + value`);
console.log(`null == undefined is true; null === undefined is false`);
console.log(`NaN is never equal to anything (even itself)`);
console.log(`Objects/Arrays are compared by reference, not value`);
