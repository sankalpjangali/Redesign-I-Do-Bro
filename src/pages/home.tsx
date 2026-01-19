import HeroSection from "../components/Sections/HeroSection";
import AboutSection from "../components/Sections/AboutSection";
import SolutionsSection from "../components/Sections/SolutionsSection";
import ImpactSection from "../components/Sections/ImpactSection";
import ResourcesSection from "../components/Sections/ResourcesSection";
import ContactSection from "../components/Sections/ContactSection";
import TeamSection from "../components/Sections/TeamSection";
import CollaborativeSolutions from "@/components/Sections/collaborative_solution";
import AllInOneBlogBuilder from "@/components/Sections/admin_blog";
import MultiplierModel from "@/components/Sections/I_5";
import OfferingsPage from "@/components/Sections/ofering_hero";
import ApproachCards from "@/components/Sections/approch_cards";
import TrustedOrganizations from "@/components/Sections/company_trust";
export default function Home() {
  return (
    <>
      {/* <AllInOneBlogBuilder /> */}
      <HeroSection />
      <CollaborativeSolutions />
      <MultiplierModel />
      <OfferingsPage></OfferingsPage>
      <AboutSection />
      <TrustedOrganizations />
      {/* <SolutionsSection /> */}
      {/* <ImpactSection /> */}
      <ApproachCards />
      {/* <TeamSection /> */}
      {/* <ResourcesSection /> */}
      {/* <ContactSection /> */}
    </>
  );
}
