import React, { useState, useRef } from "react"; // Make sure to import useState and useRef
import {
  GraduationCap,
  Code,
  Briefcase,
  Calendar,
  Users,
  Building,
  Mail,
  Phone,
  MapPin,
  User,
  FileText,
  Upload,
  CheckCircle,
  AlertCircle,
  X,
} from "lucide-react"; // Assuming you have lucide-react for icons
import axios from "axios"; // Import axios

const careerCards = [
  {
    id: "internship",
    icon: GraduationCap,
    title: "Internship Program",
    subtitle: "Learn & Grow With Us",
    description:
      "Join our comprehensive internship program designed for students and recent graduates. Gain hands-on experience in cutting-edge technologies.",
    highlights: [
      "3-6 months duration",
      "Mentorship from senior developers",
      "Real project experience",
      "Certificate upon completion",
      "Potential for full-time offer",
    ],
    color: "from-blue-400 to-cyan-400",
  },
  {
    id: "sde",
    icon: Code,
    title: "Software Developer",
    subtitle: "Full-time Position",
    description:
      "We're looking for passionate software developers to join our dynamic team. Work on innovative projects and shape the future of technology.",
    highlights: [
      "Competitive salary package",
      "Flexible working hours",
      "Remote work options",
      "Health & wellness benefits",
      "Career growth opportunities",
    ],
    color: "from-violet-400 to-purple-400",
  },
];

