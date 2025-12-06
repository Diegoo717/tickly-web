import { useEffect } from "react";
import Footer from "../../components/common/navigation/footer/Footer";
import { EventsExplorer } from "../../components/events/eventsExplorer/EventsExplorer";
import { SmartNavBar } from "../../components/common/navigation/navbar/SmartNavBar";
import { SEO } from "@/components/common/seo/SEO";

export const FindEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Discover Events"
        description="Thousands of events at your fingertips. Find your next adventure."
        keywords="find events, discover concerts, sports tickets, festival tickets, entertainment events"
      />
      <SmartNavBar activePage="discover-events"/>
      <EventsExplorer />
      <Footer />
    </>
  );
};
