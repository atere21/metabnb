import React from 'react'
import './Header.css'
import logo1 from '../src/img/logo1.png'
import logo2 from '../src/img/logo2.png'

function Header() {
  return (
    <div className='header'>

        <img src={logo1} alt=''id='logo1' className='logo' />
        <img src={logo2} alt='' className='logo'/>
        <ul className='header-menu'>
            <li>Home</li>
            <li>Place to stay</li>
            <li>NFTs</li>
            <li>Community</li>

        </ul>
    </div>
  )
}

export default Header