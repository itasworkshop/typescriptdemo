//multilevel inheritance
class Person {
    fullname: string;
    age: number;

    constructor(fname, lname, age) {
        this.fullname = fname + lname;
        this.age = age;
    }
    info() {
        console.log("from person " + this.fullname + this.age);
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
        console.log("from teacher " + this.fullname + this.age + this.tskill);
        return this.fullname;
    };
}

class Professor extends Teacher {
    phdsub:string;

    constructor(fname, lname, age, tskill,phdsub) {
        super(fname, lname, age,tskill); //call to super constructor
        this.phdsub = phdsub;
    }

    info() {
        super.info(); //parents'(Teachers) info()
        console.log("from professor " + this.fullname + this.age + this.tskill+this.phdsub);
        return this.fullname;
    };
}

//var professor1 = new Professor("rajesh", "shah", 28, "Math","quantum mechanics");
var professor1:Teacher = new Professor("rajesh", "shah", 28, "Math","quantum mechanics");
var professor2:Person = new Professor("rajesh", "shah", 28, "Math","quantum mechanics");

document.body.textContent = professor2.info();