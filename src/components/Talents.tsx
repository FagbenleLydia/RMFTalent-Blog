import React from "react";
import { ArrowRight } from "lucide-react";

function Talents() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      {/* Hero section */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-snug">
          Your strategic talent <br />
          <span className="relative top-[3px] bg-purple-200/60 text-gray-900 px-2 py-[1px] rounded-md inline-block">
            acquisition
          </span>{" "}
          partner
        </h1>

        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          We help ambitious companies recruit the talent
          <br />
          they need to launch their products fast and scale
          <br />
          their company forward.
        </p>

        <button className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-all duration-300">
          Book a call
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Character cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Software Developer */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <div className="h-64 bg-gradient-to-br from-orange-300 to-yellow-400 relative overflow-hidden flex items-center justify-center">
            <img src="/soft1.png" className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-center font-serif text-lg text-gray-800 italic font-medium">
              Software Developer
            </h3>
          </div>
        </div>

        {/* QA Engineer */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <div className="h-64 bg-gradient-to-br from-purple-400 to-purple-500 relative overflow-hidden flex items-center justify-center">
            <img
              src="/QA.png"
              alt="QA Engineer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-center font-serif text-lg text-gray-800 italic font-medium">
              QA Engineer
            </h3>
          </div>
        </div>

        {/* Back-end Developer */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-500 relative overflow-hidden flex items-center justify-center">
            <img
              src="/back.png"
              alt="Back-end Developer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-center font-serif text-lg text-gray-800 italic font-medium">
              Back-end Developer
            </h3>
          </div>
        </div>

        {/* Product Designer */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <div className="h-64 bg-gradient-to-br from-yellow-400 to-orange-400 relative overflow-hidden flex items-center justify-center">
            <img
              src="/product.png"
              alt="Product Designer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-center font-serif text-lg text-gray-800 italic font-medium">
              Product Designer
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talents;
