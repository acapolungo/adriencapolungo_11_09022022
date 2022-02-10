import React from 'react'
import Banner from '../../components/Banner';
import AppartCards from '../../components/AppartCards';


export default function Home({lodgings}) {


  return (
    <main className='main'>
      <Banner />
      <section className='appart'>
        {lodgings.map(({ id, cover, title }) => <AppartCards cover={cover} title={title} key={id} />)}
      </section>
      <ul>
        <li>Card</li>
      </ul>

    </main>
  )
}
