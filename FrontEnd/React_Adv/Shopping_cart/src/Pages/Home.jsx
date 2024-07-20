import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

function Home(){
    const [items,setItems]=useState([]);
    const [loading,setLoading]=useState(false);

    async function fetchitems(){
        setLoading(true);
        try{
            const respose=await fetch('https://fakestoreapi.com/products');
            const res=await respose.json();
            console.log(res);
            setItems(res);
            
        }
        catch(e){
            console.log("Error agya ji");
            setItems([]);
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchitems();
    },[]);

    return(
        <div className="flex justify-center items-center">
            {
                loading?<Spinner/>:
                    items.length>0 ?
                (
                    <div className="grid xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-5 mb-10 space-y-10 gap-x-5 min-h-[80vh]">
                        {
                            items.map((item)=>(
                                    <Product key={item.id} item={item}/>
                            ))
                        }
                    </div>
                ):
                    <p>NO DATA FOUND</p>
            }
        </div>
    );
}

export default Home;