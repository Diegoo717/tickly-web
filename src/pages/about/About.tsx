import React from "react";
import { SmartNavBar } from "../../components/common/navigation/navbar/SmartNavBar"; 
import Footer from "../../components/common/navigation/footer/Footer";
import { AboutHero } from '../../components/about/AboutHero';

export const About = () => {
  return (
    <>
      <SmartNavBar /> 
      <AboutHero />
      <Footer />
    </>
  );
};