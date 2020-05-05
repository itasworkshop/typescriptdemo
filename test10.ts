function mytest(){
    var a:boolean = null;
    var b:Boolean = null;

    let list1: number[] = [1, 2, 3];
    let list2: Array<number> = [1, 2, 3];

    let mytup: [string, number] = ['raj',111];
    //let mytup: [string, number] = [111,'raj'];

    enum Color {Red, Green, Blue}
    //let c: Color = 'black'; wrong assignment
    enum CoffeeSize {Small=200, Medium=300, Large=450}
    let c : CoffeeSize = CoffeeSize.Small;
    
    //let c: any = 4;

    return 'hello world '+ c;  
}

document.body.textContent = mytest();