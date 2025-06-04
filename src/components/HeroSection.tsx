import React from "react";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref: heroRef, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden mt-20 md:mt-16"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-electric-blue/20 to-brand-violet/20 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-brand-violet/20 to-brand-emerald/20 rounded-lg rotate-45 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-brand-emerald/20 to-electric-blue/20 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-br from-electric-blue/20 to-brand-violet/20 rounded-lg animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 sm:px-6 flex-1 flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          {/* Pre-headline */}
          <div
            className={`mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-medium text-gray-300 tracking-wider uppercase">
              EST. 2024
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="gradient-text">Innovative IT Solutions</span>
            <br />
            <span className="text-white">for Your Business</span>
          </h1>

          {/* Subheadline */}
          <h2
            className={`text-xl md:text-2xl font-semibold text-gray-300 mb-4 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Leading IT Solutions Provider
          </h2>

          {/* Description */}
          <p
            className={`text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Specializing in AI/ML, Web Development, AI-Agents, Blockchain, and custom
            solutions to drive your business growth and digital transformation.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="btn-primary group inline-flex items-center justify-center gap-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("services");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="btn-secondary"
            >
              Explore Services
            </button>
          </div>

          {/* Stats */}
          <div
            className={`flex flex-wrap justify-center gap-8 mt-16 transition-all duration-1000 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                50+
              </div>
              <div className="text-gray-400 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                100%
              </div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                2024
              </div>
              <div className="text-gray-400 text-sm">Established</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
