// let- Block scoped

let a=10;

let retryCount=0;
retryCount= retryCount+1;
retryCount= retryCount+1;
console.log("Retry attempt:", retryCount);

//let retryCount=5;   Syntax error: Identifier 'retryCount' has already been declared

// Syntax error : redeclaration not allowed

let testStatus="pending";

if(testStatus== "pending")
{
    let executionTime=1200;
    console.log("Inside block:", executionTime);
}

//console.log(executionTime);   ReferenceError: executionTime is not defined

//let=loyal
//var= variable/triator