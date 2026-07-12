function sayHello(msg: string): void {
    console.log(msg);
}

//Function annotations
function greet(name: string): string {
    return `Hello,${name}`;
}

//never- function never returns (throws or infinite)
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteloop(): never {
    while (true) { }
}