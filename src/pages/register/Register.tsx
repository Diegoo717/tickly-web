import React, { useEffect } from "react";
import Footer from "../../components/common/navigation/footer/Footer";
import { SignUpForm } from "../../components/auth/SignUpForm";
import { SmartNavBar } from "../../components/common/navigation/navbar/SmartNavBar";
import { SEO } from "@/components/common/seo/SEO";

export const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Create Account"
        description="Join thousands discovering epic events. Sign up free in seconds."
        keywords="register, sign up, create account, join tickly, new account"
      />
      <SmartNavBar />
      <SignUpForm />
      <Footer />
    </>
  );
};
