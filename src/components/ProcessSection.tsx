import React, { useEffect, useState, useRef } from "react";
import {
  Users,
  Zap,
  Rocket,
  ArrowRight,
  ArrowDown,
  RefreshCcw,
  CheckCircle,
  Code,
  Box,
  Star,
  Target,
} from "lucide-react";

const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const [currentSprint, setCurrentSprint] = useState(1);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [sprintVisible, setSprintVisible] = useState(false);
  const totalSprints = 3;
  
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);
  const sprintRef = useRef(null);

  const steps = [
    {
      icon: Users,
      title: "Client",
      subtitle: "Consultation & Analysis",
      description:
        "We begin with comprehensive consultation to understand your unique requirements and business objectives, ensuring personalized solutions that align with your goals.",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Zap,
      title: "Development",
      subtitle: "Design & Implementation",
      description:
        "Our expert team designs and develops scalable, efficient systems using cutting-edge technologies and industry best practices for optimal performance.",
      color: "from-purple-600 to-emerald-500",
    },
    {
      icon: Rocket,
      title: "Delivery",
      subtitle: "Testing & Deployment",
      description:
        "We ensure timely delivery of high-quality solutions through rigorous testing, seamless deployment, and comprehensive post-launch support.",
      color: "from-emerald-500 to-blue-500",
    },
  ];

  const sprintPhases = [
    {
      name: "Planning",
      icon: <Target className="h-4 w-4 sm:h-5 sm:w-5" />,
      description: "Define scope and objectives",
    },
    {
      name: "Development",
      icon: <Code className="h-4 w-4 sm:h-5 sm:w-5" />,
      description: "Build and iterate",
    },
    {
      name: "Testing",
      icon: <Box className="h-4 w-4 sm:h-5 sm:w-5" />,
      description: "Quality assurance",
    },
    {
      name: "Review",
      icon: <Star className="h-4 w-4 sm:h-5 sm:w-5" />,
      description: "Feedback and refinement",
    },
  ];

  // Intersection Observer for main section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Intersection Observer for individual steps
  useEffect(() => {
    const observers = stepsRef.current.map((stepRef, index) => {
      if (!stepRef) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps(prev => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        },
        { threshold: 0.3, rootMargin: '-20px' }
      );

      observer.observe(stepRef);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  // Intersection Observer for sprint section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSprintVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '-30px' }
    );

    if (sprintRef.current) {
      observer.observe(sprintRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Sprint animation effect - only starts when sprint section is visible
  useEffect(() => {
    if (!sprintVisible) return;

    let interval;
    const animateProgress = () => {
      setProgressValue(0);
      interval = setInterval(() => {
        setProgressValue((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setCurrentSprint((prev) => (prev < totalSprints ? prev + 1 : 1));
              animateProgress();
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    };

    animateProgress();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [sprintVisible]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-rich-black/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Our Work</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            How We Deliver Excellence Through Our Proven Three-Step Methodology
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mb-16 sm:mb-20 lg:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isLast = index === steps.length - 1;
              const isStepVisible = visibleSteps.includes(index);

              return (
                <div 
                  key={index} 
                  ref={el => stepsRef.current[index] = el}
                  className="flex flex-col items-center relative"
                >
                  {/* Step Content */}
                  <div className={`text-center group w-full max-w-sm mx-auto transition-all duration-700 ${
                    isStepVisible 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-16 scale-95'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}>
                    {/* Step Number & Icon */}
                    <div className="relative mb-6 sm:mb-8 flex justify-center">
                      <div
                        className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center relative group-hover:scale-110 transition-all duration-500 shadow-2xl ${
                          isStepVisible ? 'animate-bounce-once' : ''
                        }`}
                        style={{ animationDelay: `${index * 300 + 500}ms` }}
                      >
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />

                        {/* Step Number */}
                        <div className={`absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-gray-900 rounded-full flex items-center justify-center border-2 border-white/20 shadow-lg transition-all duration-500 ${
                          isStepVisible ? 'scale-110 rotate-12' : 'scale-0'
                        }`}
                        style={{ transitionDelay: `${index * 300 + 800}ms` }}>
                          <span className="text-sm font-bold text-white">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`space-y-3 sm:space-y-4 px-4 sm:px-0 transition-all duration-600 ${
                      isStepVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 300 + 600}ms` }}>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <h4 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
                        {step.subtitle}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Decorative Element */}
                    <div className={`mt-6 sm:mt-8 flex justify-center transition-all duration-500 ${
                      isStepVisible 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-0'
                    }`}
                    style={{ transitionDelay: `${index * 300 + 900}ms` }}>
                      <div
                        className={`w-12 sm:w-16 h-1 bg-gradient-to-r ${step.color} rounded-full`}
                      ></div>
                    </div>
                  </div>

                  {/* Desktop Arrow (only between steps) */}
                  {!isLast && (
                    <div className={`hidden lg:flex absolute top-8 xl:top-10 -right-6 xl:-right-8 z-20 transition-all duration-700 ${
                      isStepVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${index * 300 + 1000}ms` }}>
                      <ArrowRight className="w-6 h-6 xl:w-8 xl:h-8 text-blue-400 animate-pulse" />
                    </div>
                  )}

                  {/* Mobile Arrow (vertical, below each step except the last) */}
                  {!isLast && (
                    <div className={`lg:hidden flex justify-center mt-6 sm:mt-8 mb-6 sm:mb-8 transition-all duration-700 ${
                      isStepVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 300 + 1000}ms` }}>
                      <div className="flex flex-col items-center">
                        <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-blue-400 to-transparent"></div>
                        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 animate-pulse" />
                        <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-transparent to-blue-400"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Sprint Animation Section */}
        <div className="mb-16 sm:mb-20" ref={sprintRef}>
          <div className={`bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10 relative overflow-hidden transition-all duration-1000 ${
            sprintVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-12 scale-95'
          }`}>
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5 rounded-2xl sm:rounded-3xl"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className={`text-center mb-8 sm:mb-12 transition-all duration-800 ${
                sprintVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}>
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
                  <RefreshCcw className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 animate-spin" />
                  <span className="text-xs sm:text-sm font-medium text-white">
                    Live Development Process
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                  Iterative Development in Action
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                  Watch our agile methodology in real-time as we continuously
                  improve and adapt based on your feedback
                </p>
              </div>

              {/* Progress Section */}
              <div className={`bg-gray-900/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-white/5 transition-all duration-800 ${
                sprintVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '400ms' }}>
                {/* Progress Bar */}
                <div className="relative mb-6 sm:mb-8">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-xs sm:text-sm font-medium text-gray-300">
                      Development Progress
                    </span>
                    <span className="text-xs sm:text-sm text-blue-400 font-bold">
                      {Math.round(progressValue)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-3 sm:h-4 overflow-hidden border border-gray-700/50">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 transition-all duration-300 ease-out rounded-full relative"
                      style={{ width: `${progressValue}%` }}
                    >
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Sprint Phases Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {sprintPhases.map((phase, index) => {
                    const isActive =
                      progressValue >= (index / sprintPhases.length) * 100 &&
                      progressValue < ((index + 1) / sprintPhases.length) * 100;
                    const isCompleted =
                      progressValue > ((index + 1) / sprintPhases.length) * 100;

                    return (
                      <div
                        key={index}
                        className={`relative p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl transition-all duration-500 border ${
                          isActive
                            ? "bg-gradient-to-br from-blue-500/20 to-blue-500/10 border-blue-400/40 shadow-lg shadow-blue-400/20"
                            : isCompleted
                            ? "bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 border-emerald-400/40"
                            : "bg-gray-800/30 border-gray-700/30"
                        } group hover:scale-105 transform ${
                          sprintVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                        }`}
                        style={{ transitionDelay: `${600 + index * 100}ms` }}
                      >
                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full animate-ping"></div>
                        )}

                        <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
                          <div
                            className={`rounded-full p-2 sm:p-3 transition-all duration-300 ${
                              isActive
                                ? "bg-blue-400/30 text-blue-400 shadow-lg"
                                : isCompleted
                                ? "bg-emerald-400/30 text-emerald-400"
                                : "bg-gray-700/50 text-gray-500"
                            }`}
                          >
                            {isCompleted ? (
                              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                            ) : (
                              phase.icon
                            )}
                          </div>
                          <div className="min-h-[2.5rem] sm:min-h-[3rem] flex flex-col justify-center">
                            <h4
                              className={`font-semibold mb-1 text-xs sm:text-sm transition-colors duration-300 ${
                                isActive
                                  ? "text-blue-400"
                                  : isCompleted
                                  ? "text-emerald-400"
                                  : "text-gray-400"
                              }`}
                            >
                              {phase.name}
                            </h4>
                            <p className="text-xs text-gray-500 leading-tight">
                              {phase.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sprint Info */}
              <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 transition-all duration-800 ${
                sprintVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '800ms' }}>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-emerald-500/20 rounded-full p-2 border border-emerald-500/30 flex-shrink-0">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      Client Feedback Integration
                    </p>
                    <p className="text-xs text-gray-400">
                      Continuous improvement at every stage
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end sm:space-x-6">
                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-gray-400">Current Sprint</p>
                    <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
                      {currentSprint} / {totalSprints}
                    </p>
                  </div>

                  <div className="flex space-x-2">
                    {[...Array(totalSprints)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
                          i < currentSprint
                            ? "bg-gradient-to-r from-blue-400 to-purple-500 scale-110"
                            : "bg-gray-600 scale-100"
                        }`}
                        style={{
                          animation:
                            i < currentSprint
                              ? `pulse 2s infinite ${i * 0.3}s`
                              : "none",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 ${
          sprintVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '1000ms' }}>
          <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 px-4 sm:px-0">
              Let's transform your ideas into reality with our proven
              development process.
            </p>
            <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg sm:rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
              <span className="text-sm sm:text-base">Start Your Journey</span>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes bounce-once {
            0%, 20%, 53%, 80%, 100% {
              transform: translateY(0);
            }
            40%, 43% {
              transform: translateY(-15px);
            }
            70% {
              transform: translateY(-7px);
            }
            90% {
              transform: translateY(-2px);
            }
          }
          
          .animate-bounce-once {
            animation: bounce-once 1s ease-out;
          }
        `
      }} />
    </section>
  );
};

export default ProcessSection;