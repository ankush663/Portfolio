import React from "react";
import styles from "./CSS/skills.module.css";


const Skills = () => {
  return (
    <div id="skills" className={`bg-black pt-10 ${styles.clip_banner} h-[400px]`}>
      <h2 className={`text-white text-5xl text-center ${styles.skills_heading}`}><strong>Skills</strong></h2>
      <div
        className={`mt-10 ${styles.all_skills}`}
        data-aos="fade-right"
      >
        <div className={`${styles.individual}`}>
          <img className={`${styles.skills}`} src="images/html.png" alt="" />
          <p className="text-white ">HTML</p>
        </div>

        <div className={`${styles.individual}`}>
          <img className={`${styles.skills}`} src="images/css.png" alt="" />
          <p className="text-white">CSS</p>
        </div>

        <div className={`${styles.individual}`}>
          <img className={`${styles.skills}`} src="images/folder.png" alt="" />
          <p className="text-white">JS</p>
        </div>

        <div className={`${styles.individual}`}>
          <img className={`${styles.skills}`} src="images/physics.png" alt="" />
          <p className="text-white">React</p>
        </div>

        <div className={`${styles.individual}`}>
          <img className={`${styles.skills}`} src="images/tailwind-css.png" alt="" />
          <p className="text-white">Tailwind CSS</p>
        </div>

        <div className={`${styles.individual}`}>
          <img className={`${styles.skills}`} src="images/bootstrap.png" alt="" />
          <p className="text-white">Bootstrap</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
