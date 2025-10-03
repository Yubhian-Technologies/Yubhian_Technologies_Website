import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  GraduationCap,
  Code,
  Briefcase,
  Calendar,
  Users,
  Building,
} from "lucide-react";

const careerCards = [
  {
    id: "internship",
    icon: GraduationCap,
    title: "Internship Program",
    subtitle: "Learn & Grow With Us",
    description:
      "Join our comprehensive internship program designed for students and recent graduates. Gain hands-on experience in cutting-edge technologies.",
    highlights: [
      "3-6 months duration",
      "Mentorship from senior developers",
      "Real project experience",
      "Certificate upon completion",
      "Potential for full-time offer",
    ],
    color: "from-blue-400 to-cyan-400",
    path: "/apply/internship",
  },
  {
    id: "sde",
    icon: Code,
    title: "Software Developer",
    subtitle: "Full-time Position",
    description:
      "We're looking for passionate software developers to join our dynamic team. Work on innovative projects and shape the future of technology.",
    highlights: [
      "Competitive salary package",
      "Flexible working hours",
      "Remote work options",
      "Health & wellness benefits",
      "Career growth opportunities",
    ],
    color: "from-violet-400 to-purple-400",
    path: "/apply/software-developer",
  },
];

const Careers: React.FC = () => {
  const careersRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (careersRef.current) {
      observer.observe(careersRef.current);
    }

    return () => {
      if (careersRef.current) {
        observer.unobserve(careersRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={careersRef}
      id="careers"
      className="bg-black min-h-screen py-12 lg:py-20"
    >
      <div className="max-w-7xl md:pt-20 pt-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-400 to-violet-400 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6">
              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight">
              <span className="text-white">Join Our </span>
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
          </div>
          <div className="flex items-center text-gray-400">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
            <span className="text-sm sm:text-base lg:text-lg">
              <strong>Opportunities Available Now</strong>
            </span>
          </div>
        </div>

        {/* Introduction */}
        <div
          className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
            At Yubhian Technologies LLP, we believe in fostering talent and
            creating opportunities for growth. Whether you're starting your
            career journey or looking to take the next step, we have exciting
            opportunities waiting for you.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mt-6 lg:mt-8">
            Join us in building innovative solutions and shaping the future of
            technology.
          </p>
        </div>

        {/* Career Cards */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {careerCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl hover:bg-gray-800/50 transition-all duration-300 group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible
                    ? `${400 + index * 200}ms`
                    : "0s",
                }}
              >
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                  {card.title}
                </h3>

                <p
                  className={`text-base sm:text-lg font-semibold bg-gradient-to-r ${card.color} bg-clip-text text-transparent mb-4 sm:mb-6`}
                >
                  {card.subtitle}
                </p>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                  {card.description}
                </p>

                <div className="mb-6 sm:mb-8">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Highlights:
                  </h4>
                  <ul className="list-none text-gray-300 space-y-1">
                    {card.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="relative pl-6">
                        <span
                          className={`absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r ${card.color}`}
                        ></span>
                        <span className="text-base sm:text-lg">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => navigate(card.path)}
                  className={`w-full py-3 sm:py-4 px-6 sm:px-8 bg-gradient-to-r ${card.color} text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-base sm:text-lg`}
                >
                  Apply Now
                </button>
              </div>
            );
          })}
        </div>

        {/* Company Culture Section */}
        <div
          className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-6 sm:mb-8 text-center">
            Why Choose Yubhian Technologies?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                Collaborative Environment
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Work with talented professionals in a supportive and innovative
                environment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                Growth Opportunities
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Continuous learning and career advancement opportunities to help
                you reach your potential.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                Cutting-edge Technology
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Work with the latest technologies and tools in exciting,
                challenging projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
