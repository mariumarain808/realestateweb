import React from 'react'
import Hero from '../components/Hero.js'
import WhatWeDo from '../components/Whatwedo.js'
import FeaturedP from '../components/FeaturedP.js'
import Propertiesav from '../components/Propertiesav.js'
import Newsletter from '../components/Newsletter.js'
export default function Home() {
  return (
    <div>
      <Hero/>
      <WhatWeDo/>
      <FeaturedP/>
      <Propertiesav/>
      <Newsletter/>
    </div>
  )
}
