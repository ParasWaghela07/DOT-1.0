import "./App.css";
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

function App() {

  const [pass,setpass]=useState(true);

  return (
    <div className="px-10 py-10">
      <div className="flex justify-center items-center">

      <label htmlFor="ipBox" className="mr-5">Password</label>
      <input type={pass ? "password" : "text"} 
      className="bg-gray-100 p-1 mr-3"
      />

      {pass ? <FaRegEye onClick={()=>setpass(!pass)} fontSize={20}className="cursor-pointer"/> :<FaRegEyeSlash fontSize={20} onClick={()=>setpass(!pass)} className="cursor-pointer"/>}

      </div>

    </div>
  );
}

export default App;
