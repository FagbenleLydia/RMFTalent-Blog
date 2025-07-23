import React, { useEffect, useRef, useState } from "react";
import { Flame } from "lucide-react";

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  highlightLine?: boolean;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({
  children,
  className = "",
  highlightLine = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
        rootMargin: "-15% 0px -15% 0px",
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`relative flex transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 text-gray-900" : "opacity-30 text-gray-400"
      } ${className}`}
    >
      {highlightLine && (
        <div
          className={`absolute left-0 top-0 h-full w-1 transition-all duration-700 ease-in-out rounded-full ${
            isVisible ? "bg-purple-500" : "bg-transparent"
          }`}
        />
      )}
      <div className="pl-6 w-full">{children}</div>
    </div>
  );
};

function MainSection() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Main Header */}
        <div className="text-center mb-10">
          <ScrollSection>
            <h1 className="text-[26px] md:text-[36px] text-[#211743] font-bold leading-tight max-w-4xl mx-auto">
              We are redefining how businesses build their engineering team
            </h1>
          </ScrollSection>
        </div>

        {/* Talent Acquisition Section */}
        <div className="mb-40">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <div className="relative lg:sticky lg:top-20 pt-6">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-400 via-purple-500 to-[#AD75FF] shadow-2xl">
                <img
                  src="/TopTalent1.png"
                  alt="Professional team member"
                  className="w-full h-auto md:h-[500px] lg:h-[700px] object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:mt-4 space-y-16">
              <ScrollSection>
                <div className="space-y-6 ml-0 md:ml-6 lg:ml-0 xl:-ml-10 2xl:-ml-20">
                  <h2 className="text-[32px] text-[#211743] font-bold">
                    Talent acquisition
                  </h2>
                  <p className="text-[16px] text-[#393642] leading-relaxed">
                    Find and onboard startup-ready tech talent, fast. We handle
                    the end-to-end sourcing, vetting, and onboarding of talent;
                    fully aligned with your tech stack, budget, and startup
                    pace.
                  </p>
                </div>
              </ScrollSection>

              {[
                {
                  title: "Pre-Vetted Talent, Ready to Contribute",
                  body: "Access a curated pool of engineers and cross-functional squads skilled in JavaScript frameworks like React, Node.js, Firebase, and more — no guesswork or training lag.",
                },
                {
                  title: "Hybrid Squads That Scale",
                  body: "Blend senior mentors with trained junior talent to form cost-effective teams that move fast without compromising quality or oversight.",
                },
                {
                  title: "Flexible Engagement Models",
                  body: "Choose between fixed sprint models, monthly retainers, or embedded team setups — all designed to adapt to your product's stage and scope.",
                },
                {
                  title: "Clear Pricing, No Surprises",
                  body: "Transparent, milestone-driven pricing — so you know exactly what you're paying for and when you'll get it.",
                },
              ].map((item, idx) => (
                <ScrollSection highlightLine key={idx}>
                  <div className="space-y-4">
                    <h3 className="text-[24px] text-[#211743] font-bold">
                      {item.title}
                    </h3>
                    <p className="text-[16px] text-[#393642] leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </ScrollSection>
              ))}
            </div>
          </div>
        </div>

        {/* Product Launch Section */}
        <div className="mb-20 lg:mb-6  ">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image on right for desktop */}
            <div className="relative order-1 lg:order-2 lg:sticky lg:top-20">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-400 via-purple-500 to-[#AD75FF] shadow-2xl">
                <img
                  src="/TopTalent2.png"
                  alt="Product Launch"
                  className="w-full h-auto md:h-[500px] lg:h-[700px] object-cover"
                />
              </div>
            </div>

            {/* Text on left for desktop */}
            <div className="space-y-12 lg:space-y-16 order-2 lg:order-1">
              <ScrollSection>
                <div className="space-y-6 ml-0 md:ml-6 lg:ml-0 xl:-ml-10 2xl:-ml-20">
                  <h2 className="text-[32px] text-[#211743] font-bold">
                    Product Launch (MVP Delivery)
                  </h2>
                  <p className="text-[16px] text-[#393642] leading-relaxed">
                    Launch your MVP in 30 days with a squad built to ship, not
                    just code. We assemble a focused, expert-led team to bring
                    your idea to life. Fast timelines, full visibility, and a
                    product that's ready to test, pitch, or scale.
                  </p>
                </div>
              </ScrollSection>

              {[
                {
                  title: "4-Week Sprint, Zero Wasted Time",
                  body: "A dedicated squad — typically 1 mentor and 2 engineers — works in weekly sprints to design, build, and ship your MVP. Clear deliverables.",
                },
                {
                  title: "Live Code, Not Just Prototypes",
                  body: "You own the source code, GitHub repo, and working product — cleanly documented, versioned, and ready for handoff or continued work.",
                },
                {
                  title: "Post-Launch Iteration Window",
                  body: "We stay on for 1-2 weeks after delivery to refine, fix, or update anything based on feedback — making sure you're investor- or user-ready.",
                },
                {
                  title: "Built to Pitch or Scale",
                  body: "Whether you're demoing to investors, onboarding beta users, or prepping for launch day — you'll walk away with a real product, not just a promise.",
                },
              ].map((item, idx) => (
                <ScrollSection highlightLine key={idx}>
                  <div className="space-y-4">
                    <h3 className="text-[24px] text-[#211743] font-bold">
                      {item.title}
                    </h3>
                    <p className="text-[16px] text-[#393642] leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </ScrollSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
