import { HiOutlineShieldCheck, HiOutlineClock } from 'react-icons/hi';

const PrescriptionHeader = () => {
    return (
        <div className="text-center mb-8 md:mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4">
                <div className="bg-pink-100 p-3 rounded-full mb-3 sm:mb-0 sm:mr-4">
                    <HiOutlineShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600" />
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Prescription Services
                </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Fast, secure prescription delivery and medication return services
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mt-4 sm:mt-6 px-4">
                <span className="bg-pink-100 text-pink-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium flex items-center w-full sm:w-auto justify-center">
                    <HiOutlineClock className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Same-day delivery
                </span>
                <span className="bg-pink-100 text-pink-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium flex items-center w-full sm:w-auto justify-center">
                    <HiOutlineShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    NHS compliant
                </span>
                <span className="bg-pink-100 text-pink-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium flex items-center w-full sm:w-auto justify-center">
                    <HiOutlineShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Secure handling
                </span>
            </div>
        </div>
    );
};

export default PrescriptionHeader;