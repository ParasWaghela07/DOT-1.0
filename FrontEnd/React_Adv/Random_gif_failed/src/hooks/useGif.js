import React, { useEffect, useState } from "react";
import axios from 'axios';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Url=`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;


function useGif(tag){

    const [gif,setgif]=useState('https://tenor.com/view/excited-cute-cats-kittens-adorable-gif-16567172');

    async function fetchData(tag){
        const url='https://g.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=50';
        const response = await axios.get(tag ? `${Url}&tag=${tag}` :Url);
        
        const random=Math.floor(Math.random()*51);
        const imgSrc=response.data.results[random].url;
        setgif(imgSrc);
        console.log(imgSrc);
    }

    useEffect(()=>{
        fetchData('car');
    },[])


    return {gif,fetchData};
}


export default useGif;