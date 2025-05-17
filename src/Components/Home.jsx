import React from 'react'
import Navbar from './Navbar'
import Gallery from './Gallery'
import Bannar from './Bannar'
import Social from './Social'
import Footer from './Footer'
import Rooms from './Rooms'
import OurServices from './OurServices'
import CustomersReview from './CustomersReview'
import Blog from './Blog'
import HomeBlog from './HomeBlog'


export default function Home() {
  return (
    <div>

      <Navbar />
      <Gallery />
      {/* <Bannar /> */}
      {/* <OurServices /> */}
      <Rooms />
    <HomeBlog />
      {/* <CustomersReview /> */}
      <Footer />

    </div>
  )
}
