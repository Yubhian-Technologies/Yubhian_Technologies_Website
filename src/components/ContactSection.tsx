import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 8500401091",
      href: "tel:+918500401091",
    },
    {
      icon: Mail,
      title: "Email",
      content: "support@yubhiantech.in",
      href: "mailto:support@yubhiantech.in",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Yubhian Technologies HQ, Andhra Pradesh, India",
      href: "#",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon–Sat, 9AM–6PM",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-transparent to-rich-black"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Let's Build Something Amazing Together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Send us a Message
              </h3>
              <p className="text-gray-400">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue focus:bg-white/10 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue focus:bg-white/10 transition-all duration-300"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue focus:bg-white/10 transition-all duration-300"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue focus:bg-white/10 transition-all duration-300"
                    placeholder="Subject"
                  />
                </div>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue focus:bg-white/10 transition-all duration-300 resize-none"
                  placeholder="Your Message"
                />
              </div>

              <button type="submit" className="w-full btn-primary group">
                Send Message
                <Send className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Contact Information
              </h3>
              {/* <p className="text-gray-400">
                Reach out to us through any of the following channels. We're here to help!
              </p> */}
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 glass-effect rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                    style={{
                      animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-brand-violet rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {info.title}
                      </h4>
                      {info.href.startsWith("#") ? (
                        <p className="text-gray-400">{info.content}</p>
                      ) : (
                        <a
                          href={info.href}
                          className="text-gray-400 hover:text-electric-blue transition-colors duration-300"
                        >
                          {info.content}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map Placeholder */}
            {/* <div className="glass-effect rounded-xl p-6">
              <h4 className="font-semibold text-white mb-4">Our Location</h4>
              <div className="aspect-video bg-gradient-to-br from-electric-blue/20 to-brand-violet/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-electric-blue mx-auto mb-2" />
                  <p className="text-gray-400">Interactive Map Coming Soon</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
