import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'

export default function Header() {
    return (
        <header className='header'>
            <div className='header__logo'>
                <img src={logo} alt="Logo Kasa" />
            </div>
            <div className='header__links'>
                <Link className='active' to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </div>
        </header>        
    )
}
