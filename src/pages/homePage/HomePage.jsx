import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Idea from '../../components/Idea/Idea'
import CoursesPreview from '../../components/courses/CoursesPreview'
import Environment from '../../components/environment/Environment'
import HelpCenter from '../../components/helpCenter/HelpCenter'
import OurTeam from '../../components/ourTeam/OurTeam'
import Connect from '../../components/connect/Connect'
import Footer from '../../components/footer/Footer'
import Currency from '../../components/currency/Currency'


const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Idea/>
      <CoursesPreview/>
      <Environment/>
      <Currency/>
      <HelpCenter/>
      <OurTeam/>
      <Connect/>
      <Footer/>
    </div>
  )
}

export default HomePage
