import { h } from 'preact'
import { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import 'tailwindcss/tailwind.css'

// animate on scroll library
import AOS from 'aos'
import 'aos/dist/aos.css'

import { Home, Blog, Projects, Resume } from './pages'
import { HeaderCard, Pagenav } from './parts'

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true
    })
  })
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="400">
        <HeaderCard />
      </div>
      <div data-aos="fade-in" data-aos-duration="400">
        <Pagenav />
      </div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </Switch>
    </div>
  )
}
