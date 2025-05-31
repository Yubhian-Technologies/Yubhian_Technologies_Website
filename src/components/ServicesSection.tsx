import React, { useEffect, useRef, useState } from "react";
import {
  Brain,
  Code,
  GraduationCap,
  Link2,
  Server,
  TrendingUp,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ServicesSection = () => {
  const { ref: servicesRef, isVisible } = useScrollAnimation(0.1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollAnimationRef = useRef<number>();
  const isPausedRef = useRef(false);
  const [isTouching, setIsTouching] = useState(false);

  const services = [
    {
      icon: Brain,
      title: "AI/ML Projects",
      description:
        "Cutting-edge artificial intelligence and machine learning solutions to automate and optimize your business processes.",
      gradient: "from-electric-blue to-brand-violet",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Modern, responsive web applications built with the latest technologies and best practices for optimal performance.",
      gradient: "from-brand-violet to-brand-emerald",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: GraduationCap,
      title: "Training for Students",
      description:
        "Comprehensive training programs to equip students with industry-relevant skills in technology and development.",
      gradient: "from-brand-emerald to-electric-blue",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Link2,
      title: "Blockchain Solutions",
      description:
        "Secure, decentralized blockchain applications and smart contracts for transparent business operations.",
      gradient: "from-electric-blue to-brand-violet",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Server,
      title: "Backend Services",
      description:
        "Robust, scalable backend infrastructure and APIs to power your applications with reliability and security.",
      gradient: "from-brand-violet to-brand-emerald",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: TrendingUp,
      title: "SEO Optimization",
      description:
        "Comprehensive SEO strategies to improve your online visibility and drive organic traffic to your business.",
      gradient: "from-brand-emerald to-electric-blue",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollSpeed = 0.5;

    const scroll = () => {
      if (!isPausedRef.current && container) {
        const cardWidth = container.querySelector(".card")?.clientWidth || 300;
        const gap = 32;
        const totalCardWidth = cardWidth + gap;
        const totalWidth = services.length * totalCardWidth;

        // Get current scroll position and add scroll speed
        const currentScroll = container.scrollLeft + scrollSpeed;
        
        // Reset to 0 when we've scrolled past the original set of cards
        const newScrollPosition = currentScroll >= totalWidth ? 0 : currentScroll;
        
        container.scrollLeft = newScrollPosition;
      }

      scrollAnimationRef.current = requestAnimationFrame(scroll);
    };

    scrollAnimationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (scrollAnimationRef.current)
        cancelAnimationFrame(scrollAnimationRef.current);
    };
  }, [services.length]);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };
  
  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };
  
  const handleTouchStart = () => {
    setIsTouching(true);
    isPausedRef.current = true;
  };
  
  const handleTouchEnd = () => {
    setIsTouching(false);
    isPausedRef.current = false;
  };

  return (
    <section
      ref={servicesRef}
      id="services"
      className="section-padding bg-gradient-to-b from-transparent to-rich-black/50 overflow-hidden"
    >
      <div className="container-custom">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Technology Solutions</span>
            <br />
            <span className="text-white">Tailored for Your Success</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive IT services designed to drive innovation
            and accelerate your business growth through cutting-edge technology
            solutions.
          </p>
        </div>

        <div
          className="relative -mx-4 sm:-mx-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-scroll -mx-8 scrollbar-hide py-4 px-1 sm:px-8"
          >
            {[...services, ...services].map((service, index) => {
              const IconComponent = service.icon;
              const originalIndex = index % services.length;
              return (
                <div
                  key={index}
                  className={`card group relative rounded-2xl glass-effect hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer flex-shrink-0 w-[80vw] sm:w-80 md:w-96 overflow-hidden ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${originalIndex * 0.1}s`
                      : "0s",
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="text-electric-blue font-semibold text-sm hover:text-brand-violet transition-colors duration-300">
                        Learn More →
                      </button>
                    </div>
                  </div>
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;