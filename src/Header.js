import React, {useState} from 'react'
import './Header.css'
import logo1 from '../src/img/logo1.png'
import logo2 from '../src/img/logo2.png'
import Modal from './Modal'
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [openModal, setOpenModal, ] = useState(true);
  
  return (
    <div className='header'>
      <MenuIcon className='menu' id='menu-btn' />
        
        <img src={logo1} alt=''id='logo1' className='logo' />
        <img src={logo2} alt='' className='logo'/>
        <ul className='header-menu' id='header-menu2'>
            <a href='./'><li>Home</li></a>
            <a href='./NFTs'><li>Place to stay</li></a>
            <a href='./'> <li>NFTs</li></a>
            <a href='./'><li>Community</li></a>
            
            <div className='modal-btn'>
             <button onClick={ () => setOpenModal (true)}
             className='modalButton'>
              Connect Wallet
              </button>
              <Modal open={openModal}
              onClose={ () => setOpenModal(false)}  />
           
           
           </div>
           </ul>
           
    </div>
  )
}

export default Header