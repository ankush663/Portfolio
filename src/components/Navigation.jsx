import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* <img src="images/student.png" className="h-10" alt="" /> */}
        <div className='text-white text-3xl'>
          ANKUSH THAKUR
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button className="hidden md:block ml-8 text-white bg-blue-500 py-2 px-4 rounded">
         <a href="https://drive.google.com/file/d/1W4ifqMxw4NioPW790j2Pd46yOu-bDuuE/view?usp=drive_link">My Resume</a>
        </button>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <ul className="flex flex-col items-center space-y-4 text-white font-semibold py-4">
            <li>
              <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            </li>
            <li>
              <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
            </li>
            <li>
              <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </li>
            
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;