import React from 'react'

export default function Banner({banner}) {

  return (
      <section className='banner'>
          <h3 className='banner__title'>{banner.title}</h3>
          <img src={`${process.env.PUBLIC_URL}/images/${banner.name}.jpg`} alt={banner.title} />
      </section>
  )
}
