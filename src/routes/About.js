import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import HeroImage2 from "../components/HeroImage2";
import AboutContent from "../components/AboutContent";


const About = () => {
  return (
    <div>
      <NavBar />
      {<HeroImage2 heading="ABOUT." 
      text="Im a friendly Front-End Developer." />}
      <AboutContent />

      <Footer />
    </div>
  )
}

export default About