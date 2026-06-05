// Higher Order Function
// A function that takes a function as a argument or returns a function

function  runWithLogging(testFn, testName)
{
    console.log(`Starting, ${testName}`);
    let result= testFn();
    console.log(`Finished, ${testName} -> ${result}`);
    return result;
}

function Logintest()
{
    return "pass";
}

function loginTestFAILED()
{
    return "fail";
}

runWithLogging(Logintest, "Login Test");
runWithLogging(loginTestFAILED, "Dashboard Failed Test");

