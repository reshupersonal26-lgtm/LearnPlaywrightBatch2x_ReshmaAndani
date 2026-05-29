let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);


// splice
arr.splice(2, 1);
console.log(arr);

//Replace element in array
arr.splice(2, 0, 99); //adding element
console.log(arr);

arr.splice(2, 1, 99); //acting as replace
console.log(arr);

arr.splice(1, 2, 10, 20);
console.log(arr);