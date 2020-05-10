//readonly vs const?
interface Person{
    readonly id:number,
    readonly name:string
}

//let person:Person = {id:114,name:'rajesh'};
const person:Person = {id:114,name:'rajesh'};
/* person.id = 115;
person.name = 'suraj';
person = {id:114,name:'rajesh'}; */

function info(p:Person){
    console.log(p.id);
    return p.id+' '+ p.name;
}

document.body.textContent = info(person);