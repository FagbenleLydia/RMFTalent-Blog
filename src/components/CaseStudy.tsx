import React from "react";

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] px-4 pt-10 pb-20 md:pt-24 md:pb-64">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#211743] mb-4 md:mb-6">
            Case Studies
          </h1>
          <p className="text-base md:text-lg text-[#393642] max-w-2xl leading-relaxed">
            Explore the exceptional expertise of our tech professionals, who
            consistently deliver results through innovative software
            development, design, and engineering solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Case 1 */}
          <div className="group">
            <div className="bg-white rounded-2xl overflow-hidden aspect-[4/3] mb-4 md:mb-6">
              <img
                src="/skycast.png"
                alt="Mobile App Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                SkyCast
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                A growing digital lifestyle brand aimed to deliver a
                lightweight, intuitive mobile application for real-time weather
                updates. RMFTalents deployed a hybrid squad using the RMF Sprint
                Pack, a 4-week delivery team consisting of one senior mobile
                developer and two trained interns. The goal was to build a
                clean, production-ready Flutter app that provided location-based
                weather information in a smooth and responsive interface.
              </p>
            </div>
          </div>

          {/* Case 2 */}
          <div className="group">
            <div className="bg-white rounded-2xl overflow-hidden aspect-[4/3] mb-4 md:mb-6">
              <img
                src="/bottle.png"
                alt="Landing Page Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                BottleKing NG
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                To enable BottleKing NG’s vision of becoming the go-to digital
                liquor store in Nigeria, RMFTalents deployed a Sprint Pack, a
                focused team of one senior frontend engineer and two interns
                tasked with building a lightweight, conversion-optimized web
                application
              </p>
            </div>
          </div>

          {/* Case 3 */}
          <div className="group">
            <div className="bg-white rounded-2xl overflow-hidden aspect-[4/3] mb-4 md:mb-6">
              <img
                src="/sneaker.png"
                alt="Mobile App Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                Sneaker Spa
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Sneaker Spa needed a sleek, mobile-friendly website to support
                both its service-based operations and product sales. The
                RMFTalents squad built a responsive website with booking flows,
                service explanations, FAQ support, and a catalog for sneaker
                resale all optimized for mobile-first users across Lagos.
              </p>
            </div>
          </div>

          {/* Case 4 */}
          {/* <div className="">
            <div className="bg-white rounded-2xl overflow-hidden aspect-[4/3] mb-4 md:mb-6">
              <img
                src="/images/landing-page-design-2.png"
                alt="Landing Page Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                Landing Page Design
              </h3>
              <p className="text-sm md:text-base text-gray-600">Web Design</p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="hidden lg:block h-24" />
    </div>
  );
}
