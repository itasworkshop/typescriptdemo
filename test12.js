function mytest() {
    var a = 'rajesh';
    //let a:any = 4;
    var b = 'ramesh';
    b.length;
    return 'hello world ' + a.length + ' ' + a.length + ' ' + b.length;
}
document.body.textContent = mytest();
