import React, { useState, useEffect } from "react";
import { Article } from "../types";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { articles } from "../data/articles";

interface ArticleViewProps {
  article: Article;
  onBack?: () => void;
}

const categorySummaries: Record<string, string> = {
  Technology:
    "The latest trends in innovation and tools shaping the digital future.",
  "Business Strategies":
    "Insights into smart growth, scaling, and company building.",
  "AI Tools": "Emerging AI-driven platforms transforming workflows.",
  General: "Explore stories, ideas, and updates from across industries.",
};

const ArticleView: React.FC<ArticleViewProps> = ({
  article: initialArticle,
  onBack,
}) => {
  const [article, setArticle] = useState<Article>(initialArticle);
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    setArticle(initialArticle);
    window.scrollTo({ top: 0 });
  }, [initialArticle]);

  const relatedArticles = articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleRelatedClick = (related: Article) => {
    setArticle(related);
    setActiveSection("introduction");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    e?.preventDefault();
    if (onBack && typeof onBack === "function") {
      onBack();
    } else if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/blog";
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-20 bg-white">
      {/* Back Button */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-6">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm font-semibold transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to articles
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative mb-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/70 h-[400px] sm:h-[450px] lg:h-[500px]">
            <img
              src={article.image}
              alt={article.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent z-10" />
            <div className="absolute top-4 right-4 z-20">
              <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-sm font-medium text-slate-700">
                {article.category}
              </span>
            </div>
            <div className="relative z-20 flex flex-col justify-end h-full px-4 sm:px-10 pb-8 sm:pb-10 text-white">
              <h1 className="text-[22px] sm:text-4xl lg:text-[38px] font-bold leading-snug mb-4 max-w-4xl">
                {article.title}
              </h1>
              <p className="text-[12px] sm:text-base lg:text-lg max-w-3xl text-white/90">
                {article.content.introduction}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div>
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <h3 className="font-bold text-slate-900 mb-1 text-lg">
                  {article.author.name}
                </h3>
                <p className="text-sm text-slate-600 mb-1 font-medium">
                  {article.author.title}
                </p>
                <p className="text-sm text-slate-500 font-medium">
                  {article.author.role}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-6 text-lg">
                  Table of content
                </h3>
                <nav className="space-y-2">
                  {article.tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left py-2 text-sm transition-colors duration-200 ${
                        activeSection === item.id
                          ? "text-blue-600 font-medium"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none">
              <div id="introduction" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Introduction
                </h2>
                <p className="text-slate-700 leading-relaxed text-[14px] mb-6">
                  {article.content.introduction}
                </p>
              </div>
              {article.content.sections.map((section) => (
                <div key={section.id} id={section.id} className="mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">
                    {section.title}
                  </h2>
                  <div className="text-slate-700 leading-relaxed text-[14px] space-y-4">
                    {section.content.split("\n\n").map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-24 border-t border-slate-200 pt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">
              More from {article.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {relatedArticles.map((related) => (
                <div
                  key={related.id}
                  onClick={() => handleRelatedClick(related)}
                  className="bg-white rounded-2xl overflow-hidden shadow group transition cursor-pointer flex flex-col h-full"
                >
                  <div className="relative w-full overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700">
                        {related.category}
                      </span>
                    </div>
                  </div>
                  <div className="px-6 pt-4">
                    <p className="text-xs text-slate-500 italic">
                      {categorySummaries[related.category] ||
                        "Explore stories and insights."}
                    </p>
                  </div>
                  <div className="p-6 pb-8 flex flex-col flex-grow">
                    <p className="text-sm text-slate-500 mb-3 font-medium">
                      {related.date}
                    </p>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
                      {related.description}
                    </p>
                    <div className="mt-auto flex items-center text-blue-600 font-medium text-sm">
                      <span className="mr-2">Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleView;
