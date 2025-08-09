export const CategoryBadge = ({ category, size = "md", className = "" }) => {
    const categoryColors = {
        "Health": "bg-[#3B82F6]/50 text-white",
        "Rider Stories": "bg-[#3B82F6]/50 text-white",
        "NHS Updates": "bg-[#3B82F6]/60 text-white",
        "Home Care": "bg-blue-500 text-white",
        "Food Culture": "bg-orange-500 text-white",
        "Medication": "bg-[#3B82F6]/70 text-white"
    };

    const sizeClasses = {
        xs: "px-1.5 py-0.5 text-xs",
        sm: "px-2 py-1 text-xs",
        md: "px-2.5 py-1.5 text-xs",
        lg: "px-3 py-2 text-sm"
    };

    return (
        <span className={`
            inline-flex items-center font-medium rounded-2xl
            ${categoryColors[category] || "bg-gray-500 text-white"}
            ${sizeClasses[size]}
            ${className}
        `}>
            {category}
        </span>
    );
};