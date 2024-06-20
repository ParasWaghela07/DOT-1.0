import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";


function Navbar(){
    const{cartData,setcartData}=useContext(AppContext);
    return(
        <div className="w-[100vw] h-[10vh] bg-[#0f172a]">
            <div className="max-w-[1100px]  mx-auto h-full flex justify-between items-center relative">
                
                <NavLink to="/">
                <img src="../logo.png" className="w-[170px] h-[50px]"/>
                </NavLink>
                

                <div className="flex items-center gap-x-3 text-xl">
                <NavLink to="/">
                 <p className="text-white">Home</p>
                 </NavLink>

                 <NavLink to="/cart">
                 <MdOutlineShoppingCart className="text-white text-3xl"/>
                 {
                    cartData.length>0 &&
                    <div className="text-white bg-orange-400 rounded-full w-[18px] h-[18px] flex justify-center items-center text-[12px] absolute -right-1 top-5 animate-bounce">{cartData.length}</div>
                 }
                 </NavLink>

                 
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar;