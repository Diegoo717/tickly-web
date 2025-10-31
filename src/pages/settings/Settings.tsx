import React from 'react'
import { SmartNavBar } from '../../components/common/navigation/navbar/SmartNavBar';
import Footer from '../../components/common/navigation/footer/Footer';
import { SettingsContent } from '../../components/settings/SettingsContent';

export const Settings = () => {
  return (
    <>
        <SmartNavBar />
        <SettingsContent />
        <Footer />
    </>
  )
}
