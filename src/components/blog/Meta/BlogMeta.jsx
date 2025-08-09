export const BlogMeta = ({
    author,
    date,
    readTime,
    views,
    likes,
    size = "md",
    className = ""
}) => {
    const textSize = size === "sm" ? "text-xs" : "text-sm";

    return (
        <div className={`flex items-center gap-4 ${textSize} text-gray-500 ${className}`}>
            <div className="flex items-center gap-1">
                <span className="font-medium">{author}</span>
            </div>
            <span>•</span>
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
            {views && (
                <>
                    <span>•</span>
                    <span>{views} views</span>
                </>
            )}
            {likes && (
                <>
                    <span>•</span>
                    <span>{likes} likes</span>
                </>
            )}
        </div>
    );
};