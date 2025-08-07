import React from "react";
import {
  Code,
  Smartphone,
  Cpu,
  Brain,
  Workflow,
  Rocket,
  BarChart3,
  Settings,
  GraduationCap,
} from "lucide-react";

// Gradient color for each card
const GRADIENTS = [
  "from-sky-500 to-indigo-600",
  "from-electric-blue to-brand-violet",
  "from-brand-violet to-brand-emerald",
  "from-brand-emerald to-electric-blue",
];

const services = [
  {
    icon: Code,
    title: "Custom Software & Web Development",
    description:
      "Tailored software solutions and responsive web applications designed to meet your specific business requirements.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Smartphone,
    title: "Robust Mobile Application Development",
    description:
      "High-performance mobile apps for iOS and Android platforms with intuitive UI/UX and seamless functionality.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Cpu,
    title: "IoT & Embedded Systems Design",
    description:
      "Smart connected devices and embedded systems solutions to bring your hardware ideas to life.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Brain,
    title: "AI/ML Solutions",
    description:
      "Intelligent automation and predictive analytics powered by cutting-edge artificial intelligence and machine learning.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Workflow,
    title: "Automate Work Flows",
    description:
      "Streamline your business processes with customized automation solutions that reduce manual effort and errors.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Rocket,
    title: "Innovation Prototyping for Startups",
    description:
      "Rapid prototyping services to help startups validate their ideas and accelerate time-to-market.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: BarChart3,
    title: "Data Analytics for Your Business",
    description:
      "Actionable insights from your data with advanced analytics, visualization, and business intelligence tools.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Settings,
    title: "Software Maintenance & Support",
    description:
      "Comprehensive maintenance and support services to keep your software running smoothly and securely.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: GraduationCap,
    title: "Skilling & Internship Programs",
    description:
      "Industry-relevant training programs and internships to bridge the gap between academia and real-world requirements.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const ServicesSection = () => (
  <section
    id="services"
    className="section-padding bg-gradient-to-b from-transparent to-rich-black/50"
  >
    <div className="container-custom">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6">
          <span className="gradient-text">Our Services</span>
          <br />
          <span className="text-white">What We Offer</span>
        </h2>
        <p className="text-base md:text-lg text-gray-400 max-w-xl md:max-w-3xl mx-auto leading-relaxed">
          Comprehensive technology solutions designed to drive your business
          forward. From concept to deployment, we've got you covered.
        </p>
        <a
          href="#contact"
          className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-electric-blue to-brand-violet rounded-full text-white font-medium hover:shadow-lg hover:shadow-electric-blue/30 transition-all duration-300"
        >
          Get a Quote Now
        </a>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className={`
                group relative bg-rich-black/70 
                rounded-3xl overflow-hidden
                shadow-xl hover:shadow-2xl transition
                duration-400
                border border-transparent hover:border-electric-blue/60
                hover:-translate-y-2
                cursor-pointer
                flex flex-col
                min-h-[400px]
              `}
            >
              {/* Card Image as background with overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center opacity-70 transition group-hover:scale-105 duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${
                    GRADIENTS[i % GRADIENTS.length]
                  } opacity-50`}
                ></div>
                <div className="absolute inset-0 bg-rich-black/60" />
              </div>

              {/* Card Content */}
              <div className="relative z-10 p-6 flex flex-col flex-1">
                {/* Icon in gradient orb */}
                <span
                  className={`mb-4 inline-flex items-center justify-center rounded-xl p-4 bg-gradient-to-br ${
                    GRADIENTS[i % GRADIENTS.length]
                  } shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white drop-shadow" />
                </span>
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors duration-300">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-base text-gray-300 leading-relaxed flex-1">
                  {service.description}
                </p>
                {/* View More link at the card bottom */}
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-block text-electric-blue hover:underline font-semibold transition"
                  >
                    View More &rarr;
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesSection;
