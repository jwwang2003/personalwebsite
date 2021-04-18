import {h} from 'preact';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

import './index.css';
import App from './App';

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)