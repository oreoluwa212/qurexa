import React, { useState } from 'react';
import {
    HiOutlinePlus,
    HiOutlineUpload,
    HiOutlineCalendar,
    HiOutlineLocationMarker,
    HiOutlinePhone,
    HiOutlineUser,
    HiOutlineMail,
    HiOutlineIdentification,
    HiOutlineClipboardList,
    HiOutlineClock,
    HiOutlineRefresh,
    HiOutlineShieldCheck,
    HiOutlineHome
} from 'react-icons/hi';
import { Button, PrimaryButton, SecondaryButton } from '../../components/common/UI/Button';
import { Input } from '../../components/common/UI/Input';
import ConsentModal from '../../components/landing/Modals/ConsentModal';

const PrescriptionsPage = () => {
    const [activeTab, setActiveTab] = useState('delivery');
    const [showConsentModal, setShowConsentModal] = useState(false);
    const [consentGiven, setConsentGiven] = useState(false);
    const [formData, setFormData] = useState({
        patientInfo: {
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            nhsNumber: '',
            phoneNumber: '',
            email: ''
        },
        deliveryAddress: {
            addressLine1: '',
            addressLine2: '',
            city: '',
            postcode: '',
            specialInstructions: ''
        },
        pharmacy: {
            name: '',
            address: '',
            phoneNumber: '',
            prescriptionRef: ''
        },
        prescriptionFiles: [],
        serviceType: 'delivery',
        deliveryTime: 'standard',
        returnSchedule: {
            date: '',
            time: '',
            medications: ''
        }
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
            prescriptionFiles: [...prev.prescriptionFiles, ...validFiles]
        }));
    };

    const removeFile = (index) => {
        setFormData(prev => ({
            ...prev,
            prescriptionFiles: prev.prescriptionFiles.filter((_, i) => i !== index)
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        // Patient info validation
        if (!formData.patientInfo.firstName.trim()) {
            newErrors['patientInfo.firstName'] = 'First name is required';
        }
        if (!formData.patientInfo.lastName.trim()) {
            newErrors['patientInfo.lastName'] = 'Last name is required';
        }
        if (!formData.patientInfo.dateOfBirth) {
            newErrors['patientInfo.dateOfBirth'] = 'Date of birth is required';
        }
        if (!formData.patientInfo.phoneNumber.trim()) {
            newErrors['patientInfo.phoneNumber'] = 'Phone number is required';
        }

        // Address validation for delivery
        if (activeTab === 'delivery') {
            if (!formData.deliveryAddress.addressLine1.trim()) {
                newErrors['deliveryAddress.addressLine1'] = 'Address is required';
            }
            if (!formData.deliveryAddress.city.trim()) {
                newErrors['deliveryAddress.city'] = 'City is required';
            }
            if (!formData.deliveryAddress.postcode.trim()) {
                newErrors['deliveryAddress.postcode'] = 'Postcode is required';
            }
        }

        // Pharmacy validation
        if (!formData.pharmacy.name.trim()) {
            newErrors['pharmacy.name'] = 'Pharmacy name is required';
        }

        // Return schedule validation
        if (activeTab === 'returns' && !formData.returnSchedule.date) {
            newErrors['returnSchedule.date'] = 'Return date is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validateForm()) {
            return;
        }

        if (!consentGiven) {
            setShowConsentModal(true);
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            alert(`${activeTab === 'delivery' ? 'Prescription delivery' : 'Medication return'} request submitted successfully!`);
            setIsSubmitting(false);
            // Reset form logic would go here
        }, 2000);
    };

    const handleConsentSubmit = () => {
        setConsentGiven(true);
        setShowConsentModal(false);
        handleSubmit();
    };

    const popularPharmacies = [
        { name: 'Boots Pharmacy', address: 'High Street, London' },
        { name: 'Lloyds Pharmacy', address: 'Main Road, Manchester' },
        { name: 'Superdrug Pharmacy', address: 'City Centre, Birmingham' },
        { name: 'Well Pharmacy', address: 'Market Square, Leeds' },
        { name: 'Tesco Pharmacy', address: 'Shopping Centre, Bristol' },
        { name: 'ASDA Pharmacy', address: 'Retail Park, Newcastle' }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <div className="bg-pink-100 p-3 rounded-full mr-4">
                            <HiOutlineShieldCheck className="w-8 h-8 text-pink-600" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900">Prescription Services</h1>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Fast, secure prescription delivery and medication return services
                    </p>
                    <div className="flex justify-center space-x-4 mt-6">
                        <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                            <HiOutlineClock className="w-4 h-4 mr-2" />
                            Same-day delivery
                        </span>
                        <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                            <HiOutlineShieldCheck className="w-4 h-4 mr-2" />
                            NHS compliant
                        </span>
                        <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                            <HiOutlineShieldCheck className="w-4 h-4 mr-2" />
                            Secure handling
                        </span>
                    </div>
                </div>

                {/* Service Type Tabs */}
                <div className="bg-white rounded-2xl shadow-lg mb-8 overflow-hidden">
                    <div className="flex border-b">
                        <button
                            onClick={() => setActiveTab('delivery')}
                            className={`flex-1 px-6 py-4 text-center font-semibold transition-all ${activeTab === 'delivery'
                                ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white'
                                : 'bg-white text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            <HiOutlineLocationMarker className="w-5 h-5 inline-block mr-2" />
                            Prescription Delivery
                        </button>
                        <button
                            onClick={() => setActiveTab('returns')}
                            className={`flex-1 px-6 py-4 text-center font-semibold transition-all ${activeTab === 'returns'
                                ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white'
                                : 'bg-white text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            <HiOutlineRefresh className="w-5 h-5 inline-block mr-2" />
                            Medication Returns
                        </button>
                    </div>

                    <div className="p-8">
                        <p className="text-gray-600 mb-8 text-center">
                            Get your prescriptions delivered safely to your door or schedule returns for unused medications
                        </p>

                        {/* Patient Information Section */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <HiOutlineUser className="w-6 h-6 mr-3 text-pink-600" />
                                Patient Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your first name"
                                        value={formData.patientInfo.firstName}
                                        onChange={(e) => handleInputChange('patientInfo', 'firstName', e.target.value)}
                                        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 ${errors['patientInfo.firstName'] ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    />
                                    {errors['patientInfo.firstName'] && (
                                        <p className="text-red-500 text-sm mt-1">{errors['patientInfo.firstName']}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your last name"
                                        value={formData.patientInfo.lastName}
                                        onChange={(e) => handleInputChange('patientInfo', 'lastName', e.target.value)}
                                        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 ${errors['patientInfo.lastName'] ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    />
                                    {errors['patientInfo.lastName'] && (
                                        <p className="text-red-500 text-sm mt-1">{errors['patientInfo.lastName']}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Date of Birth *
                                    </label>
                                    <input
                                        type="date"
                                        value={formData.patientInfo.dateOfBirth}
                                        onChange={(e) => handleInputChange('patientInfo', 'dateOfBirth', e.target.value)}
                                        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 ${errors['patientInfo.dateOfBirth'] ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    />
                                    {errors['patientInfo.dateOfBirth'] && (
                                        <p className="text-red-500 text-sm mt-1">{errors['patientInfo.dateOfBirth']}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        NHS Number (Optional)
                                    </label>
                                    <div className="relative">
                                        <HiOutlineIdentification className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="123 456 7890"
                                            value={formData.patientInfo.nhsNumber}
                                            onChange={(e) => handleInputChange('patientInfo', 'nhsNumber', e.target.value)}
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                                        />
                                    </div>
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
                                            value={formData.patientInfo.phoneNumber}
                                            onChange={(e) => handleInputChange('patientInfo', 'phoneNumber', e.target.value)}
                                            className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 ${errors['patientInfo.phoneNumber'] ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                        />
                                    </div>
                                    {errors['patientInfo.phoneNumber'] && (
                                        <p className="text-red-500 text-sm mt-1">{errors['patientInfo.phoneNumber']}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address (Optional)
                                    </label>
                                    <div className="relative">
                                        <HiOutlineMail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <input
                                            type="email"
                                            placeholder="your.email@example.com"
                                            value={formData.patientInfo.email}
                                            onChange={(e) => handleInputChange('patientInfo', 'email', e.target.value)}
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Conditional Sections Based on Service Type */}
                        {activeTab === 'delivery' && (
                            <>
                                {/* Delivery Address Section */}
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
                                                value={formData.deliveryAddress.addressLine1}
                                                onChange={(e) => handleInputChange('deliveryAddress', 'addressLine1', e.target.value)}
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
                                                value={formData.deliveryAddress.addressLine2}
                                                onChange={(e) => handleInputChange('deliveryAddress', 'addressLine2', e.target.value)}
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
                                                value={formData.deliveryAddress.city}
                                                onChange={(e) => handleInputChange('deliveryAddress', 'city', e.target.value)}
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
                                                value={formData.deliveryAddress.postcode}
                                                onChange={(e) => handleInputChange('deliveryAddress', 'postcode', e.target.value)}
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
                                                value={formData.deliveryAddress.specialInstructions}
                                                onChange={(e) => handleInputChange('deliveryAddress', 'specialInstructions', e.target.value)}
                                                rows={3}
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 resize-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Delivery Options */}
                                <div className="mb-10">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                        <HiOutlineClock className="w-6 h-6 mr-3 text-pink-600" />
                                        Delivery Options
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {[
                                            { value: 'standard', label: 'Standard Delivery', time: '3-5 business days', price: 'Free' },
                                            { value: 'express', label: 'Express Delivery', time: '1-2 business days', price: '£4.99' },
                                            { value: 'same-day', label: 'Same Day Delivery', time: 'Within 4 hours', price: '£9.99' }
                                        ].map((option) => (
                                            <div
                                                key={option.value}
                                                onClick={() => handleInputChange('', 'deliveryTime', option.value)}
                                                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.deliveryTime === option.value
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
                                </div>
                            </>
                        )}

                        {activeTab === 'returns' && (
                            <div className="mb-10">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <HiOutlineCalendar className="w-6 h-6 mr-3 text-pink-600" />
                                    Return Schedule
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Preferred Collection Date *
                                        </label>
                                        <input
                                            type="date"
                                            value={formData.returnSchedule.date}
                                            onChange={(e) => handleInputChange('returnSchedule', 'date', e.target.value)}
                                            className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 ${errors['returnSchedule.date'] ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                        />
                                        {errors['returnSchedule.date'] && (
                                            <p className="text-red-500 text-sm mt-1">{errors['returnSchedule.date']}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time Slot</label>
                                        <select
                                            value={formData.returnSchedule.time}
                                            onChange={(e) => handleInputChange('returnSchedule', 'time', e.target.value)}
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                                        >
                                            <option value="">Select a time slot</option>
                                            <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                                            <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                                            <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Medications to Return
                                        </label>
                                        <textarea
                                            placeholder="List the medications you want to return and their quantities"
                                            value={formData.returnSchedule.medications}
                                            onChange={(e) => handleInputChange('returnSchedule', 'medications', e.target.value)}
                                            rows={3}
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 resize-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Pharmacy Information */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <HiOutlineClipboardList className="w-6 h-6 mr-3 text-pink-600" />
                                Pharmacy Information
                            </h3>

                            {/* Popular Pharmacies Quick Select */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-3">Popular Pharmacies</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {popularPharmacies.map((pharmacy, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => {
                                                handleInputChange('pharmacy', 'name', pharmacy.name);
                                                handleInputChange('pharmacy', 'address', pharmacy.address);
                                            }}
                                            className="p-3 text-left border border-gray-200 rounded-lg hover:border-pink-300 hover:bg-pink-50 transition-all text-sm"
                                        >
                                            <div className="font-semibold text-gray-900">{pharmacy.name}</div>
                                            <div className="text-gray-600 text-xs">{pharmacy.address}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Pharmacy Name *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter pharmacy name"
                                        value={formData.pharmacy.name}
                                        onChange={(e) => handleInputChange('pharmacy', 'name', e.target.value)}
                                        className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 ${errors['pharmacy.name'] ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    />
                                    {errors['pharmacy.name'] && (
                                        <p className="text-red-500 text-sm mt-1">{errors['pharmacy.name']}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Pharmacy Phone Number (Optional)
                                    </label>
                                    <div className="relative">
                                        <HiOutlinePhone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <input
                                            type="tel"
                                            placeholder="+44 20 1234 5678"
                                            value={formData.pharmacy.phoneNumber}
                                            onChange={(e) => handleInputChange('pharmacy', 'phoneNumber', e.target.value)}
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                                        />
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Pharmacy Address
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter full pharmacy address"
                                        value={formData.pharmacy.address}
                                        onChange={(e) => handleInputChange('pharmacy', 'address', e.target.value)}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Prescription Reference (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Reference number if available"
                                        value={formData.pharmacy.prescriptionRef}
                                        onChange={(e) => handleInputChange('pharmacy', 'prescriptionRef', e.target.value)}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* File Upload Section */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <HiOutlineUpload className="w-6 h-6 mr-3 text-pink-600" />
                                Upload Prescription Images
                            </h3>

                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-pink-400 transition-colors">
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*,.pdf"
                                    onChange={(e) => handleFileUpload(e.target.files)}
                                    className="hidden"
                                    id="prescription-upload"
                                />
                                <label htmlFor="prescription-upload" className="cursor-pointer">
                                    <HiOutlineUpload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                    <p className="text-lg font-semibold text-gray-700 mb-2">
                                        Click to upload prescription images
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Supports: JPG, PNG, PDF (Max 10MB each)
                                    </p>
                                </label>
                            </div>

                            {/* Uploaded Files Display */}
                            {formData.prescriptionFiles.length > 0 && (
                                <div className="mt-6">
                                    <h4 className="font-semibold text-gray-900 mb-4">Uploaded Files:</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {formData.prescriptionFiles.map((file, index) => (
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
                                                    className="text-red-500 hover:text-red-700 transition-colors"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-end">
                            <SecondaryButton size="lg" className="px-8">
                                Save as Draft
                            </SecondaryButton>
                            <PrimaryButton
                                size="lg"
                                className="px-8"
                                loading={isSubmitting}
                                onClick={handleSubmit}
                            >
                                {activeTab === 'delivery' ? 'Request Delivery' : 'Schedule Return'}
                            </PrimaryButton>
                        </div>
                    </div>
                </div>

                {/* Information Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h4 className="font-bold text-gray-900 mb-3">Secure & Compliant</h4>
                        <p className="text-gray-600 text-sm">
                            All services are GPhC registered and fully compliant with UK medicines regulations.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h4 className="font-bold text-gray-900 mb-3">Professional Service</h4>
                        <p className="text-gray-600 text-sm">
                            Trained healthcare professionals handle your medications with the utmost care.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h4 className="font-bold text-gray-900 mb-3">24/7 Support</h4>
                        <p className="text-gray-600 text-sm">
                            Our support team is available around the clock for any questions or concerns.
                        </p>
                    </div>
                </div>
            </div>

            {/* Consent Modal */}
            <ConsentModal
                isOpen={showConsentModal}
                onClose={() => setShowConsentModal(false)}
                onSubmit={handleConsentSubmit}
            />
        </div>
    );
};

export default PrescriptionsPage;