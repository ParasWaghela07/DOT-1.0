const root = document.documentElement.style;

const modeBtn=document.querySelector('.mode-btn');
const inputBox=document.querySelector('#inputBox');
const Submitbtn=document.querySelector('#searchBtn');

const userPic=document.querySelector('#proimg');
const userName=document.querySelector('#name');
const joinedDate=document.querySelector('#joined-date');
const userUrl=document.querySelector('#url');

const userBio=document.querySelector('#desc');
const repoCount=document.querySelector('#repoCount');
const followerCount=document.querySelector('#follower-count');
const followingCount=document.querySelector('#following-count');

const userLoc=document.querySelector('#location-data');
const userWeb=document.querySelector('#web-data');
const xData=document.querySelector('#twitter-data');
const compData=document.querySelector('#company-data');
const errorDiv=document.querySelector('#error-div');
const url="https://api.github.com/users/";

const mnts = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let mode="dark";
let mode_img=document.querySelector('#mode-img');
let mode_status=document.querySelector('#mode-status');

function showError(){
    console.log('leo')
    errorDiv.style.opacity=1;
    setTimeout(function(){
        errorDiv.style.opacity=0;
    },5000)
}
async function fetchData(newUrl){
    try{
    let response=await fetch(newUrl);
    let data=await response.json();

    console.log(data);
    if(data.message==='Not Found') showError();
    else fill_data(data);
    }
    catch(e){
        console.log("Bhaak")
    }
}
function setDate(str){
    console.log(str)
    const year=str.slice(0,4);
    const month=mnts[parseInt(str.slice(5,7))-1];
    const date=str.slice(8,10);

    joinedDate.innerText='Joined '+date+' '+month+' '+year;
}
function fill_data(data){
    userPic.src=`${data.avatar_url}`;
    if (data.name) {
        userName.innerText = data.name;
    } else {
        userName.innerText = data.login;
    }

    
    setDate(data.created_at);

    if (data.login) {
        userUrl.innerText = data.login;
    } else {
        userUrl.innerText = 'Not available';
    }
    
    if (data.html_url) {
        userUrl.href = data.html_url;
    } else {
        userUrl.href = '#'; // or any fallback URL
    }
    
    if (data.bio) {
        userBio.innerText = data.bio;
    } else {
        userBio.innerText = 'This profile has no bio';
    }
    
    if (data.public_repos !== undefined && data.public_repos !== null) {
        repoCount.innerText = data.public_repos;
    } else {
        repoCount.innerText = 'Not available';
    }
    
    if (data.followers !== undefined && data.followers !== null) {
        followerCount.innerText = data.followers;
    } else {
        followerCount.innerText = 'Not available';
    }
    
    if (data.following !== undefined && data.following !== null) {
        followingCount.innerText = data.following;
    } else {
        followingCount.innerText = 'Not available';
    }
    

    if (!data.location) {
        userLoc.innerText = 'Not available';
    } else {
        userLoc.innerText = data.location;
    }
    
     

    if (!data.blog) {
        userWeb.innerText = 'Not available';
    } else {
        userWeb.innerText = data.blog;
        userWeb.href=data.blog;
    }
    
    if (data.twitter_username) {
        xData.innerText = data.twitter_username;
        xData.href=`https://twitter.com/${data.twitter_username}`;
    } else {
        xData.innerText = 'Not available';
    }
    
    if (data.company) {
        compData.innerText = data.company;
    } else {
        compData.innerText = 'Not available';
    }
ai    

}


Submitbtn.addEventListener('click',function(){
    if(inputBox.value)
    fetchData(url+inputBox.value);
})

fetchData(url+'ParasWaghela07');


modeBtn.addEventListener('click',function(){
    if(mode=="dark"){
        mode="light";
        mode_img.src="./assets/images/moon-icon.svg";
        mode_status.innerText="DARK";
        lightModeProperties();

    }
    else{
        mode="dark";
        mode_img.src="./assets/images/sun-icon.svg";
        mode_status.innerText="LIGHT";
        darkModeProperties();
    }
})


function darkModeProperties() {
    root.setProperty("--lm-bg", "#141D2F");
    root.setProperty("--lm-bg-content", "#1E2A47");
    root.setProperty("--lm-text", "white");
    root.setProperty("--lm-text-alt", "white");
    root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
    root.setProperty("--lm-icon-bg", "brightness(1000%)");
  }
  function lightModeProperties() {
    root.setProperty("--lm-bg", "#F6F8FF");
    root.setProperty("--lm-bg-content", "#FEFEFE");
    root.setProperty("--lm-text", "#4B6A9B");
    root.setProperty("--lm-text-alt", "#2B3442");
    root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
    root.setProperty("--lm-icon-bg", "brightness(100%)");
  }






