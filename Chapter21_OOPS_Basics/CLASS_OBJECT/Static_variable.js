class Student {
    static name= "Playwright2X";
    static mentor_name="PramodDutta";

    constructor(name_student,age,phoneNo) {
        this.name_student=name_student;
        this.age=age;
        this.phoneNo=phoneNo;
    }
}


const s1= new Student("ABC", 34, "576567657658");
const s2=new Student("PQR", 45, "23456978987");


console.log(s1.name_student);
console.log(s2.name_student);