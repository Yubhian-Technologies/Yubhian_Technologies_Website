import React, { useState, useRef, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  Heart,
  Users,
  Clock as ClockIcon,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    conversationTopic: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    isSubmitting: false,
    success: false,
    error: false,
    message: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTopicSelect = (topic: string) => {
    setFormData({ ...formData, conversationTopic: topic });
    setIsDropdownOpen(false);
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      conversationTopic: "",
      subject: "",
      message: "",
    });
    setSubmitStatus({
      isSubmitting: false,
      success: false,
      error: false,
      message: "",
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    if (submitStatus.success && successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [submitStatus.success]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      setSubmitStatus({
        isSubmitting: false,
        success: false,
        error: true,
        message: "Please enter a valid email address.",
      });
      return;
    }
    if (!formData.conversationTopic) {
      setSubmitStatus({
        isSubmitting: false,
        success: false,
        error: true,
        message: "Please select a conversation topic.",
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
        "https://script.google.com/macros/s/AKfycbyh6J_O6kn40vliwfHW3WY5Upu68zYm67iH3Ak5DNBZVo4QkRtYu2dg5eoFG4yLKpkbOw/exec";

      const body = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        body.append(key, value as string);
      });

      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: body.toString(),
      });

      const json = await res.json();

      if (json.status === "success") {
        setSubmitStatus({
          isSubmitting: false,
          success: true,
          error: false,
          message: "Thank you! Your message has been sent successfully.",
        });
      } else {
        throw new Error(json.message || "Unknown server error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        isSubmitting: false,
        success: false,
        error: true,
        message:
          "Sorry, there was an error sending your message. Please try again or contact us directly.",
      });
    }
  };

  const contactInfo = [
    { icon: Phone, title: "Phone", content: "+91 8500401091", href: "tel:+918500401091" },
    { icon: Mail, title: "Email", content: "info@yubhiantechnologies.in", href: "mailto:Info@yubhiantechnologies.in" },
    { icon: MapPin, title: "Location", content: "4th Floor, Koutilya complex, Maheshwari Chambars, near Irramanzil metro, towards Khairatabad pillar number 1144, somajiguda, Hyderabad, Telangana, India-500082", href: "#" },
    { icon: Clock, title: "Business Hours", content: "Mon–Sat, 9AM–6PM", href: "#" },
  ];

  const topics = ["Service Inquiry", "Careers", "Others"];

  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-b from-transparent to-rich-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              {submitStatus.success ? "Thank You!" : "Contact Us"}
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {submitStatus.success 
              ? "We're excited to connect with you!" 
              : "Let's Build Something Amazing Together"
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info left side - Always visible */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            </div>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer group" 
                  style={{ animation: `fadeIn 0.6s ease-out ${index * 0.1}s both` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                    {info.href.startsWith("#") ? (
                      <p className="text-gray-400">{info.content}</p>
                    ) : (
                      <a href={info.href} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                        {info.content}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Form or Success Message */}
          <div className="space-y-8">
            {submitStatus.success ? (
              // --- SUCCESS STATE ---
              <div 
                ref={successRef}
                className="relative overflow-hidden mt-20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-purple-600/10 rounded-2xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                  {/* Animated Checkmark */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center animate-scaleIn">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute inset-0 rounded-full border-4 border-green-500/30 animate-ping-slow"></div>
                    </div>
                  </div>

                  {/* Success Message */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Message Received!
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Thank you for reaching out, <span className="text-blue-400 font-semibold">{formData.name}</span>! 
                    We've received your message and our team will contact you within 24 hours.
                  </p>

                  {/* Additional Info Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <ClockIcon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-300">Response Time</p>
                      <p className="text-white font-semibold">Within 24h</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-300">Team</p>
                      <p className="text-white font-semibold">Expert Support</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <Heart className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-300">We Appreciate</p>
                      <p className="text-white font-semibold">Your Interest</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={handleResetForm}
                      className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                    >
                      Send Another Message
                      <Send className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
                </div>
              </div>
            ) : (
              // --- FORM STATE ---
              <>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Send us a Message</h3>
                  <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                {submitStatus.error && (
                  <div className="flex items-center space-x-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg animate-shake">
                    <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                    <p className="text-red-400">{submitStatus.message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      disabled={submitStatus.isSubmitting} 
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 disabled:opacity-50" 
                      placeholder="Phone Number (Optional)" 
                    />
                    <div className="relative" ref={dropdownRef}>
                      <button 
                        type="button" 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                        disabled={submitStatus.isSubmitting} 
                        className="w-full flex justify-between items-center px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 disabled:opacity-50 text-left"
                      >
                        <span className={formData.conversationTopic ? "text-white" : "text-gray-400"}>
                          {formData.conversationTopic || "Select a Topic..."}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isDropdownOpen ? "transform rotate-180" : ""}`} />
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute z-10 w-full mt-2 bg-rich-black border border-white/10 rounded-lg shadow-lg backdrop-blur-sm">
                          {topics.map((topic) => (
                            <div 
                              key={topic} 
                              onClick={() => handleTopicSelect(topic)} 
                              className="px-4 py-3 text-white hover:bg-white/10 cursor-pointer transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                            >
                              {topic}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

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
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    required 
                    rows={5} 
                    disabled={submitStatus.isSubmitting} 
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 resize-none disabled:opacity-50" 
                    placeholder="Your Message" 
                  />

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
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .bg-rich-black { background-color: #121212; }
        .animate-scaleIn { animation: scaleIn 0.6s ease-out; }
        .animate-shake { animation: shake 0.5s ease-in-out; }
        .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
      `}</style>
    </section>
  );
};

export default ContactSection;
