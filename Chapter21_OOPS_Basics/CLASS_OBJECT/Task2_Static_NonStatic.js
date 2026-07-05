class Playwright2x {
    name;
    phoneNo;
    age;
    static batch = "Playwright2X";
    static mentor = "Pramod Dutta";

    constructor(name, phoneNo, age) {
        this.name = name;
        this.phoneNo = phoneNo;
        this.age = age;
    }

    static getBatchInfo() {
        return { batch: Playwright2x.batch, mentor: Playwright2x.mentor };
    }

    printstudent() {
        console.log("Name: " + this.name + " PhoneNo: " + this.phoneNo + " Age: " + this.age);
    }
}

console.log("Batch Info:", Playwright2x.getBatchInfo());

const students = [
    new Playwright2x("Reshma", "767668778687", "35"),
    new Playwright2x("Anita", "345436456546", "23"),
    new Playwright2x("Mahesh", "83453454356", "25"),
    new Playwright2x("Amit", "23435464565", "27"),
    new Playwright2x("Preeti", "856756756756", "32"),
    new Playwright2x("Komal", "4543564654656", "36"),
    new Playwright2x("Haresh", "4565465475757", "45"),
    new Playwright2x("Bhumika", "45436456546547", "31"),
    new Playwright2x("Roopali", "78768678768678", "34"),
    new Playwright2x("Karishma", "2343534534646", "30"),
];

students.forEach(s => s.printstudent());
