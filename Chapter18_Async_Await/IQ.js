
Q1

async function  sayHello() {
    return "Hello, QA !";    
}

sayHello().then(function(msg){
    console.log(msg);
});

Q2

async function getStatus() {
    let status= await Promise.resolve(200);
    console.log("Status code:", status);
    
}

getStatus();

Q3

async function testFlow() {
    let step1= await Promise.resolve("Opened browser");
    console.log(step1);

    let step2= await Promise.resolve("Clicked Login");
    console.log(step2);

    let step3= await Promise.resolve("Verified dashboard");
    console.log(step3);
    
}

testFlow();