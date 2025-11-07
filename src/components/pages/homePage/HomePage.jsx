import React from 'react'
import Navbar from '../../navbar/Navbar'
import Hero from '../../hero/Hero'
import Idea from '../../Idea/Idea'
import CoursesPreview from '../../courses/CoursesPreview'
import Environment from '../../environment/Environment'
import CurrencySystem from '../../currencySystem/CurrencySystem'
import HelpCenter from '../../helpCenter/HelpCenter'
import OurTeam from '../../ourTeam/OurTeam'
import Connect from '../../connect/Connect'
import Footer from '../../footer/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Idea/>
      <CoursesPreview/>
      <Environment/>
      <CurrencySystem/>
      <HelpCenter/>
      <OurTeam/>
      <Connect/>
      <Footer/>
    </div>
  )
}

export default HomePage
