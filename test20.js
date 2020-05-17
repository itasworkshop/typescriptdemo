var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    //private colorinfo1: any;
    //colorinfo2: any;
    MyClass.prototype.colorinfo2 = function () {
        return "hello from class.";
    };
    return MyClass;
}());
var ImplClass = /** @class */ (function () {
    function ImplClass() {
    }
    ImplClass.prototype.colorinfo2 = function () {
        return "hello from imple class.";
    };
    return ImplClass;
}());
var obj = new ImplClass();
function info(p) {
    return p.colorinfo2();
}
document.body.textContent = info(obj);
