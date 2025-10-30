import React, { useEffect } from "react";
import Footer from "../../components/common/navigation/footer/Footer";
import { SignUpForm } from "../../components/auth/SignUpForm";
import { SmartNavBar } from "../../components/common/navigation/navbar/SmartNavBar";

export const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SmartNavBar />
      <SignUpForm />
      <Footer />
    </>
  );
};
