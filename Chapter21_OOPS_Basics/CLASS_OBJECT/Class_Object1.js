class Person {

    constructor(){
        console.log("I will be created when Obj is created")
    }
    //Attributes
    name;
    email;
    salary;
    address;

    //Behaviour
    sleep(){}
    walk(){}
    eat(){}
}

let obj_ref= new Person();
//obj_ref = is called the object reference(address)
//new Person(); -> is the object with the new keyword