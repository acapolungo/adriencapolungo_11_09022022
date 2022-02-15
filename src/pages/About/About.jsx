import React from 'react';
import Banner from '../../components/Banner';
import Dropdown from '../../components/Dropdown';

const about = {
  reliability: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  respect: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  services: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  security: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés... "
}

const banner = {
  title: '',
  name: 'bannerabout'
};

export default function About() {
  return (
    <main>
      <div className="about">
        <div className="banner">
          <Banner banner={banner} />
        </div>
        <Dropdown
          title='Fiabilité'
          content={about.reliability} />
        <Dropdown
          title='Respect'
          content={about.respect} />
        <Dropdown
          title='Service'
          content={about.services} />
        <Dropdown
          title='Sécurité'
          content={about.security} />
      </div>
    </main>
  )
}
