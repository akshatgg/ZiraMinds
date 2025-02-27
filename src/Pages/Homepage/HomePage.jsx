import React from 'react'
import Hero from './Hero'
import KeyFeatures from './KeyFeatures'
import OurAISolutions from './OurAISolutions'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <KeyFeatures />
      <OurAISolutions />
      <Footer />
    </div>
  )
}

export default HomePage
