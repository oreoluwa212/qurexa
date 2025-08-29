import { useState } from 'react';
import GroceryHeroSection from '../../components/grocery/GroceryHeroSection';
import ServiceTypeTabs from '../../components/grocery/ServiceTypeTabs';
import CustomerInfoSection from '../../components/grocery/CustomerInfoSection';
import StoreInfoSection from '../../components/grocery/StoreInfoSection';
import UploadSection from '../../components/grocery/UploadSection';
import DeliveryAddressSection from '../../components/grocery/DeliveryAddressSection';
import SubmitSection from '../../components/grocery/SubmitSection';
import ComingSoonSection from '../../components/grocery/ComingSoonSection';

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

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <GroceryHeroSection />

                <div className="bg-white rounded-2xl shadow-lg pb-10 mb-8 overflow-hidden">
                    <ServiceTypeTabs activeTab={activeTab} setActiveTab={setActiveTab} />

                    <div className="px-8">
                        <CustomerInfoSection
                            formData={formData}
                            handleInputChange={handleInputChange}
                            errors={errors}
                        />

                        <StoreInfoSection
                            formData={formData}
                            handleInputChange={handleInputChange}
                            errors={errors}
                        />

                        <UploadSection
                            formData={formData}
                            handleFileUpload={handleFileUpload}
                            removeFile={removeFile}
                        />

                        {activeTab === 'delivery' && (
                            <DeliveryAddressSection
                                formData={formData}
                                handleInputChange={handleInputChange}
                                errors={errors}
                            />
                        )}

                        <SubmitSection handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
                    </div>
                </div>

                <ComingSoonSection />
            </div>
        </div>
    );
};

export default GroceryPage;