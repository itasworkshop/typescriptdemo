var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(fname, lname, age, tskill) {
        var _this = _super.call(this, fname, lname, age) || this;
        _this.tskill = tskill;
        return _this;
    }
    Teacher.prototype.info = function () {
        console.log("this is " + this.fullname + this.age + this.tskill);
        return this.fullname;
    };
    ;
    return Teacher;
}(Person));
var teacher1 = new Teacher("rajesh", "shah", 28, "Math");
teacher1.info();
document.body.textContent = teacher1.info();
