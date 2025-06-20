import React, { useEffect, useState } from "react";
import {
  Bot,
  Brain,
  Code,
  GraduationCap,
  Link2,
  Server,
  TrendingUp,
  ArrowLeft,
  ArrowRight,
  BarChart3,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

const ServicesSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const services = [
    {
      icon: BarChart3,
      title: "Data Analyst",
      description:
        "Advanced data analysis and visualization solutions to transform raw data into actionable business insights and strategic decisions.",
      gradient: "from-sky-500 to-indigo-600",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Data Visualization",
        "Statistical Analysis",
        "Business Intelligence",
      ],
    },
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

  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-b from-transparent to-rich-black/50"
    >
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6">
            <span className="gradient-text">Technology Solutions</span>
            <br />
            <span className="text-white">Tailored for Your Success</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-xl md:max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive IT services designed to drive innovation
            and accelerate your business growth through cutting-edge technology
            solutions.
          </p>
        </div>

        <div className="relative px-2 sm:px-6 md:px-12">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={isMobile ? 0.5 : 2.5}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="!overflow-visible"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <div
                      className={`group rounded-3xl bg-rich-black/50 backdrop-blur-md transition-all duration-500 overflow-hidden mx-auto cursor-pointer relative shadow-lg hover:shadow-2xl hover:shadow-electric-blue/20 ${
                        isActive
                          ? "scale-105 border border-electric-blue"
                          : "scale-95"
                      } w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[25rem]`}
                    >
                      <div className="relative h-48 sm:h-56 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      </div>
                      <div className="p-5 sm:p-6 md:p-7">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 line-clamp-3">
                          {service.description}
                        </p>
                      </div>
                      <div
                        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}
                      />
                    </div>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="swiper-button-prev-custom absolute md:bottom-1/2 mt-10 md:mt-0 left-[-10px] z-10 cursor-pointer p-2 hover:scale-110 bg-black/50 backdrop-blur rounded-full hover:bg-black/50 transition">
            <ArrowLeft />
          </div>
          <div className="swiper-button-next-custom absolute md:bottom-1/2 mt-10 md:mt-0 right-[-10px] z-10 cursor-pointer p-2 hover:scale-110 bg-black/50 backdrop-blur rounded-full hover:bg-black/50 transition">
            <ArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
