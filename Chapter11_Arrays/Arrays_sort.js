let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

let number = [3, 1, 4];
number.sort();
console.log(number);

let num = [10, 1, 21, 2];
num.sort();
console.log(num);
//Natural Sorting, Lexical Sorting

num.sort((a, b) => a - b);    //Ascending sort
console.log(num);

num.sort((a, b) => b - a);    //Descending sort
console.log(num);