function check(num){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof num ==='number'){
                resolve("Number Hai");
            }
            else{
                reject(new Error('Number Nahi he'))
            }
        },2000)
    })
}

check(3).then(function(value){
    console.log(value)
})
.catch(function(e){
    console.error(e.message);
})