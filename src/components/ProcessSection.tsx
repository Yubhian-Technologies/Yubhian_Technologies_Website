
import React from 'react';
import { Users, Zap, Rocket, ArrowRight, ArrowDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProcessSection = () => {
  const { ref: processRef, isVisible } = useScrollAnimation(0.1);

  const steps = [
    {
      icon: Users,
      title: 'Client',
      subtitle: 'Consultation & Analysis',
      description: 'We begin with comprehensive consultation to understand your unique requirements and business objectives, ensuring personalized solutions that align with your goals.',
      color: 'from-electric-blue to-brand-violet'
    },
    {
      icon: Zap,
      title: 'Development',
      subtitle: 'Design & Implementation',
      description: 'Our expert team designs and develops scalable, efficient systems using cutting-edge technologies and industry best practices for optimal performance.',
      color: 'from-brand-violet to-brand-emerald'
    },
    {
      icon: Rocket,
      title: 'Delivery',
      subtitle: 'Testing & Deployment',
      description: 'We ensure timely delivery of high-quality solutions through rigorous testing, seamless deployment, and comprehensive post-launch support.',
      color: 'from-brand-emerald to-electric-blue'
    }
  ];

  return (
    <section 
      ref={processRef}
      id="process" 
      className="section-padding bg-gradient-to-b from-rich-black/50 to-transparent"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="text-white">Our Work</span>
            <br />
            <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            How We Deliver Excellence Through Our Proven Three-Step Methodology
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isLast = index === steps.length - 1;
              
              return (
                <div key={index} className="flex flex-col items-center relative">
                  {/* Step Content */}
                  <div
                    className={`text-center group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: isVisible ? `${index * 300}ms` : '0s' }}
                  >
                    {/* Step Number & Icon */}
                    <div className="relative mb-8">
                      <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500`}>
                        <IconComponent className="w-12 h-12 text-white" />
                        
                        {/* Step Number */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-rich-black rounded-full flex items-center justify-center border-2 border-white/20">
                          <span className="text-sm font-bold text-white">{index + 1}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-electric-blue transition-colors duration-300">
                        {step.title}
                      </h3>
                      <h4 className="text-lg font-semibold gradient-text">
                        {step.subtitle}
                      </h4>
                      <p className="text-gray-400 leading-relaxed max-w-sm mx-auto">
                        {step.description}
                      </p>
                    </div>

                    {/* Decorative Element */}
                    <div className="mt-8 flex justify-center">
                      <div className={`w-16 h-1 bg-gradient-to-r ${step.color} rounded-full`}></div>
                    </div>
                  </div>

                  {/* Animated Arrow (only between steps, not after the last one) */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute top-12 -right-8 z-20">
                      <div 
                        className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                        style={{ transitionDelay: isVisible ? `${(index + 1) * 300 + 200}ms` : '0s' }}
                      >
                        <ArrowRight 
                          className="w-8 h-8 text-electric-blue animate-pulse" 
                          style={{ 
                            filter: 'drop-shadow(0 0 8px rgba(14, 165, 233, 0.5))',
                            animation: `pulse 2s infinite ${index * 0.5}s`
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Mobile Arrow (vertical, below each step except the last) */}
                  {!isLast && (
                    <div className="lg:hidden flex justify-center mt-8 mb-8">
                      <div 
                        className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{ transitionDelay: isVisible ? `${(index + 1) * 300 + 200}ms` : '0s' }}
                      >
                        <div className="flex flex-col items-center">
                          <div className="w-px h-8 bg-gradient-to-b from-electric-blue to-transparent"></div>
                          <ArrowDown 
                            className="w-6 h-6 text-electric-blue animate-pulse" 
                            style={{ 
                              filter: 'drop-shadow(0 0 8px rgba(14, 165, 233, 0.5))',
                              animation: `pulse 2s infinite ${index * 0.5}s`
                            }}
                          />
                          <div className="w-px h-8 bg-gradient-to-b from-transparent to-electric-blue"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-400 mb-6">
              Let's transform your ideas into reality with our proven development process.
            </p>
            <button className="btn-primary flex items-center justify-center mx-auto">
              <span>Start Your Journey</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
