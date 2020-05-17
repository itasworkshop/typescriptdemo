interface Timer{
    cTime: Date;

    tick():string;
}

class MyTimer implements Timer{
    cTime = new Date();
    constructor(h:number,m:number){}

    tick(){
        return "Hwy from interface imple."
    }
}

var obj:Timer = new MyTimer(12,35);

function info(p){    
    return p.cTime+" "+p.tick();
}
document.body.textContent = info(obj);