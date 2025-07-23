import React, { useEffect, useState } from "react";

interface Article {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  link: string;
}

const Blog: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideMobile, setCurrentSlideMobile] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://blog.rmftalents.com/wp-json/wp/v2/posts?_embed")
      .then((res) => res.json())
      .then((data) => {
        const formatted: Article[] = data.map((post: any) => ({
          title: post.title.rendered,
          excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, ""),
          image:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "https://via.placeholder.com/600x400",
          author: post._embedded?.author?.[0]?.name || "Unknown",
          date: new Date(post.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          link: post.link,
        }));
        setArticles(formatted);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const groupSize = 3;
  const totalGroups = Math.ceil(articles.length / groupSize);

  const nextSlide = () => {
    if (currentSlide < totalGroups - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const getVisible = () =>
    articles.slice(
      currentSlide * groupSize,
      currentSlide * groupSize + groupSize
    );

  const nextMobile = () => {
    if (currentSlideMobile < articles.length - 1) {
      setCurrentSlideMobile(currentSlideMobile + 1);
    }
  };

  const prevMobile = () => {
    if (currentSlideMobile > 0) {
      setCurrentSlideMobile(currentSlideMobile - 1);
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="text-left mb-10 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#211743] mb-2">
            Latest from our blog
          </h2>
          <p className="text-base text-[#393642] leading-relaxed max-w-xl">
            Stay informed and inspired with our latest insights on how RMF
            Talent is transforming everyday life.
          </p>
        </div>

        {loading ? (
          <>
            {/* Desktop Skeletons */}
            <div className="hidden lg:grid grid-cols-3 gap-6 xl:gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-sm p-4 animate-pulse"
                >
                  <div className="h-64 bg-gray-300 rounded mb-4" />
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-5/6 mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-1/2 mt-4" />
                </div>
              ))}
            </div>

            {/* Mobile Skeleton */}
            <div className="lg:hidden">
              <div className="bg-white rounded-2xl shadow-sm p-4 animate-pulse">
                <div className="h-64 bg-gray-300 rounded mb-4" />
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-2" />
                <div className="h-3 bg-gray-200 rounded w-1/2 mt-4" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="hidden lg:block">
              <div className="grid grid-cols-3 gap-6 xl:gap-8 mb-2">
                {getVisible().map((a, i) => (
                  <a
                    key={i}
                    href={a.link}
                    target="_blank"
                    rel="noopener"
                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-transform transform hover:scale-[1.02]"
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={a.image}
                        alt={a.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 lg:p-6">
                      <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-[#AD75FF]">
                        {a.title}
                      </h3>
                      <p className="text-[#393642] text-[14px] lg:text-[14px] line-clamp-3">
                        {a.excerpt}
                      </p>
                      <p className="mt-3 text-xs text-[#393642] ">
                        By {a.author} · {a.date}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* mobile */}

              <div className="flex justify-between items-center mt-6">
                <div className="flex space-x-2">
                  {Array.from({ length: totalGroups }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`w-2.5 h-2.5 rounded-full ${
                        i === currentSlide
                          ? "bg-[#AD75FF] scale-125"
                          : "bg-gray-300 hover:bg-gray-400"
                      } transition-all`}
                    />
                  ))}
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="w-10 h-10 bg-[#AD75FF] disabled:opacity-40 rounded-full flex items-center justify-center"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextSlide}
                    disabled={currentSlide >= totalGroups - 1}
                    className="w-10 h-10 bg-[#AD75FF] disabled:opacity-40 rounded-full flex items-center justify-center"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:hidden">
              <div className="relative w-full overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentSlideMobile * 100}%)`,
                  }}
                >
                  {articles.map((a, i) => (
                    <a
                      key={i}
                      href={a.link}
                      target="_blank"
                      rel="noopener"
                      className="min-w-full px-2 block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-transform transform hover:scale-[1.02]"
                    >
                      <div className="h-64 overflow-hidden">
                        <img
                          src={a.image}
                          alt={a.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-base font-bold mb-2 line-clamp-2">
                          {a.title}
                        </h3>
                        <p className="text-[#393642] text-[14px] line-clamp-3">
                          {a.excerpt}
                        </p>
                        <p className="mt-2 text-xs text-[#393642]">
                          {a.date} • {a.author}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between px-4 mt-4">
                <div className="flex space-x-3">
                  <button
                    onClick={prevMobile}
                    disabled={currentSlideMobile === 0}
                    className="w-10 h-10 bg-[#AD75FF] disabled:opacity-40 rounded-full flex items-center justify-center"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextMobile}
                    disabled={currentSlideMobile === articles.length - 1}
                    className="w-10 h-10 bg-[#AD75FF] disabled:opacity-40 rounded-full flex items-center justify-center"
                  >
                    →
                  </button>
                </div>
                <div className="flex space-x-2">
                  {articles.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlideMobile(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        i === currentSlideMobile
                          ? "bg-[#AD75FF] scale-125"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Blog;
