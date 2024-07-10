import {toast,ToastContainer} from "react-toastify";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Result(props){
    const navigate=useNavigate();
    useEffect(()=>{
        toast.success("Logged-In Successfully");
    },[]);

    async function clickHandler(){
        
        try{
            const response = await axios({
                url: "http://localhost:4000/logout",
                method: "GET",
                headers: { "Content-Type": "application/json" },
                withCredentials: true 
               });
            
               if(response.data.success){
                toast.success("Logged_Out")
                navigate('/');
               }
        }
        catch(e){
            console.log("Erros while logging out")
            toast.error("Erros while logging out")
        }
    }


    return(
        <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-5">
            <p className="font-bold text-3xl italic">WELCOME TO THE AGE OF LYNX !</p>
            <p className="font-semibold text-xl">{props.user}</p>
            <button className="font-semibold bg-red-600 p-2 rounded-lg text-lg text-white" onClick={clickHandler}>LOG OUT</button>
            <ToastContainer/>
        </div>
    )
}

export default Result;