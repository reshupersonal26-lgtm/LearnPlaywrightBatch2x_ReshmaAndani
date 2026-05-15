
//number == string
console.log(42 == "42");   //loose comparison
console.log(42 === "42");   //data type and converted value
console.log(42 == "45");    //value diff
console.log(5 === 5);
console.log(5 ==="5");


console.log(5 == 5);
console.log(5 == "5");

console.log(0 == "");   //? "" = converted to 0 - checked by the loose
console.log(0 === "");

console.log(true == 1);
console.log(false == 0);
console.log(true == "1");
console.log(true == 2);

console.log(5 != "5"); // false, 5= int, "5" string, both are not equal
console.log(5 !== "5");  //true (value, datatype)