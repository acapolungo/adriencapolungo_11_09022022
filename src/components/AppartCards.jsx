import React from 'react';
import { Link } from 'react-router-dom';

export default function AppartCards({ id, cover, title }) {

    return (
        <Link to={`/lodging/${id}`}>
            <article className='appartCard'>
                <img className='appartCard__img' src={cover} alt={title} />
                <span className="appartCard__blend"></span>
                <h4 className='appartCard__title'>{title}</h4>
            </article>
        </Link>
    )
}
