import React from "react";
import styles from "../CSS/education.module.css"

const Tenth = () => {
  return (
    <div
      className={`${styles.education_details} text-center bg-gray-800`}
      data-aos="fade-right"
    >
      <h2 className="text-white">
        <u>School Name</u>:- Sarvodya Bal Vidhyalaya(A-Block VikasPuri)
      </h2>
      <h4 className="mt-4 text-white">Marks:- 60%</h4>
      <button className="text-white bg-blue-500 py-2 px-2 mt-4">
        <a href="https://drive.google.com/file/d/1aYysDNWcCl9O7RmgtaXBR4EraN5kKBSs/view?usp=drive_link">
        Link to My Marksheet
        </a>
      </button>
    </div>
  );
};

export default Tenth;
