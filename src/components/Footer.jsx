import React from 'react'
import logowhite from '../assets/logo_kasa_white.png'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__logo'>
                <img src={logowhite} alt="Logo" />
            </div>
            <p>&#169; {new Date().getFullYear()} Kasa. All rights reserved</p>
        </footer>        
    )
}
