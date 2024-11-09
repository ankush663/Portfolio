import React from "react";
import styles from "./CSS/about.module.css";

const About = () => {
  return (
    <div id="about" className={`${styles.aboutBanner} pt-20 pb-10`}>
      <h2 className={`text-black text-5xl text-center pt-5 ${styles.about_heading}`}><strong>About Me</strong></h2>
      <div className={styles.aboutImgText}>
        <img
          className={styles.profile}
          src="images/My-Profile.jpg"
          alt="good"
          data-aos="fade-right"
        />
        <p className={`text-black text-justify ${styles.aboutText}`} data-aos="fade-left">
          Hi, I'm <i className="text-blue-500">Ankush Thakur</i>, a web
          developer who loves building websites that are easy to use and look
          great. I work with front-end to make sure everything runs smoothly.
          When I'm not coding, I like to learn about new trends in web
          development and explore different hobbies. I'm always open to
          connecting and working on new projects!
        </p>
      </div>
    </div>
  );
};

export default About;
