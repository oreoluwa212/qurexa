import React, { useState } from "react";
import { FaPlay, FaStar, FaChevronDown } from "react-icons/fa";
import ConsentModal from "./ConsentModal";
import { logo } from "../../assets";

const HeroSection = () => {
  const [isConsentModalOpen, setIsConsentModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-float"
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in-up">
            {/* Logo Animation */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <img
                  src={logo}
                  alt="Qurexa Logo"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 animate-pulse"
                />
              </div>
            </div>

            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Qurexa
            </h1>
            <p
              className="text-2xl md:text-3xl text-white/90 mb-6 font-light animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Trust. Care. Deliver.
            </p>
            <p
              className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              Safe, secure prescription delivery service working with registered
              UK pharmacies. Your medications delivered with care, compliance,
              and complete confidentiality.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <button
                onClick={() => setIsConsentModalOpen(true)}
                className="group relative px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 overflow-hidden"
              >
                <span className="relative z-10 flex hover:text-white items-center gap-2">
                  <FaPlay className="w-4 h-4 group-hover:animate-pulse" />
                  Request Delivery
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <div className="flex items-center gap-2 text-white/80 group cursor-pointer hover:text-white transition-colors">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="w-4 h-4 text-yellow-400 group-hover:animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <span className="text-sm">Trusted by 10,000+ patients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <FaChevronDown className="w-6 h-6 text-white/60" />
          </div>
        </div>
      </section>

      <ConsentModal
        isOpen={isConsentModalOpen}
        onClose={() => setIsConsentModalOpen(false)}
      />
    </>
  );
};

export default HeroSection;
