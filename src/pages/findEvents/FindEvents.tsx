import React from 'react'
import { NavBar } from '../../components/common/navigation/navbar/NavBar';
import Footer from '../../components/common/navigation/footer/Footer';
import { EventsExplorer } from '../../components/events/eventsExplorer/EventsExplorer';

export const FindEvents = () => {
  return (
    <>
        <NavBar />
        <EventsExplorer />
        <Footer />
    </>
  )
}
