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
//multilevel inheritance
var Person = /** @class */ (function () {
    function Person(fname, lname, age) {
        this.fullname = fname + lname;
        this.age = age;
    }
    Person.prototype.info = function () {
        console.log("from person " + this.fullname + this.age);
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
        console.log("from teacher " + this.fullname + this.age + this.tskill);
        return this.fullname;
    };
    ;
    return Teacher;
}(Person));
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(fname, lname, age, tskill, phdsub) {
        var _this = _super.call(this, fname, lname, age, tskill) || this;
        _this.phdsub = phdsub;
        return _this;
    }
    Professor.prototype.info = function () {
        _super.prototype.info.call(this); //parents'(Teachers) info()
        console.log("from professor " + this.fullname + this.age + this.tskill + this.phdsub);
        return this.fullname;
    };
    ;
    return Professor;
}(Teacher));
//var professor1 = new Professor("rajesh", "shah", 28, "Math","quantum mechanics");
var professor1 = new Professor("rajesh", "shah", 28, "Math", "quantum mechanics");
var professor2 = new Professor("rajesh", "shah", 28, "Math", "quantum mechanics");
document.body.textContent = professor2.info();
