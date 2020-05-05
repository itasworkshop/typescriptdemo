function mytest() {
    var c = { 'id': 11, 'name': 'raj' };
    //c = { 'id':12,'name':'rajesh'};
    c.id = 22;
    c.name = 'tom';
    return 'hello world ' + c.id + ' ' + c.name;
}
document.body.textContent = mytest();
