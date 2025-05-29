import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import FeaturesSection from "../components/FeaturesSection";
import AboutSection from "../components/AboutSection";
import ProcessSection from "../components/ProcessSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Testimonial from "@/components/Testmonial";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-rich-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <AboutSection />
      <ProcessSection />
      <Testimonial/>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
