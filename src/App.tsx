import {h} from 'preact';
import { Navbar } from './components';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.Main}>
      <div className={styles.Nav}>
        <Navbar />
      </div>
      <div className={styles.Content}>
        
      </div>
    </div>
  ) 
}