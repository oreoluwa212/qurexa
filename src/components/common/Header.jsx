import React, { useState, useEffect } from "react";
import { logo, heroBackground } from "../../assets";
import { Link, useLocation } from "react-router-dom";

const Header = ({ pageType = "landing" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Determine if we should use the hero background
  const shouldUseHeroBackground = pageType === "landing" && scrollY <= 50 && !isMenuOpen;

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${scrollY > 50 || isMenuOpen || pageType !== "landing"
        ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
        : ""
        }`}
      style={shouldUseHeroBackground ? {
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
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            onClick={handleLinkClick}
          >
            <div className="relative transition-all duration-300 group-hover:scale-110">
              <img
                src={logo}
                alt="Qurexa Logo"
                className="w-14 h-14 object-contain transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <h1
                className={`text-2xl font-bold transition-colors duration-300 ${scrollY > 50 || isMenuOpen || pageType !== "landing"
                  ? "text-gray-900"
                  : "text-gray-800"
                  }`}
              >
                Qurexa
              </h1>
              <p
                className={`text-md transition-colors duration-300 ${scrollY > 50 || isMenuOpen || pageType !== "landing"
                  ? "text-gray-600"
                  : "text-gray-700"
                  }`}
              >
                Trust. Care. Deliver.
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "Prescriptions", path: "/prescriptions" },
              { name: "Groceries", path: "/groceries" },
              { name: "Partner With Us", path: "/partner" },
              { name: "Blog", path: "/blog" }
            ].map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleLinkClick}
                  className={`text-md font-medium transition-all duration-300 hover:scale-105 relative group ${scrollY > 50 || isMenuOpen || pageType !== "landing"
                    ? "text-gray-700 hover:text-pink-600"
                    : isActive
                      ? "text-pink-600"
                      : "text-gray-600 hover:text-gray-800"
                    }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-600"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Sign In Button */}
          <div className="hidden md:flex items-center">
            <button
              className={`px-7 py-3 rounded-full text-md font-medium transition-all duration-300 hover:scale-105 ${scrollY > 50 || isMenuOpen || pageType !== "landing"
                ? "bg-gradient-to-r from-pink-500/60 to-[#CB2B7DB2]/60 text-white shadow-lg"
                : "bg-gradient-to-r from-pink-500/60 to-[#CB2B7DB2]/60 text-white shadow-lg"
                }`}
            >
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 ${scrollY > 50 || isMenuOpen || pageType !== "landing"
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
            {[
              { name: "Home", path: "/" },
              { name: "Prescriptions", path: "/prescriptions" },
              { name: "Groceries", path: "/groceries" },
              { name: "Partner With Us", path: "/partner" },
              { name: "Blog", path: "/blog" }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleLinkClick}
                className="py-4 px-4 rounded-lg transition-all duration-300 hover:scale-105 text-gray-700 hover:bg-gray-100 text-lg font-medium text-left"
              >
                {item.name}
              </Link>
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