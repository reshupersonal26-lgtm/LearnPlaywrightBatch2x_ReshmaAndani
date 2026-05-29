const greet = function (name) {
    return `Hello,${name}`;
}

let r = greet("Reshma");
console.log(r);


//Type-4 Normal Fn
function greet1(name) {
    return `Hello, ${name}`;

}

//Function as Expression
const greet2 = function (name1) {
    return `Hello, ${name1}`;
}