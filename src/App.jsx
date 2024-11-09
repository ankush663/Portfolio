import "./App.css";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 100 }); // Initialize AOS with desired duration
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <HeroSection></HeroSection>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
