import React from "react";

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 pt-10 pb-20 md:pt-24 md:pb-64">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Case Studies
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Explore the exceptional expertise of our tech professionals, who
            consistently deliver results through innovative software
            development, design, and engineering solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Mobile App Design - Top Left */}
          <div className="group">
            <div className="bg-slate-800 rounded-2xl p-4 md:p-8 mb-4 md:mb-6 aspect-[4/3] flex items-center justify-center relative overflow-hidden">
              {/* Mobile phones mockup */}
              <div className="flex items-center justify-center space-x-2 md:space-x-4">
                {/* Left phone */}
                <div className="bg-white rounded-2xl p-1 md:p-2 w-16 md:w-24 h-32 md:h-44 shadow-lg transform -rotate-12">
                  <div className="bg-gray-100 rounded-xl h-full flex flex-col">
                    <div className="bg-green-500 rounded-t-xl h-4 md:h-8 flex items-center justify-center">
                      <div className="w-1 md:w-2 h-1 md:h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1 p-1 md:p-2">
                      <div className="bg-red-500 w-full h-2 md:h-4 rounded mb-1 md:mb-2"></div>
                      <div className="bg-gray-300 w-3/4 h-1 md:h-2 rounded mb-1"></div>
                      <div className="bg-gray-300 w-1/2 h-1 md:h-2 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Center phone - main */}
                <div className="bg-black rounded-3xl p-1 w-24 md:w-32 h-40 md:h-56 shadow-2xl">
                  <div className="bg-white rounded-3xl h-full flex flex-col overflow-hidden">
                    {/* Status bar */}
                    <div className="h-4 md:h-6 bg-white flex items-center justify-between px-2 md:px-3">
                      <div className="text-xs font-medium">9:41</div>
                      <div className="flex space-x-1">
                        <div className="w-0.5 md:w-1 h-0.5 md:h-1 bg-black rounded-full"></div>
                        <div className="w-0.5 md:w-1 h-0.5 md:h-1 bg-black rounded-full"></div>
                        <div className="w-0.5 md:w-1 h-0.5 md:h-1 bg-black rounded-full"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-gray-50 flex flex-col items-center justify-center p-2 md:p-4">
                      {/* Santa image placeholder */}
                      <div className="w-12 md:w-20 h-12 md:h-20 bg-red-500 rounded-full mb-2 md:mb-3 flex items-center justify-center">
                        <div className="w-10 md:w-16 h-10 md:h-16 bg-red-600 rounded-full"></div>
                      </div>

                      <div className="text-center mb-2 md:mb-4">
                        <div className="text-xs font-semibold mb-1">
                          Welcome to Santa's
                        </div>
                        <div className="text-xs font-semibold">
                          Official App!
                        </div>
                        <div className="text-xs text-gray-500 mt-1 md:mt-2">
                          Track Santa's journey this year
                        </div>
                      </div>

                      <button className="bg-red-500 text-white text-xs px-2 md:px-4 py-1 md:py-2 rounded-full font-medium">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right phone */}
                <div className="bg-white rounded-2xl p-1 md:p-2 w-16 md:w-24 h-32 md:h-44 shadow-lg transform rotate-12">
                  <div className="bg-gray-100 rounded-xl h-full flex flex-col">
                    <div className="bg-red-500 rounded-t-xl h-4 md:h-8 flex items-center justify-center">
                      <div className="text-white text-xs font-bold">Santa</div>
                    </div>
                    <div className="flex-1 p-1 md:p-2">
                      <div className="bg-gray-300 w-full h-2 md:h-3 rounded mb-1 md:mb-2"></div>
                      <div className="bg-gray-300 w-2/3 h-1 md:h-2 rounded mb-1"></div>
                      <div className="bg-red-500 w-1/2 h-2 md:h-3 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                Mobile App Design
              </h3>
              <p className="text-sm md:text-base text-gray-600">UI/UX Design</p>
            </div>
          </div>

          {/* Landing Page Design - Top Right */}
          <div className="group">
            <div className="bg-amber-900 rounded-2xl p-4 md:p-8 mb-4 md:mb-6 aspect-[4/3] flex items-center justify-center">
              {/* Browser mockup */}
              <div className="bg-white rounded-lg w-full max-w-xs md:max-w-sm h-32 md:h-48 shadow-lg overflow-hidden">
                {/* Browser header */}
                <div className="bg-gray-200 h-4 md:h-6 flex items-center px-2 md:px-3">
                  <div className="flex space-x-1">
                    <div className="w-1 md:w-2 h-1 md:h-2 bg-red-500 rounded-full"></div>
                    <div className="w-1 md:w-2 h-1 md:h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-1 md:w-2 h-1 md:h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="bg-white rounded px-1 md:px-2 py-0.5 text-xs mx-2 md:mx-4">
                      boutique.com
                    </div>
                  </div>
                  <div className="bg-red-500 text-white text-xs px-1 md:px-2 py-0.5 rounded">
                    Shop
                  </div>
                </div>

                {/* Content */}
                <div className="p-2 md:p-4 h-full bg-white">
                  <div className="text-center mb-2 md:mb-3">
                    <h4 className="font-bold text-xs md:text-sm mb-1">
                      Na mumu dey go
                    </h4>
                    <h4 className="font-bold text-xs md:text-sm">Boutique!</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      Shop Quality, Style & Trend
                    </p>
                  </div>

                  <button className="bg-red-500 text-white text-xs px-2 md:px-3 py-1 rounded mb-2 md:mb-3 block mx-auto">
                    Shop Now
                  </button>

                  {/* Product grid */}
                  <div className="grid grid-cols-3 gap-0.5 md:gap-1">
                    <div className="bg-orange-400 aspect-square rounded"></div>
                    <div className="bg-amber-600 aspect-square rounded"></div>
                    <div className="bg-yellow-500 aspect-square rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                Landing Page Design
              </h3>
              <p className="text-sm md:text-base text-gray-600">Web Design</p>
            </div>
          </div>

          {/* Mobile App Design - Bottom Left */}
          <div className="group">
            <div className="bg-blue-200 rounded-2xl p-4 md:p-8 mb-4 md:mb-6 aspect-[4/3] flex items-center justify-center">
              {/* Browser mockup */}
              <div className="bg-white rounded-lg w-full max-w-xs md:max-w-sm h-32 md:h-48 shadow-lg overflow-hidden">
                {/* Browser header */}
                <div className="bg-gray-100 h-4 md:h-6 flex items-center px-2 md:px-3">
                  <div className="text-xs font-bold text-blue-600">LOGO</div>
                  <div className="flex-1"></div>
                  <div className="hidden md:flex space-x-2 text-xs">
                    <span>Home</span>
                    <span>About us</span>
                    <span>Portfolio</span>
                    <span>Testimonials</span>
                  </div>
                  <button className="bg-blue-600 text-white text-xs px-1 md:px-2 py-1 rounded ml-1 md:ml-2">
                    Sign up
                  </button>
                </div>

                {/* Content */}
                <div className="p-2 md:p-4 text-center">
                  <div className="mb-2 md:mb-3">
                    <div className="flex justify-center space-x-1 mb-1 md:mb-2">
                      <div className="w-4 md:w-8 h-3 md:h-6 bg-gray-800 rounded"></div>
                      <div className="w-4 md:w-8 h-3 md:h-6 bg-gray-300 rounded"></div>
                    </div>
                    <h4 className="font-bold text-xs md:text-sm mb-1">
                      Build Your Dream MVP Fast with Top
                    </h4>
                    <h4 className="font-bold text-xs md:text-sm mb-1 md:mb-2">
                      Engineering Talent!
                    </h4>
                    <p className="text-xs text-gray-600 mb-2 md:mb-3">
                      We connect you with pre-vetted, startup-ready engineers.
                      Our curated talent pool and agile hiring solutions get you
                      on the market faster while reducing risk.
                    </p>
                    <button className="bg-blue-600 text-white text-xs px-2 md:px-3 py-1 rounded">
                      Let's start your project →
                    </button>
                  </div>

                  {/* Team avatars */}
                  <div className="flex justify-center space-x-1 mt-1 md:mt-2">
                    <div className="w-4 md:w-6 h-3 md:h-4 bg-gray-800 rounded"></div>
                    <div className="w-4 md:w-6 h-3 md:h-4 bg-gray-400 rounded"></div>
                    <div className="w-4 md:w-6 h-3 md:h-4 bg-gray-800 rounded"></div>
                    <div className="w-4 md:w-6 h-3 md:h-4 bg-gray-400 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                Mobile App Design
              </h3>
              <p className="text-sm md:text-base text-gray-600">UI/UX Design</p>
            </div>
          </div>

          {/* Landing Page Design - Bottom Right */}
          <div className="group">
            <div className="bg-green-700 rounded-2xl p-4 md:p-8 mb-4 md:mb-6 aspect-[4/3] flex items-center justify-center">
              {/* Video player mockup */}
              <div className="bg-black rounded-lg w-full max-w-xs md:max-w-sm h-32 md:h-48 shadow-lg flex items-center justify-center relative">
                <div className="text-white text-2xl md:text-4xl">▶</div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                  play
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                Landing Page Design
              </h3>
              <p className="text-sm md:text-base text-gray-600">Web Design</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block h-24" />
    </div>
  );
}
