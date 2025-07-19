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
      className="bg-white rounded-2xl overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-56 object-cover"
        />

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pb-8">
        {/* Date */}
        <p className="text-sm text-slate-500 mb-4 font-medium">
          {article.date}
        </p>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 mb-6 leading-relaxed text-sm">
          {article.description}
        </p>

        {/* Read Article Link */}
        <div className="flex items-center text-blue-600 font-medium text-sm">
          <span className="mr-2">Read Article</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
