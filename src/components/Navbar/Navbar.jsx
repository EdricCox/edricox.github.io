import React from 'react'
import './nav.css'
import Logo from '../../images/logo-me2.png'
import {BsGithub} from 'react-icons/bs'
import Toggle from '../Toggle/Toggle'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm fixed-top">
      <div className="container navbar__container">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="LOGO" href="#"><img src={Logo} alt="logo" /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#store">Store</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/EdricCox/edricox.github.io"><BsGithub className="icon-git" /> Source</a>
          </li>
        </ul>
        <ul className="sun_night">
          <li className="sun">
            <Toggle />
          </li>
        </ul>
      </div>
</nav>
  )
}

export default Navbar
