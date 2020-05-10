//let person:Person = {id:114,name:'rajesh'};
var person = { id: 114, name: 'rajesh' };
//person.id = 115;
person.name = 'suraj';
function info(p) {
    console.log(p.id);
    return p.id + ' ' + p.name;
}
document.body.textContent = info(person);
