import React, { useState } from "react";
import { Article } from "../types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { articles } from "../data/articles";

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
}

const ArticleView: React.FC<ArticleViewProps> = ({ article, onBack }) => {
  const [activeSection, setActiveSection] = useState("introduction");

  // Get related articles (excluding current article)
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

  return (
    <div className="min-h-screen pt-20 pb-20 bg-white">
      {/* Hero Section */}
      <div className="relative mb-16">
        <div className="absolute inset-0">
          <div className="max-w-5xl mx-auto h-80 w-full relative">
            {/*  Category label on top of image */}
            <div className="absolute top-4 right-4 z-20">
              <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700">
                {article.category}
              </span>
            </div>

            {/* 🖼 Image */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-80 object-cover rounded-xl"
            />

            {/* 🔲 Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-xl"></div>
          </div>
        </div>

        {/* Category Badge */}

        {/* Hero Content */}
        <div className="relative h-80 flex items-end">
          <div className="max-w-5xl mx-auto px-6 pb-4 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight max-w-4xl">
              {article.title}
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-3xl">
              {article.content.introduction}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Author */}
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

              {/* Table of Contents */}
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

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Quote Section */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-12 italic text-slate-700 leading-relaxed">
              Right now, demand for AI expertise is outpacing supply.
              Organizations are in a race to hire, but the race isn't just about
              numbers—it's about finding people who can understand, build, and
              deploy intelligent systems responsibly and effectively.
            </div>

            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div id="introduction" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Introduction
                </h2>
                <p className="text-slate-700 leading-relaxed text-lg mb-6">
                  {article.content.introduction}
                </p>
                <p className="text-slate-700 leading-relaxed text-lg">
                  Right now, demand for AI expertise is outpacing supply.
                  Organizations are in a race to hire, but the race isn't just
                  about numbers—it's about finding people who can understand,
                  build, and deploy intelligent systems responsibly and
                  effectively.
                </p>
              </div>

              {/* Content Sections */}
              {article.content.sections.map((section) => (
                <div key={section.id} id={section.id} className="mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">
                    {section.title}
                  </h2>
                  <div className="text-slate-700 leading-relaxed text-lg space-y-4">
                    {section.content.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <div
                  key={relatedArticle.id}
                  className="group cursor-pointer"
                  onClick={() => handleArticleClick(relatedArticle)}
                >
                  <div className="bg-white rounded-2xl overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700">
                          {relatedArticle.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-slate-500 mb-3 font-medium">
                        {relatedArticle.date}
                      </p>
                      <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                        {relatedArticle.description}
                      </p>
                      <div className="flex items-center text-blue-600 font-medium text-sm">
                        <span className="mr-2">Read Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
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

  const handleArticleClick = (article: Article) => {
    window.scrollTo(0, 0);
  };
};

export default ArticleView;
