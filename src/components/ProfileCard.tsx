import React from "react";

interface ProfileCardProps {
  image: string;
  className?: string;
  rotate?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  image,
  className = "",
  rotate = "",
}) => {
  return (
    <div
      className={`absolute transform ${rotate} transition-all duration-500 hover:scale-105 ${className}`}
      style={{ zIndex: 10 }}
    >
      <div className="relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] lg:w-[180px] lg:h-[180px]">
        <img
          src={image}
          alt="Profile"
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
};

export default ProfileCard;
