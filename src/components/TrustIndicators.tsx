import React from "react";

const TrustIndicators: React.FC = () => {
  const logos = [
    "/logos/dexhub.svg",
    "/logos/fastsail.svg",
    "/logos/dexhub.svg",
    "/logos/fastsail.svg",
  ];

  return (
    <section className="py-12 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#211743]">
            Trusted by fast growing brands{" "}
            <span className="inline-block">🚀</span>
          </h2>
        </div>

        {/* Balanced width scroll container */}
        <div className="relative overflow-hidden max-w-[1000px] mx-auto">
          <div className="flex animate-scroll-brands space-x-12 opacity-80 hover:opacity-100 transition-opacity">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 min-w-max">
                <img
                  src={logo}
                  alt={`brand-logo-${index}`}
                  className="h-10 sm:h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
