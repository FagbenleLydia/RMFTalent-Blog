import React, { useState, useEffect } from "react";
import { Mail, User, ChevronDown, X, AlertCircle, Loader } from "lucide-react";

// Preload EmailJS
const emailjsPromise = import("@emailjs/browser").then((mod) => {
  mod.init("BXDKluMnxanAYOveh");
  return mod;
});

const SERVICE_ID = "service_2m0r5j1";
const TEMPLATE_ID = "template_k1me8f8";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    project: "",
  });

  const roleOptions = [
    { value: "Frontend Developer", label: "Frontend Developer" },
    { value: "Backend Developer", label: "Backend Developer" },
    { value: "Full Stack Developer", label: "Full Stack Developer" },
    { value: "Mobile App Developer", label: "Mobile App Developer" },
    { value: "UI/UX Designer", label: "UI/UX Designer" },
    { value: "Project Manager", label: "Project Manager" },
    { value: "QA Engineer", label: "QA Engineer" },
  ];

  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Preload EmailJS when component mounts
    emailjsPromise.catch(console.error);
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      setError("First name is required");
      return false;
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.role) {
      setError("Please select a role");
      return false;
    }
    if (!formData.project.trim()) {
      setError("Project description is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const emailjs = await emailjsPromise;

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: `${formData.firstName} ${formData.lastName}`,
        reply_to: formData.email,
        to_email: "informftalents@gmail.com",
        role: formData.role,
        project: formData.project,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        project: "",
      });

      setShowModal(true);
    } catch (err) {
      console.error("EmailJS Error:", err);
      const errorMessage =
        typeof err === "object" && err !== null
          ? "text" in err && typeof err.text === "string"
            ? err.text
            : "message" in err && typeof err.message === "string"
            ? err.message
            : "Unknown error"
          : "Unknown error";
      setError(`Failed to send message: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 relative">
      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-[10px] bg-[#00000033] flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-md text-center relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-semibold text-purple-700 mb-2">
              ✅ Message Sent!
            </h2>
            <p className="text-gray-600">
              Thanks for reaching out. We'll get back to you as soon as
              possible.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main Form UI */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          <div className="hidden lg:flex">
            <div
              className="w-full min-h-[700px] bg-no-repeat bg-contain bg-center"
              style={{ backgroundImage: "url('/stella.png')" }}
            ></div>
          </div>

          <div className="flex items-center">
            <div className="w-full space-y-6 lg:space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Got a project? Our team can help you build it.
                </h2>
                <p className="text-lg lg:text-xl text-gray-600">
                  Tell us what you need, and we'll match you with top-tier
                  talent as quickly as possible.
                </p>
              </div>

              {/* Error Alert */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-red-800">
                      Error sending message
                    </h3>
                    <p className="text-red-700 text-sm mt-1">{error}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. rmftalent@gmail.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Hiring for
                    </label>
                    <div className="relative">
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="appearance-none w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        required
                      >
                        <option value="">Select role</option>
                        {roleOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Briefly describe your project
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Give a brief description"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send a message</span>
                      <span>→</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
