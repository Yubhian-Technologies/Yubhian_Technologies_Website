import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    isSubmitting: false,
    success: false,
    error: false,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Optional custom validation example
    if (!formData.email.includes("@")) {
      setSubmitStatus({
        isSubmitting: false,
        success: false,
        error: true,
        message: "Please enter a valid email address.",
      });
      return;
    }

    setSubmitStatus({
      isSubmitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbzTrbQUTx7AavvJG3-53cN-_g-KTwrS4Hdk6uVLtycEiXF2BIQpwMIg7MsK91l0oA8V/exec";

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      setSubmitStatus({
        isSubmitting: false,
        success: true,
        error: false,
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus((prev) => ({ ...prev, success: false, message: "" }));
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        isSubmitting: false,
        success: false,
        error: true,
        message:
          "Sorry, there was an error sending your message. Please try again or contact us directly.",
      });

      setTimeout(() => {
        setSubmitStatus((prev) => ({ ...prev, error: false, message: "" }));
      }, 5000);
    }
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
      content: "Info@yubhiantechnologies.in",
      href: "mailto:Info@yubhiantechnologies.in",
    },
    {
      icon: MapPin,
      title: "Location",
      content:
        "4th Floor, Koutilya complex, Maheshwari Chambars, near Irramanzil metro, towards Khairatabad pillar number 1144, somajiguda, Hyderabad, Telangana, India-500082",
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
      className="min-h-screen py-20 bg-gradient-to-b from-transparent to-rich-black/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Contact Us
            </span>
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

            {/* Status Messages */}
            {submitStatus.success && (
              <div className="flex items-center space-x-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <p className="text-green-400">{submitStatus.message}</p>
              </div>
            )}

            {submitStatus.error && (
              <div className="flex items-center space-x-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                <p className="text-red-400">{submitStatus.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={submitStatus.isSubmitting}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
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
                    disabled={submitStatus.isSubmitting}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
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
                    disabled={submitStatus.isSubmitting}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
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
                    disabled={submitStatus.isSubmitting}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
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
                  disabled={submitStatus.isSubmitting}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 resize-none disabled:opacity-50"
                  placeholder="Your Message"
                />
              </div>

              <button
                type="submit"
                disabled={submitStatus.isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center group"
              >
                {submitStatus.isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Contact Information
              </h3>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                    style={{
                      animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
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
                          className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                        >
                          {info.content}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
