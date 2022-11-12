import React from 'react'
import './HeroTwo.css'
import Product from './Product'

function HeroTwo() {
  return (
    <div className='heroTwo'>
        <div className='hero-text2'>
            <h3>Inspiration for your next adventure</h3>
        </div>
        <div className='home__row'>
            <Product/>
            <Product/>
            <Product />
            <Product />
        </div>
        <div className='home__row'>
            <Product />
            <Product />
            <Product />
            <Product />
            
        </div>
    </div>
  )
}

export default HeroTwo