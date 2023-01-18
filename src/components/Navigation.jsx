/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { useState } from "react";


const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <a href='/' className='logo'>
        <img className='menu-logo' src='./assets/images/logo/logo.png'></img>
      </a>
      <div className="navigation">
        <ul className={menuOpen ? 'menu active' : "menu"}>
          <div className="close-btn" onClick={() =>{setMenuOpen(false)}}>

          </div>
          <li className='menu-item'> <a href='#'>Home</a></li>
          <li className='menu-item'> <a className='sub-btn' href='#'>Dropdown<i className='fas fa-angle-down'></i></a>
          <ul className='sub-menu'>
            <li className='sub-item'><a href='#'>Sub Item 01</a></li>
            <li className='sub-item'><a href='#'>Sub Item 02</a></li>
            <li className='sub-item'><a href='#'>Sub Item 03</a></li>
          </ul>
          </li>
          <li className='menu-item'> <a className='sub-btn' href='#'>With Sub-dropdown<i className='fas fa-angle-down'></i></a>
          <ul className='sub-menu'>
          <li className='sub-item'><a href='#'>Sub Item 04</a></li>
            <li className='sub-item'><a href='#'>Sub Item 05</a></li>
            <li className='sub-item'><a href='#'>Sub Item 06</a></li>
            <li className='sub-item'><a href='#'>Sub Item 07</a></li>
            <li className='sub-item more'>
              <a className='more-btn' href='#'>More Items <i className='fas fa-angle-right'></i> </a>
              <ul className='more-menu'>
                <li className='more-item'><a href='#'>More Item 01</a></li>
                <li className='more-item'><a href='#'>More Item 02</a></li>
              </ul>
              </li>
          </ul>
          </li>
          <li className='menu-item'> <a href='#'>Services</a></li>
          <li className='menu-item'> <a href='#'>About</a></li>
          <li className='menu-item'> <a href='#'>Contact</a></li>
        </ul>
      </div>
      <div className="menu-btn" onClick={() =>{setMenuOpen(true)}}></div>
    </header>
  )
}

export default Navigation