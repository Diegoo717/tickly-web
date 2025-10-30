import React from 'react'
import Footer from '../../components/common/navigation/footer/Footer';
import { EventsExplorer } from '../../components/events/eventsExplorer/EventsExplorer';
import { SmartNavBar } from '../../components/common/navigation/navbar/SmartNavBar';

export const FindEvents = () => {
  return (
    <>
        <SmartNavBar />
        <EventsExplorer />
        <Footer />
    </>
  )
}
