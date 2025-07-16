import React from "react";

const Process: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-500 font-medium text-sm uppercase tracking-wide mb-4 block">
            HOW IT WORKS
          </span>
          <h2 className="text-[24px] lg:text-[36px] font-bold text-gray-900 mb-2">
            A simple process, built for speed
          </h2>

          {/* Mobile */}
          <p className="text-[14px] text-gray-600 max-w-2xl mx-auto text-center sm:hidden">
            We assemble highly qualified teams, align with your product goals,
            and deliver your MVP in just 30 days.
          </p>

          {/* Web */}
          <p className="hidden sm:block text-[16px] text-gray-600 max-w-2xl mx-auto text-center">
            We assemble highly qualified teams, align with your product <br />
            goals, and deliver your MVP in just 30 days.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 rounded-2xl mb-6 h-48 flex items-center justify-center overflow-hidden">
              <img
                src="/step1.gif"
                alt="Tell us what you need"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Tell us what you need
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Share your product goals, tech stack, and timelines. We'll scope
                your project and recommend the right talent.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-gray-100 rounded-2xl mb-6 h-48 flex items-center justify-center overflow-hidden">
              <img
                src="/step2.gif"
                alt="Get matched with a team"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Get matched with a team
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We assemble a team of senior + junior engineers, tailored to
                your needs and ready to start immediately.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-gray-100 rounded-2xl mb-6 h-48 flex items-center justify-center overflow-hidden">
              <img
                src="/step3.svg"
                alt="Build in focused sprints"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Build in focused sprints
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Your team works in agile cycles with regular updates, demos, and
                feedback, no micromanagement needed.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className=" rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className=" rounded-2xl mb-6 h-48 flex items-center justify-center overflow-hidden">
              <img
                src="/step4.gif"
                alt="Launch & iterate"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Launch & iterate
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We ship your MVP (or features), hand over source code, and stay
                ready to iterate, or support your next sprint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
