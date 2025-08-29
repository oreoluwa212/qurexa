import { HiOutlineUser, HiOutlinePhone } from 'react-icons/hi';

const CustomerInfoSection = ({ formData, handleInputChange, errors }) => {
    return (
        <div className="mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center px-4 sm:px-0">
                <HiOutlineUser className="w-5 h-5 sm:w-6 sm:h-6 mr-3" style={{ color: '#4873ED' }} />
                Customer Information
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-0">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={formData.customerInfo.fullName}
                        onChange={(e) => handleInputChange('customerInfo', 'fullName', e.target.value)}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:border-blue-500 ${errors['customerInfo.fullName'] ? 'border-red-500' : 'border-gray-300'
                            }`}
                        style={{ '--tw-ring-color': '#4873ED' }}
                        onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #4873EDB2'}
                        onBlur={(e) => e.target.style.boxShadow = ''}
                    />
                    {errors['customerInfo.fullName'] && (
                        <p className="text-red-500 text-sm mt-1">{errors['customerInfo.fullName']}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                    </label>
                    <div className="relative">
                        <HiOutlinePhone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                            type="tel"
                            placeholder="+44 7123 456789"
                            value={formData.customerInfo.phoneNumber}
                            onChange={(e) => handleInputChange('customerInfo', 'phoneNumber', e.target.value)}
                            className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:border-blue-500 ${errors['customerInfo.phoneNumber'] ? 'border-red-500' : 'border-gray-300'
                                }`}
                            style={{ '--tw-ring-color': '#4873ED' }}
                            onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #4873EDB2'}
                            onBlur={(e) => e.target.style.boxShadow = ''}
                        />
                    </div>
                    {errors['customerInfo.phoneNumber'] && (
                        <p className="text-red-500 text-sm mt-1">{errors['customerInfo.phoneNumber']}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CustomerInfoSection;