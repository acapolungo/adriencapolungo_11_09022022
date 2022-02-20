import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import base from '../styles/base.scss';


export default function Ratings({ ratings }) {

    const ratingScale = [1, 2, 3, 4, 5]
    return (

        <div className='ratings'>
            {ratingScale.map((scale) =>
                <FontAwesomeIcon icon={faStar} style={scale <= ratings ? {color: base["primary-color"]} : ""} key={`star - ${scale}`} />
            )}
        </div>
        
    )
}

//console.log(base["primary-color"])
