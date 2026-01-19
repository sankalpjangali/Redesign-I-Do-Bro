import React from "react";

import HeroSectionContact from "../components/Sections/HeroSectionContact";
import ContactMethods from "../components/Sections/ContactMethods";
import ContactForms from "../components/Sections/ContactForms";
import TrustElements from "../components/Sections/TrustElements";
import LocationInfo from "../components/Sections/LocationInfo";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <main>
        {/* <HeroSectionContact /> */}
        {/* <ContactMethods /> */}
        <ContactForms />
        {/* <TrustElements /> */}
        <LocationInfo />
      </main>
    </div>
  );
};

export default ContactPage;
