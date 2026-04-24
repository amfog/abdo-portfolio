import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ImpactSection } from '@/components/sections/ImpactSection';
import ProductsSection from '@/components/sections/ProductsSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0d0d20]">
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <ProductsSection />
      <CaseStudiesSection />
      <TimelineSection />
      <ContactSection />
    </div>
  );
}
