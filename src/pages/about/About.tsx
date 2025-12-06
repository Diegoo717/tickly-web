import { useEffect } from "react";
import { SmartNavBar } from "../../components/common/navigation/navbar/SmartNavBar";
import Footer from "../../components/common/navigation/footer/Footer";
import { AboutHero } from "../../components/about/AboutHero";
import { SEO } from "@/components/common/seo/SEO";

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="About Us"
        description="Connecting people with moments that matter. Discover our story."
        keywords="about tickly, our mission, company story, ticket platform"
      />
      <SmartNavBar activePage="about"/>
      <AboutHero />
      <Footer />
    </>
  );
};
