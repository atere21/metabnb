import React from 'react'
import "./Product.css"
import frame1 from "../src/img/frame1.png";
// import frame2 from "../src/img/frame2.png";
// import frame3 from "../src/img/frame3.png";
// import frame4 from "../src/img/frame4.png";

function Product() {
  return (
    <div className='product'>
        <div className='product__info'> 
        <img src={frame1} alt="" id="" className="" />
        <p>Desert King</p>
        <p>2345km away</p>
        
            <p>1MBT per night</p>
            <p>available for 2weeks stay</p>
        
        </div>
        <div className='product__rating'>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
        </div>
    </div>
  )
}

export default Product