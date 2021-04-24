import {h} from 'preact';

import styles from './Home.module.css';
import funny from './image.jpg';

export default function Home() {
  return (
    <div className={styles.Main}>
      <div className={styles.Banner}>
        <img src={funny} />
        <div className={styles.Text}>
          <p>Hi! I like tinkering with hardware and programming in C++ and Javascript.</p>
        </div>
      </div>
    </div>
  )
}