class Student{
    readonly fullname: string;

    constructor(public fname:string,public lname:string){
        this.fullname = fname+lname;
    }
}

interface Person{
    fname:string;
    lname:string;
}

function mytest(person:Person):string{
    return 'hello world '+person.fname+' '+person.lname;
}

//let user = {fname:'rajesh',lname:'sharma'};
let user = new Student('rajesh','sharma');


document.body.textContent = mytest(user);