import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#1b0f39] rounded-3xl text-center px-6 py-14 sm:py-16 md:py-20 shadow-md">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <span className="text-2xl font-extrabold text-purple-500">RMF</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Let us help you accelerate your business
          </h2>

          {/* Description */}
          <p className="text-[14px] sm:text-[14px] md:text-[16px] text-gray-100 max-w-2xl mx-auto leading-relaxed mb-8">
            Our team of experts is ready to collaborate with you and turn your
            ideas into impactful results. Contact us today and let's make it
            happen!
          </p>

          {/* Button */}
          <button className="flex items-center justify-center gap-2 bg-white text-[#1b0f39] font-semibold text-[16px] sm:text-[16px] px-6 sm:px-8 py-3 sm:py-4 rounded-md sm:rounded-lg hover:bg-gray-100 transition duration-200 mx-auto">
            <span className="">Send a message</span>
            <span>&gt;&gt;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
