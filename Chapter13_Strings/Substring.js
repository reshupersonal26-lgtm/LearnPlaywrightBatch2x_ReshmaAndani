let str= "Login_Test_Pass_001";
//slice (start,end)- negative indexes are also supported
console.log(str.slice(0,5));
console.log(str.slice(11));

let testNumber= str.slice(-3);
console.log(testNumber);

console.log(str.includes("Pass"));


//substring (start,end) -> will not allow negative index

console.log(str.substring(6,10));
str.at(0);