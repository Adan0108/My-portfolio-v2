import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a 
        href="/" 
        className={`${styles.title} rgb-outline`}
      >
        Portfolio
      </a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl('/nav/closeIcon.png')
              : getImageUrl('/nav/menuIcon.png')
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <ul
          className={`${styles.menuItems} ${
            menuOpen ? styles.menuOpen : ''
          }`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about" className="rgb-outline">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="rgb-outline">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="rgb-outline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="rgb-outline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
