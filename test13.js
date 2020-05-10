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
function info(p) {
    console.log(p.id);
    return p.id + ' ' + p.name + ' ' + p.aadhar;
}
var person1 = { id: 111, address: 'KA', name: 'raj', city: 'Bangalore' };
var person2 = { id: 112, address: 'KA', name: 'raj', city: 'Bangalore', vehicle: 'car' };
//let person3 = {id:112,address:'KA',name:'raj',city:'Bangalore',vehicle:555}
var person4 = { id: 111, address: 'KA', name: 'raj', aadhar: 888 };
//person4.aadhar = 999;
//duck typing check
document.body.textContent = info(person4);
