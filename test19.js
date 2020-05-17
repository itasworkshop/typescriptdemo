var MyCircle = /** @class */ (function () {
    function MyCircle(c, r) {
        this.cvolume = function () {
            return "this is vol.";
        };
        this.color = c;
        this.radius = r;
    }
    return MyCircle;
}());
var circle = new MyCircle("Blue", 10);
function info(p) {
    return p.color + " " + p.radius + " " + p.cvolume();
}
document.body.textContent = info(circle);
