//ECMAScript 2015 or ECMAScript 6

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

var person1 = new Person("raj", "singh", 25);
document.body.textContent = person1.info();