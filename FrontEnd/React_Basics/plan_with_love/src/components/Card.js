import { useState } from "react";

function Card({id,image,info,price,name,removeTour}){

    const [readmore,setReadmore]=useState(false);
    const description=readmore ? info : info.substring(0,200) + "...." ;

    function ReadmoreHandler(){
        setReadmore(!readmore);
    }
    return (
        <div className="card">

            <img src={image} className="image"></img>

            <div className="tour-info">
                <div className="tour-detail">
                    <h4 className="tour-price">₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span onClick={ReadmoreHandler} className="read-more">
                        {readmore? 'Show less' :'Read more'}
                    </span>
                </div>
            </div>

            <button onClick={()=>removeTour(id)} className="btn-red">Not Interested</button>
        </div>
    );
}

export default Card;