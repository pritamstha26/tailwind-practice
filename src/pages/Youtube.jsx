import React from 'react'
import Navbar from '../component/course/Navbar'
import Hero from '../component/course/Hero'
import Analytics from '../component/course/Analytics'
import News from '../component/course/News'
import Subscription from '../component/course/Subscription'
import Footer from '../component/course/Footer'

export default function Youtube() {
  return (
    <div className=' bg-black  text-white h-screen   '>
      <Navbar />
      <Hero />
      <Analytics />
      <News />
      <Subscription />
      <Footer />
    </div>
  )
}
