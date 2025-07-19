import React, { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
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

  return (
    <section className="pt-2 pb-4 sm:pt-10 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <video
            ref={videoRef}
            className="w-full h-[180px] sm:h-[300px] lg:h-[440px] object-cover cursor-pointer"
            poster="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={togglePlay}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 cursor-pointer"
              onClick={togglePlay}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all duration-300 hover:scale-110">
                <Play
                  className="w-6 h-6 md:w-8 md:h-8 text-gray-800 ml-1"
                  fill="currentColor"
                />
              </div>
            </div>
          )}

          {isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              onClick={togglePlay}
            >
              <div className="w-14 h-14 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                <Pause className="w-5 h-5 text-white" fill="currentColor" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
