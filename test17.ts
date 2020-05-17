interface Timer{
    cTime: Date;
}

class MyTimer1 implements Timer{
    cTime = new Date();
    constructor(h:number,m:number){}
}

var obj:Timer = new MyTimer1(12,35);

function info(p){    
    return p.cTime;
}
document.body.textContent = info(obj);