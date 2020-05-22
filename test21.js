var Person = /** @class */ (function () {
    function Person(fname, lname, age) {
        this.fullname = fname + lname;
        this.age = age;
    }
    Person.prototype.info = function () {
        console.log("this is " + this.fullname + this.age);
        return this.fullname;
    };
    ;
    return Person;
}());
var person1 = new Person("raj", "singh", 25);
document.body.textContent = person1.info();
