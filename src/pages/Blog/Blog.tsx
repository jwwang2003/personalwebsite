import {h} from 'preact';

import styles from './Blog.module.css';

export default function Blog() {
  return (
    <div className={styles.Main}>
      <div className={styles.Bar}>
        <input placeholder="Search" />
      </div>
     
    </div>
  )
}