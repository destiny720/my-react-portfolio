import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import HeroImage2 from "../components/HeroImage2";
import Form from "../components/formContent";

const Contact = () => {
  return (
    <div>
    <NavBar />
    <HeroImage2 heading="CONTACT." 
    text="Let have a chat " />

    <Form />
    <Footer />
  </div>
  )
}

export default Contact