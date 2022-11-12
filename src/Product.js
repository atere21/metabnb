import React from "react";
import "./Product.css";
import star from "../src/img/star.png";
import frame1 from "../src/img/frame1.png";
import frame2 from "../src/img/frame2.png";
// import frame3 from "../src/img/frame3.png";
// import frame4 from "../src/img/frame4.png";

function Product({ title1, title2, title3, title4, image, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <img src={image} alt="" id="" className="" />
        <div className="product__div">
          <div className="col1">
            <span id="span__one">{title1}</span>
            <span id="span__two">{title2}</span>
          </div>
          <div className="col2">
            <span className="span__three">{title3} </span>
            <span className="span__four">{title4}</span>
          </div>
        </div>
      </div>
      <div className="product__rating">
        <img src={star} alt="" />
        {/* {Array(rating).fill().map((_, i) => (
            <p id='star'>⭐</p>
            ))} */}
      </div>
      
    </div>
  );
}

export default Product;
