import { h } from 'preact';
import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// preact developer tools
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

import './index.scss';
import App from './App';

const rootElement = document.body;

function Container() {
  return (
    <Router>
      <App />
    </Router>
  )
}

function Renderer() {
  if (rootElement!.hasChildNodes()) {
    hydrate(<Container />, rootElement);
  } else {
    render(<Container />, rootElement);
  }
}

Renderer();

if (module.hot) {
  module.hot.accept('./App', function () {
    Renderer();
  });
}
