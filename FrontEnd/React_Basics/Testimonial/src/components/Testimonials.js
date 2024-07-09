import Card from "./Card";
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';
import React, { useState } from "react";


function Testimonials(props){
    let reviews=props.reviews;
    
    const [index,setIndex]=useState(0);

    function leftHandler(){
        if(index===0) setIndex(reviews.length-1);
        else setIndex(index-1);
    }

    function rightHandler(){
        if(index===reviews.length-1) setIndex(0);
        else setIndex(index+1);
    }

    function randomHandler(){
        let random=Math.floor(Math.random() * reviews.length);
        setIndex(random);
    }

return (
    <div className="w-[85vw] md:w-[700px] bg-white rounded-md flex flex-col justify-center items-center mt-10 p-10 transition-all duration-200 hover:shadow-xl">
        <Card review={reviews[index]}></Card>

        <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold place-content-center">
                <button className="cursor-pointer hover:text-violet-500" onClick={leftHandler}>
                    <FiChevronLeft/>
                </button>

                <button className="cursor-pointer hover:text-violet-500" onClick={rightHandler}>
                    <FiChevronRight/>
                </button>
            </div>

            <div>
                <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-6" onClick={randomHandler}>
                    Surprise Me
                </button>
            </div>
    </div>
)
}

export default Testimonials;