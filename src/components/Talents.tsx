import React from "react";

const phoneNumber = "+2349039846793";
const handleBookCall = () => {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`;
  window.open(whatsappUrl, "_blank");
};

const talents = [
  {
    title: "Content Creator",
    img: "/stellat.png",
  },
  {
    title: "QA Engineer",
    img: "/stellat2.png",
  },
  {
    title: "User Interface Designer",
    img: "/olat.png",
  },
  {
    title: "Project Manager",
    img: "/debbiet.png",
  },
  {
    title: "Software Engineer",
    img: "/seyit.png",
  },
  {
    title: "Software Engineer",
    img: "/ayot.png",
  },
  {
    title: "Integration Engineer",
    img: "/isaact.png",
  },
  {
    title: "Software Engineer",
    img: "/akshatt.png",
  },
  {
    title: "Software Engineer",
    img: "/lydiat.png",
  },
  {
    title: "Project Manager",
    img: "/favourt.png",
  },
  {
    title: "Quality Assurance Engineer",
    img: "/isaact2.png",
  },
  {
    title: "Project Manager",
    img: "/rayt.png",
  },
];

const infiniteTalents = [...talents, ...talents];

function Talents() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] py-16 px-4 overflow-hidden">
      {/* Hero section */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-snug">
          Your strategic talent <br />
          <span className="relative top-[3px] bg-purple-200/60 text-gray-900 px-2 py-[1px] rounded-md inline-block">
            acquisition
          </span>{" "}
          partner
        </h1>

        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          We help ambitious companies recruit the talent
          <br />
          they need to launch their products fast and scale
          <br />
          their company forward.
        </p>

        <button
          onClick={handleBookCall}
          className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-all duration-300"
        >
          <span className="mr-4 text-[16px]">Book a call</span>
          <span className="mt-1">&gt;&gt;</span>
        </button>
      </div>

      {/* Sliding Talent Cards */}
      <div className="relative max-w-screen-xl mx-auto">
        <div className="overflow-x-auto no-scrollbar pointer-events-none touch-none">
          <div className="flex gap-6 animate-slide-team-infinite pointer-events-auto px-2">
            {infiniteTalents.map((talent, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-md border border-gray-100 transition-transform duration-300 hover:scale-105"
              >
                <div className="p-4">
                  <div className="w-full h-[280px] bg-white rounded-lg overflow-hidden shadow-sm flex items-center justify-center">
                    <img
                      src={talent.img}
                      alt={talent.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-center font-serif text-[18px] text-gray-900 italic">
                    {talent.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talents;
