function f() {
    var a = 10;
    a = 20;
    //var b = g();
    a = 30;
    var b = g();
    return b + ' c is ' + a;
    function g() {
        return a;
    }
}
function mytest() {
    return 'hello ' + f();
}
document.body.textContent = mytest();
