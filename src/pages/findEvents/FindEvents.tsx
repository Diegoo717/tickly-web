import React, { useEffect } from 'react'
import Footer from '../../components/common/navigation/footer/Footer';
import { EventsExplorer } from '../../components/events/eventsExplorer/EventsExplorer';
import { SmartNavBar } from '../../components/common/navigation/navbar/SmartNavBar';

export const FindEvents = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
        <SmartNavBar />
        <EventsExplorer />
        <Footer />
    </>
  )
}
