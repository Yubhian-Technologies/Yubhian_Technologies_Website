
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleGetInTouchClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'h-16 glass-effect shadow-lg' 
          : 'h-20 bg-transparent'
      }`}>
        <div className="container-custom h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-electric-blue to-brand-violet rounded-lg flex items-center justify-center font-display font-bold text-white text-xl animate-glow">
              YT
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-xl text-white">
                Yubhian Technologies
              </h1>
              <p className="text-xs text-gray-400 -mt-1">EST. 2024</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-blue to-brand-violet transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleGetInTouchClick}
              className="hidden sm:block btn-primary text-sm"
            >
              Get in Touch
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg glass-effect text-white"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-rich-black/95 backdrop-blur-xl">
          <div className="container-custom pt-24 px-6">
            <div className="space-y-6">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-2xl font-semibold text-white hover:text-electric-blue transition-colors duration-300"
                  style={{ 
                    animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
                    opacity: isMobileMenuOpen ? 1 : 0
                  }}
                >
                  {item.name}
                </a>
              ))}
              <button 
                onClick={handleGetInTouchClick}
                className="btn-primary w-full mt-8"
                style={{ 
                  animation: 'fadeIn 0.6s ease-out 0.5s both',
                  opacity: isMobileMenuOpen ? 1 : 0
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
