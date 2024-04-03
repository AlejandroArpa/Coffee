import React from "react";
import './styles/Client.css'

export default function Client(props){
    return(
        <div className="ca-Client-Container">
            <img src={props.imageUrl} alt="" />
        </div>
    )
}