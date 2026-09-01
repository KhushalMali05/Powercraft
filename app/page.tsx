import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { WhyWeExistSection } from "@/components/sections/WhyWeExistSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { ToolsWeMasterSection } from "@/components/sections/ToolsWeMasterSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhoWeServeSection } from "@/components/sections/WhoWeServeSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaOfferBand } from "@/components/sections/CtaOfferBand";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LogoStrip />
      <WhyWeExistSection />
      <ServicesGridSection />
      <ToolsWeMasterSection />
      <WhyChooseUsSection />
      <StatsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <WhoWeServeSection />
      <FaqSection />
      <CtaOfferBand />
    </div>
  );
}
