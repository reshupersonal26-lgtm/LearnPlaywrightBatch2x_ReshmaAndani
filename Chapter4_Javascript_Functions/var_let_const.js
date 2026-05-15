var v= 10;
let a=5;
const x=3.5;


var browser="chrome";  //
var browser="firefox";  // redeclaration is allowed
browser="edge";         // reassignment is allowed


// for, functions

var testcases = ["login", "logout","signup"];

for(var i=0; i<=testcases;i++)
{
    console.log("Running test:", testcases[i]);
}

console.log("Loop counter leaked outside",i);

