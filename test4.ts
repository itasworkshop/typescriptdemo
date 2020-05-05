let a= 10;
var b= 20;

function mytest(){
    if(true){
        //let c = 30;
        var c = 30;
    }
    return 'hello world '+ a +' '+b+' '+c;
}


function mytest1(){    
    var d = 40;
    return function inner(){
        var g = d+1;
        return 'hello world '+ a +' '+b+' '+g;
    }
    
}

var t = mytest1();

document.body.textContent = t();