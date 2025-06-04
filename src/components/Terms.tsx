import React from "react";
import {
  FileText,
  User,
  Shield,
  Lock,
  Users,
  Briefcase,
  DollarSign,
  Eye,
  Mail,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";

const Terms = () => {
  // Mock scroll animation hook
  const useScrollAnimation = (threshold) => ({
    ref: null,
    isVisible: true,
  });

  const { ref: termsRef, isVisible } = useScrollAnimation(0.1);

  const mainSections = [
    {
      icon: User,
      title: "1. Accuracy of Information",
      content:
        "Employment or internship is contingent upon the accuracy and authenticity of all information and documents submitted by you. If any information is found to be false, misrepresented, or fabricated, Yubhian Technologies reserves the right to terminate your engagement immediately without prior notice or compensation.",
      highlight: true,
    },
    {
      icon: Shield,
      title: "2. Conduct and Compliance",
      content:
        "All individuals are expected to maintain the highest standards of conduct, professionalism, and integrity at all times. You must strictly comply with company policies, procedures, and applicable laws. Any violation may result in disciplinary action, up to and including termination.",
      highlight: false,
    },
  ];

  const confidentialityItems = [
    "Maintain strict confidentiality",
    "Not use such information for personal gain",
    "Not share or disclose such information to unauthorized parties",
  ];

  const intellectualPropertyItems = [
    "Not claim any personal rights to such work",
    "Fully cooperate in transferring intellectual property rights to the company, if needed",
  ];

  const employmentTerms = [
    {
      label: "a.",
      content:
        "Weekly offs, holidays, and leave entitlements will be governed by company policies.",
    },
    {
      label: "b.",
      content:
        "Either party may terminate the employment/internship by giving one week's written notice (or as otherwise specified in your offer letter or employment agreement).",
    },
    {
      label: "c.",
      content:
        "Immediate termination may occur without notice or compensation in the following cases:",
    },
    {
      label: "d.",
      content:
        "You are expected to complete and submit all assigned work, reports, or deliverables in a timely manner.",
    },
    {
      label: "e.",
      content:
        "Issuance of Experience Letter, Relieving Letter, or Completion Certificate is conditional upon successful completion of your responsibilities and clearance from relevant departments.",
    },
  ];

  const terminationReasons = [
    "Breach of company policies or procedures",
    "Violation of the terms of this agreement",
    "Misconduct, including but not limited to: insubordination, negligence, plagiarism, fraud, forgery, theft, damage to company property, or failure to disclose conflicts of interest",
    "Absence from work for four (4) consecutive days without prior approval",
    "Any other grounds under applicable laws or internal disciplinary standards",
  ];

  const additionalSections = [
    {
      icon: DollarSign,
      title: "6. Salary and Appraisals",
      content:
        "Compensation will be determined based on your role, performance, and applicable company salary structure. Eligible employees/interns may receive annual performance-based appraisals and hikes, subject to management review.",
    },
    {
      icon: Eye,
      title: "7. Privacy and Data Protection",
      content:
        "All employees and interns must uphold the principles of data privacy and protection. Sharing company data, documents, or client information with unauthorized individuals is strictly prohibited and may lead to immediate termination and possible legal action.",
    },
  ];

  return (
    <section
      ref={termsRef}
      id="terms-conditions"
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
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight">
              <span className="text-white">Terms & </span>
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
            <strong className="text-white">Yubhian Technologies LLP</strong> -
            Employment & Internship Policy
          </p>
        </div>

        {/* Introduction */}
        <div
          className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
            These terms and conditions govern the responsibilities, conduct, and
            employment relationship of all individuals working with{" "}
            <strong className="text-white">Yubhian Technologies</strong>,
            including interns and full-time employees.
          </p>
        </div>

        {/* Main Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          {mainSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl transition-all duration-1000 ${
                  section.highlight ? "border-red-400/50 bg-red-900/10" : ""
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${300 + index * 100}ms` : "0s",
                }}
              >
                <div className="flex items-start mb-6 sm:mb-8">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${
                      section.highlight
                        ? "bg-gradient-to-br from-red-400 to-orange-400"
                        : "bg-gradient-to-br from-blue-400 to-violet-400"
                    } rounded-lg flex items-center justify-center mr-4 sm:mr-6`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    {section.title}
                  </h2>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  {section.content}
                </p>
                {section.highlight && (
                  <div className="mt-6 sm:mt-8 bg-gradient-to-r from-red-400/20 to-orange-400/20 p-4 sm:p-5 lg:p-6 rounded-lg border border-red-400/30">
                    <div className="flex items-center">
                      <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mr-3" />
                      <p className="text-red-300 font-semibold text-sm sm:text-base lg:text-lg">
                        Immediate termination without notice or compensation
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Confidentiality Section */}
        <div
          className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl mb-8 sm:mb-12 lg:mb-16 xl:mb-20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-start mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-violet-400 rounded-lg flex items-center justify-center mr-4 sm:mr-6">
              <Lock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              3. Confidentiality
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
            During the course of your work, you may have access to{" "}
            <strong className="text-white">
              confidential, proprietary, and trade secret information
            </strong>{" "}
            belonging to Yubhian Technologies or its clients. You are required
            to:
          </p>
          <div className="space-y-4 sm:space-y-5 lg:space-y-6 mb-6 sm:mb-8 lg:mb-10">
            {confidentialityItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full mt-2.5 flex-shrink-0"></div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 p-4 sm:p-5 lg:p-6 rounded-lg border border-yellow-400/30">
            <p className="text-yellow-200 text-sm sm:text-base lg:text-lg leading-relaxed">
              <strong>Important:</strong> Upon resignation, termination, or
              completion of your tenure, all company assets including documents,
              devices, or data must be returned.
            </p>
          </div>
        </div>

        {/* Intellectual Property Section */}
        <div
          className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl mb-8 sm:mb-12 lg:mb-16 xl:mb-20 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-start mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-violet-400 rounded-lg flex items-center justify-center mr-4 sm:mr-6">
              <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              4. Intellectual Property
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
            All work produced during your employment/internship—such as designs,
            code, research, reports, and other intellectual output—will be the{" "}
            <strong className="text-white">
              sole and exclusive property of Yubhian Technologies
            </strong>
            . You agree to:
          </p>
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {intellectualPropertyItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full mt-2.5 flex-shrink-0"></div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Employment Terms and Conditions */}
        <div
          className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl mb-8 sm:mb-12 lg:mb-16 xl:mb-20 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-start mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-violet-400 rounded-lg flex items-center justify-center mr-4 sm:mr-6">
              <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              5. Employment Terms and Conditions
            </h2>
          </div>
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {employmentTerms.map((term, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-blue-400 to-violet-400 text-white font-bold text-sm sm:text-base px-3 py-1 rounded-lg flex-shrink-0 mt-1">
                  {term.label}
                </div>
                <div className="flex-1">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4">
                    {term.content}
                  </p>
                  {term.label === "c." && (
                    <div className="bg-red-900/20 border border-red-400/30 p-4 sm:p-5 lg:p-6 rounded-lg">
                      <div className="space-y-3 sm:space-y-4">
                        {terminationReasons.map((reason, reasonIndex) => (
                          <div
                            key={reasonIndex}
                            className="flex items-start space-x-3"
                          >
                            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-1 flex-shrink-0" />
                            <p className="text-sm sm:text-base text-red-200 leading-relaxed">
                              {reason}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          {additionalSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl transition-all duration-1000 delay-800 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${800 + index * 100}ms` : "0s",
                }}
              >
                <div className="flex items-start mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-violet-400 rounded-lg flex items-center justify-center mr-4 sm:mr-6">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    {section.title}
                  </h2>
                </div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div
          className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-8 sm:mb-10 lg:mb-12 text-center">
            8. Contact for Clarifications
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 text-center mb-8 sm:mb-10 lg:mb-12 leading-relaxed">
            For any questions or clarifications regarding these terms and
            conditions, please contact:
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:yubhiantechnologies@gmail.com"
              className="flex flex-col items-center p-6 sm:p-8 lg:p-10 rounded-xl bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-all duration-300 group max-w-md"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-violet-400 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-3 sm:mb-4">
                  Admin Email
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-300 break-words leading-relaxed">
                  yubhiantechnologies@gmail.com
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
