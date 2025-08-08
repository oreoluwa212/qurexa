import React, { useState, useEffect } from "react";
import { logo, heroBackground } from "../../assets";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${scrollY > 50 || isMenuOpen
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
          : ""
        }`}
      style={scrollY <= 50 && !isMenuOpen ? {
        backgroundImage: `url("${heroBackground}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      } : {}}
    >
      {/* Full screen overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-white/95 backdrop-blur-lg md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative transition-all duration-300 group-hover:scale-110">
              <img
                src={logo}
                alt="Qurexa Logo"
                className="w-10 h-10 object-contain transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <h1
                className={`text-lg font-bold transition-colors duration-300 ${scrollY > 50 || isMenuOpen ? "text-gray-900" : "text-gray-800"
                  }`}
              >
                Qurexa
              </h1>
              <p
                className={`text-xs transition-colors duration-300 ${scrollY > 50 || isMenuOpen ? "text-gray-600" : "text-gray-700"
                  }`}
              >
                Trust. Care. Deliver.
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {["Home", "Prescriptions", "Groceries", "Partner With Us", "Blog"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 relative group ${scrollY > 50 || isMenuOpen
                      ? "text-gray-700 hover:text-pink-600"
                      : item === "Home" ? "text-pink-600" : "text-gray-600 hover:text-gray-800"
                    }`}
                >
                  {item}
                  {item === "Home" && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-600"></span>
                  )}
                </a>
              )
            )}
          </nav>

          {/* Sign In Button */}
          <div className="hidden md:flex items-center">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${scrollY > 50 || isMenuOpen
                  ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg"
                  : "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg"
                }`}
            >
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 ${scrollY > 50 || isMenuOpen
                ? "text-gray-700 hover:bg-gray-100"
                : "text-gray-700 hover:bg-pink-300"
              }`}
          >
            <div className="space-y-1">
              <div
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                  }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
              ></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${isMenuOpen ? "max-h-screen pb-6" : "max-h-0"
            }`}
        >
          <nav className="flex flex-col space-y-4 pt-4 min-h-screen">
            {["Home", "Prescriptions", "Groceries", "Partner With Us", "Blog"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-4 px-4 rounded-lg transition-all duration-300 hover:scale-105 text-gray-700 hover:bg-gray-100 text-lg font-medium"
                >
                  {item}
                </a>
              )
            )}

            {/* Action Buttons */}
            <div className="flex flex-col space-y-4 pt-6">
              <button className="py-4 px-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                Request Delivery
              </button>

              <button className="py-4 px-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
                Return Medicine
              </button>

              <button className="py-4 px-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 border-2 border-gray-300 text-gray-700 bg-white">
                Sign In
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;