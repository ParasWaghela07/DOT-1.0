import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function CreatePage(){
    const navigate=useNavigate();
    const [data,setData]=useState({name:"",surename:""});

    function changeHandler(e){
        setData(prev=>(
            {...prev,
                [e.target.name]:e.target.value
            }
        )
    )
    console.log(data);
}

    async function submitHandler(){
        const response=fetch(`http://localhost:3001/createUser`,
            {method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({...data})
            }
        );

        console.log(response);
        navigate('/');
    }

    return(
        <div>
            <NavLink to="/">PREVIOUS</NavLink>

            <div>
            <label htmlFor="fn">First Name</label>
            <input type="text" 
             name="name"
             value={data.name}
             id="fn"
             onChange={changeHandler}
            />

            <label htmlFor="ln">Last Name</label>
            <input type="text" 
            name="surename"
            value={data.surename}
            id="ln"
            onChange={changeHandler}/>

            <button onClick={submitHandler}>SUBMIT</button>
        </div>
        </div>
    )
}


export default CreatePage;