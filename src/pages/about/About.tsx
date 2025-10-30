import React, { useEffect } from "react";
import { SmartNavBar } from "../../components/common/navigation/navbar/SmartNavBar"; 
import Footer from "../../components/common/navigation/footer/Footer";
import { AboutHero } from '../../components/about/AboutHero';

export const About = () => {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <SmartNavBar /> 
      <AboutHero />
      <Footer />
    </>
  );
};