import { HiOutlineShoppingCart } from 'react-icons/hi';

const GroceryHeroSection = () => {
    return (
        <div className="text-center mb-8 md:mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4">
                <div className="p-3 rounded-full mb-3 sm:mb-0 sm:mr-4" style={{ backgroundColor: '#4873EDB2' }}>
                    <HiOutlineShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Grocery Delivery</h1>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Fast, secure grocery delivery and medication return services
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-6 px-4">
                <span className="text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium" style={{ backgroundColor: '#4873EDB2' }}>
                    Same-day delivery
                </span>
                <span className="text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium" style={{ backgroundColor: '#4873EDB2' }}>
                    Fresh products
                </span>
                <span className="text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium" style={{ backgroundColor: '#4873EDB2' }}>
                    Secure service
                </span>
            </div>
        </div>
    );
};

export default GroceryHeroSection;