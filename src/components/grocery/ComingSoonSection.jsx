import { HiOutlineClock } from 'react-icons/hi';

const ComingSoonSection = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-full mb-3 sm:mb-0 sm:mr-4">
                    <HiOutlineClock className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Coming Soon: African Grocery Marketplace</h2>
            </div>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Phase 2: Specialized platform for African and international groceries.
            </p>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 sm:p-6 rounded-lg">
                <p className="text-gray-700 font-medium text-sm sm:text-base">
                    We're working on bringing you authentic African ingredients, spices, and specialty items from trusted suppliers across the UK.
                </p>
            </div>
        </div>
    );
};

export default ComingSoonSection;