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
import { useLocation } from "react-router-dom";
import Careers from "../components/Careers";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="min-h-screen bg-rich-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <AboutSection />
      <ProcessSection />
      <Testimonial />
      <ContactSection />
      <Footer />
      <Careers/>
    </div>
  );
};

export default Index;
