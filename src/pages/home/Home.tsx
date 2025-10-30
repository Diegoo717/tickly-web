import React from "react";
import { Hero } from "../../components/home/sections/hero/Hero";
import styles from "./Home.module.css";
import { AIFeature } from '../../components/home/sections/aIFeature/AIFeature';
import { SocialFeature } from '../../components/home/sections/socialFeature/SocialFeature';
import { HowWorks } from '../../components/home/sections/howWorks/HowWorks';
import { Footer } from '../../components/common/navigation/footer/Footer';
import { SmartNavBar } from '../../components/common/navigation/navbar/SmartNavBar';

export const Home = () => {
  return (
    <>
      <SmartNavBar />
      <Hero />
      <AIFeature />
      <SocialFeature />
      <HowWorks />
      <Footer />
    </>
  );
};
