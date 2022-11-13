import React from 'react'
import "./ProductNft.css"
import star from "../src/img/star.png";

function ProductNft({NFT1, NFT2, NFT3, NFT4, image, rating}) {
  return (
    <div className='productNft'>
         <div className='Product-Nft1'>
         <img src={image} alt="" id="" className="" />
        <div className="product__div2">
          <div className="col__nft">
            <span id="span__one__nft">{NFT1}</span>
            <span id="span__two__nft">{NFT2}</span>
          </div>
          <div className="col2">
            <span className="span__three__nft">{NFT3} </span>
            <span className="span__four__nft">{NFT4}</span>
          </div>
         </div>
         <div className="product__rating__nft">
        <img src={star} alt="" />
        
      </div>
         </div>
    </div>
  )
}

export default ProductNft