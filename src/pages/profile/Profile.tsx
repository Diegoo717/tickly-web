import React from "react";
import { SmartNavBar } from "../../components/common/navigation/navbar/SmartNavBar";
import Footer from "@/components/common/navigation/footer/Footer";
import { ProfileContent } from "../../components/profileContent/ProfileContent";
import { SEO } from "@/components/common/seo/SEO";

export const Profile = () => {
  return (
    <>
      <SEO
        title="Profile"
        description="Manage your account information and personalize your event recommendations."
        keywords="profile, account settings, user profile, my account, preferences"
      />
      <SmartNavBar/>
      <ProfileContent />
      <Footer />
    </>
  );
};
