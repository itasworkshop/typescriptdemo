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
function mytest(){
    var a:boolean;
    a = true;
    
    return 'hello world '+ typeof a;
}

document.body.textContent = mytest();