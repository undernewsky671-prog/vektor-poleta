import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { EquipmentSection } from "@/components/sections/EquipmentSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AudienceSection />
      <SkillsSection />
      <PlatformSection />
      <ReviewsSection />
      <PricingSection />
      <EquipmentSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
