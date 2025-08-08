import React from "react";
import {
    HiOutlineCalendar,
    HiOutlineClock,
    HiOutlineUser,
    HiOutlineEye,
    HiOutlineHeart,
    HiOutlineBookmark,
    HiOutlineShare
} from "react-icons/hi";

// Main Blog Card Component
export const BlogCard = ({
    image,
    category,
    title,
    excerpt,
    author,
    date,
    readTime,
    views,
    likes,
    variant = "default",
    className = ""
}) => {
    const baseClasses = "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden";

    if (variant === "featured") {
        return (
            <article className={`${baseClasses} ${className}`}>
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                        <CategoryBadge category={category} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-pink-600 transition-colors cursor-pointer">
                        {title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                        {excerpt}
                    </p>

                    <BlogMeta
                        author={author}
                        date={date}
                        readTime={readTime}
                        views={views}
                        likes={likes}
                    />
                </div>
            </article>
        );
    }

    if (variant === "horizontal") {
        return (
            <article className={`${baseClasses} flex ${className}`}>
                <div className="relative w-48 h-32 overflow-hidden flex-shrink-0">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-2 left-2">
                        <CategoryBadge category={category} size="sm" />
                    </div>
                </div>

                <div className="p-4 flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-pink-600 transition-colors cursor-pointer">
                        {title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {excerpt}
                    </p>

                    <BlogMeta
                        author={author}
                        date={date}
                        readTime={readTime}
                        size="sm"
                    />
                </div>
            </article>
        );
    }

    // Default vertical card
    return (
        <article className={`${baseClasses} ${className}`}>
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                    <CategoryBadge category={category} />
                </div>
            </div>

            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-pink-600 transition-colors cursor-pointer">
                    {title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                    {excerpt}
                </p>

                <BlogMeta
                    author={author}
                    date={date}
                    readTime={readTime}
                    views={views}
                    likes={likes}
                />
            </div>
        </article>
    );
};

// Category Badge Component
export const CategoryBadge = ({ category, size = "default" }) => {
    const getCategoryColor = (cat) => {
        const colors = {
            "Health": "bg-gradient-to-r from-green-500 to-emerald-600",
            "Home Care": "bg-gradient-to-r from-blue-500 to-cyan-600",
            "New Stories": "bg-gradient-to-r from-purple-500 to-indigo-600",
            "Food Culture": "bg-gradient-to-r from-orange-500 to-red-600",
            "NHS Updates": "bg-gradient-to-r from-blue-600 to-blue-700",
            "Medication": "bg-gradient-to-r from-pink-500 to-rose-600"
        };
        return colors[cat] || "bg-gradient-to-r from-gray-500 to-gray-600";
    };

    const sizeClasses = size === "sm" ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-sm";

    return (
        <span className={`${getCategoryColor(category)} text-white rounded-full font-medium ${sizeClasses}`}>
            {category}
        </span>
    );
};

// Blog Meta Component
export const BlogMeta = ({ author, date, readTime, views, likes, size = "default" }) => {
    const textSize = size === "sm" ? "text-xs" : "text-sm";
    const iconSize = size === "sm" ? "w-3 h-3" : "w-4 h-4";

    return (
        <div className={`flex items-center justify-between ${textSize} text-gray-500`}>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                    <HiOutlineUser className={iconSize} />
                    <span>{author}</span>
                </div>

                <div className="flex items-center space-x-1">
                    <HiOutlineCalendar className={iconSize} />
                    <span>{date}</span>
                </div>

                <div className="flex items-center space-x-1">
                    <HiOutlineClock className={iconSize} />
                    <span>{readTime}</span>
                </div>
            </div>

            {(views || likes) && (
                <div className="flex items-center space-x-3">
                    {views && (
                        <div className="flex items-center space-x-1">
                            <HiOutlineEye className={iconSize} />
                            <span>{views}</span>
                        </div>
                    )}

                    {likes && (
                        <div className="flex items-center space-x-1">
                            <HiOutlineHeart className={iconSize} />
                            <span>{likes}</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

// Blog Actions Component
export const BlogActions = ({ onLike, onBookmark, onShare, isLiked, isBookmarked }) => {
    return (
        <div className="flex items-center space-x-4 text-gray-500">
            <button
                onClick={onLike}
                className={`flex items-center space-x-1 hover:text-red-500 transition-colors ${isLiked ? 'text-red-500' : ''}`}
            >
                <HiOutlineHeart className="w-5 h-5" />
                <span>Like</span>
            </button>

            <button
                onClick={onBookmark}
                className={`flex items-center space-x-1 hover:text-blue-500 transition-colors ${isBookmarked ? 'text-blue-500' : ''}`}
            >
                <HiOutlineBookmark className="w-5 h-5" />
                <span>Save</span>
            </button>

            <button
                onClick={onShare}
                className="flex items-center space-x-1 hover:text-green-500 transition-colors"
            >
                <HiOutlineShare className="w-5 h-5" />
                <span>Share</span>
            </button>
        </div>
    );
};

// Search Bar Component
export const SearchBar = ({ onSearch, placeholder = "Search articles..." }) => {
    return (
        <div className="relative w-[60%]">
            <input
                type="text"
                placeholder={placeholder}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full px-4 py-3 bg-transparent pl-10 border border-black rounded-3xl my-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-xs"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        </div>
    );
};

// Category Filter Component
export const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
    return (
        <div className="flex flex-wrap gap-2">
            <button
                onClick={() => onCategoryChange("All")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === "All"
                        ? "bg-pink-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
            >
                All
            </button>

            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                            ? "bg-pink-500 text-white shadow-lg"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};