import React from 'react'
import { useState } from 'react';
import Course from "./Course";

function Courses(props){
    let courses=props.courses;
    let category=props.category;
    let [liked,setLiked]=useState([]);

    function getCourses(){
        if(category=="All"){

            let courses_to_add=[];
            Object.values(courses).forEach(element => {
                element.forEach((eachCourse)=>{
                    courses_to_add.push(eachCourse);
                })
            });

            return courses_to_add;
        }
        else{
            return courses[category];
        }
    }

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((eachFilterData)=>(
                    <Course course={eachFilterData} liked={liked} setLiked={setLiked}></Course>
                ))
            }
        </div>
    )
}

export default Courses;