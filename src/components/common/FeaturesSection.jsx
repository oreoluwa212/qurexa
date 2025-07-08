import React, { useState } from "react";
import { FaTruck, FaHospital, FaShieldAlt, FaMobile } from "react-icons/fa";

const FeaturesSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: FaTruck,
      title: "Safe Delivery",
      description:
        "Temperature-controlled transport for all medications, including cold-chain items. Fully insured and tracked deliveries.",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: FaHospital,
      title: "Pharmacy Partnership",
      description:
        "Working exclusively with GPhC registered pharmacies to ensure all medications meet professional standards.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: FaShieldAlt,
      title: "Secure & Compliant",
      description:
        "Full GDPR compliance, secure handling of controlled substances, and patient consent at every step.",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: FaMobile,
      title: "Easy Tracking",
      description:
        "Real-time delivery updates, SMS notifications, and 24/7 customer support for peace of mind.",
      color: "from-blue-600 to-cyan-500",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive medication delivery solutions designed with your
            safety and convenience in mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 cursor-pointer overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Icon */}
              <div
                className={`relative mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br ${
                  feature.color
                } text-white transform transition-all duration-500 ${
                  hoveredFeature === index ? "scale-110 rotate-12" : ""
                }`}
              >
                <feature.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {feature.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-200 rounded-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
