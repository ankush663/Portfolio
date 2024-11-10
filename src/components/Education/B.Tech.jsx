import React from "react";
import styles from "../CSS/education.module.css";

const BTech = () => {
  return (
    <div
      className={`${styles.education_details} text-center bg-gray-800`}
      data-aos="fade-right"
    >
      <h2 className="text-white">
        <u>University Name</u>:- PDM University, Bahadurgarh, Haryana
      </h2>
      <h2 className="mt-4 text-white">
        <u>Branch</u>:- Computer Science
      </h2>
      <h4 className="mt-4 text-white">CGPA:- 8.35</h4>
      <button className="text-white bg-blue-500 py-2 px-2 mt-4">
        <a href="https://drive.google.com/file/d/1qg3eZntsASr5Wa_VBVUf9q1lekvnMJWR/view?usp=drive_link">
        Link to My Marksheet
        </a>
      </button>
    </div>
  );
};

export default BTech;
