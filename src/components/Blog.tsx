import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Blog: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // For web
  const [currentSlideMobile, setCurrentSlideMobile] = useState(0); // For mobile

  const articles = [
    {
      title:
        "The Future of Work: How Startups Can Harness the Power of Global Talent",
      excerpt:
        "Discover how AI-driven tools, like automated marketing and intelligent customer insights, are transforming SMEs.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Why Remote Teams Are the Future of Innovation",
      excerpt:
        "Explore the advantages of distributed teams and how they foster creativity and agility in fast-paced industries.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Embracing Diversity: A New Era of Team Collaboration",
      excerpt:
        "Learn how inclusive hiring is leading to more innovative and resilient tech teams globally.",
      image:
        "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "From Concept to Launch: Building MVPs in 30 Days",
      excerpt:
        "Our framework helps you build, test, and iterate faster with a streamlined agile approach.",
      image:
        "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "The Talent Marketplace: Finding Experts On-Demand",
      excerpt:
        "Get insights into how startups find, vet, and work with top global talent on short notice.",
      image:
        "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "The Future of Workspaces in a Hybrid World",
      excerpt:
        "Understand how companies are reimagining work environments for productivity and well-being.",
      image:
        "https://images.pexels.com/photos/3184450/pexels-photo-3184450.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const groupSize = 3;
  const totalGroups = Math.ceil(articles.length / groupSize);

  // WEB SLIDE LOGIC
  const nextSlide = () => {
    if (currentSlide < totalGroups - 1) setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide((prev) => prev - 1);
  };

  const getVisibleArticles = () => {
    const start = currentSlide * groupSize;
    return articles.slice(start, start + groupSize);
  };

  // MOBILE SLIDE LOGIC
  const nextMobileSlide = () => {
    if (currentSlideMobile < articles.length - 1)
      setCurrentSlideMobile((prev) => prev + 1);
  };

  const prevMobileSlide = () => {
    if (currentSlideMobile > 0) setCurrentSlideMobile((prev) => prev - 1);
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-left mb-10 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 lg:mb-6">
            Latest from our blog
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl">
            Stay informed and inspired with our latest insights on how RMF
            Talent is transforming everyday life.
          </p>
        </div>

        {/* Web View */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-6 xl:gap-8 mb-6">
            {getVisibleArticles().map((article, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 lg:p-6">
                    <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2 lg:mb-3 leading-tight group-hover:text-purple-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Web Controls: Dots left, Arrows right */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex space-x-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-purple-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex space-x-3">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="w-10 h-10 bg-purple-600 disabled:opacity-40 rounded-full flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide === totalGroups - 1}
                className="w-10 h-10 bg-purple-600 disabled:opacity-40 rounded-full flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlideMobile * 100}%)` }}
            >
              {articles.map((article, index) => (
                <div key={index} className="min-w-full px-2">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Controls - Arrows left, Dots right */}
          <div className="flex items-center justify-between px-4 mt-4">
            {/* Arrows */}
            <div className="flex space-x-3">
              <button
                onClick={prevMobileSlide}
                disabled={currentSlideMobile === 0}
                className="w-10 h-10 bg-purple-600 disabled:opacity-40 rounded-full flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={nextMobileSlide}
                disabled={currentSlideMobile === articles.length - 1}
                className="w-10 h-10 bg-purple-600 disabled:opacity-40 rounded-full flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex space-x-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlideMobile(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlideMobile
                      ? "bg-purple-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
