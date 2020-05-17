var circle = {};
circle.color = "black";
circle.radius = 5;
var square = {};
//square.color = "black";
square.side = 5;
function info(p) {
    return p.color + " " + p.side;
}
document.body.textContent = info(square);
