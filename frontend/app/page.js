import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustedSchools from '@/components/sections/TrustedSchools';
import Testimonials from '@/components/sections/Testimonials';
import Features from '@/components/sections/Features';
import Portals from '@/components/sections/Portals';
import HowItWorks from '@/components/sections/HowItWorks';
import PlatformPreview from '@/components/sections/PlatformPreview';
import Pricing from '@/components/sections/Pricing';
import Referral from '@/components/sections/Referral';
import FAQ from '@/components/sections/FAQ';
import DemoModal from '@/components/modals/DemoModal';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedSchools />
        <Testimonials />
        <Features />
        <Portals />
        <HowItWorks />
        <PlatformPreview />
        <Pricing />
        <Referral />
        <FAQ />
      </main>
      <Footer />
      <DemoModal />
    </>
  );
}
