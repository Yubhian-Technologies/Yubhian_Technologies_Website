
import React from 'react';
import { ArrowUp, Linkedin, Twitter, Github, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';
import ScrollToTopButton from './ScrollToTopButton';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'AI/ML Development',
    'Web Applications',
    'Blockchain Solutions',
    'Backend Services',
    'SEO & Digital Marketing',
    'Student Training Programs'
  ];

  const company = [
    'About Us',
    'Our Process',
    'Case Studies',
    'Careers',
    'Blog',
    'Privacy Policy',
    'Terms of Service'
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Github, href: '#', name: 'GitHub' },
    { icon: Instagram, href: '#', name: 'Instagram' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-rich-black to-deep-navy border-t border-white/10">
      {/* Main Footer Content */}
      <div className="container-custom py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-brand-violet rounded-lg flex items-center justify-center font-display font-bold text-white text-xl">
                YT
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white">
                  Yubhian Technologies
                </h3>
                <p className="text-sm text-gray-400">EST. 2024</p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Leading IT Solutions Provider specializing in cutting-edge technology solutions that drive business growth and digital transformation.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
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

          {/* Services */}
          {/* <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services"
                    className="text-gray-400 hover:text-electric-blue transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-gray-400 hover:text-electric-blue transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Stay Connected</h4>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-electric-blue" />
                <a href="mailto:support@yubhiantech.in" className="hover:text-white transition-colors duration-300">
                  support@yubhiantech.in
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-electric-blue" />
                <a href="tel:+918500401091" className="hover:text-white transition-colors duration-300">
                  +91 8500401091
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-electric-blue" />
                <span>Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Clock className="w-5 h-5 text-electric-blue" />
                <span>Mon-Sat: 9AM-6PM</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4 ">
              <p className="text-gray-400 text-sm">Subscribe to our newsletter for updates</p>
              <div className="flex -mx-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-electric-blue to-brand-violet text-white rounded-r-lg hover:shadow-lg transition-all duration-300">
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
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Yubhian Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <ScrollToTopButton/>
    </footer>
  );
};

export default Footer;
