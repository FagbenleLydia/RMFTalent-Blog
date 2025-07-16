import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[url('/hero-bg.svg')] bg-no-repeat bg-cover bg-center pt-16 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-[64px] sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-left">
                <span className="block">Build faster with</span>
                <span className="inline bg-purple-200 text-gray-900 rounded leading-[1.5]">
                  pre-vetted
                </span>
                <span className="block">technical talent</span>
              </h1>

              <p className="text-[20px] sm:text-xl text-[#727272]  max-w-2xl mx-auto lg:mx-0">
                Hire skilled designers, developers, and PMs through RMFTalents.
                No hassle. Just great results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
              <button className="min-w-[180px] sm:min-w-[200px] px-4 py-3.5 bg-[#A86CFF] text-white rounded-lg transition-all transform hover:scale-105 ">
                <span className="mr-4">Book a call</span>
                <span>&gt;&gt;</span>
              </button>

              <button className="min-w-[180px] sm:min-w-[200px] px-4 py-3.5 border border-[#211743] text-gray-400 rounded-lg hover:bg-gray-50 ">
                See our packages
              </button>
            </div>
          </div>

          <div className="relative flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              <img
                src="/hero-illustration.gif"
                alt="Hero illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
