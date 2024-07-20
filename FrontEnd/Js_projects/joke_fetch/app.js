const genbtn=document.querySelector('#btn')
const j1=document.querySelector('#joke-1');
const j2=document.querySelector('#joke-2');
const load=document.querySelector('#load');

// setJoke();

function setJoke(){
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(function(data){
        return data.json();
    })
    .then(function(data){
        console.log(typeof data);
        console.log(data);
        fill_data(data);
    })
    .catch(function (e){
        console.error(e.message);
    })
}

function fill_data(data){
    j1.innerText=data.setup;
    j2.innerText=data.punchline;
    genbtn.style.pointerEvents="all";
    load.style.opacity=0;
    j1.classList.add("f");
    j2.classList.add("f");
}

genbtn.addEventListener('click',function(){
    load.style.opacity=1;
    genbtn.style.pointerEvents="none";
    setJoke();
})