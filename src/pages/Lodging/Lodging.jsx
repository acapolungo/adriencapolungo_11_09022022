import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Import Components
import Gallery from '../../components/Gallery'
import Tags from '../../components/Tags'
import Ratings from '../../components/Ratings'
import Dropdown from '../../components/Dropdown'
import DropdownList from '../../components/DropdownList'

// importData
import { getLodgingById } from '../../query';

export default function Lodging() {

  const [lodging, setLodging] = useState(null)
  const { lodgingId } = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    getLodgingById(lodgingId).then(data => {
      setLodging(data)
    }).catch(err => {
      console.log(err)
      navigate('/*');
    })
  }, [lodgingId, navigate]);

  return (
    lodging ? (
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
    ) : (
      <div className="sectionloader">
        <span className="loader loader__circle"></span>
      </div>
    )
  )
}
