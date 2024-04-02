import React from "react";
import Testimony from "./Testimony";
import './styles/Testimonials.css'

export default function Testimonials(){
    return(
        <div className='ca-testimonials-container'>
            <h1>Testimonios</h1>
            <Testimony name='Alejo'/>
            <Testimony name='Alejo'/>
            <Testimony name='Alejo'/>
            <Testimony name='Alejo'/>
            <Testimony name='Alejo'/>
            <Testimony name='Alejo'/>
        </div>
    )
}