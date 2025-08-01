import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Terms from "../components/Terms";
import SEO from "../components/SEO";

function TermsCondiitions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-rich-black text-white overflow-x-hidden">
      <SEO
        title="Terms and Conditions"
        description="Read the terms and conditions for Yubhian Technologies LLP. Understand our service terms, user responsibilities, and legal agreements for our AI and technology solutions."
        keywords="terms and conditions, legal terms, service agreement, user agreement, Yubhian Technologies terms, AI service terms"
        url="https://yubhiantechnologies.com/terms"
        type="website"
      />
      <Navigation />
      <Terms />
      <Footer />
    </div>
  );
}

export default TermsCondiitions;
