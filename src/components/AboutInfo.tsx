import React from "react";
import ProfileCard from "./ProfileCard";

const AboutInfo: React.FC = () => {
  return (
    <section className="relative bg-[#FAFAFA] overflow-hidden py-24 px-4 sm:px-6 lg:px-8 min-h-[500px]">
      {/* Floating Profile Images */}
      <ProfileCard
        image="/stellamark.png"
        className="top-10 left-[5%] sm:left-[10%] animate-float"
        rotate="-rotate-6"
      />
      <ProfileCard
        image="/akshatmark.png"
        className="top-10 right-[5%] sm:right-[10%] animate-float"
        rotate="rotate-6"
      />
      <ProfileCard
        image="/isaacmark.png"
        className="bottom-4 left-[18%] sm:left-[22%] animate-float"
        rotate="-rotate-6"
      />
      <ProfileCard
        image="/lydiamark.png"
        className="bottom-4 right-[18%] sm:right-[22%] animate-float"
        rotate="rotate-6"
      />

      {/* Centered Text */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center h-full min-h-[300px] px-4">
        <h1 className="text-[36px] sm:text-[36px] md:text-[36px] lg:text-[48px] font-bold text-[#211743] mb-4 leading-tight">
          About RMFTalents
        </h1>
        <p className="text-[14px] sm:text-[14px] md:text-[20px] text-[#393642] max-w-2xl mx-auto leading-relaxed">
          Helping companies of all sizes, across all industries build
          <br className="hidden sm:block" />
          high-performing teams and products.
        </p>
      </div>
    </section>
  );
};

export default AboutInfo;
