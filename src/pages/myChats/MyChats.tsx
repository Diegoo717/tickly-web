import React, { useEffect } from "react";
import { SmartNavBar } from "../../components/common/navigation/navbar/SmartNavBar";
import Footer from "../../components/common/navigation/footer/Footer";
import { SEO } from "@/components/common/seo/SEO";
import { MyChatsContent } from "@/components/social/myChatsContent/MyChatsContent";

export const MyChats = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <SEO
        title="My Chats"
        description="Connect with other attendees and discuss your upcoming events."
        keywords="chat rooms, event chat, tickly chat, messaging, event community"
      />
      <SmartNavBar />
      <MyChatsContent />
      <Footer />
    </>
  );
};
