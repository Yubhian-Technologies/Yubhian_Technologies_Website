import React, { useState, useEffect } from "react";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Show loader for 1.5 seconds

    return () => clearTimeout(loadTimer);
  }, []);

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
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-950 z-[999] transition-opacity duration-500 opacity-100">
          <div className="relative flex items-center justify-center">
            {/* Replace the old spinner div with the new custom class */}
            <div className="gradient-spinner"></div> {/* Use your custom class */}
            <img
              src="/logo_bg.png" // Your logo
              alt="Loading Logo"
              className="absolute w-12 h-12 animate-pulse z-3" /* Ensure logo is on top */
            />
          </div>
        </div>
      ) : (
        <>
          <Navigation />
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <FeaturesSection />
          <ProcessSection />
          <Testimonial />
          <ContactSection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;