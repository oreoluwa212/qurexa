import { HiOutlineLocationMarker } from 'react-icons/hi';
import { useState } from 'react';

const StoreInfoSection = ({ formData, handleInputChange, errors }) => {
    const [selectedStore, setSelectedStore] = useState(null);

    const popularStores = [
        { name: 'Tesco Express', location: 'High Street, London' },
        { name: 'Sainsbury\'s Local', location: 'Main Road, Manchester' },
        { name: 'ASDA Superstore', location: 'City Centre, Birmingham' },
        { name: 'Morrisons', location: 'Market Square, Leeds' },
        { name: 'Waitrose & Partners', location: 'Town Centre, Bath' },
        { name: 'Co-op Food', location: 'Village Green, Oxford' }
    ];

    const handleStoreSelect = (store, index) => {
        setSelectedStore(index);
        handleInputChange('storeInfo', 'storeName', store.name);
        handleInputChange('storeInfo', 'storeLocation', store.location);
    };

    return (
        <div className="mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center px-4 sm:px-0">
                <HiOutlineLocationMarker className="w-5 h-5 sm:w-6 sm:h-6 mr-3" style={{ color: '#4873ED' }} />
                Store Information
            </h3>

            {/* Popular Stores Quick Select */}
            <div className="mb-6 px-4 sm:px-0">
                <label className="block text-sm font-medium mb-3">Popular Stores</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {popularStores.map((store, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => handleStoreSelect(store, index)}
                            className={`p-3 text-left border rounded-lg transition-all text-sm ${selectedStore === index
                                    ? 'text-white border-blue-500'
                                    : 'border-gray-200 text-gray-900 hover:border-gray-300'
                                }`}
                            style={selectedStore === index ? { backgroundColor: '#4873EDB2' } : {}}
                        >
                            <div className="font-semibold">{store.name}</div>
                            <div className={`text-xs ${selectedStore === index ? 'text-white' : 'text-gray-600'}`}>
                                {store.location}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-0">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Store Name *
                    </label>
                    <input
                        type="text"
                        placeholder="Enter store name"
                        value={formData.storeInfo.storeName}
                        onChange={(e) => handleInputChange('storeInfo', 'storeName', e.target.value)}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors['storeInfo.storeName'] ? 'border-red-500' : 'border-gray-300'
                            }`}
                    />
                    {errors['storeInfo.storeName'] && (
                        <p className="text-red-500 text-sm mt-1">{errors['storeInfo.storeName']}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Store Location *
                    </label>
                    <input
                        type="text"
                        placeholder="Enter store location"
                        value={formData.storeInfo.storeLocation}
                        onChange={(e) => handleInputChange('storeInfo', 'storeLocation', e.target.value)}
                        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors['storeInfo.storeLocation'] ? 'border-red-500' : 'border-gray-300'
                            }`}
                    />
                    {errors['storeInfo.storeLocation'] && (
                        <p className="text-red-500 text-sm mt-1">{errors['storeInfo.storeLocation']}</p>
                    )}
                </div>
                <div className="lg:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Shopping List
                    </label>
                    <textarea
                        placeholder="Please list the items you want:
• 2x Fresh milk (1 litre each)
• 1x Bread (whole wheat)
• 500g Chicken breast
• Vegetables: tomatoes, onions, carrots
• Any other specific items..."
                        value={formData.storeInfo.shoppingList}
                        onChange={(e) => handleInputChange('storeInfo', 'shoppingList', e.target.value)}
                        rows={6}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    />
                </div>
            </div>
        </div>
    );
};

export default StoreInfoSection;