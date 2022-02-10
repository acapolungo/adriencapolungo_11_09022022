import React from 'react'

export default function AppartCards({ id, cover, title }) {
    return (
        <a href="/">
            <section className='appartCard'>
                    <img className='appartCard__img' src={cover} alt={title} />
                    <span className="appartCard__blend"></span>
                    <h4 className='appartCard__title'>{title}</h4>
            </section>
        </a>
    )
}
