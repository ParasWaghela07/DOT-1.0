import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-hot-toast";


function Product({item}){

    const{cartData,setcartData}=useContext(AppContext);


    function removeHandler(){
        let newArray=[];
        for(let i=0;i<cartData.length;i++){
            let currObj=cartData[i];
            if(currObj.id!=item.id){
                newArray.push(currObj);
            }
        }

        setcartData(newArray);
        toast.error("Item Removed From Cart!")
    }

    function addHandler(){
        let newArray=[...cartData];
        newArray.push(item);
        setcartData(newArray);
        toast.success("Item Added To Cart!");
    }

    return(
        <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline hover:shadow-2xl">
            <h2 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h2>
            <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
            <div className="h-[180px]">
                <img src={item.image} className="h-full w-full"/>
            </div>
            <div className="flex justify-between gap-12 items-center w-full mt-5">
                <p className="text-green-600 font-semibold">${item.price}</p>
                    {
                          cartData.some((i) => i.id == item.id) ? (
                            <button onClick={removeHandler} className="bg-white text-gray-700 border-2 border-slate-700 px-2 py-1 rounded-2xl hover:bg-gray-700 hover:text-white font-semibold transition-all duration-200">
                                REMOVE
                            </button>
                        ) :(
                            <button onClick={addHandler}  className="bg-white text-gray-700 border-2 border-slate-700 px-2 py-1 rounded-2xl hover:bg-gray-700 hover:text-white font-semibold transition-all duration-200">
                                ADD
                            </button>
                        )
                    }
            </div>
        
    </div>
    )
}

export default Product;