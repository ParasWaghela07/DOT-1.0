import React, { useEffect, useState } from "react";
import axios from 'axios';
import useGif from "../hooks/useGif";


function Random(){
    // const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
    // const [gif,setgif]=useState('https://tenor.com/view/excited-cute-cats-kittens-adorable-gif-16567172');
    
    // async function fetchData(){
    //     // const url=`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
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

    const {gif,fetchData}=useGif();

    function clickHandler(){
        fetchData();
    }


    return (
        <div className="w-1/2 h-[450px] bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">

            <h1 className="text-2xl underline uppercase font-bold">A Random Gif</h1>

            <img src={gif} width={450} alt="nahi mila"/>

            <button onClick={clickHandler} className="w-10/12 bg-white opacity-90 text-lg py-2 rounded-lg">
                Generate
            </button>


        </div>
    )
}

export default Random;