//Obejcts
//Key and value

let student1= { name: "Amit", age: 65};
let student2= { name: "Pramod"};
let student3= { name: "Amit", age: 87, phone: 54545454542};


//Keys will not be in double quotes
//Keys in double quotes are JSON

let JSON_student4= { "name": "Pramod", "age": 67, "phone": 8787878783};

let a= {status: "pass"};
console.log(a.status);

let a1={status: "pass"};
console.log(a.status);

let b=a;
b.status= "fail";
console.log(a.status);
console.log(b.status);

if(b === a)
{
    console.log("true");
}
else
{
    console.log("false");
}
