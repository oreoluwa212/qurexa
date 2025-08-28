import React, { useState } from 'react';
import {
    HiOutlinePlus,
    HiOutlineUpload,
    HiOutlineCalendar,
    HiOutlineLocationMarker,
    HiOutlinePhone,
    HiOutlineUser,
    HiOutlineMail,
    HiOutlineShoppingCart,
    HiOutlineClipboardList,
    HiOutlineClock,
    HiOutlineRefresh,
    HiOutlineHome,
    HiOutlineCamera
} from 'react-icons/hi';

const GroceryPage = () => {
    const [activeTab, setActiveTab] = useState('pickup');
    const [formData, setFormData] = useState({
        customerInfo: {
            fullName: '',
            phoneNumber: '',
            email: ''
        },
        storeInfo: {
            storeName: '',
            storeLocation: '',
            shoppingList: ''
        },
        deliveryAddress: {
            streetAddress: '',
            city: '',
            postcode: '',
            deliveryTime: 'Select time slot',
            specialInstructions: ''
        },
        shoppingFiles: [],
        serviceType: 'pickup'
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (section, field, value) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));

        if (errors[`${section}.${field}`]) {
            setErrors(prev => ({
                ...prev,
                [`${section}.${field}`]: ''
            }));
        }
    };

    const handleFileUpload = (files) => {
        const validFiles = Array.from(files).filter(file => {
            const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
            const maxSize = 10 * 1024 * 1024; // 10MB
            return validTypes.includes(file.type) && file.size <= maxSize;
        });

        setFormData(prev => ({
            ...prev,
            shoppingFiles: [...prev.shoppingFiles, ...validFiles]
        }));
    };

    const removeFile = (index) => {
        setFormData(prev => ({
            ...prev,
            shoppingFiles: prev.shoppingFiles.filter((_, i) => i !== index)
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        // Customer info validation
        if (!formData.customerInfo.fullName.trim()) {
            newErrors['customerInfo.fullName'] = 'Full name is required';
        }
        if (!formData.customerInfo.phoneNumber.trim()) {
            newErrors['customerInfo.phoneNumber'] = 'Phone number is required';
        }

        // Store info validation
        if (!formData.storeInfo.storeName.trim()) {
            newErrors['storeInfo.storeName'] = 'Store name is required';
        }
        if (!formData.storeInfo.storeLocation.trim()) {
            newErrors['storeInfo.storeLocation'] = 'Store location is required';
        }

        // Address validation for delivery
        if (activeTab === 'delivery') {
            if (!formData.deliveryAddress.streetAddress.trim()) {
                newErrors['deliveryAddress.streetAddress'] = 'Street address is required';
            }
            if (!formData.deliveryAddress.city.trim()) {
                newErrors['deliveryAddress.city'] = 'City is required';
            }
            if (!formData.deliveryAddress.postcode.trim()) {
                newErrors['deliveryAddress.postcode'] = 'Postcode is required';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            alert(`${activeTab === 'delivery' ? 'Grocery delivery' : 'Grocery pickup'} order submitted successfully!`);
            setIsSubmitting(false);
            // Reset form logic would go here
        }, 2000);
    };

    const popularStores = [
        { name: 'Tesco Express', location: 'High Street, London' },
        { name: 'Sainsbury\'s Local', location: 'Main Road, Manchester' },
        { name: 'ASDA Superstore', location: 'City Centre, Birmingham' },
        { name: 'Morrisons', location: 'Market Square, Leeds' },
        { name: 'Waitrose & Partners', location: 'Town Centre, Bath' },
        { name: 'Co-op Food', location: 'Village Green, Oxford' }
    ];

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
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#4873EDB2' }}>
                            <HiOutlineShoppingCart className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900">Grocery Delivery</h1>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Fast, secure grocery delivery and medication return services
                    </p>
                    <div className="flex justify-center space-x-4 mt-6">
                        <span className="text-white px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#4873EDB2' }}>
                            Same-day delivery
                        </span>
                        <span className="text-white px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#4873EDB2' }}>
                            Fresh products
                        </span>
                        <span className="text-white px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#4873EDB2' }}>
                            Secure service
                        </span>
                    </div>
                </div>

                {/* Service Type Tabs */}
                <div className="bg-white rounded-2xl shadow-lg mb-8 overflow-hidden">
                    <div className="flex border-b">
                        <button
                            onClick={() => setActiveTab('pickup')}
                            className={`flex-1 px-6 py-4 text-center font-semibold transition-all ${activeTab === 'pickup'
                                    ? 'text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-50'
                                }`}
                            style={activeTab === 'pickup' ? { background: 'linear-gradient(to right, #4873ED, #4873EDB2)' } : {}}
                        >
                            <HiOutlineShoppingCart className="w-5 h-5 inline-block mr-2" />
                            Grocery Pickup & Delivery Service
                        </button>
                        <button
                            onClick={() => setActiveTab('delivery')}
                            className={`flex-1 px-6 py-4 text-center font-semibold transition-all ${activeTab === 'delivery'
                                    ? 'text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-50'
                                }`}
                            style={activeTab === 'delivery' ? { background: 'linear-gradient(to right, #4873ED, #4873EDB2)' } : {}}
                        >
                            <HiOutlineLocationMarker className="w-5 h-5 inline-block mr-2" />
                            Full Delivery Service
                        </button>
                    </div>

                    <div className="p-8">
                        <p className="text-gray-600 mb-8 text-center">
                            We go shopping in your preferred store and deliver to your door
                        </p>

                        {/* Customer Information */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <HiOutlineUser className="w-6 h-6 mr-3" style={{ color: '#4873ED' }} />
                                Customer Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                        {/* Store Information */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <HiOutlineLocationMarker className="w-6 h-6 mr-3" style={{ color: '#4873ED' }} />
                                Store Information
                            </h3>

                            {/* Popular Stores Quick Select */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-3">Popular Stores</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {popularStores.map((store, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => {
                                                handleInputChange('storeInfo', 'storeName', store.name);
                                                handleInputChange('storeInfo', 'storeLocation', store.location);
                                            }}
                                            className="p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-all text-sm"
                                            style={{ '--hover-bg': '#4873EDB2' }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = '#4873EDB2';
                                                e.target.style.color = 'white';
                                                e.target.style.borderColor = '#4873ED';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = '';
                                                e.target.style.color = '';
                                                e.target.style.borderColor = '#D1D5DB';
                                            }}
                                        >
                                            <div className="font-semibold text-gray-900">{store.name}</div>
                                            <div className="text-gray-600 text-xs">{store.location}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Store Name *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter store name"
                                        value={formData.storeInfo.storeName}
                                        onChange={(e) => handleInputChange('storeInfo', 'storeName', e.target.value)}
                                        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:border-blue-500 ${errors['storeInfo.storeName'] ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        style={{ '--tw-ring-color': '#4873ED' }}
                                        onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #4873EDB2'}
                                        onBlur={(e) => e.target.style.boxShadow = ''}
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
                                        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:border-blue-500 ${errors['storeInfo.storeLocation'] ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        style={{ '--tw-ring-color': '#4873ED' }}
                                        onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #4873EDB2'}
                                        onBlur={(e) => e.target.style.boxShadow = ''}
                                    />
                                    {errors['storeInfo.storeLocation'] && (
                                        <p className="text-red-500 text-sm mt-1">{errors['storeInfo.storeLocation']}</p>
                                    )}
                                </div>
                                <div className="md:col-span-2">
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
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:border-blue-500 resize-none"
                                        style={{ '--tw-ring-color': '#4873ED' }}
                                        onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #4873EDB2'}
                                        onBlur={(e) => e.target.style.boxShadow = ''}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Upload Shopping List */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <HiOutlineCamera className="w-6 h-6 mr-3" style={{ color: '#4873ED' }} />
                                Upload photo of your shopping list
                            </h3>

                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center transition-colors"
                                style={{ '--hover-border': '#4873ED' }}
                                onMouseEnter={(e) => e.target.style.borderColor = '#4873ED'}
                                onMouseLeave={(e) => e.target.style.borderColor = '#D1D5DB'}>
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*,.pdf"
                                    onChange={(e) => handleFileUpload(e.target.files)}
                                    className="hidden"
                                    id="shopping-upload"
                                />
                                <label htmlFor="shopping-upload" className="cursor-pointer">
                                    <HiOutlineUpload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                    <p className="text-lg font-semibold text-gray-700 mb-2">
                                        Click to upload shopping list
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Supports: JPG, PNG, PDF (Max 10MB each)
                                    </p>
                                </label>
                            </div>

                            {/* Uploaded Files Display */}
                            {formData.shoppingFiles.length > 0 && (
                                <div className="mt-6">
                                    <h4 className="font-semibold text-gray-900 mb-4">Uploaded Files:</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {formData.shoppingFiles.map((file, index) => (
                                            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                                <div className="flex items-center space-x-3">
                                                    <HiOutlineUpload className="w-5 h-5 text-gray-500" />
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-900">{file.name}</p>
                                                        <p className="text-xs text-gray-500">
                                                            {(file.size / 1024 / 1024).toFixed(2)} MB
                                                        </p>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => removeFile(index)}
                                                    className="text-red-500 hover:text-red-700 transition-colors text-sm"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Delivery Address (only for delivery tab) */}
                        {activeTab === 'delivery' && (
                            <div className="mb-10">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HiOutlineHome className="w-6 h-6 mr-3" style={{ color: '#4873ED' }} />
                                    Delivery Address
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
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
                                    <div className="md:col-span-2">
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
                        )}

                        {/* Submit Button */}
                        <div>
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="w-full text-white px-12 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{ backgroundColor: '#4873ED' }}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                        Processing...
                                    </div>
                                ) : (
                                    'Order Groceries'
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Coming Soon Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                    <div className="flex items-center justify-center mb-4">
                        <div className="bg-yellow-100 p-3 rounded-full mr-4">
                            <HiOutlineClock className="w-8 h-8 text-yellow-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Coming Soon: African Grocery Marketplace</h2>
                    </div>
                    <p className="text-gray-600 mb-6">
                        Phase 2: Specialized platform for African and international groceries.
                    </p>
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
                        <p className="text-gray-700 font-medium">
                            We're working on bringing you authentic African ingredients, spices, and specialty items from trusted suppliers across the UK.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroceryPage;