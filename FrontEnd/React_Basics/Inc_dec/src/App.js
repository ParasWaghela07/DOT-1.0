import "./App.css";
import React,{ useState } from "react";

function App() {
  
  const [count,setCount]=useState(0);
  function decHandler(){
    setCount(count-1);
  }

  function incHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }


  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</div>
      <div className="bg-white flex items-center justify-center py-3 gap-12 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">-</button>
        <div className="font-bold gap-12 text-5xl">{count}</div>
        <button onClick={incHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">+</button>  
      </div>
      <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">Reset</button>
    </div>
  );
}

export default App;

// import { useState } from 'react'

// import './App.css'

// function App() {
//   const [count,setCount]=useState(0);
//   return (
//     <div>
//       <Count count={count}></Count>
//       <Button count={count} setCount = {setCount}></Button>
//     </div>
//   )
  
// }
// function Count({count}){
//      return <div>
//       {count}
//      </div>
// }
// function Button({count,setCount}){
//      return <div>
//       <button onClick={()=>{  
//           setCount(count+1)
//      }}>increase</button>
//       <button onClick={()=>{
//           setCount(count-1)
//       }}>decrease</button>
//      </div>
// }
// export default App

