import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Policies from "../components/Policies";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function PrivacyPolicies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-rich-black text-white overflow-x-hidden">
      <SEO
        title="Privacy Policy"
        description="Read our comprehensive privacy policy to understand how Yubhian Technologies LLP collects, uses, and protects your personal information and data."
        keywords="privacy policy, data protection, personal information, data privacy, user privacy, GDPR compliance, data security"
        url="https://yubhiantechnologies.com/privacy"
        type="website"
      />
      <Navigation />
      <Policies />
      <Footer />
    </div>
  );
}

export default PrivacyPolicies;
