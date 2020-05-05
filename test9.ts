/* 
a  = true;
a =10;
a = '10';
a =10.5;
a = [1,23,4]; //object
a = {11:'name'};
a = (1,2,3); // what is output?
a = function(){};
a = ()=>{};
a = [1,23,4,'name'] //object
//null vs undefined
var x;
var y = null;
console.log(typeof x);
console.log(x);
console.log(typeof y);
console.log(y);
 */
function mytest(){
    var a:boolean;
    var b:Boolean;
    var c:string;
    var d:String;
    var t = new Number(34);
    var j:number = 55;
    a = true;
    b = true;    

    if(Number(10)){
        console.log('its number');
    }else{
        console.log('no tis not.');
    }
    return 'hello world '+ t +' '+ j;
    //return 'hello world '+ typeof a+' '+typeof b;
}

function mytest1(){
    var a:boolean = true;
    //var b:Boolean = true;
    var b:Boolean = new Boolean(true);
    var c:boolean = true;
    //var d:Boolean = true;
    var d:Boolean = new Boolean(true);

    if(a == c){
        console.log('its boolean');
    }else    {
        console.log('no tis not.');
    }

    if(b == d){
        console.log('its Boolean');
    }else    {
        console.log('no tis not.');
    }

    if(a == d){
        console.log('its Boolean');
    }else    {
        console.log('no tis not.');
    }

    return 'hello world '+ a +' '+ b;    
}

document.body.textContent = mytest1();