import React from 'react'
import "./Home.css"
import Hero from '../../components/homeComponents/hero/Hero'
import About from '../../components/homeComponents/about/About'
import Products from '../../components/homeComponents/products/Products'
import Menu from '../../components/homeComponents/menu/Menu'
import Contact from '../../components/homeComponents/contact/Contact'

function Home() {
  return (
    <div className='Home'>
      <Hero/>
      <About/>
      <Products/> 
      <Menu/>
      <Contact/>
    </div>
  )
}

export default Home
