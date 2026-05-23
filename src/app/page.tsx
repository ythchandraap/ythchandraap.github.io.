import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import MarqueeStrip from "@/components/ui/MarqueeStrip";
import { skills } from "../../lib/data";

export default function Home() {
  const marqueeItems = skills?.map((s) => s.name);

  return (
    <div className="relative overflow-x-hidden">
      <Hero />

      <MarqueeStrip items={marqueeItems} direction="left" />

      <About />

      <MarqueeStrip items={[...marqueeItems].reverse()} direction="right" />

      <Projects />

      <Experience />

      <Contact />

      <Footer />
    </div>
  );
}
