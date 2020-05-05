function mytest(person:string,b):string{
    return 'hello world '+person+b;
}

let user1:number  = 100;
let user2:string = 'rajesh';
let user3 = [10,20,30];


document.body.textContent = mytest(user2,user3);