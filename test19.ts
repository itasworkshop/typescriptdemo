interface Shape {
    color: string;
}

interface Volume {
    cvolume(): string;
}

interface Circle extends Shape, Volume {
    radius: number;
}

class MyCircle implements Circle {
    color: string;
    radius: number;

    constructor(c: string, r: number) {
        this.color = c;
        this.radius = r;
    }
    cvolume = () => {
        return "this is vol."
    };
}
let circle = new MyCircle("Blue",10);

function info(p) {
    return p.color + " " + p.radius + " " + p.cvolume();
}
document.body.textContent = info(circle);