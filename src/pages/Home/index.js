import { h } from 'preact'
import { useState } from 'react'

import About from '../../parts/About'
import Skills from '../../parts/Skills'

function Home() {
  const [test, setTest] = useState(false)

  return (
    <div className="overflow-x-hidden">
      <div data-aos="fade-right" data-aos-duration="400" data-aos-delay="100">
        <About />
      </div>
      <div data-aos="fade-left" data-aos-duration="400" data-aos-delay="100">
        <Skills />
      </div>
    </div>
  )
}

export default Home
