import { h } from 'preact'
import React, { useEffect } from 'react'
import { hydrate, render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
// preact developer tools
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  require('preact/debug')
}

import App from './App'

const rootElement = document.body

function MAIN() {
  return (
    <Router>
      <App />
    </Router>
  )
}

function Renderer() {
  hydrate(<MAIN />, rootElement)
}

Renderer()

// hot module reloading
if (module.hot) {
  module.hot.accept('./App', function () {
    Renderer()
  })
}
