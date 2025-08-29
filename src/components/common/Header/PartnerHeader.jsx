import React, { useState, useEffect } from "react";
import { logo } from "../../../assets";
import { Link, useLocation } from "react-router-dom";

const PartnerHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

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

    const handleLinkClick = () => {
        setIsMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className="fixed w-full z-50 bg-transparent backdrop-blur-sm border-b border-white/10">
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-gradient-to-r from-pink-500/95 to-purple-600/95 backdrop-blur-lg lg:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex justify-between items-center py-3">
                    <Link
                        to="/"
                        className="flex items-center space-x-2 md:space-x-3 group"
                        onClick={handleLinkClick}
                    >
                        <div className="relative transition-all duration-300 group-hover:scale-110">
                            <img
                                src={logo}
                                alt="Qurexa Logo"
                                className="w-10 h-10 md:w-14 md:h-14 object-contain transition-all duration-300"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-lg md:text-2xl font-bold text-white transition-colors duration-300">
                                Qurexa
                            </h1>
                            <p className="text-xs md:text-md text-white/80 transition-colors duration-300">
                                Trust. Care. Deliver.
                            </p>
                        </div>
                    </Link>

                    <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
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
                                    className={`text-md font-medium transition-all duration-300 hover:scale-105 relative group ${isActive
                                        ? "text-white"
                                        : "text-white/80 hover:text-white"
                                        }`}
                                >
                                    {item.name}
                                    {isActive && (
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white"></span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="hidden lg:flex items-center">
                        <button className="px-5 md:px-7 py-2 md:py-3 rounded-full text-sm md:text-md font-medium transition-all duration-300 hover:scale-105 bg-white/20 backdrop-blur-sm text-white shadow-lg border border-white/30 hover:bg-white/30">
                            Sign In
                        </button>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 text-white hover:bg-white/10"
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

                <div
                    className={`lg:hidden transition-all duration-500 overflow-hidden ${isMenuOpen ? "max-h-screen pb-6" : "max-h-0"
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
                                className="py-4 px-4 rounded-lg transition-all duration-300 hover:scale-105 text-white hover:bg-white/10 text-lg font-medium text-left"
                            >
                                {item.name}
                            </Link>
                        ))}

                        <div className="flex flex-col space-y-4 pt-6">
                            <button className="py-4 px-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 bg-white text-pink-600 hover:bg-white/90">
                                Request Delivery
                            </button>

                            <button className="py-4 px-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 bg-white text-purple-600 hover:bg-white/90">
                                Return Medicine
                            </button>

                            <button className="py-4 px-4 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 border-2 border-white/30 text-white bg-transparent hover:bg-white/10">
                                Sign In
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default PartnerHeader;