import "./App.css";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Result from "./pages/Result";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";


function App() {

  const [user,setUser]=useState();

  const navigate=useNavigate();
    async function checkUser(){

    // const options = {
    //   method: 'GET', // Replace with 'POST' if sending data
    //   headers: {
    //     'Content-Type': 'application/json' // Adjust if needed
    //   }
    // };

    // const response=await fetch('http://localhost:4000/test',options);
    // const res=await response.json();
    try{
      const response = await axios({
        url: "http://localhost:4000/checkAlreadyLogin",
        method: "GET",
        headers: { "Content-Type": "application/json" },
        withCredentials: true 
       });
  
      console.log(response);
      if(response.data.success){
        setUser(response.data.user.email)
        // console.log(typeof(response.data.user.email))
        navigate('/result')
      }
    }
    catch(e){
      console.log(e);
    }
    
  }

  useEffect(()=>{
    checkUser();
  },[])
  

  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login setUser={setUser}/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/result" element={<Result user={user}/>}/>
    </Routes>
    </div>

  );
}

export default App;
