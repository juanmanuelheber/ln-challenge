import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/LN.svg'
import './stylesNavbar.scss'

export const Navbar = () => {
  return (
    <header className='header'>
        <nav className='navbar'>
            <Link to="/">
                <img className='navbar-logo' src={logo} alt='La Nacion' />
            </Link>
        </nav>
    </header>
  )
}
