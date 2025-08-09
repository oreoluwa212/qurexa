import React, { useState, useEffect } from "react";
import { logo } from "../../../assets";
import { Link, useLocation } from "react-router-dom";

const DefaultHeader = () => {
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
        <header className="fixed w-full z-50 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100">
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-white/95 backdrop-blur-lg md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex justify-between items-center py-3">
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
                            <h1 className="text-2xl font-bold text-gray-900 transition-colors duration-300">
                                Qurexa
                            </h1>
                            <p className="text-md text-gray-600 transition-colors duration-300">
                                Trust. Care. Deliver.
                            </p>
                        </div>
                    </Link>

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
                                    className={`text-md font-medium transition-all duration-300 hover:scale-105 relative group ${isActive
                                            ? "text-pink-600"
                                            : "text-gray-700 hover:text-pink-600"
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

                    <div className="hidden md:flex items-center">
                        <button className="px-7 py-3 rounded-full text-md font-medium transition-all duration-300 hover:scale-105 bg-gradient-to-r from-pink-500/60 to-[#CB2B7DB2]/60 text-white shadow-lg">
                            Sign In
                        </button>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 text-gray-700 hover:bg-gray-100"
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
                        ))}

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

export default DefaultHeader;