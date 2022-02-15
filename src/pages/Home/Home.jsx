import React from 'react'
import Banner from '../../components/Banner';
import AppartCards from '../../components/AppartCards';
import { useState, useEffect } from 'react';

// importData
import { getAllData } from '../../query';


export default function Home() {

  const [lodgings, setLodgings] = useState([])
  const banner = {
    title: 'Chez vous, partout et ailleurs',
    name: 'bannerhome'
  };

  useEffect(() => {
    getAllData().then(data => setLodgings(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <main className='main'>
      <Banner banner={banner} />
      <section className='appart'>
        {lodgings.map(({ id, cover, title }) => <AppartCards cover={cover} title={title} id={id} key={id} />)}
      </section>
    </main>
  )
}
