import React, { useEffect, useRef } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Header from './components/Header'
import OurSystem from './components/OurSystem'
import AboutUs from './components/AboutUs'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <OurSystem />
      <AboutUs />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default App
