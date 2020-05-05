function mytest() {
    var a = 4;
    var b = 4;
    //any vs object? any does not complain for imaginary method, but object complains.
    //a.randommethod();
    //b.somerandommethod();
    return 'hello world ' + a.anymethod() + ' ' + b.anymethod();
}
document.body.textContent = mytest();
