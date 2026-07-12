//Primitive Types

let name: string= "John";
let age: number=30;
let p1:number=3.14;
let distance_to_moon: number=54657657657;
let isActive:boolean=true;
let nothing:null=null;

//Arrays
let numbers:number[]= [1,2,3];
let names:Array<string>=["John","Jane"];

//Any(avoid when possible)
let anything: any="hello";

//Unknown(safer than any)
let unknown:unknown="hello";



let message:string= "Hello, TypeScript";
let count:number=42;
//let isActive:boolean=true;

console.log("Message:", message);
console.log("Count:", count);
console.log("Is Active:", isActive);