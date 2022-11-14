import React, {useState} from 'react'
import './Header.css'
import logo1 from '../src/img/logo1.png'
import logo2 from '../src/img/logo2.png'
import Modal from './Modal'

function Header() {
  const [openModal, setOpenModal] = useState(true);
  return (
    <div className='header'>

        <img src={logo1} alt=''id='logo1' className='logo' />
        <img src={logo2} alt='' className='logo'/>
        <ul className='header-menu'>
            <a href='./'><li>Home</li></a>
            <a href='./NFTs'><li>Place to stay</li></a>
            <a href='./'> <li>NFTs</li></a>
            <a href='./'><li>Community</li></a>
            
        </ul>
        <div>
             <button onClick={ () => setOpenModal (true)}
             className='modalButton'>
              Connect Wallet
              </button>
              <Modal open={openModal}
              onClose={ () => setOpenModal(false)}  />
           </div>
    </div>
  )
}

export default Header