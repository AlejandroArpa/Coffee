import "./styles/Staff-card.css"
import PropTypes from 'prop-types';
import { useState } from "react";

export default function Staff_card(props){
    const [Hover, setHover] = useState(false)
    return(
        <div className="ca-staff-card-container"
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)}
        >
            <img className="ca-staff-card-img" src={props.urlImg} alt="" />
            {Hover &&
                <div className="ca-staff-card-info">
                    <h3>{props.name}</h3>
                </div>
            }
        </div>
    )
}

Staff_card.propTypes ={
    urlImg: PropTypes.string,
    name: PropTypes.string
}