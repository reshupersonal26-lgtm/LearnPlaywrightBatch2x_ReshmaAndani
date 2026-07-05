class TestCase{

    constructor(name, status, priority){
        this.name= name;
        this.status= status;
        this.priority= priority;
    }


display(){
    console.log(this.name+ "->"+ this.status+ "->"+ this.priority);
}

}


let loginTC= new TestCase("Login Test", "Pass","P0");
let signup= new TestCase("Sign Up","Fail","P1");

loginTC.display();
signup.display();

//Functions vs Method
// Functions inside the class are called method, rest all functions outside class are functions
