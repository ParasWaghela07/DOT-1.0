import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { BiSolidTrashAlt } from "react-icons/bi";
import {toast} from "react-hot-toast";


function Card({item}){
    const{cartData,setcartData}=useContext(AppContext);

    function removeHandler(){
        let newArray=[];
        for(let i=0;i<cartData.length;i++){
            if(cartData[i].id!==item.id){
                newArray.push(cartData[i]);
            }
        }

        setcartData(newArray);
        toast.error("Item Removed From Cart!")
    }
    return(
        <div className="flex flex-col mb-10 w-[100%] gap-y-7">

            <div className="flex flex-col gap-y-5 items-center md:flex-row">
                <div className="w-[23%] md:w-[30%] h-[100%]">
                <img src={item.image} className="w-full h-full object-cover"/>
                </div>
                <div className="flex flex-col gap-y-5 px-5 w-[70%]">
                <h2 className="text-[#0f172a] font-bold text-md">{item.title}</h2>
                <p className="font-semibold text-gray-600">{item.description.split(" ").slice(0,15).join(" ") + "...."}</p>

                <div className="flex justify-between">
                    <p className="text-green-600 font-extrabold">${item.price.toFixed(2)}</p>
                    <button onClick={removeHandler} className="bg-red-200 rounded-full p-2">
                    <BiSolidTrashAlt className="text-red-800"/>
                    </button>
                </div>
                </div>
            </div>




            <div className="w-full h-1 bg-gray-400"></div>

        </div>
    )
}

export default Card;