import React from 'react';
import { Award, Users, Target, GraduationCap, Building2, Rocket } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref: aboutRef, isVisible } = useScrollAnimation(0.1);

  const highlights = [
    {
      icon: Award,
      title: 'Industry Expertise',
      description: 'Deep knowledge across multiple technology domains'
    },
    {
      icon: Users,
      title: 'Strong Partnerships',
      description: 'Collaborative approach with long-term client relationships'
    },
    {
      icon: Target,
      title: 'Competitive Pricing',
      description: 'Premium quality solutions at competitive market rates'
    }
  ];

  const affiliates = [
    { name: 'AICTE', desc: 'All India Council for Technical Education', icon: GraduationCap },
    { name: 'MSME', desc: 'Micro, Small & Medium Enterprises', icon: Building2 },
    { name: 'StartupIndia', desc: 'Government of India Initiative', icon: Rocket }
  ];

  return (
    <section 
      ref={aboutRef}
      id="about" 
      className="section-padding"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Content Side */}
          <div className="space-y-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                <span className="text-white">About</span>
                <br />
                <span className="gradient-text">Yubhian Technologies</span>
              </h2>
              <h3 className="text-xl font-semibold text-gray-300 mb-6">Who We Are</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Established in 2024, Yubhian Technologies stands at the forefront of digital innovation, 
                delivering enterprise-grade IT solutions that transform businesses. Our commitment to 
                excellence and cutting-edge technology makes us the preferred partner for organizations 
                seeking scalable, reliable, and innovative solutions.
              </p>
            </div>
          </div>

          {/* Highlights Side */}
          <div className="space-y-8">
            <div className={`glass-effect p-8 rounded-2xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-2xl font-bold gradient-text mb-8">Why Choose Us?</h3>
              <div className="space-y-6">
                {highlights.map((highlight, index) => {
                  const IconComponent = highlight.icon;
                  return (
                    <div 
                      key={index}
                      className={`flex items-start space-x-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                      style={{ transitionDelay: isVisible ? `${500 + index * 200}ms` : '0s' }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-brand-violet rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">{highlight.title}</h4>
                        <p className="text-gray-400 text-sm">{highlight.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Affiliates - Full Width */}
        <div className={`mt-20 glass-effect p-8 rounded-2xl transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-xl font-bold text-white mb-8 text-center">Our Affiliates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {affiliates.map((affiliate, index) => {
              const IconComponent = affiliate.icon;
              return (
                <div 
                  key={index}
                  className={`flex flex-col items-center p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: isVisible ? `${900 + index * 100}ms` : '0s' }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-brand-violet rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-white mb-2">{affiliate.name}</div>
                    <div className="text-xs text-gray-400 leading-relaxed">{affiliate.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;