import { HiOutlineHome } from 'react-icons/hi';

const DeliveryAddressSection = ({ formData, handleInputChange, errors }) => {
    const deliveryTimeSlots = [
        'Select time slot',
        '8:00 AM - 10:00 AM',
        '10:00 AM - 12:00 PM',
        '12:00 PM - 2:00 PM',
        '2:00 PM - 4:00 PM',
        '4:00 PM - 6:00 PM',
        '6:00 PM - 8:00 PM'
    ];

    return (
        <div className="mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center px-4 sm:px-0">
                <HiOutlineHome className="w-5 h-5 sm:w-6 sm:h-6 mr-3" style={{ color: '#4873ED' }} />
                Delivery Address
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-0">
                <div className="lg:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Street Address *
                    </label>
                    <input
                        type="text"
                        placeholder="Enter street address"
                        value={formData.deliveryAddress.streetAddress}
                        onChange={(e) => handleInputChange('deliveryAddress', 'streetAddress', e.target.value)}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:border-blue-500 ${errors['deliveryAddress.streetAddress'] ? 'border-red-500' : 'border-gray-300'
                            }`}
                        style={{ '--tw-ring-color': '#4873ED' }}
                        onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #4873EDB2'}
                        onBlur={(e) => e.target.style.boxShadow = ''}
                    />
                    {errors['deliveryAddress.streetAddress'] && (
                        <p className="text-red-500 text-sm mt-1">{errors['deliveryAddress.streetAddress']}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                    </label>
                    <input
                        type="text"
                        placeholder="Enter city"
                        value={formData.deliveryAddress.city}
                        onChange={(e) => handleInputChange('deliveryAddress', 'city', e.target.value)}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:border-blue-500 ${errors['deliveryAddress.city'] ? 'border-red-500' : 'border-gray-300'
                            }`}
                        style={{ '--tw-ring-color': '#4873ED' }}
                        onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #4873EDB2'}
                        onBlur={(e) => e.target.style.boxShadow = ''}
                    />
                    {errors['deliveryAddress.city'] && (
                        <p className="text-red-500 text-sm mt-1">{errors['deliveryAddress.city']}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Postcode *
                    </label>
                    <input
                        type="text"
                        placeholder="Enter postcode"
                        value={formData.deliveryAddress.postcode}
                        onChange={(e) => handleInputChange('deliveryAddress', 'postcode', e.target.value)}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:border-blue-500 ${errors['deliveryAddress.postcode'] ? 'border-red-500' : 'border-gray-300'
                            }`}
                        style={{ '--tw-ring-color': '#4873ED' }}
                        onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #4873EDB2'}
                        onBlur={(e) => e.target.style.boxShadow = ''}
                    />
                    {errors['deliveryAddress.postcode'] && (
                        <p className="text-red-500 text-sm mt-1">{errors['deliveryAddress.postcode']}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Delivery Time
                    </label>
                    <select
                        value={formData.deliveryAddress.deliveryTime}
                        onChange={(e) => handleInputChange('deliveryAddress', 'deliveryTime', e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:border-blue-500"
                        style={{ '--tw-ring-color': '#4873ED' }}
                        onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #4873EDB2'}
                        onBlur={(e) => e.target.style.boxShadow = ''}
                    >
                        {deliveryTimeSlots.map((slot, index) => (
                            <option key={index} value={slot} disabled={index === 0}>
                                {slot}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="lg:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Special Instructions (Optional)
                    </label>
                    <textarea
                        placeholder="Any additional delivery instructions, allergies, or preferences (e.g., lactose-free, organic preferences, dietary requirements)"
                        value={formData.deliveryAddress.specialInstructions}
                        onChange={(e) => handleInputChange('deliveryAddress', 'specialInstructions', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:border-blue-500 resize-none"
                        style={{ '--tw-ring-color': '#4873ED' }}
                        onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #4873EDB2'}
                        onBlur={(e) => e.target.style.boxShadow = ''}
                    />
                </div>
            </div>
        </div>
    );
};

export default DeliveryAddressSection;