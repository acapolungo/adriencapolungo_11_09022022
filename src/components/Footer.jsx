import React from 'react'
// import logowhite from '../assets/Kasa_white.png'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__logo'>
                {/* <img src={} alt="Logo" /> */}
            </div>
            <p>&#169; {new Date().getFullYear()} Kasa. All rights reserved</p>
        </footer>        
    )
}
