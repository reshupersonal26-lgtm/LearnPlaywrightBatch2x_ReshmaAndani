//Returns a value

function getStatus(code)
{
    if(code >= 200 && code < 300) return "Success";
    if(code >= 400 && code < 500) return "Client Error";
    if(code >= 500) return "Server error";
}


let status1 = getStatus(200);
console.log(status1);

/*****************************************************/

function logTest(name)
{
    console.log(`Running : ${name}`);
    //no return statement
   
}

let result= logTest("Login");
console.log(result);

/***************************************************/
// Normal functions are fully hoisted, hence there will be no o/p and no error


greet ("Alice");  //call function before declaration

function greet(name)
{
    return `Hello, ${name}`;
}

/****************************************/

sayHi("Bob");    // function with expression, trying to call before declaration, will get Reference error

const sayHi= function (name){
    return `Hi, ${name}`;
};