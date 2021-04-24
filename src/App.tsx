import {h} from 'preact';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Navbar, Footer } from './components';
import styles from './App.module.css';

import { HOME, BLOG, PROJECTS, RESUME } from './pages';

export default function App() {
  return (
    <div className={styles.Main}>
      <div className={styles.Nav}>
        <Navbar />
      </div>
      <div className={styles.Content}>
        <Switch>
          <Route path="/" exact children={HOME} />
          <Route path="/blog" children={BLOG} />
          <Route path="/projects" children={PROJECTS} />
          <Route path="/resume" children={RESUME} />
        </Switch>
      </div>
      <div className={styles.Footer}>
        <Footer />
      </div>
    </div>
  ) 
}