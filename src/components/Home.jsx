import React from 'react'
import NavBar from './NavBar'
import Carousel from './Carousel'
import Catalog from './Catalog'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Carousel/>
      <Catalog/>
      <Footer/>
    </div>
  )
}

export default Home