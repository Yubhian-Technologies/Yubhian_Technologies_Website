import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Careers from "../components/Careers";
import SEO from "../components/SEO";

function CareersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-rich-black text-white overflow-x-hidden">
      <SEO
        title="Careers - Join Our AI Innovation Team"
        description="Explore exciting career opportunities at Yubhian Technologies LLP. Join our team of AI experts and technology innovators. We're building the future of artificial intelligence."
        keywords="AI careers, technology jobs, machine learning positions, AI startup jobs, tech careers India, software developer jobs, data scientist positions"
        url="https://www.yubhiantechnologies.in/careers"
        type="website"
      />
      <Navigation />
      <Careers/>
      <Footer />
    </div>
  );
}

export default CareersPage;
