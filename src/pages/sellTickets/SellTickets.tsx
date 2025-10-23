import React from 'react'
import { NavBar } from '../../components/common/navigation/navbar/NavBar';
import Footer from '../../components/common/navigation/footer/Footer';
import { SellTicketsForm } from '../../components/sellTickets/SellTicketsForm';

export const SellTickets = () => {
  return (
    <>
        <NavBar />
        <SellTicketsForm />
        <Footer />
    </>
  )
}
