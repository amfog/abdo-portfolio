import HeroSection from '@/components/sections/HeroSection';
import FounderSystemsSection from '@/components/sections/FounderSystemsSection';
import AboutSection from '@/components/sections/AboutSection';
import ImpactSection from '@/components/sections/ImpactSection';
import ProductsSection from '@/components/sections/ProductsSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050510]">
      <HeroSection />
      <FounderSystemsSection />
      <AboutSection />
      <ImpactSection />
      <ProductsSection />
      <CaseStudiesSection />
      <TimelineSection />
      <ContactSection />
    </main>
  );
}
