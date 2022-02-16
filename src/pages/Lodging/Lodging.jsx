import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Import Components
import Gallery from '../../components/Gallery'
import Tags from '../../components/Tags'
import Ratings from '../../components/Ratings'
import Dropdown from '../../components/Dropdown'
import DropdownList from '../../components/DropdownList'
//import Error404 from '../Error/Error404'

// importData
import { getLodgingById } from '../../query';

export default function Lodging() {

  const [lodging, setLodging] = useState(null)
  //const [isDropOpen, setIsDropOpen] = useState(false)
  const { lodgingId } = useParams()
  let html;

  // debugger
  // no dependance // [lodgingId] infinite loop
  useEffect(() => {
    let isMounted = true;
    getLodgingById(lodgingId).then(data => {
      if (isMounted) setLodging(data)
    })
      .catch(err => console.log(err))
    return () => { isMounted = false }
  }, [lodgingId]);

  // const {id, pictures, title, description, equipments, host, location, rating, tags} = setLodging(lodgingId)

  if (lodging) {
    html = (
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
        <section className='lodgingdetail__contdrop'>
          <div className="lodgingdetail__drop">
            <Dropdown
              title='Description'
              content={lodging.description}
            />
          </div>
          <div className="lodgingdetail__drop">
            <DropdownList
              title='Équipements'
              list={lodging.equipments}
            />
          </div>
        </section>

      </main>
    )
  } else {
    html = (
      <div class="sectionloader">
        <span class="loader loader__circle"></span>
      </div>
    )
  }
  return html
}
