import React from "react";
import {
  ArrowUp,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTopButton";

const Footer = () => {
  const services = [
    "AI/ML Development",
    "Web Applications",
    "Blockchain Solutions",
    "Backend Services",
    "SEO & Digital Marketing",
    "Student Training Programs",
  ];

  const smoothScroll = (el) => {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const company = [
    { label: "About Us", href: "/#about" },
    { label: "Our Process", href: "/#process" },
    { label: "Services", href: "/#services" },
    { label: "Products", href: "/#process" },
    { label: "Privacy Policy", href: "/policies" },
    { label: "Terms of Service", href: "/terms" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/yubhian-technologies/posts/?feedView=all",
      name: "LinkedIn",
    },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-rich-black to-deep-navy border-t border-white/10">
      {/* Main Footer Content */}
      <div className="container-custom py-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {/* Company Brand */}
          <div className="space-y-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3 space-y-3 sm:space-y-0">
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white transition-all duration-500 hover:scale-110 hover:rotate-3
                shadow-2xl"
              >
                <img
                  src="/logo_bg.png"
                  alt="Logo"
                  className="w-6 h-6 md:w-9 md:h-9"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white">
                  Yubhian Technologies
                </h3>
                <p className="text-sm text-gray-400">EST. 2024</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Leading IT Solutions Provider specializing in cutting-edge
              technology solutions that drive business growth and digital
              transformation.
            </p>

            {/* Social Media */}
            <div className="flex justify-center sm:justify-start space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-electric-blue/20 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Info */}
          <div className="space-y-6 text-center sm:text-left">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => {
                const isInternalHash = item.href.startsWith("/#");

                const LinkComponent = isInternalHash ? HashLink : Link;

                return (
                  <li key={index}>
                    <LinkComponent
                      to={item.href}
                      scroll={smoothScroll}
                      className="text-gray-400 hover:text-electric-blue transition-colors duration-300 flex items-center justify-center sm:justify-start group"
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        →
                      </span>
                      {item.label}
                    </LinkComponent>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6 text-center sm:text-left">
            <h4 className="text-lg font-semibold text-white">Stay Connected</h4>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex justify-center sm:justify-start items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-electric-blue" />
                <a
                  href="mailto:Info@yubhiantechnologies.in"
                  className="hover:text-white transition-colors duration-300"
                >
                  Info@yubhiantechnologies.in
                </a>
              </div>
              <div className="flex justify-center sm:justify-start items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-electric-blue" />
                <a
                  href="tel:+918500401091"
                  className="hover:text-white transition-colors duration-300"
                >
                  +91 8500401091
                </a>
              </div>
              <div className="flex justify-center sm:justify-start items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-electric-blue" />
                <span>Andhra Pradesh, India</span>
              </div>
              <div className="flex justify-center sm:justify-start items-center space-x-3 text-gray-400">
                <Clock className="w-5 h-5 text-electric-blue" />
                <span>Mon-Sat: 9AM-6PM</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">
                Subscribe to our newsletter for updates
              </p>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-electric-blue to-brand-violet text-white rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none hover:shadow-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-center sm:text-left">
            <p className="text-gray-400 text-sm">
              © 2024 Yubhian Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
