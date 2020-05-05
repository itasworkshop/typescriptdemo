function mytest(){
    let a:any = 'rajesh';
    //let a:any = 4;
    let b:string = 'ramesh';

    b.length;

    return 'hello world '+ (a as string).length + ' '+a.length+' '+ b.length;
}

document.body.textContent = mytest();