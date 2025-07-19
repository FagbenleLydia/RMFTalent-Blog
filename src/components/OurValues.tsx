import React from "react";

const OurValues: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-500 text-sm font-medium tracking-wide uppercase mb-4">
            OUR VALUES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What sets RMFTalents apart
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We build product squads for startups — fast, affordable, and
            founder-aligned.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Execution-first */}
          <div className="flex flex-col items-center text-left">
            <div className="mb-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center">
                <img
                  src="/icons/rocket-icon.png"
                  alt="Execution-first"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 self-start">
              Execution-first
            </h3>
            <p className="text-gray-600 leading-relaxed self-start">
              We don't hand you resumes — we hand
              <br /> you working products. Everything we <br />
              do is built to ship.
            </p>
          </div>

          {/* Hybrid model */}
          <div className="flex flex-col items-center text-left">
            <div className="mb-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center">
                <img
                  src="/icons/users-icon.png"
                  alt="Hybrid model"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 self-start">
              Hybrid model
            </h3>
            <p className="text-gray-600 leading-relaxed self-start">
              Every build is led by a seasoned mentor <br />
              and powered by carefully selected <br />
              junior talent trained for startup speed.
            </p>
          </div>

          {/* Startup Aligned */}
          <div className="flex flex-col items-center text-left">
            <div className="mb-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center">
                <img
                  src="/icons/target-icon.png"
                  alt="Startup Aligned"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 self-start">
              Startup Aligned
            </h3>
            <p className="text-gray-600 leading-relaxed self-start">
              We're designed for founders who need <br />
              to launch fast, iterate quickly, and skip <br />
              the enterprise bloat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
