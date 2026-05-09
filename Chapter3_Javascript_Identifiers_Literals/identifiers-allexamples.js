// ===== Valid Identifiers =====

let name = "John";
let firstName = "John";
let _count = 10;
let $value = 100;
let totalAmount123 = 500;
let café = "coffee";
let π = 3.14;
let myVar = "hello";
let _ = "underscore";
let $ = "dollar";
let data2 = "test";

console.log("--- Valid Identifiers ---");
console.log(name, firstName, _count, $value, totalAmount123);
console.log(café, π, myVar, _, $, data2);


// ===== Invalid Identifiers (commented out — will cause SyntaxError if uncommented) =====

// let 123abc = "starts with digit";      // SyntaxError
// let my-var = "hyphen";                 // SyntaxError
// let first name = "space";              // SyntaxError
// let class = "reserved keyword";        // SyntaxError
// let @data = "at symbol";              // SyntaxError
// let var.name = "dot";                  // SyntaxError
// let true = "reserved keyword";         // SyntaxError
// let return = "reserved keyword";       // SyntaxError
// let hello! = "exclamation";           // SyntaxError

console.log("\n✓ Valid identifiers ran successfully.");
console.log("✗ Invalid identifiers are commented out to avoid errors.");
