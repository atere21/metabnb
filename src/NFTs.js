import React from "react";
import "./NFTs.css";
import logo1 from "../src/img/logo1.png";
import logo2 from "../src/img/logo2.png";
import location from "../src/img/location.png"
import ProductNft from "./ProductNft";
import NFT1 from "../src/img/frame6.png"
import NFT2 from "../src/img/frame7.png"


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
            {" "}
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
        <div>
            <ProductNft NFT1="Desert King"
            NFT2='2345km away' NFT3='1MBT per night'
            NFT4='available for 2 weeks stay' image={NFT1}
            />
            {/* <ProductNft />
            <ProductNft />
            <ProductNft /> */}
        </div>
        {/* <div>
            <ProductNft />
            <ProductNft />
            <ProductNft />
            <ProductNft />
        </div> */}
    </div>
  );
}

export default NFTs;
