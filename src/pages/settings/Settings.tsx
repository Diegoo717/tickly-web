import { SmartNavBar } from "../../components/common/navigation/navbar/SmartNavBar";
import Footer from "../../components/common/navigation/footer/Footer";
import { SettingsContent } from "../../components/settings/SettingsContent";
import { SEO } from "@/components/common/seo/SEO";

export const Settings = () => {
  return (
    <>
      <SEO
        title="Settings"
        description="Customize your preferences, notifications, and account settings."
        keywords="settings, account preferences, notifications, language settings, privacy"
      />
      <SmartNavBar />
      <SettingsContent />
      <Footer />
    </>
  );
};
