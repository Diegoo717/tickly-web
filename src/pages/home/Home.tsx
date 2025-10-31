import React from "react";
import { Hero } from "../../components/home/sections/hero/Hero";
import { AIFeature } from "../../components/home/sections/aIFeature/AIFeature";
import { SocialFeature } from "../../components/home/sections/socialFeature/SocialFeature";
import { HowWorks } from "../../components/home/sections/howWorks/HowWorks";
import { Footer } from "../../components/common/navigation/footer/Footer";
import { SmartNavBar } from "../../components/common/navigation/navbar/SmartNavBar";
import { SEO } from "../../components/common/seo/SEO";

export const Home = () => {
  return (
    <>
      <SEO
        title="Tickly"
        description="Your gateway to unforgettable experiences. Book events instantly."
        keywords="tickets, events, concerts, sports, theater, entertainment, tickly"
      />
      <SmartNavBar />
      <Hero />
      <AIFeature />
      <SocialFeature />
      <HowWorks />
      <Footer />
    </>
  );
};
