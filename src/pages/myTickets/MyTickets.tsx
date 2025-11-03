import React, { useEffect } from 'react';
import { SmartNavBar } from '../../components/common/navigation/navbar/SmartNavBar';
import Footer from '../../components/common/navigation/footer/Footer';
import { MyTicketsContent } from '../../components/myTickets/MyTicketsContent';
import { SEO } from '@/components/common/seo/SEO';

export const MyTickets = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="My Tickets"
        description="Your complete event journey, beautifully organized in one place."
        keywords="my tickets, event tickets, ticket management, upcoming events, purchased tickets, event collection"
      />
      <SmartNavBar />
      <MyTicketsContent />
      <Footer />
    </>
  );
};