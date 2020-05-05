function mytest(person) {
    return 'hello world ' + person.fname + ' ' + person.lname;
}
var user = { fname: 'rajesh', lname: 'sharma' };
document.body.textContent = mytest(user);
