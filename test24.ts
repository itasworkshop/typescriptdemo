class Person {
    private fullname: string; //only available in class
    public age: number; //everything if not specified is public by default
    protected contact: number; //in class and subclass

    constructor(fname, lname, age, contact) {
        this.fullname = fname + lname;
        this.age = age;
        this.contact = contact;
    }
    info():string {
        console.log("from person " + this.fullname + this.age + this.contact);
        return this.fullname;
    };
}

class Teacher extends Person {
    fullname:string;

    constructor(fname, lname, age, contact, tskill) {
        super(fname, lname, age, contact); //call to super constructor
    }
    info():string {
        console.log("from person " + this.age + this.contact);
        return this.fullname;
    };

}

var person1 = new Person("raj", "singh", 25, 123456);
var teacher1 = new Teacher("raj", "singh", 25, 123456,"Math");

function test(obj) {
    var test_name: string;
    //test_name = person1.fullname;
    var test_contact = person1.contact;
    var test_contact = teacher1.contact;
    return obj.fullname;
}

document.body.textContent = test(person1);