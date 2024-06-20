import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
