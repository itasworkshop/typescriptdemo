var a = 10;
var b = 20;
//const c = 99;
function mytest() {
    //const c = 88;
    if (true) {
        var c = 30;
        //var c = 30;
        //const c = 77;
    }
    return 'hello world ' + a + ' ' + b + ' ' + c;
}
document.body.textContent = mytest();
