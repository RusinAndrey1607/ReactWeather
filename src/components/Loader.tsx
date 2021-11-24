import React from "react";
import loader from './../assets/spiner.gif'
export const Loader = () =>{
    return(
        <div className="">
            <img src={loader} alt="Loading" style={{
                width:"100%",
                height:"100%",
            }} />
        </div>
    )
}