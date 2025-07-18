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
      bgGradient: "from-purple-400 to-purple-600",
    },
    {
      name: "Seun Abilawon",
      role: "Full-Stack Developer",
      experience: "10+ years experience",
      rating: 5.0,
      image: "/seun.png",
      bgGradient: "from-gray-400 to-gray-600",
    },
    {
      name: "Raymond Harry",
      role: "Project Manager",
      experience: "3+ years experience",
      rating: 5.0,
      image: "/ray.png",
      bgGradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Favor Eto",
      role: "Project Manager",
      experience: "3+ years experience",
      rating: 5.0,
      image: "/favor.png",
      bgGradient: "from-orange-400 to-orange-600",
    },
  ];

  // Create multiple copies for seamless infinite scroll
  const infiniteTeamMembers = [
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 items-start mb-16">
          {/* Left - Header */}
          <div className="text-center lg:text-left">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-4 block">
              TOP TALENT
            </span>

            {/* Web view (unchanged) */}
            <h2 className="hidden lg:block text-[32px] lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="whitespace-nowrap">
                Meet RMFTalents' top experts
              </span>
              <span className="block">ready to help you scale</span>
            </h2>

            {/* Mobile view version (centered) */}
            <h2 className="block lg:hidden text-[24px] font-bold text-gray-900 leading-snug">
              Meet RMFTalents' top experts ready to help you scale
            </h2>
          </div>

          {/* Right - Description */}
          <div className="lg:pt-8">
            {/* Web view (unchanged, shifted right) */}
            <p className="hidden lg:block text-[16px] lg:mt-4 lg:ml-[180px] text-gray-600 leading-relaxed">
              Our best minds across product, engineering, design, and
              <br />
              QA. All startup-tested, mentor-backed, and ready to
              <br />
              execute.
            </p>

            {/* Mobile view (centered and clean) */}
            <p className="block lg:hidden  text-[14px] text-gray-600 leading-relaxed text-center px-4">
              Our best minds across product, engineering, design, and QA. All
              startup-tested, mentor-backed, and ready to execute.
            </p>
          </div>
        </div>

        {/* Sliding Cards Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-slide-team-infinite space-x-6">
              {infiniteTeamMembers.map((member, index) => (
                <div key={index} className="flex-shrink-0 w-72 group">
                  <div
                    className={`bg-gradient-to-br ${member.bgGradient} rounded-2xl relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-96`}
                  >
                    {/* Character Image - Takes up most of the card */}
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Bottom Info Section - Compact white section */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white p-4 space-y-2">
                      {/* Name and Rating */}
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

                      {/* Role */}
                      <div className="flex items-center space-x-2">
                        <img
                          src="/bag.png"
                          alt="Trophy"
                          className="w-4 h-4 object-contain flex-shrink-0"
                        />
                        <p className="font-medium text-sm text-gray-900">
                          {member.role}
                        </p>
                      </div>

                      {/* Experience */}
                      <div className="flex items-center space-x-2">
                        <img
                          src="/trophy.png"
                          alt="Trophy"
                          className="w-4 h-4 object-contain flex-shrink-0"
                        />
                        <p className="text-sm text-purple-600 font-medium">
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
