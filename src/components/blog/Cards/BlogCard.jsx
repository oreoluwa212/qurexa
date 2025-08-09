import React from "react";
import { CategoryBadge } from "../Meta/CategoryBadge";
import { AiOutlineHeart, AiOutlineEye, AiOutlineShareAlt } from "react-icons/ai";

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
    className = "",
    showBadge = true,
    badgePosition = "overlay"
}) => {
    const baseClasses = "bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100";

    const variants = {
        featured: () => (
            <article className={`${baseClasses} ${className}`}>
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {showBadge && badgePosition === "overlay" && (
                        <div className="absolute top-4 left-4">
                            <CategoryBadge category={category} />
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-6">
                    {showBadge && badgePosition === "content" && (
                        <div className="mb-3">
                            <CategoryBadge category={category} size="sm" />
                        </div>
                    )}
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-pink-600 transition-colors cursor-pointer leading-tight">
                        {title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed min-h-[4.5rem]">{excerpt}</p>
                    <div className="flex flex-col space-y-2 text-sm text-gray-500">
                        <div className="flex items-center justify-between w-full">
                            <span className="font-medium text-gray-700">{author}</span>
                            <span>{date}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span>{readTime}</span>
                            <div className="flex items-center space-x-3">
                                <div className="flex items-center space-x-1">
                                    <AiOutlineHeart className="w-4 h-4" />
                                    <span>{likes}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <AiOutlineEye className="w-4 h-4" />
                                    <span>{views || likes}</span>
                                </div>
                                <button className="p-1 hover:bg-gray-100 rounded">
                                    <AiOutlineShareAlt className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        ),

        compact: () => (
            <article className={`${baseClasses} flex ${className} h-40`}>
                <div className="relative w-60 h-full overflow-hidden flex-shrink-0">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {showBadge && badgePosition === "overlay" && (
                        <div className="absolute top-3 left-3">
                            <CategoryBadge category={category} size="sm" />
                        </div>
                    )}
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                        {showBadge && badgePosition === "content" && (
                            <div className="mb-2">
                                <CategoryBadge category={category} size="sm" />
                            </div>
                        )}
                        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-pink-600 transition-colors cursor-pointer leading-tight">
                            {title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">{excerpt}</p>
                    </div>
                    <div className="flex flex-col space-y-2 text-sm text-gray-500">
                        <div className="flex items-center justify-between w-full">
                            <span className="font-medium text-gray-700">{author}</span>
                            <span>{date}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span>{readTime}</span>
                            <div className="flex items-center space-x-3">
                                <div className="flex items-center space-x-1">
                                    <AiOutlineHeart className="w-4 h-4" />
                                    <span>{likes}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <AiOutlineEye className="w-4 h-4" />
                                    <span>{views || likes}</span>
                                </div>
                                <button className="p-1 hover:bg-gray-100 rounded">
                                    <AiOutlineShareAlt className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        ),

        horizontal: () => (
            <article className={`${baseClasses} flex ${className}`}>
                <div className="relative w-48 h-32 overflow-hidden flex-shrink-0">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {showBadge && badgePosition === "overlay" && (
                        <div className="absolute top-2 left-2">
                            <CategoryBadge category={category} size="sm" />
                        </div>
                    )}
                </div>
                <div className="p-4 flex-1">
                    {showBadge && badgePosition === "content" && (
                        <div className="mb-2">
                            <CategoryBadge category={category} size="sm" />
                        </div>
                    )}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-pink-600 transition-colors cursor-pointer leading-tight">
                        {title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed min-h-[2.5rem]">{excerpt}</p>
                    <div className="flex flex-col space-y-2 text-xs text-gray-500">
                        <div className="flex items-center justify-between w-full">
                            <span className="font-medium text-gray-700">{author}</span>
                            <span>{date}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span>{readTime}</span>
                            <div className="flex items-center space-x-2">
                                <div className="flex items-center space-x-1">
                                    <AiOutlineHeart className="w-3 h-3" />
                                    <span>{likes}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <AiOutlineEye className="w-3 h-3" />
                                    <span>{views || likes}</span>
                                </div>
                                <button className="p-0.5 hover:bg-gray-100 rounded">
                                    <AiOutlineShareAlt className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        ),

        default: () => (
            <article className={`${baseClasses} ${className}`}>
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {showBadge && badgePosition === "overlay" && (
                        <div className="absolute top-3 left-3">
                            <CategoryBadge category={category} size="sm" />
                        </div>
                    )}
                </div>
                <div className="p-5">
                    {showBadge && badgePosition === "content" && (
                        <div className="mb-3">
                            <CategoryBadge category={category} size="sm" />
                        </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-pink-600 transition-colors cursor-pointer leading-tight">
                        {title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed min-h-[4.5rem]">{excerpt}</p>
                    <div className="flex flex-col space-y-2 text-sm text-gray-500">
                        <div className="flex items-center justify-between w-full">
                            <span className="font-medium text-gray-700">{author}</span>
                            <span>{date}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span>{readTime}</span>
                            <div className="flex items-center space-x-3">
                                <div className="flex items-center space-x-1">
                                    <AiOutlineHeart className="w-4 h-4" />
                                    <span>{likes}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <AiOutlineEye className="w-4 h-4" />
                                    <span>{views || likes}</span>
                                </div>
                                <button className="p-1 hover:bg-gray-100 rounded">
                                    <AiOutlineShareAlt className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        )
    };

    return variants[variant]();
};