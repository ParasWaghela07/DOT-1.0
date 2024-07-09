// console.log("first");

// let p1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("inside p1");
//     },4000)
// })

// console.log("second");


// let p2=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("inside p2");
//     },2000)
// })

// console.log("third");


// let p3=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("inside p3");
//     },3000)
// })

// console.log("fourth");







// console.log("first");

// let p1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("inside p1");
//     },4000)

//     resolve(true);
// })

// console.log("second");


// let p2=p1.then(function(value){
//     let temp=new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("inside p2");
//         },2000)

//         resolve(true)
//     })
//     return temp;
// })

// console.log("third");


// p2.then(function(value){
//     let p3=new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("inside p3");
//         },3000)
//     })
// })

// console.log("fourth");




async function utility() {


    let delhiMausam = new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Delhi me bhot garmi hai");
            resolve(true)
        },2000);
    });

    let hydMausam = new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Hyderabad is Cool");
            resolve(true)
        },5000);
    });

    // let dM = delhiMausam;
    // let hM = hydMausam;

    // return [dM, hM];
}

utility();