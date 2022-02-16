import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Dropdown({ title, list }) {
    const [open, setOpen] = useState(false)

    return (
        <article className='dropdown'>
            <div className="dropdown__title" onClick={() => setOpen(!open)}>
                <h4>{title}</h4>
                {open ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
            </div>
            {open ?
                <div className={`dropdown__${title}--open`}>{list.map((txt, index ) => <li key={index}>{txt}</li>)}</div>
                : <div className={`dropdown__${title}--close`}></div>}
        </article>
    )
}
