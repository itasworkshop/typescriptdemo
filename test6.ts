for(var i =0; i< 5;i++){
    setTimeout(function(i){
      console.log('value is '+ i);
      }(i), 
      100*i         
      );
}

//let is creating new scope per iteration
for(let i =0; i< 5;i++){
    setTimeout(function(){
      console.log('value is '+ i);
      }, 
      100*i         
      );
}