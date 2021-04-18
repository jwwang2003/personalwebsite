import {h} from 'preact';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const names = ['Jimmy Wang', 'Jun Wei Wang', '王俊崴'];

export default function Navbar() {

  // Alternative names...
  const [cN, setCN] = useState(0);
  const nameChange = () => {
    if(cN === names.length - 1) setCN(0);
    else setCN(cN + 1);
  }

  return (
    <div className={styles.Main}>
      {/* 我的名字。。。 */}
      <div className={styles.Name}>
        <h2 onClick={nameChange}>{names[cN]}</h2>
      </div>

      {/* 链接 */}
      <div className={styles.Links}><Links /></div>

      {/* 换语言*/}
      <div className={styles.Links}>{}</div>
    </div>
  )
}

function Links() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
    </div>
  )
}