import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


export default function Gallery({ pictures }) {

    const [imgIndex, setImgIndex] = useState(0)

    const prevImg = () => imgIndex === 0 ? setImgIndex(pictures.length - 1) : setImgIndex(imgIndex - 1)

    const nextImg = () => {
        const nextIndex = imgIndex + 1
        nextIndex > pictures.length - 1 ? setImgIndex(0) : setImgIndex(nextIndex)
    }
    return (
        
        <section className="gallery">
            <img className='gallery__image' src={pictures[imgIndex]} alt="Intérieur du logement" />
            <div className='gallery__counter'>{imgIndex+1}/{pictures.length}</div>
            {pictures.length && pictures.length > 1 ?
                <div>
                    <span className="gallery__arrow-left" onClick={prevImg}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    </span>
                    <span className="gallery__arrow-right" onClick={nextImg}>
                    <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                </div> : ""
            }
        </section>
    );
}
