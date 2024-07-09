import React from "react";
import Filter from "./Components/Filter";
import Courses from "./Components/Courses";
import { filterData,apiUrl } from "./data";
import { useState,useEffect } from 'react';
import {toast} from "react-toastify";
import Spinner from "./Components/Spinner";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const [courses,setCourses]=useState(null);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);

  async function fetchData(){
    try{
    let response=await fetch(apiUrl);
    let data=await response.json();
    setCourses(data);
  }
  catch(e){
    toast.error("Network me koi dikkat hai");
  }
  setLoading(false);
  }

  useEffect(()=>{
    fetchData();
    setLoading(true);
  },[])

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <ToastContainer></ToastContainer>
      <h4 className="text-3xl font-bold text-center text-white">Top Courses</h4>
      <Filter heading={filterData} category={category} setCategory={setCategory}  className="bg-bgDark2"></Filter>
      <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : <Courses courses={courses.data} category={category}></Courses>
        }
      </div>
    </div>
  )
};

export default App;
