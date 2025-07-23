import React, { useState } from "react";
import { ArrowRight, ChevronDown, Loader2, CheckCircle } from "lucide-react";
import { init, send } from "@emailjs/browser";

// Init EmailJS
init("BXDKluMnxanAYOveh");

function JoinRmf() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    expertise: "",
    portfolio: "",
    motivation: "",
    agreedToTerms: false,
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const expertiseOptions = [
    "Software Development",
    "Product Management",
    "UI/UX Design",
    "Data Science",
    "DevOps/Infrastructure",
    "Marketing",
    "Business Strategy",
    "Entrepreneurship",
    "Research & Development",
    "Other",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleExpertiseSelect = (expertise: string) => {
    setFormData((prev) => ({ ...prev, expertise }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await send("service_2m0r5j1", "template_w0y24xf", {
        from_name: formData.fullName,
        reply_to: formData.email,
        expertise: formData.expertise,
        portfolio: formData.portfolio,
        motivation: formData.motivation,
      });

      setShowSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        expertise: "",
        portfolio: "",
        motivation: "",
        agreedToTerms: false,
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Join our community
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Be part of a network of like-minded individuals shaping the
              future.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Type your full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Type your email address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
                required
              />
            </div>

            {/* Expertise Dropdown */}
            <div className="relative">
              <label
                htmlFor="expertise"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Area of Expertise
              </label>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-colors text-left flex items-center justify-between bg-white"
              >
                <span
                  className={
                    formData.expertise ? "text-gray-900" : "text-gray-500"
                  }
                >
                  {formData.expertise || "Select your expertise"}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                  {expertiseOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleExpertiseSelect(option)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none text-gray-900 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Portfolio */}
            <div>
              <label
                htmlFor="portfolio"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Portfolio or LinkedIn Profile
              </label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleInputChange}
                placeholder="Add your portfolio or profile link here"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
              />
            </div>

            {/* Motivation */}
            <div>
              <label
                htmlFor="motivation"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Why do you want to join?
              </label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                placeholder="Share your vision for being part of the community."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-colors text-gray-900 placeholder-gray-500 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-200 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send a message</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-3 pt-2">
              <input
                type="checkbox"
                id="agreedToTerms"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-200 focus:ring-2"
                required
              />
              <label
                htmlFor="agreedToTerms"
                className="text-sm text-gray-600 leading-relaxed"
              >
                By signing up, you confirm that you have read and agreed to our{" "}
                <a
                  href="#"
                  className="text-purple-600 hover:text-purple-700 underline"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-purple-600 hover:text-purple-700 underline"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>
          </form>
        </div>

        {/* ✅ Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 backdrop-blur-[10px] bg-[#00000033] flex items-center justify-center z-50">
            <div className=" bg-white  rounded-2xl shadow-lg p-8 w-full max-w-sm text-center">
              <CheckCircle className="mx-auto text-green-500" size={48} />
              <h2 className="text-2xl font-semibold mt-4 text-black ">
                Thank You!
              </h2>
              <p className="text-black mt-2">
                Your form was submitted successfully. We'll get back to you
                shortly.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="mt-6 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default JoinRmf;
