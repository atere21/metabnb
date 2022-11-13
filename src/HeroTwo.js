import React from 'react'
import './HeroTwo.css'
import Product from './Product'
import frame1 from "../src/img/frame1.png";
import frame2 from "../src/img/frame2.png";
import frame3 from "../src/img/frame3.png";
import frame4 from "../src/img/frame4.png";
import frame5 from "../src/img/frame5.png";
import frame6 from "../src/img/frame6.png";
import frame7 from "../src/img/frame7.png";
import frame8 from "../src/img/frame8.png";
import PurpleSection from './PurpleSection';
import Footer from './Footer';


function HeroTwo() {
  return (
    <div className='heroTwo'>
        <div className='hero-text2'>
            <h3>Inspiration for your next adventure</h3>
        </div>
        <div className='home__row'>
            <Product title1="Desert King"
             title2='2345km away' title3='1MBT per night'
             title4='available for 2 weeks stay' image={frame1} 
             rating ={5}/>
            <Product title1="Desert King"
             title2='2345km away' title3='1MBT per night'
             title4='available for 2 weeks stay' image={frame2} 
             rating ={5}/>
             <Product title1="Desert King"
             title2='2345km away' title3='1MBT per night'
             title4='available for 2 weeks stay' image={frame3} 
             rating ={5}/>
             <Product title1="Desert King"
             title2='2345km away' title3='1MBT per night'
             title4='available for 2 weeks stay' image={frame4}
             rating ={5}/>
            
        </div>
        <div className='home__row2'>
            <Product  title1="Desert King"
             title2='2345km away' title3='1MBT per night'
             title4='available for 2 weeks stay' image={frame5}
             rating ={5}/>
            <Product title1="Desert King"
             title2='2345km away' title3='1MBT per night'
             title4='available for 2 weeks stay' image={frame6}
             rating ={5}/>
            <Product title1="Desert King"
             title2='2345km away' title3='1MBT per night'
             title4='available for 2 weeks stay' image={frame7}
             rating ={5}/>
            <Product title1="Desert King"
             title2='2345km away' title3='1MBT per night'
             title4='available for 2 weeks stay' image={frame8}
             rating ={5}/>
            
        </div>
        <PurpleSection />
        <Footer />
    </div>
  )
}

export default HeroTwo