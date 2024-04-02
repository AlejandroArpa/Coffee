import React from "react";
import './styles/Testimony.css'

export default function Testimony(props){
    return(
        <div className="ca-testimony-card">
            <h3>{props.name}</h3>
            <hr />
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium quo error ipsam pariatur fugiat voluptates omnis et ad, adipisci eligendi asperiores exercitationem sed rem ipsa consectetur autem. Ipsam, atque?</h4>
        </div>
    )
}