import {h} from 'preact';
import styles from './Footer.module.css';

import { Wechat, Github } from './Icons';

export default function Footer() {
  return (
    <div className={styles.Main}>
      <div className={styles.Content}>
        <div>
          <h3>Jimmy's Personal Website</h3>
          <p>{`</>`} with Preact & NodeJS</p>
        </div>
        
        <div className={styles.Contact}>
          <h3>Contact</h3>
          <div className={styles.ContactItem}>
            <p style={{color: '#aaaaaa'}}>Email</p>
            <p>jwwang.03@outlook.com</p>
          </div>
        </div>

        <div className={styles.SocialMedia}>
          <Wechat />
          <Github />
        </div>
      </div>
      
      <div className={styles.End}>
        <p>2021</p>
      </div>
    </div>
  )
}