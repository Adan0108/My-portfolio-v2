import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
  const desc = `I’m a third-year Software Engineering student passionate about designing and developing scalable and efficient software solutions. I’m equally enthusiastic about both frontend and backend development.`;

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={`${styles.title} rgb-outline`}>
          I’m Quang Anh
        </h1>

        <div className={styles.codeEditor}>
          <div className={styles.codeHeader}>
            <span className={styles.ctrl} style={{ background: '#f25347' }} />
            <span className={styles.ctrl} style={{ background: '#fdbc40' }} />
            <span className={styles.ctrl} style={{ background: '#33c748' }} />
            <span className={styles.filename}>main.js</span>
          </div>
          <div className={styles.codeContent}>
            {desc}
          </div>
        </div>

        {/* Social icons as images */}
        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/in/quang-anh-le-6b4616214/" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl('contact/linkedinIcon.png')} alt="LinkedIn" />
          </a>
          <a href="https://github.com/Adan0108" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl('contact/githubIcon.png')} alt="GitHub" />
          </a>
          <a href="mailto:lequanganh0108@gmail.com">
            <img src={getImageUrl('contact/emailIcon.png')} alt="Email" />
          </a>
        </div>

        <a
          href="mailto:lequanganh0108@gmail.com"
          className={`${styles.contactBtn} rgb-outline`}
        >
          Contact me
        </a>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src={getImageUrl('/hero/My_photo.jpg')}
          alt="Hero"
          className={styles.heroImg}
        />
      </div>
    </section>
  );
};
