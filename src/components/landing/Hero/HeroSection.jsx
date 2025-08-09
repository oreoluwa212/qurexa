import React, { useState } from "react";
import { FaStar, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";
import { logo, heroBackground, deliveryHeroImg } from "../../../assets";

const HeroSection = () => {
  const [isConsentModalOpen, setIsConsentModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-white/10"></div>
      </div>
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
          <div className="text-left space-y-3 lg:pr-8">
            <div className="md:flex hidden items-center space-x-4 my-8">
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

            <div className="space-y-4 pt-6">
              <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                Safe, secure prescription delivery service working with registered
                UK pharmacies. Your medications delivered with care, compliance,
                and complete confidentiality.
              </p>
            </div>

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

            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex items-center text-gray-700">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <FaShieldAlt className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-base">NHS Compliant</span>
              </div>

              <div className="flex items-center text-gray-700">
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-base">Lincolnshire + 20km</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <span className="text-base">Trusted by 10,000+ patients</span>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative w-full max-w-lg mx-auto lg:ml-auto lg:mr-0">
              <div className="relative w-full max-w-lg mx-auto lg:ml-auto lg:mr-0">
                <img
                  src={deliveryHeroImg}
                  alt="Healthcare professional delivering medications"
                  className="w-full h-[600px] object-cover rounded-2xl"
                />

                <div className="absolute bottom-2 left-6 border-[#CB2B7DB2]/50 bg-white/50 backdrop-blur-sm text-gray-800 p-5 rounded-2xl shadow-xl border">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                      <FaMapMarkerAlt className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-md">
                      <div className="font-bold text-lg text-black">Coverage Area</div>
                      <div className="text-black">Lincolnshire + 20km radius</div>
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