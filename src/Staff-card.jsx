import React from "react";
import "./styles/Staff-card.css"

export default function Staff_card(props){
    return(
        <div className="ca-staff-card-container">
            <img className="ca-staff-card-img" src={props.urlImg} alt="" />
        </div>
    )
}