const Careers = () => {
  const careersRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false); // You need to manage isVisible state, possibly using an IntersectionObserver
  const [selectedCard, setSelectedCard] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: "", // For SDE
    college: "", // For Internship
    graduation: "", // For Internship
    skills: "",
    portfolio: "",
    resume: null, // Will store the File object
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  // Placeholder for Intersection Observer logic (you might already have this)
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (careersRef.current) {
      observer.observe(careersRef.current);
    }

    return () => {
      if (careersRef.current) {
        observer.unobserve(careersRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
    } else {
      alert("Please upload a PDF file only.");
      setFormData((prev) => ({ ...prev, resume: null })); // Clear previous invalid file
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const GOOGLE_APPS_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbwKyuW3OFkbKga5iEt-oik_lJI7dQKs-pbjZJXhwmq_jdC3DXDh1cV9Gga2Tgumkkdi/exec"; // Paste your Apps Script Web app URL here

    try {
      let resumeBase64 = null;
      let resumeFileName = null;

      if (formData.resume) {
        // Read resume file as Base64
        const reader = new FileReader();
        reader.readAsDataURL(formData.resume);

        await new Promise((resolve, reject) => {
          reader.onload = () => {
            // Extract base64 part (remove data:application/pdf;base64,)
            if (typeof reader.result === "string") {
              resumeBase64 = reader.result.split(",")[1];
              resumeFileName = formData.resume.name;
              resolve(undefined);
            } else {
              reject(new Error("Failed to read file as base64 string."));
            }
          };
          reader.onerror = (error) => reject(error);
        });
      }

      const dataToSend = {
        ...formData,
        positionType: selectedCard,
        resume: undefined, // Don't send the File object directly
        resumeBase64: resumeBase64,
        resumeFileName: resumeFileName,
        resumeLink: "", // Placeholder, will be filled by Apps Script with Drive URL
      };

      // Send data to Google Apps Script
      const response = await axios.post(GOOGLE_APPS_SCRIPT_URL, dataToSend, {
        headers: {
          "Content-Type": "text/plain;charset=utf-8", // Important for Apps Script to parse JSON
        },
      });

      // Check response from Apps Script
      const responseData = response.data;
      if (responseData.status === "success") {
        setSubmitStatus("success");
        // Optionally, if you want to store the resume URL returned by Apps Script:
        // console.log("Resume uploaded to:", responseData.resumeUrl);
      } else {
        setSubmitStatus("error");
        console.error("Apps Script Error:", responseData.message);
      }

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        experience: "",
        college: "",
        graduation: "",
        skills: "",
        portfolio: "",
        resume: null,
      });

      setTimeout(() => {
        setSelectedCard(null);
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setSelectedCard(null);
    setSubmitStatus(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      experience: "",
      college: "",
      graduation: "",
      skills: "",
      portfolio: "",
      resume: null,
    });
  };

  const currentCard = careerCards.find((card) => card.id === selectedCard);

  return (
    <>
      <section
        ref={careersRef}
        id="careers"
        className="bg-black min-h-screen py-8 sm:py-12 lg:py-20"
      >
        <div className="max-w-7xl md:pt-20 pt-10 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div
            className={`mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-400 to-violet-400 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6">
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight">
                <span className="text-white">Join Our </span>
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Team
                </span>
              </h1>
            </div>
            <div className="flex items-center text-gray-400">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
              <span className="text-sm sm:text-base lg:text-lg">
                <strong>Opportunities Available Now</strong>
              </span>
            </div>
          </div>

          {/* Introduction */}
          <div
            className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              At Yubhian Technologies LLP, we believe in fostering talent and
              creating opportunities for growth. Whether you're starting your
              career journey or looking to take the next step, we have exciting
              opportunities waiting for you.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mt-6 lg:mt-8">
              Join us in building innovative solutions and shaping the future of
              technology.
            </p>
          </div>

          {/* Career Cards */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {careerCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${400 + index * 200}ms`
                      : "0s",
                  }}
                  onClick={() => setSelectedCard(card.id)}
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                    {card.title}
                  </h3>

                  <p
                    className={`text-base sm:text-lg font-semibold bg-gradient-to-r ${card.color} bg-clip-text text-transparent mb-4 sm:mb-6`}
                  >
                    {card.subtitle}
                  </p>

                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                    {card.description}
                  </p>

                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {card.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div
                          className={`w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-r ${card.color} rounded-full mt-2.5 flex-shrink-0`}
                        ></div>
                        <span className="text-sm sm:text-base text-gray-400 leading-relaxed">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full py-3 sm:py-4 px-6 sm:px-8 bg-gradient-to-r ${card.color} text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-base sm:text-lg`}
                  >
                    Apply Now
                  </button>
                </div>
              );
            })}
          </div>

          {/* Company Culture Section */}
          <div
            className={`bg-gray-900/50 backdrop-blur-md border border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-6 sm:mb-8 text-center">
              Why Choose Yubhian Technologies?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  Collaborative Environment
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Work with talented professionals in a supportive and
                  innovative environment.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  Growth Opportunities
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Continuous learning and career advancement opportunities to
                  help you reach your potential.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                  Cutting-edge Technology
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Work with the latest technologies and tools in exciting,
                  challenging projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Form */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Apply for {currentCard?.title}
                </h3>
                <p className="text-gray-400 mt-1">{currentCard?.subtitle}</p>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {submitStatus === "success" && (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <p className="text-green-400 font-medium">
                    Application submitted successfully! We'll get back to you
                    soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-400 font-medium">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white font-medium flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white font-medium flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Email *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white font-medium flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white font-medium flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Location *</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="City, State"
                  />
                </div>
              </div>

              {selectedCard === "sde" && (
                <div className="space-y-2">
                  <label className="text-white font-medium">Experience *</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
              )}

              {selectedCard === "internship" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white font-medium flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4" />
                      <span>College/University *</span>
                    </label>
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="Enter your college name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white font-medium">
                      Graduation Year *
                    </label>
                    <select
                      name="graduation"
                      value={formData.graduation}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors"
                    >
                      <option value="">Select year</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-white font-medium">
                  Skills & Technologies *
                </label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="List your technical skills (e.g., React, Node.js, Python, etc.)"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white font-medium">
                  Portfolio/GitHub URL
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="https://github.com/username or portfolio URL"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white font-medium flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>Resume (PDF only) *</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    required
                    className="hidden"
                    id="resume-upload"
                  />
                  <label
                    htmlFor="resume-upload"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-gray-400 cursor-pointer hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Upload className="w-5 h-5" />
                    <span>
                      {formData.resume
                        ? formData.resume.name
                        : "Click to upload resume"}
                    </span>
                  </label>
                </div>
                {formData.resume && (
                  <p className="text-green-400 text-sm flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Resume uploaded successfully</span>
                  </p>
                )}
              </div>

              <div className="flex space-x-4 pt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 py-3 px-6 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-400 to-violet-400 hover:from-blue-500 hover:to-violet-500 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Careers;
