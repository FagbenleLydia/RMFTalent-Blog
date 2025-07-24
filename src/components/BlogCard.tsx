import React from "react";
import { Article } from "../types";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  article: Article;
  onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ article, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden cursor-pointer group shadow-sm transition-shadow hover:shadow-lg flex flex-col h-full min-h-[460px]"
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden rounded-t-2xl">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 pb-8">
        {/* Date */}
        <p className="text-[12px] text-[#393642] mb-2 font-medium">
          {article.date}
        </p>

        {/* Title */}
        <h3 className="text-[16px] font-bold text-[#211743] mb-3 leading-tight line-clamp-2">
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-[#393642] text-[12px] leading-relaxed mb-6 line-clamp-3">
          {article.description}
        </p>

        {/* Read More Link */}
        <div className="mt-auto flex items-center text-[#AD75FF] font-medium text-[12px]">
          <span className="mr-2">Read Article</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
