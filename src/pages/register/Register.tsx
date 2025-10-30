import React from 'react'
import Footer from '../../components/common/navigation/footer/Footer';
import { SignUpForm } from '../../components/auth/SignUpForm';
import { SmartNavBar } from '../../components/common/navigation/navbar/SmartNavBar';

export const Register = () => {
  return (
    <>
        <SmartNavBar />
        <SignUpForm />
        <Footer />
    </>
  )
}
