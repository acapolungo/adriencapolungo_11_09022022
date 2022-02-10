
import RoutesPath from './routes/RoutesPath';
import './styles/App.scss';
import Header from './components/Header';
import { useState, useEffect } from 'react';


export default function App() {

  const [lodgings, setLodgings] = useState([]);

  // code Effect de bord par rapport au composant
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/logements.json`)
      .then((response) => response.json()
        .then((data) =>
          //console.log(data)
          setLodgings(data)
        )
        .catch((error) => console.log(error))
      )
  }, [])

  return (
    <>
    <Header />
    <RoutesPath lodgings={lodgings} />
    </>
  );
}
