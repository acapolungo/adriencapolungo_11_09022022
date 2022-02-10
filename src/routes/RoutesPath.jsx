import React from 'react'
import { Routes, Route } from 'react-router-dom';


// système de rooting de base
import Home from "../pages/Home/Home"
import Lodging from "../pages/Lodging/Lodging"

export default function RoutesPath({lodgings}) {
  return (
      <Routes>
        <Route path="/" element={<Home lodgings={lodgings}/>} />
        <Route path="/lodging/" element={<Lodging />} />
      </Routes>
  )
}
