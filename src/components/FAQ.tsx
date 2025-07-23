import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does your hybrid squad model work?",
      answer:
        "Our hybrid squad model combines senior mentors with junior developers to create balanced, cost-effective teams. Senior mentors provide guidance and quality control while junior developers handle implementation, ensuring both quality and efficiency.",
    },
    {
      question: "Is this model safe for high-stakes products?",
      answer:
        "Absolutely. Our rigorous vetting process, mentor oversight, and proven track record with successful startups ensure your high-stakes product is in safe hands. We maintain strict quality standards and regular check-ins throughout the development process.",
    },
    {
      question: "What kinds of projects do you take on?",
      answer:
        "We specialize in web and mobile applications, MVPs, product features, and full-stack development. Our teams have experience across various industries including fintech, healthtech, e-commerce, and SaaS platforms.",
    },
    {
      question: "How long does it take to launch my MVP?",
      answer:
        "Typically, we deliver MVPs within 4-8 weeks depending on complexity and scope. Our agile methodology with 2-week sprints ensures regular progress updates and the ability to adjust requirements as needed.",
    },
    {
      question: "What's your pricing structure?",
      answer:
        "We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team arrangements. Pricing depends on project scope, team size, and timeline. Contact us for a custom quote based on your specific needs.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <h2 className="text-[32px] font-bold text-[#211743] mb-4">
              Frequently Asked <br /> Questions
            </h2>
            <p className="text-[16px] text-[#393642] leading-relaxed">
              Got questions about RMFTalent? We've compiled <br /> detailed
              answers to the most pressing questions to <br />
              help you get started.
            </p>
          </div>

          {/* Right Content - FAQ Items */}
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[18px] text-[#211743]">
                    {faq.question}
                  </span>
                  <span className="w-8 h-8 rounded-full border border-[#211743]  flex items-center justify-center">
                    {openIndex === index ? (
                      <ChevronUp className="w-4 h-4 text-[#211743]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#211743]" />
                    )}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-4 animate-fade-in">
                    <p className="text-[#393642] text-[14px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
