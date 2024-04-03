import React from "react";
import './styles/Clients.css'
import Client from "./Client";

export default function Clients(){
    return(
        <div className="ca-Clients-Section">
            <h1>Clientes</h1>
            <div className="ca-Clients-Container">
                <Client imageUrl='src/assets/—Pngtree—the companys general logo is_4397026.png'/>
                <Client imageUrl='src/assets/—Pngtree—the companys general logo is_4397026.png'/>
                <Client imageUrl='src/assets/—Pngtree—the companys general logo is_4397026.png'/>
            </div>
        </div>
    )
}