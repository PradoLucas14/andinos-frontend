import React from 'react'
import "./Home.css"
import Hero from '../../components/homeComponents/hero/Hero'
import About from '../../components/homeComponents/about/About'

function Home() {
  return (
    <div className='Home'>
      <Hero/>
      <About/>
    </div>
  )
}

export default Home
