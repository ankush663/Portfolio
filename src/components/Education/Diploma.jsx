import React from "react";
import styles from "../CSS/education.module.css";

const Diploma = () => {
  return (
    <div
      className={`${styles.education_details} text-center bg-gray-800`}
      data-aos="fade-right"
    >
      <h2 className="text-white">
        <u>Campus Name</u>:- Rajokari Institute of Technology, Delhi
      </h2>
      <h2 className="text-white mt-4">
        <u>Branch</u>:- Information Technology
      </h2>
      <h4 className="mt-4 text-white">Marks:- 75%</h4>
      <button className="text-white bg-blue-500 py-2 px-2 mt-4">
        Link to My Marksheet
      </button>
    </div>
  );
};

export default Diploma;
