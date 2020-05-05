var Student = /** @class */ (function () {
    function Student(fname, lname) {
        this.fname = fname;
        this.lname = lname;
        this.fullname = fname + lname;
    }
    return Student;
}());
function mytest(person) {
    return 'hello world ' + person.fname + ' ' + person.lname;
}
//let user = {fname:'rajesh',lname:'sharma'};
var user = new Student('rajesh', 'sharma');
document.body.textContent = mytest(user);
