import { HeroSection } from "@/components/hero-section/HeroSection";
import { WorkSection } from "@/components/work-section/WorkSection";
import { ServicesSection } from "@/components/services-section/ServicesSection";
import { ProcessSection } from "@/components/process-section/ProcessSection";
import { ProblemSection } from "@/components/problem-section/ProblemSection";
import { FinalCtaSection } from "@/components/final-cta-section/FinalCtaSection";
import { Footer } from "@/components/footer-section/Footer";

export default function Home() {
  return (
    <main className="container">
      <HeroSection />
      <WorkSection />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
