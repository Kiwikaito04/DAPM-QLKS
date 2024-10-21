import React from 'react'
import Navbar from './Components/Navbar'
import HomeContent from './Components/HomeContent';
import Footer from './Components/Footer'


function Home() {

  return (
    <div className="Home">
        <Navbar />
        <HomeContent />
        <Footer />
    </div>  )
}

export default Home