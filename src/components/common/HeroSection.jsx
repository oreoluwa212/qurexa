import React, { useState } from "react";
import { FaStar, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";
import { deliveryHeroImg } from "../../assets";

const HeroSection = () => {
  const [isConsentModalOpen, setIsConsentModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-purple-200 via-pink-200 to-purple-300">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-left space-y-6">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative group">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-1">
                  Qurexa
                </h1>
                <p className="text-lg text-gray-600 font-medium">
                  Trust. Care. Deliver.
                </p>
              </div>
            </div>

            {/* Main Description */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              Safe, secure prescription delivery service working with registered
              UK pharmacies. Your medications delivered with care, compliance,
              and complete confidentiality.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => setIsConsentModalOpen(true)}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Request Delivery
              </button>

              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full font-medium text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Return Medicine
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              {/* NHS Compliant */}
              <div className="flex items-center gap-2 text-gray-600">
                <FaShieldAlt className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">NHS Compliant</span>
              </div>

              {/* Coverage Area */}
              <div className="flex items-center gap-2 text-gray-600">
                <FaMapMarkerAlt className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium">Lincolnshire + 20km</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 text-gray-600 pt-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-yellow-500" />
                ))}
              </div>
              <span className="text-sm font-medium">Trusted by 10,000+ patients</span>
            </div>
          </div>

          {/* Right Side - Image Area */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Image Container */}
              <div className="relative w-full max-w-md mx-auto">
                <img
                  src={deliveryHeroImg}
                  alt="Healthcare professional delivering medications"
                  className="w-full h-full object-cover"
                />

                {/* Coverage Area Badge - Positioned over the image */}
                {/* Coverage Area Badge - Positioned over the image */}
                <div className="absolute bottom-8 left-6 bg-white/30 backdrop-blur-sm text-white px-4 py-4 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                      <FaMapMarkerAlt className="w-4 h-4" />
                    </div>
                    <div className="text-md text-black">
                      <div className="font-semibold">Coverage Area</div>
                      <div className="text-sm opacity-90">Lincolnshire + 20km radius</div>
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