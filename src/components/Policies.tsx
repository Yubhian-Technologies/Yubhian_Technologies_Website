import React from "react";
import {
  Shield,
  Eye,
  Lock,
  Users,
  FileText,
  Phone,
  Mail,
  MapPin,
  Calendar,
} from "lucide-react";

const Policies = () => {
  // Mock scroll animation hook
  const useScrollAnimation = (threshold) => ({
    ref: null,
    isVisible: true,
  });

  const { ref: privacyRef, isVisible } = useScrollAnimation(0.1);

  const dataTypes = [
    {
      icon: Users,
      title: "A. Personal Data",
      description: "When you interact with our Service, we may ask for:",
      items: [
        "Name",
        "Email address",
        "Phone number",
        "Address (city, state, ZIP/postal code)",
        "Social media account details (if you register via third-party platforms like Google, Facebook, etc.)",
      ],
    },
    {
      icon: Eye,
      title: "B. Usage Data",
      description: "We automatically collect:",
      items: [
        "IP address",
        "Browser type & version",
        "Pages visited, time spent, and navigation patterns",
        "Device information (e.g., mobile model, operating system)",
      ],
    },
    {
      icon: FileText,
      title: "C. Cookies & Tracking Technologies",
      description: "We use:",
      items: [
        "Essential Cookies – Necessary for website functionality.",
        "Analytics Cookies – To improve user experience.",
        "Marketing Cookies – For personalized ads (if applicable).",
      ],
    },
  ];

  const userRights = [
    {
      icon: Eye,
      title: "Access",
      desc: "Access, correct, or delete your data",
    },
    {
      icon: FileText,
      title: "Opt Out",
      desc: "Opt out of marketing communications",
    },
    {
      icon: Shield,
      title: "Withdraw",
      desc: "Withdraw consent (where applicable)",
    },
    {
      icon: Lock,
      title: "Portability",
      desc: "Request data portability (if under GDPR)",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@yubhiantechnologies.in",
      href: "mailto:info@yubhiantechnologies.in",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8500401091",
      href: "tel:+918500401091",
    },
    {
      icon: MapPin,
      label: "Address",
      value:
        "4th Floor, Koutilya complex, Maheshwari Chambars, near Irramanzil metro, towards Khairatabad pillar number 1144, somajiguda, Hyderabad, Telangana, India-500082",
      href: null,
    },
  ];

  return (
    <section
      ref={privacyRef}
      id="privacy-policy"
      className="bg-black min-h-screen py-8 sm:py-12 lg:py-20"
    >
      <div className="max-w-7xl md:pt-20 pt-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-400 to-violet-400 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight">
              <span className="text-white">Privacy </span>
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
          </div>
          <div className="flex items-center text-gray-400">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
            <span className="text-sm sm:text-base lg:text-lg">
              <strong>Last Updated: June 03, 2025</strong>
            </span>
          </div>
        </div>

        {/* Introduction */}
        <div
          className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
            Yubhian Technologies LLP is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your personal information when you visit our website{" "}
            <a
              href="https://www.yubhiantechnologies.in/"
              className="text-blue-400 no-underline hover:text-violet-400 transition-colors underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yubhian Technologies
            </a>
            .
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mt-6 lg:mt-8">
            By using our Service, you consent to the practices described in this
            policy. If you do not agree, please refrain from using our Service.
          </p>
        </div>

        {/* 1. Information We Collect */}
        <div
          className={`mb-8 sm:mb-12 lg:mb-16 xl:mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-8 sm:mb-10 lg:mb-12">
            1. Information We Collect
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 leading-relaxed">
            We collect the following types of information:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {dataTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 rounded-xl hover:bg-gray-800/50 transition-all duration-300 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${600 + index * 100}ms`
                      : "0s",
                  }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-violet-400 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-4 sm:mb-5 lg:mb-6">
                    {type.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <ul className="space-y-3 sm:space-y-4">
                    {type.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-400 text-sm sm:text-base lg:text-lg flex items-start leading-relaxed"
                      >
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-blue-400 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 rounded-xl mt-6 sm:mt-8 lg:mt-10">
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              You can manage cookies via browser settings, but disabling them
              may affect Service functionality.
            </p>
          </div>
        </div>

        {/* 2. How We Use Your Data & 3. Sharing Your Data - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          {/* 2. How We Use Your Data */}
          <div
            className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-6 sm:mb-8 lg:mb-10">
              2. How We Use Your Data
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
              We process your information to:
            </p>
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              {[
                "Provide and maintain the Service.",
                "Manage your account and requests.",
                "Communicate updates, offers, or security alerts.",
                "Analyze usage trends and improve our Service.",
                "Comply with legal obligations.",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Sharing Your Data */}
          <div
            className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-6 sm:mb-8 lg:mb-10">
              3. Sharing Your Data
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
              We may share your data with:
            </p>
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 mb-6 sm:mb-8 lg:mb-10">
              {[
                "Service Providers (e.g., hosting, analytics).",
                "Business Partners (for joint offerings, with consent).",
                "Legal Authorities (if required by law).",
                "Affiliates & Acquirers (in case of mergers or acquisitions).",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-blue-400/20 to-violet-400/20 p-4 sm:p-5 lg:p-6 rounded-lg border border-blue-400/30">
              <p className="text-white font-semibold text-sm sm:text-base lg:text-lg">
                We do <strong>not</strong> sell your personal data to third
                parties.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Data Retention & Security */}
        <div
          className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl mb-8 sm:mb-12 lg:mb-16 xl:mb-20 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-6 sm:mb-8 lg:mb-10">
            4. Data Retention & Security
          </h2>
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full mt-2.5 flex-shrink-0"></div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                We retain data only as long as necessary for legal or business
                purposes.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full mt-2.5 flex-shrink-0"></div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                We implement industry-standard security measures but cannot
                guarantee absolute security.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Your Rights */}
        <div
          className={`mb-8 sm:mb-12 lg:mb-16 xl:mb-20 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-8 sm:mb-10 lg:mb-12">
            5. Your Rights
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 leading-relaxed">
            You have the following rights regarding your personal data:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10 lg:mb-12">
            {userRights.map((right, index) => {
              const Icon = right.icon;
              return (
                <div
                  key={index}
                  className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 rounded-xl text-center hover:bg-gray-800/50 transition-all duration-300 group ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${800 + index * 100}ms`
                      : "0s",
                  }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-violet-400 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-4 sm:mb-5 lg:mb-6">
                    {right.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {right.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 rounded-xl">
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:info@yubhiantechnologies.in"
                className="text-blue-400 hover:text-violet-400 transition-colors underline"
              >
                info@yubhiantechnologies.in
              </a>
              .
            </p>
          </div>
        </div>

        {/* 6. Children's Privacy & 7. Third-Party Links - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          <div
            className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl transition-all duration-1000 delay-750 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-6 sm:mb-8 lg:mb-10">
              6. Children's Privacy
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Our Service is <strong className="text-white">not</strong>{" "}
              intended for users under{" "}
              <strong className="text-white">13</strong>. If we discover
              accidental collection of a child's data, we will delete it
              promptly.
            </p>
          </div>

          <div
            className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-6 sm:mb-8 lg:mb-10">
              7. Third-Party Links
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Our Service may contain links to external sites. We are not
              responsible for their privacy practices.
            </p>
          </div>
        </div>

        {/* 8. Changes to This Policy */}
        <div
          className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl mb-8 sm:mb-12 lg:mb-16 xl:mb-20 transition-all duration-1000 delay-850 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-6 sm:mb-8 lg:mb-10">
            8. Changes to This Policy
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
            We may update this Privacy Policy periodically. Changes take effect
            upon posting, with prior notice via email or website alerts.
          </p>
        </div>

        {/* 9. Contact Us */}
        <div
          className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-8 sm:mb-10 lg:mb-12 text-center">
            9. Contact Us
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 text-center mb-8 sm:mb-10 lg:mb-12 leading-relaxed">
            For questions or requests regarding this Privacy Policy, contact us
            at:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              const content = (
                <div className="flex flex-col items-center p-6 sm:p-8 lg:p-10 rounded-xl bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-all duration-300 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-violet-400 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-3 sm:mb-4">
                      {contact.label}
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg text-gray-300 break-words leading-relaxed">
                      {contact.value}
                    </div>
                  </div>
                </div>
              );
              return contact.href ? (
                <a key={index} href={contact.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policies;
