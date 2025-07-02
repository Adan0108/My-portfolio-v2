import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
import AboutExperience from "./AboutModel/AboutExperience";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* 3D model takes up 50% */}
        <figure className={styles.hero3dLayout}>
          <AboutExperience />
        </figure>

        {/* About items take up 50% */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Cursor Icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Front end developer</h3>
              <p>I'm a front end developer building responsive and optimized sites</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/serverIcon.png")}
              alt="Server Icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Back end developer</h3>
              <p>I have experience developing back-ends with databases and REST APIs</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/serverIcon.png")}
              alt="Server Icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Full stack developer</h3>
              <p>I’ve built full apps with React and MongoDB, including authentication systems</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
