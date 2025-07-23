import React, { useEffect, useState } from "react";
import { Article } from "../types";
import BlogCard from "./BlogCard";
import ArticleView from "./ArticleView";

const BlogGrid: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          "https://blog.rmftalents.com/wp-json/wp/v2/posts?_embed"
        );
        const data = await res.json();
        const mapped = data.map(mapWpPostToArticle);
        setArticles(mapped);
      } catch (err) {
        console.error("Failed to fetch articles", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://blog.rmftalents.com/wp-json/wp/v2/categories"
        );
        const data = await res.json();
        const names = data
          .filter((cat: any) => cat.count > 0)
          .map((cat: any) => cat.name);
        setCategories(["All", ...names]);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };

    fetchCategories();
  }, []);

  const mapWpPostToArticle = (post: any): Article => {
    return {
      id: post.id,
      title: post.title.rendered,
      description: post.excerpt.rendered.replace(/<[^>]+>/g, ""),
      date: new Date(post.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
      category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General",
      content: {
        introduction: post.excerpt.rendered.replace(/<[^>]+>/g, ""),
        sections: [
          {
            id: "body",
            title: "Full Article",
            content: post.content.rendered.replace(/<[^>]+>/g, ""),
          },
        ],
      },
      author: {
        id: String(post._embedded?.author?.[0]?.id || "unknown"),
        name: post._embedded?.author?.[0]?.name || "Unknown Author",
        avatar:
          post._embedded?.author?.[0]?.avatar_urls?.["96"] ||
          "https://ui-avatars.com/api/?name=Author",
        title: "Contributor",
        role: "Writer",
      },
      tableOfContents: [
        {
          id: "introduction",
          title: "Introduction",
        },
        {
          id: "body",
          title: "Full Article",
        },
      ],
    };
  };

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter(
          (article) =>
            article.category.toLowerCase() === selectedCategory.toLowerCase()
        );

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
            <h1 className="text-[36px] sm:text-[48px] font-bold text-[#211743] mb-4 leading-tight">
              Blogs & Articles
            </h1>
            <p className="text-[18px] sm:text-[20ox] text-[#393642] leading-relaxed font-normal">
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
        {loading ? (
          <p className="text-center text-slate-500">Loading articles...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
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
          </>
        )}
      </div>
    </div>
  );
};

export default BlogGrid;
