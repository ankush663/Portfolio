import React, { useState, useEffect, useRef } from "react";
import styles from "./CSS/hero.module.css";

const HeroSection = () => {
  const [label, setLabel] = useState("");
  const text = "to the world of Website Development ";
  const [showExclamation, setShowExclamation] = useState(false);
  const intervalRef = useRef(null);

  const typeWriter = () => {
    let i = 0;
    intervalRef.current = setInterval(() => {
      setLabel(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(intervalRef.current);
        setShowExclamation(true);
      }
    }, 10);
  };

  useEffect(() => {
    typeWriter();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className={`bg-black h-auto md:h-[550px] ${styles.clip_banner} p-4 md:p-0 ${styles.hero} `}>
      <div className="max-w-[calc(100%-4rem)] h-0.5 bg-white mx-auto"></div>

      <div className="mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="md:text-left px-4 md:px-0">
          <p className={`text-white ${styles.hero_para} text-3xl md:text-5xl`}>
            Welcome {label}
            {showExclamation && <span className={`${styles.blinking} text-blue-500`}>!</span>}
          </p>

          <p className={`text-white mt-5 ${styles.small_para} text-sm md:text-base text-justify`}>
            Step into the world of website development, where innovative ideas come to life and digital experiences are crafted to engage and inspire!
          </p>

          <button className="text-white bg-blue-500 py-2 px-4 mt-10 rounded-md">My Resume</button>
        </div>

        <div className={`${styles.p_img}`}>
          <img className={`${styles.responsive}`} src="images/laptop.png" alt="Laptop" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
