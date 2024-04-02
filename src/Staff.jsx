import React from "react";
import Staff_card from "./Staff-card";
import './styles/Staff.css'

export default function Staff (){
    const imgUrl = 'https://media.istockphoto.com/id/1354898581/es/foto/foto-de-un-joven-empresario-usando-una-computadora-port%C3%A1til-en-una-oficina-moderna.jpg?s=612x612&w=0&k=20&c=ill7Gebgk_9_xh-pai6iODyhz1x644E_WhwzZgVbS6I='
    return(
        <>
            <h1>Nuestros colaboradores</h1>
            <div className="ca-staff-container">
                <Staff_card urlImg = {imgUrl}/>
                <Staff_card urlImg = {imgUrl}/>
                <Staff_card urlImg = {imgUrl}/>
                <Staff_card urlImg = {imgUrl}/>
                <Staff_card urlImg = {imgUrl}/>
                <Staff_card urlImg = {imgUrl}/>
            </div>
        </>
    )
}