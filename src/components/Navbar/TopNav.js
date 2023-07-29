import React, { useState } from 'react'
import './Topnav.css'

export default function TopNav() {

    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");


    const navToggle = () => {
        active === 'nav__menu' ? setActive('nav__menu nav__active') :
            setActive("nav__menu");

        // toggler

        toggleIcon === 'nav__toggler' ?
            setToggleIcon('nav__toggler toggle')
            : setToggleIcon('nav__toggler')
    };


    return (
        <div className='navbar-container'>
            <nav className='nav'>
                <img src="images/logo.png" alt=""  />
                <ul className={active}>
                    <li className='nav__item'>
                        <a href="/" className='nav__link'>ACCUEIL</a>
                    </li>
                    <li className='nav__item'>
                        <a href="/artisan" className='nav__link'>NOS ARTISANS</a>
                    </li>
                    <li className='nav__item'>
                        <a href="/propos" className='nav__link'>A PROPOS</a>
                    </li>
                    <li className='nav__item'>
                        <a href="/contact" className='nav__link'>CONTACT</a>
                    </li>
                    <li className='nav__item'>
                        <a href="/blog" className='nav__link'>BLOG</a>
                    </li>
                    <div className='btn-cont'>
                        <a href="/login">Connexion / </a>
                        <a href="/register">Inscription</a>
                    </div>
                </ul>

                <div onClick={navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </div>
    )
}
