import React from "react";
import "./NFTs.css";
import logo1 from "../src/img/logo1.png";
import logo2 from "../src/img/logo2.png";
import location from "../src/img/location.png"
import ProductNft from "./ProductNft";
import NFT1 from "../src/img/frame5.png"
import NFT2 from "../src/img/frame1.png"
import NFT3 from "../src/img/nft4-img.png"
import NFT4 from "../src/img/nft5-img.png"

import NFT6 from "../src/img/frame6.png"
import NFT7 from "../src/img/frame7.png"
import NFT8 from "../src/img/frame8.png"
import NFT9 from "../src/img/nft8.png"
import NFT10 from "../src/img/nft9.png"
import NFT11 from "../src/img/nft10.png"
import NFT11_ from "../src/img/nft11.png"
import NFT12 from "../src/img/nft12.png"
import NFT13 from "../src/img/nft13.png"
import NFT14 from "../src/img/nft14.png"
import NFT15 from "../src/img/nft15.png"
import NFT16 from "../src/img/nft16.png"

function NFTs() {
  return (
    <div className="nft">
      <div className="connect2">
        <img src={logo1} alt="" id="logo1" className="logo-nft1" />
        <img src={logo2} alt="" className="logo-nft" />
        <ul className="header-nft">
          <a href="./">
            <li>Home</li>
          </a>
          <a href="./">
            <li>Place to stay</li>
          </a>
          <a href="./NFTs">
            
            <li>NFTs</li>
          </a>
          <a href="./">
            <li>Community</li>
          </a>
          {/* <Modal/> */}
        </ul>
        <button className="btn5">Connect Wallet</button>
      </div>
      <div className="header-menu">
        <ul className="list-menu">
          <li>Restaurant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>Fantast city</li>
          <li>Beach</li>
          <li>Carbins</li>
          <li>Off-grid</li>
          <li>Farm</li>
        </ul>
      </div>
      <div className="btn6">
      <button id="location">Location</button>
      <img src={location} alt='' id="location-png"/>
      </div>
        <div className="row1">
            <ProductNft NFT1="Desert King"
            NFT2='2345km away' NFT3='1MBT per night'
            NFT4='available for 2 weeks stay' image={NFT1}
            />
            <ProductNft  NFT1="Desert King"
            NFT2='2345km away' NFT3='1MBT per night'
            NFT4='available for 2 weeks stay' image={NFT6}/>
            <ProductNft NFT1="Desert King"
            NFT2='2345km away' NFT3='1MBT per night'
            NFT4='available for 2 weeks stay' image={NFT7}/>
            <ProductNft NFT1="Desert King"
            NFT2='2345km away' NFT3='1MBT per night'
            NFT4='available for 2 weeks stay' image={NFT8}/> 
        </div> 
         <div className="row2">
            <ProductNft  NFT1="Desert King"
            NFT2='2345km away' NFT3='1MBT per night'
            NFT4='available for 2 weeks stay' image={NFT2}/>
            <ProductNft NFT1="Desert King"
            NFT2='2345km away' NFT3='1MBT per night'
            NFT4='available for 2 weeks stay' image={NFT9}/>
            <ProductNft NFT1="Desert King"
            NFT2='2345km away' NFT3='1MBT per night'
            NFT4='available for 2 weeks stay' image={NFT10}/>
            <ProductNft NFT1="Desert King"
            NFT2='2345km away' NFT3='1MBT per night'
            NFT4='available for 2 weeks stay' image={NFT11}/>
        </div> 
        <div className="row2">
            <ProductNft  NFT1="Desert King"
            NFT2='2345km away' NFT3='1MBT per night'
            NFT4='available for 2 weeks stay' image={NFT3}/>
            <ProductNft NFT1="Desert King"
            NFT2='2345km away' NFT3='1MBT per night'
            NFT4='available for 2 weeks stay' image={NFT11_}/>
            <ProductNft NFT1="Desert King"
            NFT2='2345km away' NFT3='1MBT per night'
            NFT4='available for 2 weeks stay' image={NFT12}/>
            <ProductNft NFT1="Desert King"
            NFT2='2345km away' NFT3='1MBT per night'
            NFT4='available for 2 weeks stay' image={NFT13}/>
        </div> 
        <div className="row2">
            <ProductNft  NFT1="Desert King"
            NFT2='2345km away' NFT3='1MBT per night'
            NFT4='available for 2 weeks stay' image={NFT4}/>
            <ProductNft NFT1="Desert King"
            NFT2='2345km away' NFT3='1MBT per night'
            NFT4='available for 2 weeks stay' image={NFT15}/>
            <ProductNft NFT1="Desert King"
            NFT2='2345km away' NFT3='1MBT per night'
            NFT4='available for 2 weeks stay' image={NFT14}/>
            <ProductNft NFT1="Desert King"
            NFT2='2345km away' NFT3='1MBT per night'
            NFT4='available for 2 weeks stay' image={NFT16}/>
        </div> 
    </div>
  );
}

export default NFTs;
