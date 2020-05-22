class Person {
    fullname: string;
    age: number;

    constructor(fname, lname, age) {
        this.fullname = fname + lname;
        this.age = age;
    }
    info() {
        console.log("this is " + this.fullname + this.age);
        return this.fullname;
    };
}
class Teacher extends Person {
    tskill:number;

    constructor(fname, lname, age, tskill) {
        super(fname, lname, age); //call to super constructor
        this.tskill = tskill;
    }

    info() {
        console.log("this is " + this.fullname + this.age + this.tskill);
        return this.fullname;
    };
}

var teacher1 = new Teacher("rajesh", "shah", 28, "Math");
teacher1.info();

document.body.textContent = teacher1.info();