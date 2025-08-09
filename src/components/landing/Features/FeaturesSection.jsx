import React, { useState } from "react";
import { FaStethoscope, FaTruck, FaUsers } from "react-icons/fa";

const FeaturesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: FaStethoscope,
      title: "Prescription Delivery",
      description: "Fast, secure prescription delivery and medication returns",
      features: [
        "NHS compliant",
        "Same-day delivery",
        "Secure handling"
      ],
      buttonText: "Request Delivery",
      gradientFrom: "rgb(59 130 246)", // blue-500
      gradientTo: "rgb(147 51 234)", // purple-600
      iconBg: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      icon: FaTruck,
      title: "Grocery Delivery",
      description: "Fresh groceries and essentials delivered to your door",
      features: [
        "Local stores",
        "Fresh produce",
        "Flexible pickup"
      ],
      buttonText: "Order Groceries",
      gradientFrom: "rgb(147 51 234)", // purple-600
      gradientTo: "rgb(219 39 119)", // pink-600
      iconBg: "bg-gradient-to-br from-purple-600 to-pink-600"
    },
    {
      icon: FaUsers,
      title: "Partner With Us",
      description: "Join our network of riders, vendors, and pharmacy partners",
      features: [
        "Flexible hours",
        "Competitive rates",
        "Full support"
      ],
      buttonText: "Become a Partner",
      gradientFrom: "rgb(219 39 119)", // pink-600
      gradientTo: "rgb(236 72 153)", // pink-500
      iconBg: "bg-gradient-to-br from-pink-600 to-pink-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive medication delivery solutions designed with your safety and convenience in mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden animate-fade-in-up border border-gray-100"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"
                style={{
                  background: `linear-gradient(135deg, ${service.gradientFrom}20, ${service.gradientTo}20)`
                }}
              ></div>

              <div className="relative z-10">
                <div className="mb-6 flex justify-center">
                  <div className={`${service.iconBg} rounded-full p-4 transform transition-all duration-500 ${hoveredService === index ? "scale-110 rotate-6" : ""
                    } shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-center mb-6 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors">
                      <div
                        className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`
                        }}
                      ></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full py-4 px-6 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-200"
                  style={{
                    background: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`
                  }}
                >
                  {service.buttonText}
                </button>
              </div>

              <div
                className="absolute inset-0 border-2 border-transparent group-hover:border-opacity-30 rounded-3xl transition-all duration-500"
                style={{
                  borderColor: hoveredService === index ? service.gradientTo : 'transparent'
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;