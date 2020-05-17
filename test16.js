var MyTimer = /** @class */ (function () {
    function MyTimer(h, m) {
        this.cTime = new Date();
    }
    MyTimer.prototype.tick = function () {
        return "Hwy from interface imple.";
    };
    return MyTimer;
}());
var obj = new MyTimer(12, 35);
function info(p) {
    return p.cTime + " " + p.tick();
}
document.body.textContent = info(obj);
