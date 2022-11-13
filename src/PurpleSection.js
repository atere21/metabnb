import React from 'react'
import './PurpleSection.css'
import image7 from "../src/img/image7.png";
import image8 from "../src/img/image8.png";
import image9 from "../src/img/image9.png";

function PurpleSection() {
  return (
    <div className='purpleSection'>
        <div className='left-div'>
            <h2>
                Metabnb NFTs
            </h2>
            <span2>Discover our NFT gift card collection. Loyal <br />
            customers gets amazing gift cards which are <br/>
            traded as NFTs. These NFTs gives our customer <br />
            access to loads of our exclusive services.
            </span2>
            <div className='learn-more'>
            <a href=''><button id='btn4' type='submit'>Learn more</button></a>
            </div>
        </div>
             
        <div className='right-div'>
        
      <img src={image7} alt="" id="" className="" />
      <img src={image8} alt="" id="" className="" />
      <img src={image9} alt="" id="" className="" />
        </div>
        {/* <span style={{color: 'white'}}>purple div</span> */}

    </div>
  )
}

export default PurpleSection