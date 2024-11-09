import React from "react";
import styles from "./CSS/projects.module.css"
import { useState } from "react";
import Html_css_project from "./Projects/Html_css_project";
import Javascript_project from "./Projects/Javascript_project";
import React_project from "./Projects/React_project";

const Projects = () => {
  const [moved, setMoved] = useState(false);
  const [color, setColor] = useState("");

  const handleButtonClick = (label) => {
    setMoved(true);
    setColor(label);
  };

  function closeComponent(){
    setMoved(false);
    setColor('')
  }

  return (
    <div id="projects" className={`bg-black pt-10 ${styles.clip_banner}`}>
      <h2 className={`text-white text-5xl text-center ${styles.projects_heading} mt-10`}>
        <strong>My Projects</strong></h2>

      <div className={`${styles.project_container} mt-14`}>
        <div className={`${styles.projects} ${moved ? styles.move_left : ""}`}>
          <button
            className={`py-2 px-4 rounded-md border-2 border-gray-500 ${
              color === "HTML and CSS Project"
                ? "bg-black text-blue-500"
                : "bg-blue-500 text-white"
            }`}
            onClick={() => handleButtonClick("HTML and CSS Project")}
          >
            HTML and CSS Project
          </button>

          <button
            className={` py-2 px-4 rounded-md border-2 border-gray-500 ${
              color === "JavaScript Project"
                ? "bg-black text-blue-500"
                : "bg-blue-500 text-white"
            }`}
            onClick={() => handleButtonClick("JavaScript Project")}
          >
            JavaScript Project
          </button>

          <button
            className={`py-2 px-4 rounded-md border-2 border-gray-500 ${
              color === "React Project"
                ? "bg-black text-blue-500"
                : "bg-blue-500 text-white"
            }`}
            onClick={() => handleButtonClick("React Project")}
          >
            React Project
          </button>
        </div>

        <div className={`${styles.project_details} ${moved ? styles.move_right : ""}`}>
          {color === "HTML and CSS Project" && (
            <Html_css_project onClose={closeComponent}></Html_css_project>
          )}

          {color === "JavaScript Project" && <Javascript_project onClose={closeComponent} />}

          {color === "React Project" && <React_project onClose={closeComponent} />}
        </div>
      </div>
    </div>
  );
};

export default Projects;
