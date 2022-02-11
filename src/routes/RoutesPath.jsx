import React from 'react'
import { Routes, Route } from 'react-router-dom';

// système de rooting de base
import Home from "../pages/Home/Home"
import Lodging from "../pages/Lodging/Lodging"
import About from '../pages/About/About';
import Error404 from '../pages/Error/Error404';

export default function RoutesPath() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lodging/:lodgingId" element={<Lodging />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
  )
}
