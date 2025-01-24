import React from 'react'
import "./Hero.css"

function Hero() {
  return (
    <div className='Hero'>
        <div className='overlayHero'>
            <div className="overlayHeroText">
                <p>Bienvenido, somos</p>
                <h1>Andinos</h1>
                <p>Donde los sabores del norte argentino cuentan su historia.</p>
                <button className="btnHero">
                    REGISTRATE
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero
