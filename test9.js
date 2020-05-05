function mytest() {
    var a;
    a = true;
    return 'hello world ' + typeof a;
}
document.body.textContent = mytest();
