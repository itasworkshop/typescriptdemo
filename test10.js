function mytest() {
    var a = null;
    var b = null;
    var list1 = [1, 2, 3];
    var list2 = [1, 2, 3];
    var mytup = ['raj', 111];
    //let mytup: [string, number] = [111,'raj'];
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    //let c: Color = 'black'; wrong assignment
    var CoffeeSize;
    (function (CoffeeSize) {
        CoffeeSize[CoffeeSize["Small"] = 200] = "Small";
        CoffeeSize[CoffeeSize["Medium"] = 300] = "Medium";
        CoffeeSize[CoffeeSize["Large"] = 450] = "Large";
    })(CoffeeSize || (CoffeeSize = {}));
    var c = CoffeeSize.Small;
    return 'hello world ' + c;
}
document.body.textContent = mytest();
