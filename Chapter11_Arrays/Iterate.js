let tests = ["login", "checkout", "search"];

/*for (let i = 0; i < tests.length; i++) {

    console.log(tests[i]);
}*/

/*for (test of tests) {
    console.log(test);
}*/

tests.forEach((i, index) => {

    console.log(i, index);
});

let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, "->", students[student]);
}