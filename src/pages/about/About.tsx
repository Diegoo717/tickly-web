import React from "react";
import { NavBar } from "../../components/common/navigation/navbar/NavBar";
import Footer from "../../components/common/navigation/footer/Footer";
import { AboutHero } from '../../components/about/AboutHero';

export const About = () => {
  return (
    <>
      <NavBar />
      <AboutHero />
      <Footer />
    </>
  );
};
