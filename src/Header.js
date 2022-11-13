import React from 'react'
import './Header.css'
import logo1 from '../src/img/logo1.png'
import logo2 from '../src/img/logo2.png'
import Modal from './Modal'

function Header() {
  return (
    <div className='header'>

        <img src={logo1} alt=''id='logo1' className='logo' />
        <img src={logo2} alt='' className='logo'/>
        <ul className='header-menu'>
            <a href='./'><li>Home</li></a>
            <a href='./'><li>Place to stay</li></a>
            <a href='./NFTs'> <li>NFTs</li></a>
            <a href='./'><li>Community</li></a>
            {/* <Modal/> */}
        </ul>
    </div>
  )
}

export default Header