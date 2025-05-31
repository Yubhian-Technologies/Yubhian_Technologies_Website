import React from "react";
import {
  Check,
  Zap,
  Users,
  Clock,
  Code,
  Shield,
  Lightbulb,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const FeaturesSection = () => {
  const { ref: featuresRef, isVisible } = useScrollAnimation(0.1);

  const features = [
    {
      icon: Zap,
      title: "Cutting-edge technology solutions",
      description:
        "Advanced technology implementations that drive innovation and competitive advantage.",
      gradient: "from-electric-blue to-brand-violet",
    },
    {
      icon: Users,
      title: "Client-focused, quality-driven approach",
      description:
        "Prioritizing client satisfaction with uncompromising quality standards.",
      gradient: "from-brand-violet to-brand-emerald",
    },
    {
      icon: Clock,
      title: "Timely project delivery",
      description:
        "Consistent on-time delivery ensuring your business objectives are met.",
      gradient: "from-brand-emerald to-electric-blue",
    },
    {
      icon: Code,
      title: "Expert team of developers",
      description:
        "Skilled professionals with deep expertise across multiple technology domains.",
      gradient: "from-electric-blue to-brand-violet",
    },
    {
      icon: Shield,
      title: "Comprehensive support services",
      description:
        "End-to-end support from development to deployment and maintenance.",
      gradient: "from-brand-violet to-brand-emerald",
    },
    {
      icon: Lightbulb,
      title: "Innovation-driven methodologies",
      description:
        "Modern development practices and cutting-edge methodologies.",
      gradient: "from-brand-emerald to-electric-blue",
    },
  ];

  return (
    <section
      ref={featuresRef}
      className="section-padding bg-gradient-to-b from-transparent to-rich-black/30"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="text-white">Why Choose</span>
            <br />
            <span className="gradient-text">Yubhian Technologies</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We deliver excellence through cutting-edge technology, expert
            craftsmanship, and unwavering commitment to client success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl glass-effect hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0s",
                }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Check Icon */}
                <div className="absolute top-6 right-6 w-6 h-6 rounded-full bg-gradient-to-br from-electric-blue to-brand-violet flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Check className="w-4 h-4 text-white" />
                </div>

                {/* Hover Gradient Border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
