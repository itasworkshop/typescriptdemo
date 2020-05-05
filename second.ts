interface Person{
    fname:string;
    lname:string;
}

function mytest(person:Person):string{
    return 'hello world '+person.fname+' '+person.lname;
}

let user = {fname:'rajesh',lname:'sharma'};


document.body.textContent = mytest(user);