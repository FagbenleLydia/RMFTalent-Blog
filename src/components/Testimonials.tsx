import React from "react";

const Testimonials: React.FC = () => {
  // Top row testimonials (moving left)
  const topTestimonials = [
    {
      text: "RMFTalents to our early-stage need something built fast and combination of real talent and cost-effective.",
      name: "Thomas",
      role: "Co-founder, LaunchFoundry",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      text: "We tap into RMF's talent bench for monthly feature updates. Their developers are not only reliable, they deeply understand how startups work — deadlines, pivots, all of it.",
      name: "Michael Tee",
      role: "CTO, LearnHive",
      image:
        "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      text: "I was skeptical about the hybrid model, but our assigned mentor ensured everything shipped to standard. It felt like we had a small in-house team without the overhead.",
      name: "Nora Kaleb",
      role: "Head of Product, FlowBoard",
      image:
        "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  // Bottom row testimonials (moving right)
  const bottomTestimonials = [
    {
      text: "Working with startup founders from ideation to launch sharpened my product instincts. RMF gave me a front-row seat to rapid execution — and real ownership.",
      name: "Favor Etom",
      role: "Associate Project Manager",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      text: "I started as an intern and quickly leveled up thanks to RMF's real projects, supportive mentors, and structured feedback. Today, I'm contributing to MVP launches.",
      name: "Zubiar Michael",
      role: "Frontend Developer",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      text: "Joining RMFTalents transformed my design experience — I built products for real users, received detailed design reviews from senior mentors, and saw my products in my portfolio.",
      name: "Sarafina Samuel",
      role: "Product Designer",
      image:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6 max-w-4xl mx-auto leading-tight">
            What our clients and talents Say <br /> about RMFTalents ecosystem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore the impact of RMF through testimonials from both
            <br /> our top talent and the businesses we've helped scale.
          </p>
        </div>

        <div className="space-y-8">
          {/* Top Row - Moving Left */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex animate-slide-left space-x-6">
                {/* Duplicate testimonials for seamless loop */}
                {[
                  ...topTestimonials,
                  ...topTestimonials,
                  ...topTestimonials,
                ].map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-96">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                      <div className="mb-6">
                        <p className="text-gray-700 text-base leading-relaxed font-medium">
                          "{testimonial.text}"
                        </p>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-base">
                            {testimonial.name}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row - Moving Right */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex animate-slide-right space-x-6">
                {/* Duplicate testimonials for seamless loop */}
                {[
                  ...bottomTestimonials,
                  ...bottomTestimonials,
                  ...bottomTestimonials,
                ].map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-96">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                      <div className="mb-6">
                        <p className="text-gray-700 text-base leading-relaxed font-medium">
                          "{testimonial.text}"
                        </p>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-base">
                            {testimonial.name}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
