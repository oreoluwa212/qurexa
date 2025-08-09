import React, { useState } from "react";

export const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const allCategories = ["All", ...categories];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCategorySelect = (category) => {
        onCategoryChange(category);
        setIsDropdownOpen(false);
    };

    return (
        <>
            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:block">
                <div className="rounded-lg p-1 inline-flex flex-wrap gap-1 justify-center">
                    {allCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onCategoryChange(category)}
                            className={`
                                px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap
                                ${activeCategory === category
                                    ? "bg-[#4873ED] text-white shadow-sm"
                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                }
                            `}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Mobile Dropdown - Visible only on mobile */}
            <div className="md:hidden relative w-full max-w-xs mx-auto">
                <button
                    onClick={toggleDropdown}
                    className={`w-full px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 border flex items-center justify-between ${isDropdownOpen || activeCategory !== "All"
                            ? "bg-[#4873ED] border-[#4873ED] text-white"
                            : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                        }`}
                >
                    <span>{activeCategory}</span>
                    <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "transform rotate-180" : ""
                            }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {isDropdownOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-10"
                            onClick={() => setIsDropdownOpen(false)}
                        />

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                            {allCategories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleCategorySelect(category)}
                                    className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors duration-150 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${activeCategory === category
                                            ? "bg-[#4873ED]/10 text-[#4873ED]"
                                            : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    {category}
                                    {activeCategory === category && (
                                        <svg
                                            className="w-4 h-4 inline-block ml-2 text-[#4873ED]"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};