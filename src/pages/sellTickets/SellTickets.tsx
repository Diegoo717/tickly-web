import React, { useEffect } from "react";
import Footer from "../../components/common/navigation/footer/Footer";
import { SellTicketsForm } from "../../components/sellTickets/SellTicketsForm";
import { SmartNavBar } from "../../components/common/navigation/navbar/SmartNavBar";
import { SEO } from "@/components/common/seo/SEO";

export const SellTickets = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Sell Tickets"
        description="Turn your event into a sold-out success. List now, sell faster."
        keywords="sell tickets, event organizer, list events, sell concert tickets, event management"
      />
      <SmartNavBar activePage="sell-tickets"/>
      <SellTicketsForm />
      <Footer />
    </>
  );
};
