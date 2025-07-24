import React from "react";
import { Star } from "lucide-react";

const TeamShowcase: React.FC = () => {
  const teamMembers = [
    {
      name: "Stella Ajulor",
      role: "Quality Assurance Engineer",
      experience: "3+ years experience",
      rating: 5.0,
      image: "/stella.png",
    },
    {
      name: "Akshat Rawal",
      role: "Software Engineer",
      experience: "2+ years experience",
      rating: 5.0,
      image: "/akshya.png",
    },
    {
      name: "Lydia Fagbenle",
      role: "Software Engineer",
      experience: "3+ years experience",
      rating: 5.0,
      image: "/lydia.png",
    },
    {
      name: "Isaac Auta",
      role: "Integration Engineer",
      experience: "4+ years experience",
      rating: 5.0,
      image: "/isaac.png",
    },
    {
      name: "Raymond Iluobe",
      role: "Project Manager",
      experience: "2+ years experience",
      rating: 5.0,
      image: "/ray.png",
    },
  ];

  const infiniteTeamMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <section className="py-20 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 items-start mb-16">
          {/* Left - Header */}
          <div className="text-center lg:text-left">
            <span className="text-[#AD75FF] font-semibold text-[14px] uppercase tracking-wide mb-2 block">
              TOP TALENT
            </span>

            <h2 className="hidden lg:block text-[32px] font-bold text-[#211743] leading-tight">
              <span className="whitespace-nowrap">
                Meet RMFTalents' top experts
              </span>
              <span className="block">ready to help you scale</span>
            </h2>

            <h2 className="block lg:hidden text-[24px] font-bold text-[#211743] leading-snug">
              Meet RMFTalents' top experts ready to help you scale
            </h2>
          </div>

          {/* Right - Description */}
          <div className="lg:pt-8">
            <p className="hidden lg:block text-[16px] lg:ml-[180px] text-[#393642] leading-relaxed">
              Our best minds across product, engineering, design, and QA. All
              startup-tested, mentor-backed, and ready to execute.
            </p>

            <p className="block lg:hidden text-[14px] text-[#393642] leading-relaxed text-center px-4">
              Our best minds across product, engineering, design, and QA. All
              startup-tested, mentor-backed, and ready to execute.
            </p>
          </div>
        </div>

        {/* Sliding Cards Container */}
        <div className="relative pb-6">
          {/* Prevent manual scroll but allow hover */}
          <div className="overflow-x-auto no-scrollbar pointer-events-none touch-none">
            <div className="flex gap-6 w-max animate-slide-team-infinite pointer-events-auto">
              {infiniteTeamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-72 transition-transform duration-300 hover:scale-105"
                >
                  <div className="bg-gradient-to-br rounded-2xl overflow-hidden h-[410px]">
                    {/* Character Image */}
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Info Section */}
                    <div className="bg-white p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-900">
                          {member.name}
                        </h3>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-purple-600 fill-current" />
                          <span className="text-sm font-semibold text-gray-900">
                            {member.rating.toFixed(1)}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <img
                          src="/bag.png"
                          alt="Role Icon"
                          className="w-4 h-4 object-contain"
                        />
                        <p className="text-sm font-medium text-gray-900">
                          {member.role}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <img
                          src="/trophy.png"
                          alt="Experience Icon"
                          className="w-4 h-4 object-contain"
                        />
                        <p className="text-sm font-medium text-purple-600">
                          {member.experience}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;
