import { HeroSection } from "@/components/hero-section/HeroSection";
import { WorkSection } from "@/components/work-section/WorkSection";
import { ServicesSection } from "@/components/services-section/ServicesSection";
import { ProcessSection } from "@/components/process-section/ProcessSection";
import { ProblemSection } from "@/components/problem-section/ProblemSection";

export default function Home() {
  return (
    <div className="container">
      <HeroSection />
      <WorkSection />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
    </div>
  );
}
