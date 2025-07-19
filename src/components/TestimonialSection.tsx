import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const testimonials = [
  {
    quote:
      "I started as an intern and quickly leveled up thanks to RMF's real projects, supportive mentors, and structured feedback. Today, I'm contributing to MVP launches.",
    name: "Raymond Harry",
    role: "Project Manager",
    experience: "3+ years experience",
  },
  {
    quote:
      "RMF helped me transition from a junior dev to leading product squads. The mentorship is unmatched.",
    name: "Jessica Green",
    role: "Software Engineer",
    experience: "4+ years experience",
  },
  {
    quote:
      "Through RMF, I've worked on real MVPs with clear direction and feedback. My confidence has grown massively.",
    name: "Tom Vincent",
    role: "UI/UX Designer",
    experience: "2+ years experience",
  },
];

const TestimonialSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const maxDots = 6;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isPlaying && showOverlay) {
      timeout = setTimeout(() => setShowOverlay(false), 1500);
    }
    return () => clearTimeout(timeout);
  }, [isPlaying, showOverlay]);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }

    setShowOverlay(true);
  };

  const nextTestimonial = () => {
    if (currentTestimonial < testimonials.length - 1) {
      setCurrentTestimonial((prev) => prev + 1);
    }
  };

  const prevTestimonial = () => {
    if (currentTestimonial > 0) {
      setCurrentTestimonial((prev) => prev - 1);
    }
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Apply border, shadow, and rounded ONLY on lg and up */}
        <div className="lg:rounded-2xl lg:border lg:border-gray-200 lg:shadow-md lg:p-10 p-0">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch h-full">
            {/* Left Column */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  Real stories from
                  <br />
                  RMFTalents
                </h2>

                <blockquote className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed italic min-h-[96px]">
                  "{current.quote}"
                </blockquote>

                <div className="mt-4 space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {current.name}
                  </h3>

                  <div className="flex items-center space-x-2 text-purple-600">
                    <img src="/bag.png" alt="Role Icon" className="w-4 h-4" />
                    <span className="text-sm font-medium">{current.role}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-purple-600">
                    <img
                      src="/trophy.png"
                      alt="Experience Icon"
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-medium">
                      {current.experience}
                    </span>
                  </div>
                </div>
              </div>

              {/* Desktop Controls */}
              <div className="hidden lg:flex items-center justify-between pt-4">
                <div className="flex space-x-2">
                  {Array.from({ length: maxDots }).map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentTestimonial
                          ? "bg-purple-600"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    disabled={currentTestimonial === 0}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition ${
                      currentTestimonial === 0
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-purple-600 hover:bg-purple-700"
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    disabled={
                      testimonials.length < maxDots &&
                      currentTestimonial === testimonials.length - 1
                    }
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition ${
                      testimonials.length < maxDots &&
                      currentTestimonial === testimonials.length - 1
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-purple-600 hover:bg-purple-700"
                    }`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column (Video) */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="relative w-full h-full bg-gray-200 overflow-hidden rounded-none lg:rounded-2xl shadow-none lg:shadow-lg">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover cursor-pointer"
                  poster="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
                  preload="none"
                  controls={false}
                  onClick={handlePlayClick}
                  onPlay={() => {
                    setIsPlaying(true);
                    setShowOverlay(false);
                  }}
                  onPause={() => {
                    setIsPlaying(false);
                    setShowOverlay(true);
                  }}
                >
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {showOverlay && (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    onClick={handlePlayClick}
                  >
                    <button className="w-16 h-16 lg:w-20 lg:h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all duration-300 hover:scale-110">
                      {isPlaying ? (
                        <Pause className="w-6 h-6 lg:w-8 lg:h-8 text-gray-800" />
                      ) : (
                        <Play className="w-6 h-6 lg:w-8 lg:h-8 text-gray-800 ml-1" />
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Controls */}
              <div className="mt-6 lg:hidden flex flex-row items-center justify-between gap-4">
                <div className="flex space-x-2">
                  {Array.from({ length: maxDots }).map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentTestimonial
                          ? "bg-purple-600"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={prevTestimonial}
                    disabled={currentTestimonial === 0}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition ${
                      currentTestimonial === 0
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-purple-600 hover:bg-purple-700"
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    disabled={
                      testimonials.length < maxDots &&
                      currentTestimonial === testimonials.length - 1
                    }
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition ${
                      testimonials.length < maxDots &&
                      currentTestimonial === testimonials.length - 1
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-purple-600 hover:bg-purple-700"
                    }`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
