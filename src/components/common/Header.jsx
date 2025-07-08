import React, { useState, useEffect } from "react";
import { HiOutlineHeart } from "react-icons/hi2";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrollY > 50
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
          : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div
              className={`relative p-2 rounded-full transition-all duration-300 ${
                scrollY > 50
                  ? "bg-gradient-to-r from-blue-600 to-pink-600"
                  : "bg-white/20 backdrop-blur-sm"
              } group-hover:scale-110 group-hover:rotate-12`}
            >
              <HiOutlineHeart
                className={`w-6 h-6 transition-all duration-300 ${
                  scrollY > 50 ? "text-white" : "text-white"
                } group-hover:animate-pulse`}
              />
            </div>
            <div>
              <h1
                className={`text-xl font-bold transition-colors duration-300 ${
                  scrollY > 50 ? "text-gray-900" : "text-white"
                }`}
              >
                Qurexa
              </h1>
              <p
                className={`text-sm transition-colors duration-300 ${
                  scrollY > 50 ? "text-gray-600" : "text-white/80"
                }`}
              >
                Care. Delivered.
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Services", "How It Works", "Compliance", "FAQ", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                    scrollY > 50
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white hover:text-blue-200"
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
              scrollY > 50
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/20"
            }`}
          >
            <div className="space-y-1">
              <div
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col space-y-3">
            {["Services", "How It Works", "Compliance", "FAQ", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                    scrollY > 50
                      ? "text-gray-700 hover:bg-gray-100"
                      : "text-white hover:bg-white/20 backdrop-blur-sm"
                  }`}
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
