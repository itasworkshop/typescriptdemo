function mytest(){
    //can not reassign const but it can refer to mutable object
    const c = { 'id':11,'name':'raj'};
    //c = { 'id':12,'name':'rajesh'};
    //can stop this behaviour using 'readonly' properties
    c.id = 22;
    c.name = 'tom';
    return 'hello world '+c.id+' '+c.name;
}

document.body.textContent = mytest();