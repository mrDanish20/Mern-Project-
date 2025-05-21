import React from 'react'
import AboutNavbar from './AboutNavbar'
import AboutUs from './Aboutus'
import Footer from './Footer'
import Dinning from './Dinning'
import Bannar from './Bannar'


export default function About() {
  return (
    <div>
      <AboutNavbar />
      <AboutUs />
      <Bannar />

      {/* <Dinning /> */}
      <Footer />
    </div>
  )
}
