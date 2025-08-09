export const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
    const allCategories = ["All", ...categories];

    return (
        <div className="rounded-lg p-1 inline-flex">
            {allCategories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`
                        px-4 py-2 text-sm font-medium rounded-full transition-all duration-200
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
    );
};