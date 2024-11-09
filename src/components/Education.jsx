import React, { useState } from "react";
import styles from "./CSS/education.module.css";
import Tenth from "./Education/10th";
import Diploma from "./Education/Diploma";
import BTech from "./Education/B.Tech";

const Education = () => {
  const [education, setEducation] = useState("Diploma");

  const handleButton = (level) => {
    setEducation(level);
  };

  return (
    <div id="education" className="education pt-5 pb-10">
      <h2 className={`text-black text-5xl text-center mb-10 ${styles.education_heading}`}>
      <strong>Education Details</strong>
      </h2>

      <div className={`${styles.all_education}`}>
        <button
          className={education === "10th" ? "bg-blue-500" : "bg-black"}
          onClick={() => handleButton("10th")}
        >
          10th
        </button>

        <button
          className={education === "Diploma" ? "bg-blue-500" : "bg-black"}
          onClick={() => handleButton("Diploma")}
        >
          Diploma
        </button>

        <button
          className={education === "B.Tech" ? "bg-blue-500" : "bg-black"}
          onClick={() => handleButton("B.Tech")}
        >
          B.Tech
        </button>
      </div>

      {education === "10th" && <Tenth />}
      {education === "Diploma" && <Diploma />}
      {education === "B.Tech" && <BTech />}
    </div>
  );
};

export default Education;
