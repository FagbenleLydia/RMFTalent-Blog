import React from "react";
const phoneNumber = "+2349039846793";
const handleBookCall = () => {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`;
  window.open(whatsappUrl, "_blank");
};
export default function RightPackage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Choose the <span className="bg-purple-200 px-2 rounded">right</span>
          <br />
          package for your needs
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Whether you're a startup business, or tackling
          <br />
          specific product launch issues, there's a plan for you.
        </p>
        <button
          onClick={handleBookCall}
          className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          <span className="mr-4 text-[16px]">Book a call</span>
          <span className="mt-1">&gt;&gt;</span>
        </button>
      </div>

      {/* Packages Section */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="space-y-16">
          {/* ========== PACKAGE 1 ========== */}
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:bg-white lg:p-8 lg:rounded-2xl  lg:border-gray-300 ">
            <div className="bg-[#F2F0FA] rounded-2xl p-8 w-full sm:w-[85%] md:w-[60%] lg:w-80 flex-shrink-0 mx-auto text-center">
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/icons/Star1-icon.png"
                    alt="star"
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  RMF SPRINT PACK
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Ship a production-ready MVP or feature in 2-4 weeks
                </p>
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-medium transition-colors">
                  Learn more →
                </button>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <h4 className="text-xl font-bold text-gray-900">
                  Exclusive Features
                </h4>
                <img src="/icons/Rocket.png" alt="rocket" className="w-8 h-8" />
              </div>
              <p className="text-gray-600 mb-6">
                Perfect for startups seeking quick MVP launches. Ship your MVP
                in 4 weeks with an <br />
                expert-led, intern-powered squad.
              </p>

              <div className="relative grid md:grid-cols-2 gap-6">
                <div className="hidden md:block absolute inset-y-0 left-[43%] -translate-x-1/2 w-px bg-[#211743]" />

                <div className="space-y-4">
                  {[
                    [
                      "users-icon.png",
                      <p>
                        1 Senior Engineer + 1 - 2 Junior <br /> Developers
                      </p>,
                    ],
                    ["rocket-icon.png", "Production-ready MVP in 2-4 weeks"],
                    ["hand-icon.png", "MVP or single feature/module"],
                  ].map(([icon, text], idx) => (
                    <div className="flex items-start gap-3" key={idx}>
                      <img src={`/icons/${icon}`} className="w-5 h-5 mt-0.5" />
                      <span className="text-gray-700 text-sm">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {[
                    [
                      "headset-icon.png",
                      <p>Fixed scope, async or hybrid support</p>,
                    ],
                    [
                      "tube-icon.png",
                      <p>
                        Ideal for MVP launches, landing <br />
                        pages, testing product-market fit
                      </p>,
                    ],
                    [
                      "switch-icon.png",
                      <p>
                        UI/UX Designer, QA, deployment <br />
                        support
                      </p>,
                    ],
                  ].map(([icon, text], idx) => (
                    <div className="flex items-start gap-3" key={idx}>
                      <img src={`/icons/${icon}`} className="w-5 h-5 mt-1" />
                      <span className="text-gray-700 text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ========== PACKAGE 2 ========== */}
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:bg-white lg:p-8 lg:rounded-2xl  lg:border-gray-300 ">
            <div className="bg-gray-100 lg:bg-gray-50 rounded-2xl p-8 w-full sm:w-[85%] md:w-[60%] lg:w-80 flex-shrink-0 mx-auto text-center">
              <div className="text-center mb-6">
                <div className="w-12 h-12  rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/icons/Star2-icon.png"
                    alt="star"
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  RMF EMBEDDED
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Plug a vetted RMF engineer directly into your team,
                  month-to-month
                </p>
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-medium transition-colors">
                  Learn more →
                </button>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <h4 className="text-xl font-bold text-gray-900">
                  Exclusive Features
                </h4>
                <img src="/icons/Rocket.png" alt="rocket" className="w-8 h-8" />
              </div>
              <p className="text-gray-600 mb-6">
                Perfect for staff augmentation, remote squads. Hire
                startup-ready engineers without <br />
                long-term contracts.
              </p>

              <div className="relative grid md:grid-cols-2 gap-6">
                <div className="hidden md:block absolute inset-y-0 left-[43%] -translate-x-1/2 w-px bg-[#211743]" />

                <div className="space-y-4">
                  {[
                    [
                      "users-icon.png",
                      <p>
                        1 RMF senior engineer (optionally <br />
                        with a junior)
                      </p>,
                    ],
                    [
                      "calendar-icon.png",
                      <p>
                        Monthly subscription, and <br />
                        extendable
                      </p>,
                    ],
                    ["hand-icon.png", "Flexible tasks per sprint"],
                  ].map(([icon, text], idx) => (
                    <div className="flex items-start gap-3" key={idx}>
                      <img src={`/icons/${icon}`} className="w-5 h-5 mt-0.5" />
                      <span className="text-gray-700 text-sm">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {[
                    [
                      "setting-icon.png",
                      <p>
                        Integrated into Slack, standups, <br />
                        async tools
                      </p>,
                    ],
                    [
                      "mark-icon.png",
                      <p>
                        Ideal for staff augmentation, remote <br />
                        squads
                      </p>,
                    ],
                    [
                      "switch-icon.png",
                      <p>
                        Intern pairing, PM sync, DevOps <br />
                        support
                      </p>,
                    ],
                  ].map(([icon, text], idx) => (
                    <div className="flex items-start gap-3" key={idx}>
                      <img src={`/icons/${icon}`} className="w-5 h-5 mt-0.5" />
                      <span className="text-gray-700 text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ========== PACKAGE 3 ========== */}
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:bg-white lg:p-8 lg:rounded-2xl  lg:border-gray-300 ">
            <div className="bg-[#F3EBFF] rounded-2xl p-8 w-full sm:w-[85%] md:w-[60%] lg:w-80 flex-shrink-0 mx-auto text-center">
              <div className="text-center mb-6">
                <div className="w-12 h-12  rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/icons/Star3-icon.png"
                    alt="star"
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  RMF TECH SQUAD
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  A fully managed team for end-to-end
                  <br />
                  product development.
                </p>
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-medium transition-colors">
                  Learn more →
                </button>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <h4 className="text-xl font-bold text-gray-900">
                  Exclusive Features
                </h4>
                <img src="/icons/Rocket.png" alt="rocket" className="w-5 h-5" />
              </div>
              <p className="text-gray-600 mb-6">
                Perfect for non-technical founders, full product builds, startup
                agencies. Your <br />
                outsourced engineering team—built to deliver at startup speed.
              </p>

              <div className="relative grid md:grid-cols-2 gap-6">
                <div className="hidden md:block absolute inset-y-0 left-[43%] -translate-x-1/2 w-px bg-[#211743]" />

                <div className="space-y-4">
                  {[
                    [
                      "users-icon.png",
                      <p>
                        1 Tech Lead + 2–3 junior engineers + <br />
                        Optional PM
                      </p>,
                    ],
                    [
                      "calendar-icon.png",
                      <p>
                        Production-ready end-to-end <br />
                        product in 4–8 weeks
                      </p>,
                    ],
                    [
                      "hand-icon.png",
                      <p>
                        Full MVP, platform build, <br />
                        dashboards
                      </p>,
                    ],
                  ].map(([icon, text], idx) => (
                    <div className="flex items-start gap-3" key={idx}>
                      <img src={`/icons/${icon}`} className="w-5 h-5 mt-0.5" />
                      <span className="text-gray-700 text-sm">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {[
                    [
                      "setting-icon.png",
                      <p>
                        Fully managed delivery with weekly <br /> demos
                      </p>,
                    ],
                    [
                      "mark-icon.png",
                      <p>
                        Ideal for non-technical founders, full <br />
                        product builds, startup agencies
                      </p>,
                    ],
                    ["switch-icon.png", "UI/UX Design, QA, Launch Support"],
                  ].map(([icon, text], idx) => (
                    <div className="flex items-start gap-3" key={idx}>
                      <img src={`/icons/${icon}`} className="w-5 h-5 mt-0.5" />
                      <span className="text-gray-700 text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Statistics */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h2 className="text-[26px] md:text-[26px] lg:text-[32px] font-bold mb-4">
            We Help You Grow Your Business
            <br />
            Without Growing Your Team
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            RMFTalents makes outsourcing engineering team seamless
            <br />
            by eliminating the most common pain points of the industry.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              [
                "10x",
                <p>
                  Faster than in- <br />
                  house hiring
                </p>,
              ],
              [
                "60%",
                <p>
                  Less employment cost <br />
                  per month
                </p>,
              ],
              [
                "8.9",
                <p>
                  Average client <br />
                  rating
                </p>,
              ],
            ].map(([title, subtitle], idx) => (
              <div key={idx}>
                <div className="text-7xl font-bold mb-2">{title}</div>
                <p className="text-[#393642] text-[16px] whitespace-pre-line">
                  {subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
