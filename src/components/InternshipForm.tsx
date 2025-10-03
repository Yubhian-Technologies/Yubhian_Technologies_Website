import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  GraduationCap,
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
  Upload,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface InternshipFormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  college: string;
  graduation: string;
  skills: string;
  portfolio: string;
  resume: File | null;
}

const InternshipForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<InternshipFormData>({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    college: "",
    graduation: "",
    skills: "",
    portfolio: "",
    resume: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setFormData((prev) => ({ ...prev, resume: file }));
    } else {
      alert("Please upload a PDF file only.");
      e.target.value = "";
      setFormData((prev) => ({ ...prev, resume: null }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const GOOGLE_APPS_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbzKwAQ986ioXbe-eR5rvtZ4R8pJVOyXMP-JGoGSgZu_m4p7tHpV_IaoqOZkkKW_A5F7/exec";

    try {
      let resumeBase64: string | null = null;
      let resumeFileName: string | null = null;

      if (formData.resume) {
        const reader = new FileReader();
        reader.readAsDataURL(formData.resume);
        await new Promise<void>((resolve, reject) => {
          reader.onload = () => {
            if (typeof reader.result === "string") {
              resumeBase64 = reader.result.split(",")[1];
              resumeFileName = formData.resume!.name;
              resolve();
            } else {
              reject(new Error("Failed to read file."));
            }
          };
          reader.onerror = (error) => reject(error);
        });
      }

      const dataToSend = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        college: formData.college,
        graduation: formData.graduation,
        skills: formData.skills,
        portfolio: formData.portfolio,
        positionType: "internship",
        resumeBase64,
        resumeFileName,
      };

      const response = await axios.post(GOOGLE_APPS_SCRIPT_URL, dataToSend, {
        headers: { "Content-Type": "text/plain;charset=utf-8" },
      });

      if (response.data.status === "success") {
        setSubmitStatus("success");
        setTimeout(() => navigate("/"), 3000);
      } else {
        throw new Error(response.data.message || "Submission failed.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTryAgain = () => {
    setSubmitStatus(null);
  };

  const renderContent = () => {
    if (isSubmitting) {
      return (
        <div className="p-10 flex flex-col items-center justify-center text-white">
          <Loader className="w-12 h-12 animate-spin text-blue-400" />
          <p className="mt-4 text-lg">Submitting your application...</p>
        </div>
      );
    }

    if (submitStatus === "success") {
      return (
        <div className="p-10 flex flex-col items-center justify-center text-white">
          <CheckCircle className="w-16 h-16 text-green-500" />
          <h3 className="mt-4 text-2xl font-bold">Application Submitted!</h3>
          <p className="mt-2 text-gray-400 text-center">
            We've received your application and will get back to you soon.
            Redirecting to home page...
          </p>
        </div>
      );
    }

    if (submitStatus === "error") {
      return (
        <div className="p-10 flex flex-col items-center justify-center text-white">
          <AlertCircle className="w-16 h-16 text-red-500" />
          <h3 className="mt-4 text-2xl font-bold">Submission Failed!</h3>
          <p className="mt-2 text-gray-400 text-center">
            Something went wrong. Please check your connection and try again.
          </p>
          <button
            onClick={handleTryAgain}
            className="mt-6 py-3 px-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
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
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
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
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
              placeholder="Enter your phone number (Eg: +91 xxxxxxxxxx)"
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
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
              placeholder="City, State"
            />
          </div>
        </div>

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
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
              placeholder="Enter your college name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white font-medium">Graduation Year *</label>
            <select
              name="graduation"
              value={formData.graduation}
              onChange={handleInputChange}
              required
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
            >
              <option value="">Select year</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-white font-medium">Skills & Technologies *</label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 resize-none"
            placeholder="List your technical skills (e.g., React, Node.js, Python)"
          />
        </div>

        <div className="space-y-2">
          <label className="text-white font-medium">Portfolio/GitHub URL</label>
          <input
            name="portfolio"
            value={formData.portfolio}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
            placeholder="https://github.com/username or personal website URL"
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
              className="w-full bg-gray-800 border border-dashed border-gray-600 rounded-lg px-4 py-3 text-gray-400 cursor-pointer hover:bg-gray-700 flex items-center justify-center space-x-2"
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
            onClick={() => navigate("/careers")}
            className="flex-1 py-3 px-6 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-400 to-cyan-400 text-white font-semibold rounded-lg disabled:opacity-50"
          >
            Submit Application
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="bg-black min-h-screen py-12 lg:py-20 flex items-center justify-center">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-2xl">
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-2xl font-bold text-white">
            Apply for Internship Program
          </h3>
          <p className="text-gray-400 mt-1">Learn & Grow With Us</p>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default InternshipForm;
