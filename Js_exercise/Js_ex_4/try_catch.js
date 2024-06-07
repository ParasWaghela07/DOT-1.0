function check(num){
    if(typeof num!=='number'){
        throw new Error('Faaltu cheeze mt bhejo')
    }
    return num*2;
}

try{
    let a='Paras';
    let result=check(a);
    console.log(result);
}
catch(e){
    console.error(e.message)
}