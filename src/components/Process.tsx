import React from "react";

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-[#AD75FF] font-medium text-[14px] uppercase tracking-wide block">
            HOW IT WORKS
          </span>
          <h2 className="text-[24px] lg:text-[32px] font-bold text-[#211743] mb-2">
            A simple process, built for speed
          </h2>

          {/* Mobile */}
          <p className="text-[14px] text-[#393642] max-w-2xl mx-auto text-center sm:hidden">
            We assemble highly qualified teams, align with your product goals,
            and deliver your MVP in just 30 days.
          </p>

          {/* Web */}
          <p className="hidden sm:block text-[16px] text-[#393642] max-w-2xl mx-auto text-center">
            We assemble highly qualified teams, align with your product <br />
            goals, and deliver your MVP in just 30 days.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {/* Card Template */}
          {[
            {
              src: "/step1.gif",
              alt: "Tell us what you need",
              title: "Tell us what you need",
              text: "Share your product goals, tech stack, and timelines. We'll scope your project and recommend the right talent.",
              bg: "bg-gradient-to-b from-[#F3E8FF] to-[#F8F8FA]",
            },
            {
              src: "/step2.gif",
              alt: "Get matched with a team",
              title: "Get matched with a team",
              text: "We assemble a team of senior + junior engineers, tailored to your needs and ready to start immediately.",
              bg: " bg-gradient-to-b bg-[#F0F0F0] to-[#F0F0F0]",
            },
            {
              src: "/step3.svg",
              alt: "Build in focused sprints",
              title: "Build in focused sprints",
              text: "Your team works in agile cycles with regular updates, demos, and feedback, no micromanagement needed.",
              bg: "bg-gradient-to-b from-[#F6F6F6] to-[#F3F3F7]",
            },
            {
              src: "/step4.gif",
              alt: "Launch & iterate",
              title: "Launch & iterate",
              text: "We ship your MVP (or features), hand over source code, and stay ready to iterate, or support your next sprint.",
              bg: "bg-gradient-to-b from-[#F3EBFF] to-[#F3EBFF]",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-2 sm:p-[8px] py-8 pt-4 sm:pt-2 shadow-md hover:shadow-lg transition-shadow"
            >
              <div
                className={`${card.bg} rounded-2xl mb-4 sm:mb-2 sm:h-60 h-auto pt-4 sm:pt-0 flex sm:items-center justify-center overflow-hidden`}
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className={`h-full w-full ${
                    index === 0 ? "object-cover " : "object-contain"
                  } rounded-2xl`}
                />
              </div>
              <div className="text-center px-4 pb-6 sm:pb-10">
                <h3 className="text-[20px] font-bold text-[#211743] mb-1">
                  {card.title}
                </h3>
                <p className="text-[#393642] leading-relaxed text-[14px]">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
