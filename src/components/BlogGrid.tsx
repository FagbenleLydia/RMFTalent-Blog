import React, { useState } from "react";
import { articles } from "../data/articles";
import { Article } from "../types";
import BlogCard from "./BlogCard";
import ArticleView from "./ArticleView";

const categories = ["All", "Business Strategies", "Technology", "AI Tools"];

const BlogGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  const visibleArticles = filteredArticles.slice(0, visibleCount);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleBackToGrid = () => {
    setSelectedArticle(null);
  };

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  if (selectedArticle) {
    return <ArticleView article={selectedArticle} onBack={handleBackToGrid} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Blogs & Articles
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-normal">
              Insights, lessons, and stories from the teams and individuals
              building high-impact business solutions
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-slate-900 text-white"
                  : "bg-gray-100 text-slate-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleArticles.map((article) => (
            <BlogCard
              key={article.id}
              article={article}
              onClick={() => handleArticleClick(article)}
            />
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < filteredArticles.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleViewMore}
              className="px-8 py-3 border border-slate-300 rounded-full text-slate-700 hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              View more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogGrid;
