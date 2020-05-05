/* a  = true;
a =10;
a = '10';
a =10.5;
a = [1,23,4]; //object
a = {11:'name'};
a = (1,2,3); // what is output?
a = function(){};
a = ()=>{};
console.log(typeof a);
console.log(a);
 */
function mytest() {
    var a;
    var b;
    var c;
    var d;
    var t = new Number(34);
    var j = 55;
    a = true;
    b = true;
    if (Number(10)) {
        console.log('its number');
    }
    else {
        console.log('no tis not.');
    }
    return 'hello world ' + t + ' ' + j;
    //return 'hello world '+ typeof a+' '+typeof b;
}
function mytest1() {
    var a = true;
    //var b:Boolean = true;
    var b = new Boolean(true);
    var c = true;
    //var d:Boolean = true;
    var d = new Boolean(true);
    if (a == c) {
        console.log('its boolean');
    }
    else {
        console.log('no tis not.');
    }
    if (b == d) {
        console.log('its Boolean');
    }
    else {
        console.log('no tis not.');
    }
    if (a == d) {
        console.log('its Boolean');
    }
    else {
        console.log('no tis not.');
    }
    return 'hello world ' + a + ' ' + b;
}
document.body.textContent = mytest1();
