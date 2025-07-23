import React from "react";
const phoneNumber = "+2349039846793";
const handleBookCall = () => {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`;
  window.open(whatsappUrl, "_blank");
};

const CTA: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#211743] rounded-3xl text-center px-6 py-14 sm:py-16 md:py-20 shadow-md">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/rmf-logo1.png"
              alt="RMF Logo"
              className="h-8 object-contain inline-block"
            />
          </div>

          {/* Title */}
          <h2 className="text-[24px] sm:text-[24px] md:text-[32px] font-bold text-white mb-4">
            Let us help you accelerate your business
          </h2>

          {/* Description */}
          <p className="text-[14px] sm:text-[14px] md:text-[16px] text-[#EDE0FF] max-w-2xl mx-auto leading-relaxed mb-8">
            Our team of experts is ready to collaborate with you and turn your
            ideas into impactful results. Contact us today and let's make it
            happen!
          </p>

          {/* Button */}
          <button
            onClick={handleBookCall}
            className="flex w-full sm:w-[470px] items-center justify-center gap-2 bg-white text-[#211743] font-semibold text-[16px] px-6 sm:px-8 py-3 sm:py-4 rounded-md sm:rounded-lg hover:bg-gray-200 transition duration-200 mx-auto"
          >
            <span>Send a message</span>
            <span className="px-2 mt-1">&gt;&gt;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
