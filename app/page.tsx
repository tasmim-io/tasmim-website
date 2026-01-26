import { Hero } from "@/components/hero/Hero";
import { Work } from "@/components/work/Work";
import { Services } from "@/components/services/Services";
import { ProcessSection } from "@/components/process/ProcessSection";
import { Problem } from "@/components/problem/Problem";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <Work />
      <Problem />
      <Services />
      <ProcessSection />
    </div>
  );
}
