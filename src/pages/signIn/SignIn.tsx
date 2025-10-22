import React from 'react'
import { NavBar } from '../../components/common/navigation/navbar/NavBar';
import Footer from '../../components/common/navigation/footer/Footer';
import { SignInForm } from '../../components/auth/SignInForm';

export const SignIn = () => {
  return (
    <>
    <NavBar />
       <SignInForm />
    <Footer />
    </>
  )
}
