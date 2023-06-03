import React from 'react'

import { Hero, About, Pricing, Contact } from '../components'

const Home = () => {
  return (
    <div style={{ paddingTop: '5.25rem' }}>
        <Hero />
        <About />
        <Pricing />
        <Contact />
    </div>
  )
}

export default Home