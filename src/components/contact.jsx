import React from "react";
import { useState } from "react";

const Contact = () => {
  return (
    <div id="contact" className="mt-10 mb-10">
      <h2 className="text-black text-5xl text-center mb-10 contact_heading">
        <strong>Contact Details</strong>
        </h2>
      <div className="flex flex-wrap gap-4 contact_content">
        <div className="contact-details">
          <img className="contact-icons h-16 mx-auto" src="images/email.gif" alt="Email Icon" />
          <p>ankushthakur22111@gmail.com</p>
        </div>

        <div className="contact-details">
          <img className="contact-icons h-16 mx-auto" src="images/call.gif" alt="Phone Icon" />
          <p>9650835563</p>
        </div>

        <div className="contact-details">
          <img className="contact-icons h-16 mx-auto" src="images/home.gif" alt="Home Icon" />
          <p>
            Sanjay Enclave Uttam Nagar, <br />
            New Delhi-110059
          </p>
        </div>
      </div>

      <div class="social-media-container flex justify-center mt-10">
        <div class="social-media-links flex bg-blue-500 py-2 px-4 cursor-pointer">
          <p class="text-white">Social Media Links</p>
          <img src="images/right-arrow.png" className="w-6 ml-2" alt="arrow" />
        </div>

        <div class="icons flex items-center bg-blue-500 py-2 px-4 ml-2 gap-5">

        <a href="https://www.instagram.com/ankushthakur142/" target="_blank" rel="noopener noreferrer">
          <img src="images/instagram.png" className="h-5" alt="Instagram" />
        </a>

        <a href="https://www.linkedin.com/in/ankush-thakur-221670235/" target="_blank" rel="noopener noreferrer">
          <img src="images/linkedin.png" className="h-5" alt="LinkedIn" />
        </a>

        <a href="https://github.com/ankush663?tab=repositories" target="_blank" rel="noopener noreferrer">
          <img src="images/github.png" className="h-5" alt="Github" />
        </a>

        <a href="https://www.facebook.com/profile.php?id=100031029759659" target="_blank" rel="noopener noreferrer">
          <img src="images/facebook.png" className="h-5" alt="Facebook" />
        </a>

        </div>
      </div>
    </div>
  );
};

export default Contact;
