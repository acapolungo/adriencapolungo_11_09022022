import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Ratings({ ratings }) {

    console.log(ratings)
    const starTotal = 5;
    const rest = starTotal - parseInt(ratings)

    return (
        
        <div className='ratings'>
            {ratings < starTotal ?
                <div className='ratings__cont'>
                    <div className='ratings__color'> {[...Array(parseInt(ratings))].map((index) => <FontAwesomeIcon icon={faStar} />)}
                    <div className='ratings__gray'> {[...Array(parseInt(rest))].map(() => <FontAwesomeIcon icon={faStar} />)}</div>
                </div>
            </div> : <div className='ratings__color'> {[...Array(parseInt(starTotal))].map(() => <FontAwesomeIcon icon={faStar} />)}</div>}
        </div>
    )
}
