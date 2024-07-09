import React, { useEffect, useState } from "react";
import axios from 'axios';
import useGif from "../hooks/useGif";

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

function Tag(){
    
    // const [gif,setgif]=useState('https://tenor.com/view/excited-cute-cats-kittens-adorable-gif-16567172');

    // async function fetchData(){

    //     // const url=`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&tag=${tag}`; // supported extra tag mentioning in this url
    //     //otherwise we have to write logic


    //     ////////// BELOW CODE IS TEMP , ABOVE CODE IS CLASS CODE
    //     const url='https://g.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=50';
    //     const response = await axios.get(url);
    //     const random=Math.floor(Math.random()*51);
    //     const imgSrc=response.data.results[random].url;
    //     setgif(imgSrc);
    //     console.log(imgSrc);
    // }

    // useEffect(()=>{
    //     fetchData();
    // },[])

    const [tag,settag]=useState('car');
    const {gif,fetchData}=useGif();

    function clickHandler(){
        fetchData(tag);
    }

    function changeHandler(event){
        settag(event.target.value);
    }

    return (
        <div className="w-1/2 h-[450px] bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] mb-[15px]">

            <h1 className="text-2xl underline uppercase font-bold">Random {tag} Gif</h1>

            <img src={gif} width={450} alt="nahi mila"/>

            <input 
            className="w-10/12 bg-white opacity-90 text-lg py-2 rounded-lg mb-[3px] text-center" onChange={changeHandler}
            value={tag}
            />

            <button onClick={clickHandler} className="w-10/12 bg-white opacity-90 text-lg py-2 rounded-lg">
                Generate
            </button>


        </div>
    )
}

export default Tag;