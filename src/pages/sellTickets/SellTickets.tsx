import React from 'react'
import Footer from '../../components/common/navigation/footer/Footer';
import { SellTicketsForm } from '../../components/sellTickets/SellTicketsForm';
import { SmartNavBar } from '../../components/common/navigation/navbar/SmartNavBar';

export const SellTickets = () => {
  return (
    <>
        <SmartNavBar />
        <SellTicketsForm />
        <Footer />
    </>
  )
}
