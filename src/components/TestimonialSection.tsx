import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const testimonials = [
  {
    quote:
      "I started as an intern and quickly leveled up thanks to RMF's real projects, supportive mentors, and structured feedback. Today, I'm contributing to MVP launches.",
    name: "Joseph Isaac Ovie",
    role: "QA Tester",
    experience: "3+ years experience",
  },
  {
    quote:
      "RMF helped me transition from a junior dev to leading product squads. The mentorship is unmatched.",
    name: "Joseph Isaac",
    role: "QA Tester",
    experience: "4+ years experience",
  },
  {
    quote:
      "Through RMF, I've worked on real MVPs with clear direction and feedback. My confidence has grown massively.",
    name: "Joseph Isaac",
    role: "QA Tester",
    experience: "2+ years experience",
  },
];

const TestimonialSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
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

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
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
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        <div className="lg:rounded-2xl lg:border lg:border-gray-200 lg:p-10 p-0">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch h-full">
            {/* Left Column */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-[26px] sm:text-[26px] md:text-[34px] font-bold text-[#211743] leading-tight mb-4">
                  Real stories from
                  <br />
                  RMFTalents
                </h2>

                <blockquote className="text-[16px] sm:text-[16px] md:text-[15px] text-[#211743] leading-relaxed italic min-h-[96px]">
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
              <div
                className="relative w-full h-full min-h-[300px] bg-black overflow-hidden rounded-none lg:rounded-2xl shadow-none lg:shadow-lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                  poster="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
                  preload="metadata"
                  controls={false}
                  onClick={handlePlayClick}
                  onLoadedMetadata={(e) =>
                    setDuration(e.currentTarget.duration)
                  }
                  onTimeUpdate={(e) =>
                    setCurrentTime(e.currentTarget.currentTime)
                  }
                  onPlay={() => {
                    setIsPlaying(true);
                    setShowOverlay(false);
                  }}
                  onPause={() => {
                    setIsPlaying(false);
                    setShowOverlay(true);
                  }}
                >
                  <source src="/your-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Overlay Play Button */}
                {showOverlay && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/10"
                    onClick={handlePlayClick}
                  >
                    <button className="w-16 h-16 lg:w-20 lg:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                      {isPlaying ? (
                        <Pause className="w-7 h-7 text-gray-800" />
                      ) : (
                        <Play className="w-7 h-7 text-gray-800 ml-1" />
                      )}
                    </button>
                  </div>
                )}

                {/* VLC-style Bottom Bar: show only if paused or hovered while playing */}
                {(isHovered || !isPlaying) && (
                  <div className="absolute bottom-0 w-full bg-black/50 px-4 py-2 flex items-center justify-between text-white text-sm backdrop-blur transition-opacity duration-300">
                    <div className="flex items-center gap-2">
                      <button onClick={handlePlayClick}>
                        {isPlaying ? (
                          <Pause className="w-4 h-4" />
                        ) : (
                          <Play className="w-4 h-4" />
                        )}
                      </button>
                      <span>{formatTime(currentTime)}</span>
                    </div>
                    <div
                      className="flex-1 mx-4 h-1 bg-white/30 rounded overflow-hidden cursor-pointer relative group"
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        const percent = clickX / rect.width;
                        const newTime = duration * percent;
                        if (videoRef.current) {
                          videoRef.current.currentTime = newTime;
                          setCurrentTime(newTime);
                        }
                      }}
                    >
                      <div
                        className="h-full bg-purple-500 transition-all duration-300"
                        style={{
                          width: `${(currentTime / duration) * 100 || 0}%`,
                        }}
                      />
                    </div>
                    <span>{formatTime(duration)}</span>
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
