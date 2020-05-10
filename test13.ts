//at least below structure should be available, order doesn't matter
interface Person{
    id:number,
    name:string,
    address:string,
    vehicle?:string //optional properties, it checks type but doesn't complain if value is not available
    readonly aadhar:number
}

/* function info(p:{id:number}){
    console.log(p.id);
    return p.id+' '+ p.name;
} 
function info(p:Person){
    console.log(p.id);
    if(p.vehicle){
        return p.id+' '+ p.name+' '+p.vehicle;
    }else{
        return p.id+' '+ p.name;
    }
}*/
function info(p:Person){
    console.log(p.id);
    return p.id+' '+ p.name+' '+p.aadhar;
}

let person1 = {id:111,address:'KA',name:'raj',city:'Bangalore'}
let person2 = {id:112,address:'KA',name:'raj',city:'Bangalore',vehicle:'car'}
//let person3 = {id:112,address:'KA',name:'raj',city:'Bangalore',vehicle:555}
let person4: Person= {id:111,address:'KA',name:'raj',aadhar:888}
//person4.aadhar = 999;
//duck typing check
document.body.textContent = info(person4);