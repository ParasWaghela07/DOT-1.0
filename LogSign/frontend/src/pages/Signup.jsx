import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {toast,ToastContainer} from "react-toastify";


function Signup(){
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

    // async function submitHandler(){
    //     try{
    //         console.log(FormData);

    //     const response=await fetch('http://localhost:4000/signup',
    //         {
    //         METHOD:"POST",
    //         headers:{
    //             "Content-Type":"application/json",
    //         },
    //         body:JSON.stringify({...FormData})
    //         }
    //     )

    //     console.log(response);
    //     }
    //     catch(e){
    //         console.log("ERROR IN FETCHING DATA ");
    //         console.error(e);
    //     }
    // }

    async function submitHandler(){
        try{
           

        // const response=await fetch('http://localhost:4000/signup',
        //     {
        //     METHOD:"POST",
        //     headers: { "Content-Type": "application/json" },
        //     body:{
        //             email:FormData.email,
        //             password:FormData.password
        //         }
        //     }
        // )
        const response = await axios (
    
            {
                url:"http://localhost:4000/signup",
                method :"POST",
                headers: { "Content-Type": "application/json" },
                data:{
                    email:FormData.email,
                    password:FormData.password
                }
            },
        
        );
        console.log(response);
        if(response.data.success){
            navigate('/');
        }
        else{
            toast.error(response.data.message);
        }
        }
        catch(e){
           console.log("ERROR IN FETCHING DATA ")
            console.error(e);
        }
    }


    return(
        <div className="w-[100vw] h-[100vh] flex flex-col justify-evenly items-center">

        <h1 className="text-3xl p-2 bg-red-200">SIGNUP PAGE</h1>
        
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
                Create Account
            </button>
        </div>

        </div>
    )
}

export default Signup;