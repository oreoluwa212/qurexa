import React, { useState } from "react";
import { FaStar, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";
import { logo, heroBackground, deliveryHeroImg } from "../../assets";

const HeroSection = () => {
  const [isConsentModalOpen, setIsConsentModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-white/10"></div>
      </div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${50 + Math.random() * 100}px`,
              height: `${50 + Math.random() * 100}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="text-left space-y-3 lg:pr-8">
            {/* Logo and Brand */}
            <div className="md:flex hidden items-center space-x-4 mb-8">
              <div className="relative group">
                <img
                  src={logo}
                  alt="Qurexa Logo"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                  Qurexa
                </h1>
                <p className="text-2xl text-gray-600">
                  Trust. Care. Deliver.
                </p>
              </div>
            </div>

            {/* Main Description */}
            <div className="space-y-4 pt-6">
              <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                Safe, secure prescription delivery service working with registered
                UK pharmacies. Your medications delivered with care, compliance,
                and complete confidentiality.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 py-4">
              <button
                onClick={() => setIsConsentModalOpen(true)}
                className="px-10 py-4 bg-gradient-to-r from-blue-700 to-pink-500 text-white rounded-3xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Request Delivery
              </button>

              <button className="px-10 py-4 bg-[#C82C80]/25 text-pink-600 border-2 border-pink-500 rounded-3xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#C82C80]/10">
                Return Medicine
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-5">
              {/* NHS Compliant */}
              <div className="flex items-center text-gray-700">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <FaShieldAlt className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-base">NHS Compliant</span>
              </div>

              {/* Coverage Area */}
              <div className="flex items-center text-gray-700">
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-base">Lincolnshire + 20km</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 text-gray-700">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <span className="text-base">Trusted by 10,000+ patients</span>
            </div>
          </div>

          {/* Right Side - Image Area */}
          <div className="relative lg:pl-8">
            {/* Main Image Container */}
            <div className="relative w-full max-w-lg mx-auto lg:ml-auto lg:mr-0">
              {/* Main Image Container */}
              <div className="relative w-full max-w-lg mx-auto lg:ml-auto lg:mr-0">
                <img
                  src={deliveryHeroImg}
                  alt="Healthcare professional delivering medications"
                  className="w-full h-[600px] object-cover rounded-2xl"
                />

                {/* Coverage Area Badge - Positioned over the image */}
                <div className="absolute bottom-8 left-6 bg-white/50 backdrop-blur-sm text-gray-800 px-6 py-4 rounded-2xl shadow-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                      <FaMapMarkerAlt className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-sm">
                      <div className="font-bold text-gray-800">Coverage Area</div>
                      <div className="text-gray-600 font-medium">Lincolnshire + 20km radius</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;