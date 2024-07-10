import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {toast,ToastContainer} from "react-toastify";

function Login({setUser}){
    const navigate=useNavigate();
    const [FormData,setFormData]=useState({email:"",password:""});


    function changeHandler(e){
        setFormData(prev=>(
            {
                ...prev,
                [e.target.name]:e.target.value
            }
        ))
        console.log(FormData);

    }

    async function submitHandler(){
        try{
            const response = await axios({
                url: "http://localhost:4000/login",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                data: {
                    email: FormData.email,
                    password: FormData.password
                },
                withCredentials: true 
            });
            
            console.log(response.data)

            if(response.data.success){
                setUser(response.data.email)
                navigate('/result')
            }
            else{
                toast.error(response.data.message);
            }

        }
        catch(e){
            console.log(FormData);
         //   console.log("ERROR IN FETCHING DATA ")
            console.error(e);
        }
    }

return(
    <div className="w-[100vw] h-[100vh] flex flex-col justify-evenly items-center">

    <h1 className="text-3xl p-2 bg-red-200">LOGIN PAGE</h1>
    
    <div className=" flex justify-center items-center flex-col gap-7">
       
        <p className="font-semibold text-2xl">Email Address</p>
        <input className="border border-slate-700 p-1"
        type="email" 
        name="email"
        value={FormData.email}
        onChange={changeHandler}
        />

        <p className="font-semibold text-2xl">Password</p>
        <input className="border border-slate-700 p-1"
        type="password"
        name="password"
        value={FormData.password}
        onChange={changeHandler} />

        <button className="bg-green-700 text-white font-bold text-xl p-3 rounded-xl" onClick={submitHandler}>
            Log In
        </button>

    </div>

    </div>
)
}


export default Login;