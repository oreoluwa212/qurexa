import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQSection = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const faqItems = [
    {
      question: "What medications can be delivered?",
      answer:
        "We can deliver most prescription medications including regular medications, cold-chain items, and controlled substances (with additional verification). We cannot deliver emergency medications or items requiring immediate pharmacist consultation.",
    },
    {
      question: "How do you handle controlled drugs?",
      answer:
        "For Schedule 2 & 3 controlled drugs, we require additional ID verification, written authorization, and special secure transport procedures in compliance with UK regulations.",
    },
    {
      question: "What happens if I miss my delivery?",
      answer:
        "We'll attempt delivery twice and leave secure collection cards. You can reschedule through our app or contact support. Controlled substances require personal collection with ID verification.",
    },
    {
      question: "How do you ensure medication safety during transport?",
      answer:
        "We use temperature-controlled vehicles, insulated containers with monitoring, and trained drivers. All cold-chain medications are tracked throughout transport to ensure integrity.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, we're fully compliant with UK GDPR and Data Protection Act 2018. All data is encrypted, access is strictly controlled, and we maintain comprehensive audit trails.",
    },
    {
      question: "Do you work with my existing pharmacy?",
      answer:
        "Yes, we coordinate with your registered GPhC pharmacy. We don't replace your pharmacist relationship but provide secure delivery services with their cooperation.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our prescription delivery
            service
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>
                <FaChevronDown
                  className={`w-5 h-5 text-purple-600 transition-transform duration-300 ${
                    activeFAQ === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeFAQ === index ? "max-h-96 pb-4" : "max-h-0"
                }`}
              >
                <div className="px-6 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
