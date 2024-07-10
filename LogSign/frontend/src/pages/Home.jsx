import { useNavigate } from "react-router-dom";

function Home(){
  
  const navigate=useNavigate();
    return (
      <div className="flex justify-around items-center  h-[100vh] w-[100vw]">
        <button className="font-bold bg-green-300 p-2 rounded-lg text-2xl" onClick={()=>{navigate('/login')}}>LOGIN</button>
        <button className="font-bold bg-blue-300 p-2 rounded-lg text-2xl"  onClick={()=>{navigate('/signup')}}>SIGN UP</button>
      </div>
    );
}

export default Home;