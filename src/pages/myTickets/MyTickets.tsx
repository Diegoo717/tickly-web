import React from 'react'
import { SmartNavBar } from '../../components/common/navigation/navbar/SmartNavBar';
import Footer from '../../components/common/navigation/footer/Footer';
import { MyTicketsContent } from '../../components/myTickets/MyTicketsContent';

export const MyTickets = () => {
  return (
    <>
        <SmartNavBar />
        <MyTicketsContent />
        <Footer />
    </>
  )
}
