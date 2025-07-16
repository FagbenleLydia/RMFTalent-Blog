import React, { useState } from "react";
import { Mail, User, ChevronDown } from "lucide-react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    project: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* LEFT IMAGE BOX */}
          <div className="hidden lg:flex">
            <div
              className="w-full min-h-[700px] bg-no-repeat bg-contain bg-center"
              style={{ backgroundImage: "url('/stella.png')" }}
            ></div>
          </div>

          {/* RIGHT FORM */}
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

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["firstName", "lastName"].map((field) => (
                    <div key={field}>
                      <label
                        htmlFor={field}
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {field === "firstName" ? "First Name" : "Last Name"}
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id={field}
                          name={field}
                          value={(formData as any)[field]}
                          onChange={handleInputChange}
                          placeholder={
                            field === "firstName" ? "First name" : "Last name"
                          }
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  ))}
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
                      >
                        <option value="">Select role</option>
                        <option value="frontend">Frontend Developer</option>
                        <option value="backend">Backend Developer</option>
                        <option value="fullstack">Full Stack Developer</option>
                        <option value="mobile">Mobile Developer</option>
                        <option value="designer">UI/UX Designer</option>
                        <option value="pm">Project Manager</option>
                        <option value="qa">QA Engineer</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Project */}
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
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition transform hover:scale-105 shadow-lg"
                >
                  Send a message →
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
