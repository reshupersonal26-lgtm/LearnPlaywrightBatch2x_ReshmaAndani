// Problem: Compare actual result with expected result and print test verdict.

let expected = "Login Successful";
let actual = "Login Successful";

if (expected === actual) {
    console.log("Output:" + "✅" + "Test Passed");
}
else {
    console.log(`Output:❌ Test Failed-- Expected: ${expected}, Got: ${actual}`);
}


// Problem: Compare actual result with expected result and print test verdict.

let expected = "Login Successful";
let actual = "Invalid Credentials";

if (expected === actual) {
    console.log("Output:" + "✅" + "Test Passed");
}
else {
    console.log(`Output:❌ Test Failed-- Expected: ${expected}, Got: ${actual}`);
}