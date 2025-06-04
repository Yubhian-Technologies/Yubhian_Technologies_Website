import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Policies from "../components/Policies";
import Footer from "../components/Footer";

function PrivacyPolicies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-rich-black text-white overflow-x-hidden">
      <Navigation />
      <Policies />
      <Footer />
    </div>
  );
}

export default PrivacyPolicies;
