import React from 'react'

export default function Tags({tags}) {
    return (
        <div key={tags.id} className="tags">
            {tags.map((tag, index) => {
                return <p key={index} className="tags__item">{tag}</p>
            })}
        </div>
    )
}
