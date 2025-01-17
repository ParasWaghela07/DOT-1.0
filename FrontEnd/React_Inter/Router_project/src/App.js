import {Route,Routes} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import {useState} from "react"
import PrivateRoute from "./components/PrivateRoute";


function App() {
  const [isLoggedIn,setLoggedIn]=useState(false);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col overflow-y-hidden">
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}></Navbar>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setLoggedIn}/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setLoggedIn}/>}/>
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        }/>
      </Routes>


    </div>
  )
}

export default App;
