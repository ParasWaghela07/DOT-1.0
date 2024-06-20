import { createContext,useState } from "react";

export const AppContext=createContext();

export default function AppContextProvider({children}){
    const [cartData,setcartData]=useState([]);

    const value={
        cartData,
        setcartData
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}