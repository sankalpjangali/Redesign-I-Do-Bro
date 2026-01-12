import HeroSection from '../components/Sections/HeroSection';
import AboutSection from '../components/Sections/AboutSection';
import SolutionsSection from '../components/Sections/SolutionsSection';
import ImpactSection from '../components/Sections/ImpactSection';
import ResourcesSection from '../components/Sections/ResourcesSection';
import ContactSection from '../components/Sections/ContactSection';
import TeamSection from '../components/Sections/TeamSection';
import TickerDemo from '@/components/Sections/ticker';
import AllInOneBlogBuilder from '@/components/Sections/admin_blog';
export default function Home() {
  return (
    <>
    {/* <AllInOneBlogBuilder /> */}
    <HeroSection />
    {/* <TickerDemo /> */}
    <AboutSection />
    <SolutionsSection />
    <ImpactSection />
    <TeamSection />
    {/* <ResourcesSection /> */}
    {/* <ContactSection /> */}
    </>
  );
}