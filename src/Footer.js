import React from 'react'
import './Footer.css'
import footerLogo from '../src/img/footerLogo.png'
import footerLogo2 from '../src/img/footerLogo2.png'
import facebook from '../src/img/facebook.png'
import IG from '../src/img/IG.png'
import tweet from '../src/img/tweet.png'
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <div className='footer' id='foot'>
        <div className='left-side' >
        <img src={footerLogo} alt='' id='footerLogo'/>
        <img src={footerLogo2} alt='' id='footerLogo2'/>
        <div className='social-icons'>
          <a><img id='fbk' src={facebook} alt=''/></a>
          <a><img src={IG} alt=''/></a>
          <a><img src={tweet} alt=''/></a>
          </div>
          <div className='copyright'>
          <CopyrightIcon className="srch-icon" />
          <h4>2022 Metabnb</h4>
          </div>
          <div className='middle'>
            <div className='first-group'>
             <h4 id='h4' >Community</h4>
             <a href=''><span>NFT</span></a>
             <a href=''><span>Tokens</span></a>
             <a href=''> <span>Landlords</span></a>
             <a  href=''><span>Discord</span></a>
             </div>
        </div>
        <div className='middle2'>
          <div className='second-group'>
            <h4 id='h4'>Places</h4>
            <a href=''><span>Castle</span></a>
            <a href=''><span>Forms</span></a>
            <a href=''><span>Beach</span></a>
            <a href=''><span>Learn more</span></a>
            </div>
        </div>

        <div className='middle3'>
          <div className='third-group'>
            <h4 id='h4'>About Us</h4>
            <a href=''><span>Road map</span></a>
            <a href=''><span>creators</span></a>
            <a href=''><span>career</span></a>
            <a href=''><span>contact us</span></a>
         </div> 
         </div>
        </div>
    </div>
  )
}

export default Footer