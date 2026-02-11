"use client";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import Projects from "@/components/ProjectsSection";
import FloatingIcons from "@/components/FloatingIcons";


const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingIcons />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <AboutSection />
          <Projects />
          <ContactSection />
        </main>
      </div>
    </div>
  );
};

export default Index;
