let test_percent = 100;

if (test_percent === 100) {
    console.log("Output: " + "Pass-- Green Build");
}
else if (test_percent >= 90 && test_percent <= 99) {
    console.log("Output" + "Stable-- Investigate failures");
}
else if (test_percent >= 70 && test_percent <= 89) {
    console.log("Output: " + "Unstable Build");
}
else if (test_percent < 70) {
    console.log("Output: " + "Broken Build-- Block deployment");
}