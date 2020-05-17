interface Shape{
    color:string;
}

interface Circle extends Shape{
    radius:number;
}

interface Square{
    side:number;
}

let circle = {} as Circle;
circle.color = "black";
circle.radius = 5;

let square = {} as Square;
//square.color = "black";
square.side = 5;

function info(p){    
    return p.color+" "+p.side;
}
document.body.textContent = info(square);