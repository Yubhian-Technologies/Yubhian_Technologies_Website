import React, { useEffect } from "react";
import Navigation from "./../components/Navigation";
import Footer from "./../components/Footer";
import Terms from "../components/Terms";

function TermsCondiitions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-rich-black text-white overflow-x-hidden">
      <Navigation />
      <Terms />
      <Footer />
    </div>
  );
}

export default TermsCondiitions;
