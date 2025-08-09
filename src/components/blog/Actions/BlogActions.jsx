import { HiOutlineHeart, HiOutlineBookmark, HiOutlineShare } from "react-icons/hi";
import { Button } from "../../common/UI/Button";

export const BlogActions = ({ onLike, onBookmark, onShare, isLiked, isBookmarked }) => {
    return (
        <div className="flex items-center space-x-4">
            <Button
                variant={isLiked ? "danger" : "ghost"}
                size="sm"
                leftIcon={HiOutlineHeart}
                onClick={onLike}
                className={isLiked ? "" : "text-gray-500 hover:text-red-500"}
            >
                Like
            </Button>

            <Button
                variant={isBookmarked ? "info" : "ghost"}
                size="sm"
                leftIcon={HiOutlineBookmark}
                onClick={onBookmark}
                className={isBookmarked ? "" : "text-gray-500 hover:text-blue-500"}
            >
                Save
            </Button>

            <Button
                variant="ghost"
                size="sm"
                leftIcon={HiOutlineShare}
                onClick={onShare}
                className="text-gray-500 hover:text-green-500"
            >
                Share
            </Button>
        </div>
    );
};