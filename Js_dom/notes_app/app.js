let add=document.querySelector('.toaddbtn');
let del=document.querySelector('.cancel');
let flag=0;
let container=document.querySelector('.mainbody');
let hiddendiv=document.querySelector('.toaddsection');


add.addEventListener('click',function(){
    hiddendiv.style.opacity=1;
})

del.addEventListener('click',function(){
    if(flag===0){
    flag=1;
    del.style.color="red";
    }
    else{
        flag=0;
        del.style.color="black";
    }
    
})

// Array.from(document.getElementsByTagName("span")).forEach(function(curr) {
//     curr.addEventListener('click', function() {
//         if (typeof flag !== 'undefined' && flag === 1) {
//             curr.parentNode.removeChild(curr);
//         }
//     });
// });

container.addEventListener('click', function(event) {
    if (event.target.tagName === 'SPAN' && flag === 1) {
        event.target.parentNode.removeChild(event.target);
    }
});


let inputbox=document.querySelector('.ip');
let submit=document.querySelector('.subtn');






submit.addEventListener('click',function(){
    let dt=inputbox.value;
    let newElement=document.createElement('span');
    newElement.textContent=dt;

    newElement.classList.add("styling");
    container.appendChild(newElement);
    inputbox.value='';
    hiddendiv.style.opacity=0;
})