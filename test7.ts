let a= 10;
var b= 20;
const c = 99; //scope like let but no reassignment.

function mytest(){
    const c = 88;
    if(true){
        //let c = 30;
        //var c = 30;
        const c = 77;
    }
    //c =55;
    return 'hello world '+ a +' '+b+' '+c;
}

document.body.textContent = mytest();