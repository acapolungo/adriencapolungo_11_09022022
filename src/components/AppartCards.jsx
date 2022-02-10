import React from 'react'

export default function AppartCards({ id, cover, title }) {
    return (
        <a href="/">
            <div className='appartCard'>
                <img className='appartCard__img' src={cover} alt={title} />
                <h4 className='appartCard__title'>{title}</h4>
            </div>
        </a>
    )
}
