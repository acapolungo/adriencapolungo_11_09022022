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
            {pictures.length ?
                <div>
                    <span className="gallery__arrow-left" onClick={prevImg}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    </span>
                    <span className="gallery__arrow-right" onClick={nextImg}>
                    <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                </div> :
                <div>Erreur de chargement des images</div>
            }
        </section>
    );
}
