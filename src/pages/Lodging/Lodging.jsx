import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Import Components
import Gallery from '../../components/Gallery'
import Tags from '../../components/Tags'
import Ratings from '../../components/Ratings'

// importData
import { getLodgingById } from '../../query';

export default function Lodging() {

  const [lodging, setLodging] = useState({})
  const {lodgingId} = useParams()

  useEffect(() => {
    getLodgingById(lodgingId).then(data => setLodging(data))
    .catch(err => console.log(err))
  }, [lodgingId])

  console.log(lodging)

  // const {id, pictures, title, description, equipments, host, location, rating, tags} = setLodging(lodgingId)
  
  return (
    <main className='main'>
    <Gallery pictures={lodging.pictures} key={lodging.id} />
    <section className="lodgingdetail">
        <div className="lodgingdetail__left">
            <h1 className="lodgingdetail__title">{lodging.title}</h1>
            <p className="lodgingdetail__location">{lodging.location}</p>
            <Tags tags={lodging.tags} />
        </div>
          <div className="lodgingdetail__right">
            <div className="lodgingdetail__host">
                <div className="lodgingdetail__info">
                    <p className="lodgingdetail__firstname">{lodging.host.name.split(' ', 1)}</p>
                    <p className="lodgingdetail__lastname">{lodging.host.name.split(' ').pop()}</p>
                </div>
                <img src={lodging.host.picture} alt="Hôte" />
            </div>
            <Ratings ratings={lodging.rating} id={lodging.id} />
        </div> 
      </section>
      <section className="general-info">
      </section>
    </main>
  )
}

// export default function Lodging({getLodging}) {

//   const lodgingId = useParams()
//   const lodging = getLodging(lodgingId)
  
//   return (
//     <main className='main'>
//     <Gallery {...lodging} />
//     </main>
//   )
// }
