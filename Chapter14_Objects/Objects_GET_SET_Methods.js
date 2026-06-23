const user= {
    firstName: "Reshma",
    lastName: "Rohira",
    get fullName(){
        return this.firstName + this.lastName;
    },
    set fullName(value){
        [this.firstName,this.lastName]= value.split(" ");
    }
}

//Objects- JS()
//Class and Object
//this. it means current value in the Object

console.log(user.fullName);
user.fullName= "Amit Sharma";
console.log(user.fullName);