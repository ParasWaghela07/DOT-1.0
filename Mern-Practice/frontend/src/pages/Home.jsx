import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import User from "../components/User";

function Home(){
    const [users,Setusers]=useState();

    async function fetchUser(){
        try{
            
            const response=await fetch('http://localhost:3001/getAllUser',
                {
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json"
                    }
                }
            );

            
           
            const data=await response.json();
            console.log(data);
            Setusers(data);

        }
        catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        fetchUser();
    },[])

    return(
        <div>
        <NavLink to="/createUser"><button>NEXT</button></NavLink>
        <br />
        <br />

        <div>
            {
                // users?.data.map((user)=>{
                //     return <User user={user}/>
                // })
                users?.data.map(user => <User user={user} key={user._id}/>)
            }
        </div>
        </div>

    )
}

export default Home;