import React, { useEffect } from "react";
import Footer from "../../components/common/navigation/footer/Footer";
import { SellTicketsForm } from "../../components/sellTickets/SellTicketsForm";
import { SmartNavBar } from "../../components/common/navigation/navbar/SmartNavBar";

export const SellTickets = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SmartNavBar />
      <SellTicketsForm />
      <Footer />
    </>
  );
};
