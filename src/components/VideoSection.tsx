import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = value;
    }
  };

  return (
    <section className="pt-2 pb-4 sm:pt-10 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-xl group">
          <video
            ref={videoRef}
            className="w-full h-[180px] sm:h-[300px] lg:h-[440px] object-contain cursor-pointer"
            poster="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={togglePlay}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Center Play/Pause icon - only on hover */}
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={togglePlay}
          >
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out bg-black bg-opacity-20 absolute inset-0" />
            <div className="z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                {isPlaying ? (
                  <Pause className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
                ) : (
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-gray-800 ml-1" />
                )}
              </div>
            </div>
          </div>

          {/* Seekbar - shows only on hover */}
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <input
              type="range"
              min={0}
              max={duration}
              step="0.1"
              value={currentTime}
              onChange={handleSeek}
              className="w-full accent-white h-1 bg-white/30 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
