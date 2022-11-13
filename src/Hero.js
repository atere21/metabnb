import React, {useState} from "react";
import Header from "./Header";
import "./Hero.css";
import vec2 from "../src/img/vec2.png";
import vec3 from "../src/img/vec3.png";
import vec4 from "../src/img/vec4.png";
import cartoon1 from "../src/img/cartoon1.png";
import cartoon2 from "../src/img/cartoon2.png";
import cartoon3 from "../src/img/cartoon3.png";
import cartoon4 from "../src/img/cartoon5.png";


function Hero() {
  // const [openModal, setOpenModal] = useState [true]
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="rentPlace">
          <h1 className="hero-text">
            Rent a <span>Place </span>away from <br /> <span>Home </span>
            in the <span>Metaverse</span>
          </h1>
          <p>
            We provide you access to luxury and affordable houses
            <br /> in the metaverse, get a chance to turn your <br />
            imagination to reality at your comfort zone
          </p>
          <div className="search">
            <input
              className="srch"
              type="search"
              name=""
              placeholder="search for location"
            ></input>

            <a href="#">
              <button className="btn">Search</button>
            </a>
          </div>
        </div >
        <div className="bottomPurple">
          <div className="img-vec">
            <div className="img-vec2">
            <img src={vec2} alt="" id="" className="vec2" />
            <h3 className="token">MBToken</h3>
            </div>
            <div className="img2">
            <img src={vec3} alt="" id="" className="vec3" />
            <h3 className="token1">METAMASK</h3>
            </div>
            <div className="opensea1">
            <img src={vec4} alt="" id="" className="vec4" />
            <h3 className="open">OpenSea</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="right-h">
        
        <button className="btn1">Connect Wallet</button>
      
        <div className="imagesDiv">
            <div className="img-div1">
             <img src={cartoon1} alt="" id="cartoon1" className="cartoon1" />
             <img src={cartoon2} alt="" id="" className="cartoon1" />
             </div>
             <div className="img-div3">
              <img src={cartoon3} alt="" id="" className="cartoon3" />
                 <img src={cartoon4} alt="" id="" className="cartoon4" />
                 </div>  
                 
        </div>
      </div>
    </div>
  );
}

export default Hero;
