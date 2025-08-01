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
import SEO from "@/components/SEO";
import { useLocation } from "react-router-dom";
import Careers from "../components/Careers";

const Index = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Yubhian Technologies LLP",
    "description": "Leading AI startup providing cutting-edge artificial intelligence, machine learning, web development, blockchain solutions, and custom software development services for enterprises worldwide.",
    "url": "https://yubhian-technologies-website.vercel.app/",
    "logo": "https://yubhian-technologies-website.vercel.app/logo_bg.png",
    "foundingDate": "2024",
    "legalName": "Yubhian Technologies LLP",
    "slogan": "Transforming businesses with AI-powered solutions",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-8500401091",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "Worldwide"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "sameAs": [
      "https://www.linkedin.com/company/yubhian-technologies",
      "https://twitter.com/yubhiantech",
      "https://github.com/yubhian-technologies"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Artificial Intelligence Solutions",
            "description": "Custom AI and machine learning solutions for business automation and intelligence."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Modern, responsive web applications using cutting-edge technologies."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Blockchain Development",
            "description": "Secure and scalable blockchain solutions for modern businesses."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Tailored software solutions to meet specific business requirements."
          }
        }
      ]
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Web Development",
      "Blockchain Technology",
      "Software Development",
      "Digital Transformation",
      "Technology Consulting"
    ],
    "awards": [
      "Leading AI Startup 2024",
      "Innovation in Technology Solutions"
    ]
  };

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
    <>
      <SEO
        title="Yubhian Technologies LLP - Leading AI & Technology Solutions Provider | AI Startup India"
        description="Yubhian Technologies LLP is a cutting-edge AI startup specializing in artificial intelligence, machine learning, web development, blockchain solutions, and custom software development. Transform your business with enterprise-grade technology solutions."
        keywords="AI startup India, artificial intelligence company, machine learning solutions, AI development, web development company, blockchain development, custom software development, technology consulting, enterprise AI solutions, digital transformation, tech startup, AI consulting, ML solutions, deep learning, data science, automation solutions"
        url="https://yubhian-technologies-website.vercel.app/"
        type="website"
        schema={homePageSchema}
        tags={["AI", "Machine Learning", "Web Development", "Blockchain", "Startup", "Technology"]}
      />
      <div className="min-h-screen bg-rich-black text-white overflow-x-hidden">
        {isLoading ? (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-950 z-[999] transition-opacity duration-500 opacity-100">
            <div className="relative flex items-center justify-center">
              {/* Replace the old spinner div with the new custom class */}
              <div className="gradient-spinner"></div> {/* Use your custom class */}
              <img
                src="/logo_bg.png" // Your logo
                alt="Yubhian Technologies LLP - AI Startup Logo"
                className="absolute w-12 h-12 animate-pulse z-3" /* Ensure logo is on top */
              />
            </div>
          </div>
        ) : (
          <>
            <Navigation />
            <HeroSection />
            <ServicesSection />
            <FeaturesSection />
            <AboutSection />
            <ProcessSection />
            <Testimonial />
            <ContactSection />
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default Index;