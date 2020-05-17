class MyClass {
    //private colorinfo1: any;
    //colorinfo2: any;
    colorinfo2(): string {
        return "hello from class."
    }
}

interface MyInterface extends MyClass {
    colorinfo2(): string;
    //makes no sense
    /* colorinfo2(): string {
        return "hello from interface."
    } */
}

class ImplClass implements MyInterface {
    colorinfo2(): string {
        return "hello from imple class."
    }
}

let obj = new ImplClass();

function info(p) {
    return p.colorinfo2();
}
document.body.textContent = info(obj);