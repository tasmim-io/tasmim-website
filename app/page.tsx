import { HeroSection } from "@/components/hero-section/HeroSection";
import { WorkSection } from "@/components/work-section/WorkSection";
import { ServicesSection } from "@/components/services-section/ServicesSection";
import { ProcessSection } from "@/components/process-section/ProcessSection";
import { ProblemSection } from "@/components/problem-section/ProblemSection";
import { FinalCtaSection } from "@/components/final-cta-section/FinalCtaSection";

export default function Home() {
  return (
    <div className="container">
      <HeroSection />
      <WorkSection />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <FinalCtaSection />
    </div>
  );
}
