import React, { useState, useEffect } from "react";
import { FaTruck, FaHandshake } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi2";

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: HiOutlineDocumentText,
      title: "Consent & Request",
      description:
        "Provide your consent and prescription details through our secure platform.",
    },
    {
      icon: FaHandshake,
      title: "Pharmacy Coordination",
      description:
        "We coordinate with your registered pharmacy to prepare your medication safely.",
    },
    {
      icon: FaTruck,
      title: "Secure Delivery",
      description:
        "Your medication is delivered safely to your door with full tracking and insurance.",
    },
  ];

  // Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, secure, and seamless medication delivery in three easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 -translate-y-1/2"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step Number */}
              <div
                className={`relative inline-flex items-center justify-center w-20 h-20 rounded-full text-2xl font-bold text-white mb-6 transition-all duration-300 ${
                  activeStep === index
                    ? "bg-gradient-to-br from-blue-600 to-pink-600 scale-125 shadow-2xl"
                    : "bg-gradient-to-br from-gray-400 to-gray-500 group-hover:from-blue-500 group-hover:to-pink-500"
                } group-hover:scale-110`}
              >
                <span className="relative z-10">{index + 1}</span>
              </div>

              {/* Icon */}
              <div className="mb-4">
                <step.icon
                  className={`w-12 h-12 mx-auto transition-all duration-300 ${
                    activeStep === index
                      ? "text-purple-600 scale-110"
                      : "text-gray-400 group-hover:text-purple-500"
                  }`}
                />
              </div>

              {/* Content */}
              <h3
                className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  activeStep === index
                    ? "text-purple-600"
                    : "text-gray-900 group-hover:text-purple-600"
                }`}
              >
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeStep === index
                  ? "bg-gradient-to-r from-blue-600 to-pink-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
