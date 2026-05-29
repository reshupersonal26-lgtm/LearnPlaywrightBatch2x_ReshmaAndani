// Creating Arrays  //Array Literal preferred

let browsers = ["Chrome", "Firefox", "Safari"];

//Array constructor


let scores = new Array(3);
let scores2 = new Array(1, 2, 3);
console.log(scores);
console.log(scores2);


let numbers = new Array(100, 200, 300, 400);
console.log(numbers2);

let test = Array.of(10, 20, 330, 40, 50);
console.log(test);

//Aray.from
let chars = Array.from("hello");
//["h","e","l","l","o"]
console.log(chars);

let numbers2 = Array.from("12345677")
console.log(numbers);