import React from "react";

const ValueProposition: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Label */}
          <div className="text-center lg:text-left mb-2">
            <span className="text-purple-500 font-medium text-sm uppercase tracking-wide block">
              UNIQUE VALUE
            </span>
          </div>

          {/* Heading + Paragraph */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-0 mb-16">
            {/* Left: Heading */}
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[32px] xl:text-5xl font-bold text-gray-900 leading-tight">
                <span className="whitespace-nowrap">
                  Build faster with pre-vetted
                </span>
                <span className="block">engineering teams</span>
              </h2>
            </div>

            {/* Right: Paragraph */}
            <div className="max-w-xl text-center lg:text-left mt-0 lg:mt-2 lg:ml-20">
              <p className="text-[14px] sm:text-[16px] text-gray-600 leading-light max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                <span className="block sm:inline md:block">
                  From MVPs to feature sprints, get remote teams with the
                </span>
                <span className="block sm:inline md:block">
                  right skills, ready to plug into your startup and start
                </span>
                <span className="block sm:inline md:block">shipping.</span>
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 mb-6">
                <img
                  src="/icons/hire.svg"
                  alt="Hire quickly icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Hire quickly
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base break-words">
                Hire in under 48 hours. We offer flexible engagements from
                hourly to full-time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 mb-6">
                <img
                  src="/icons/top-talent.svg"
                  alt="Top 1% icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                The top 1%
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base break-words">
                Every talent is rigorously tested and vetted. Our selective
                process leads to a 98% trial-to-hire success rate.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 mb-6">
                <img
                  src="/icons/professional.svg"
                  alt="Professional icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Highly professional
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base break-words">
                Every talent in our network embodies the highest levels of
                integrity, professionalism, and communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
