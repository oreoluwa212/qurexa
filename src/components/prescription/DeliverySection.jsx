import { HiOutlineHome, HiOutlineClock } from 'react-icons/hi';

const DeliverySection = ({ deliveryAddress, deliveryTime, errors, onChange }) => {
    return (
        <>
            <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <HiOutlineHome className="w-6 h-6 mr-3 text-pink-600" />
                    Delivery Address
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Address Line 1 *
                        </label>
                        <input
                            type="text"
                            placeholder="House number and street name"
                            value={deliveryAddress.addressLine1}
                            onChange={(e) => onChange('deliveryAddress', 'addressLine1', e.target.value)}
                            className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 ${errors['deliveryAddress.addressLine1'] ? 'border-red-500' : 'border-gray-300'
                                }`}
                        />
                        {errors['deliveryAddress.addressLine1'] && (
                            <p className="text-red-500 text-sm mt-1">{errors['deliveryAddress.addressLine1']}</p>
                        )}
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Address Line 2 (Optional)
                        </label>
                        <input
                            type="text"
                            placeholder="Apartment, suite, etc."
                            value={deliveryAddress.addressLine2}
                            onChange={(e) => onChange('deliveryAddress', 'addressLine2', e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            City *
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your city"
                            value={deliveryAddress.city}
                            onChange={(e) => onChange('deliveryAddress', 'city', e.target.value)}
                            className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 ${errors['deliveryAddress.city'] ? 'border-red-500' : 'border-gray-300'
                                }`}
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
                            placeholder="SW1A 1AA"
                            value={deliveryAddress.postcode}
                            onChange={(e) => onChange('deliveryAddress', 'postcode', e.target.value)}
                            className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 ${errors['deliveryAddress.postcode'] ? 'border-red-500' : 'border-gray-300'
                                }`}
                        />
                        {errors['deliveryAddress.postcode'] && (
                            <p className="text-red-500 text-sm mt-1">{errors['deliveryAddress.postcode']}</p>
                        )}
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Special Delivery Instructions (Optional)
                        </label>
                        <textarea
                            placeholder="e.g., Leave with neighbour, Ring doorbell twice, etc."
                            value={deliveryAddress.specialInstructions}
                            onChange={(e) => onChange('deliveryAddress', 'specialInstructions', e.target.value)}
                            rows={3}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 resize-none"
                        />
                    </div>
                </div>
            </div>

            <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <HiOutlineClock className="w-6 h-6 mr-3 text-pink-600" />
                    Prescription Requirements
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <p className="text-sm text-gray-600 mb-4">
                        Please select any special requirements for your prescription. Fees will be calculated based on these selections.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <label className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-pink-300 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={deliveryAddress.controlledDrug || false}
                                onChange={(e) => onChange('deliveryAddress', 'controlledDrug', e.target.checked)}
                                className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                            />
                            <div>
                                <span className="font-semibold text-gray-900">Controlled Drug (CD)</span>
                                <p className="text-xs text-gray-600">Prescription contains controlled substances</p>
                            </div>
                        </label>
                        <label className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-pink-300 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={deliveryAddress.coldChain || false}
                                onChange={(e) => onChange('deliveryAddress', 'coldChain', e.target.checked)}
                                className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                            />
                            <div>
                                <span className="font-semibold text-gray-900">Cold Chain</span>
                                <p className="text-xs text-gray-600">Requires refrigeration during transport</p>
                            </div>
                        </label>
                        <label className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-pink-300 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={deliveryAddress.bulkQuantity || false}
                                onChange={(e) => onChange('deliveryAddress', 'bulkQuantity', e.target.checked)}
                                className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                            />
                            <div>
                                <span className="font-semibold text-gray-900">Bulk Quantity</span>
                                <p className="text-xs text-gray-600">Large quantity requiring special handling</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <HiOutlineClock className="w-6 h-6 mr-3 text-pink-600" />
                    Delivery Options
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { value: 'standard', label: 'Standard Delivery', time: '3-5 business days', price: 'From Free*' },
                        { value: 'express', label: 'Express Delivery', time: '1-2 business days', price: 'From £4.99*' },
                        { value: 'same-day', label: 'Same Day Delivery', time: 'Within 4 hours', price: 'From £9.99*' }
                    ].map((option) => (
                        <div
                            key={option.value}
                            onClick={() => onChange('', 'deliveryTime', option.value)}
                            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${deliveryTime === option.value
                                    ? 'border-pink-500 bg-pink-50'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            <h4 className="font-semibold text-gray-900">{option.label}</h4>
                            <p className="text-sm text-gray-600">{option.time}</p>
                            <p className="text-lg font-bold text-pink-600">{option.price}</p>
                        </div>
                    ))}
                </div>
                <p className="text-xs text-gray-500 mt-4">
                    * Final price will be calculated based on prescription requirements (CD, cold chain, quantity)
                </p>
            </div>
        </>
    );
};

export default DeliverySection;