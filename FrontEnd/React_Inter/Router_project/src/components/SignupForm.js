import React from "react";
import {useState} from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

function SignupForm({setIsLoggedIn}){

    const[showPass1,setShowpass1]=useState(false);
    const[showPass2,setShowpass2]=useState(false);

    const [formData,setFormData]=useState({firstname:"" , lastname:"", email:"", password:"",cpassword:""});

    const [type,setType]=useState("Student");

    let navigate=useNavigate();

    function changeHandler(e){

        setFormData((prev)=>(
            {
                ...prev,
            [e.target.name]:e.target.value
        }
        ))

    }

    function submitHandler(e){
        e.preventDefault();
        if(formData.password!==formData.cpassword){
            toast.error("confirm password do not match");
            return;
        }
        else{
            setIsLoggedIn(true);
            toast.success("Signed Up");
            const finalData={
                ...formData , type
            }
            console.log(finalData);
            navigate("/dashboard");
        }
    }
    return (
    <div>
        <div>
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button className={`${type==="Student" 
                ?
                "bg-richblack-900 text-richblack-5" 
                :
                "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200"`
                } onClick={()=>setType("Student")}>Student</button>

                
                <button className={`${type==="Instructor" 
                ?
                "bg-richblack-900 text-richblack-5" 
                :
                "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200"`
                }onClick={()=>setType("Instructor")}>Instructor</button>
            </div>
        </div>

        <form onSubmit={submitHandler}>
            <div className="flex gap-x-4 mt-4">
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name
                <sup className="text-pink-200">*</sup></p>
                <input required type="text" name="firstname" onChange={changeHandler} placeholder="Enter First Name" value={formData.firstname}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>
            </label>

            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name<sup>*</sup></p>
                <input required type="text" name="lastname" onChange={changeHandler} placeholder="Enter last Name" value={formData.lastname}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>
            </label>
            </div>

            <div className="flex gap-x-4 mt-4">
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address
                <sup className="text-pink-200">*</sup></p>
                <input required type="email" name="email" onChange={changeHandler} placeholder="Enter email ID" value={formData.email}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>
            </label>
            </div>

            <div className="flex gap-x-4 mt-4">

            <label className="relative w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password
                <sup className="text-pink-200">*</sup></p>
                <input required type={showPass1 ? ("text") : ("password")} name="password" onChange={changeHandler} placeholder="Enter password" value={formData.password}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>

                <span onClick={()=>setShowpass1(!showPass1)}  className="absolute right-3 top-[38px] cursor-pointer">
                    {showPass1 ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)};
                </span>
            </label>

            <label className="relative w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password
                <sup className="text-pink-200">*</sup></p>
                <input required type={showPass2 ? ("text") : ("password")} name="cpassword" onChange={changeHandler} placeholder="Confirm password" value={formData.cpassword}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>

                <span onClick={()=>setShowpass2(!showPass2)} className="absolute right-3 top-[38px] cursor-pointer">
                    {showPass2 ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)};
                </span>
            </label>

            </div>

            <button className="bg-yellow-50 w-full rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
                Create Account
            </button>

        </form>

    </div>
    )
}

export default SignupForm;