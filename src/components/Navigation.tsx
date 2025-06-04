import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const smoothScroll = (el) => {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Trigger initial load animation
    setTimeout(() => setIsLoaded(true), 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  const navigate = useNavigate();

  const handleGetInTouchClick = () => {
    // Navigate to the contact section smoothly using HashLink style
    navigate("/#contact", { replace: false });

    setIsMobileMenuOpen(false);
  };
  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? "h-14 sm:h-16 md:h-18 lg:h-20 backdrop-blur-xl bg-gray-900/80 shadow-2xl border-b border-white/10"
            : "h-16 sm:h-18 md:h-20 lg:h-24 bg-transparent"
        } ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <div
            className={`flex items-center space-x-2 sm:space-x-3 transition-all duration-500 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white transition-all duration-500 hover:scale-110 hover:rotate-3 ${
                isScrolled ? "shadow-lg" : "shadow-2xl"
              }`}
            >
              <img
                src="/logo_bg.png"
                alt="Logo"
                className="w-6 h-6 md:w-9 md:h-9"
              />
            </div>

            <div className="hidden xs:block">
              <h1 className="font-bold text-white transition-all duration-300 text-sm sm:text-base md:text-lg lg:text-xl">
                Yubhian Technologies
              </h1>
              <p className="text-xs sm:text-xs md:text-sm text-gray-400 -mt-0.5 sm:-mt-1 transition-all duration-300">
                EST. 2024
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <HashLink
                key={item.name}
                scroll={smoothScroll}
                to={`/${item.href}`}
                className={`relative text-gray-300 hover:text-white transition-all duration-300 font-medium group cursor-pointer ${
                  isScrolled ? "text-sm lg:text-base" : "text-base lg:text-lg"
                } ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: `${200 + index * 100}ms`,
                  animation: isLoaded
                    ? `slideInDown 0.6s ease-out ${0.2 + index * 0.1}s both`
                    : "none",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </HashLink>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={handleGetInTouchClick}
              className={`hidden sm:inline-flex items-center justify-center px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group ${
                isScrolled ? "text-xs sm:text-sm" : "text-sm sm:text-base"
              } ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                Get in Touch
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 sm:p-2.5 rounded-lg backdrop-blur-sm bg-white/10 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${
                isMobileMenuOpen ? "rotate-180 bg-white/20" : "rotate-0"
              } ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <div className="transition-transform duration-300">
                {isMobileMenuOpen ? (
                  <X size={18} className="sm:w-5 sm:h-5" />
                ) : (
                  <Menu size={18} className="sm:w-5 sm:h-5" />
                )}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-xl">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="relative max-w-md mx-auto pt-20 sm:pt-24 px-6 sm:px-8">
            <div className="space-y-4 sm:space-y-6">
              {navItems.map((item, index) => (
                <HashLink
                  key={item.name}
                  scroll={smoothScroll}
                  to={`/${item.href}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-xl sm:text-2xl md:text-3xl font-semibold text-white hover:text-blue-400 transition-all duration-300 transform hover:translate-x-2 hover:scale-105 cursor-pointer ${
                    isMobileMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    animation: isMobileMenuOpen
                      ? `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                      : "none",
                  }}
                >
                  {item.name}
                </HashLink>
              ))}

              <div className="pt-6 sm:pt-8">
                <button
                  onClick={handleGetInTouchClick}
                  className={`w-full py-3 sm:py-4 px-6 sm:px-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base sm:text-lg ${
                    isMobileMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: "500ms",
                    animation: isMobileMenuOpen
                      ? "fadeInUp 0.6s ease-out 0.5s both"
                      : "none",
                  }}
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes slideInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          /* Custom responsive breakpoint for very small screens */
          @media (min-width: 475px) {
            .xs\\:block {
              display: block;
            }
          }
          
          /* Enhanced mobile menu animations */
          @media (max-width: 1023px) {
            .mobile-menu-item {
              position: relative;
              overflow: hidden;
            }
            
            .mobile-menu-item::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
              transition: left 0.5s;
            }
            
            .mobile-menu-item:hover::before {
              left: 100%;
            }
          }
          
          /* Smooth scrolling for the entire page */
          html {
            scroll-behavior: smooth;
          }
          
          /* Enhanced backdrop blur support */
          @supports (backdrop-filter: blur(12px)) {
            .backdrop-blur-xl {
              backdrop-filter: blur(12px);
            }
          }
        `,
        }}
      />
    </>
  );
};

export default Navigation;
