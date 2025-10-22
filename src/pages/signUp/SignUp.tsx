import React from 'react'
import { NavBar } from '../../components/common/navigation/navbar/NavBar';
import Footer from '../../components/common/navigation/footer/Footer';
import { SignUpForm } from '../../components/auth/SignUpForm';

export const SignUp = () => {
  return (
    <>
        <NavBar />
        <SignUpForm />
        <Footer />
    </>
  )
}
