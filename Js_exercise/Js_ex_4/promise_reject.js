function delay(mili){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
         reject(new Error('Error aaya he'));
        },2000)
    });
}

console.log("start");

delay(2000).catch(function(e){
    console.error(e.message);
})
console.log("end");