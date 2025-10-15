import React from "react";
import { Hero } from "../../components/home/sections/hero/Hero";
import styles from "./Home.module.css";
import { NavBar } from "../../components/common/navigation/navbar/NavBar";
import { AIFeature } from '../../components/home/sections/aIFeature/AIFeature';
import { SocialFeature } from '../../components/home/sections/socialFeature/SocialFeature';

export const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AIFeature />
      <SocialFeature />
    </>
  );
};
