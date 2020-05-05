function mytest(){
    let a:any = 4;
    let b:Object = 4;

    //any vs object? any does not complain for imaginary method, but object complains.
    //a.randommethod();
    //b.somerandommethod();

    return 'hello world '+ a + ' '+ b;  
}

document.body.textContent = mytest();