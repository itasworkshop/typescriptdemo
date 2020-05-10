//let myarray1:number[] = [1,2,3,4,5];
let myarray1:Array<number> = [1,2,3,4,5];
myarray1 = [3,3,3];

//let myarray2:ReadonlyArray<number> = [1,2,3,4,5];
const myarray2:ReadonlyArray<number> = [1,2,3,4,5];
//myarray2 = [3,3,3];
myarray2[2]= 55; //because of readonly

function info(p){    
    return p;
}
document.body.textContent = info(myarray2);