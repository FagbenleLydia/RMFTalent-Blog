import React from "react";

const OurStory: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        {/* OUR STORY label */}
        <p className="text-[#AD75FF] text-[14px] font-medium tracking-wide uppercase mb-2 text-center lg:text-left">
          OUR STORY
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-6 items-start">
          {/* Left side: Heading */}
          <div className="flex flex-col justify-start">
            <h2 className="text-[26px] md:text-[26px] lg:text-[32px] font-bold text-[#211743] leading-tight text-center lg:text-left">
              We build result-driven <br />
              teams that build <br />
              products
            </h2>
          </div>

          {/* Right side: Paragraphs */}
          <div className="mt-2 lg:mt-0 space-y-3">
            <p className="text-[16px] text-[#393642] leading-relaxed">
              RMFTalents is a Talent-as-a-Service company helping startups build
              and launch products with speed, quality, and cost-efficiency. Our
              strength lies in our curated talent pool of top-tier engineering
              talents and professionals.
            </p>
            <p className="text-[16px] text-[#393642] leading-relaxed">
              We do this through our unique hybrid model: senior mentors lead
              carefully trained junior talents, forming agile squads that ship
              real outcomes, fast.
            </p>
            <p className="text-[16px] text-[#393642] leading-relaxed">
              We're not a freelance marketplace. We're not a traditional agency.
              We're a new kind of product team, one that's startup-ready,
              mentor-led, and impact-driven.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
