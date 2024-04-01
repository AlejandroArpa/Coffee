import React from "react";
import "./styles/Header.css"


export default function Header () {
    return(
        <header>
            <div>
                <img src="src/assets/Cafe amanecer logo.webp" alt="" />
                <h1 className="cf-text-name">Café Amanec<span>er</span></h1>
            </div>
            <nav>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
            </nav>
        </header>
    )
}