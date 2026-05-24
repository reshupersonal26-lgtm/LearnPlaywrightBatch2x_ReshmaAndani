/*Triangle Classifier:

Write a program that classifies a triangle based on its side lengths. 
Given three input values representing the lengths of the sides, 
determine if the triangle is equilateral (all sides are equal), 
isosceles (exactly two sides are equal), or scalene (no sides are equal). 
Use an if-else statement to classify the triangle.

*/


let ab = 6;
let bc = 10;
let ac = 7;

if (ab === bc && bc === ac && ab === ac) {
    console.log("Triangle is equilateral")
}
else if ((ab === bc && bc !== ac) || (ac === bc && ab !== bc) || (ab === ac && ac !== bc)) {
    console.log("Triangle isosceles");
}
else if (ab !== ac && ab !== bc && bc !== ac) {
    console.log("Trainagle is scalene");
}