import { useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../../components/common/UI/Button';
import ConsentModal from '../../components/landing/Modals/ConsentModal';
import PrescriptionHeader from '../../components/prescription/PrescriptionHeader';
import PrescriptionServiceTabs from '../../components/prescription/ServiceTabs';
import PatientInfoSection from '../../components/prescription/PatientInfoSection';
import DeliverySection from '../../components/prescription/DeliverySection';
import ReturnSection from '../../components/prescription/ReturnSection';
import PharmacySection from '../../components/prescription/PharmacySection';
import FileUploadSection from '../../components/prescription/FileUploadSection';
import InfoCards from '../../components/prescription/InfoCards';

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
            specialInstructions: '',
            controlledDrug: false,
            coldChain: false,
            bulkQuantity: false
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
            medications: '',
            hasControlledDrug: false
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
        }, 2000);
    };

    const handleConsentSubmit = () => {
        setConsentGiven(true);
        setShowConsentModal(false);
        handleSubmit();
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <PrescriptionHeader />

                <div className="bg-white rounded-2xl shadow-lg mb-8 overflow-hidden">
                    {/* Fixed: Pass activeTab and setActiveTab props */}
                    <PrescriptionServiceTabs activeTab={activeTab} setActiveTab={setActiveTab} />

                    <div className="p-8">
                        <p className="text-gray-600 mb-8 text-center">
                            Get your prescriptions delivered safely to your door or schedule returns for unused medications
                        </p>

                        <PatientInfoSection
                            formData={formData.patientInfo}
                            errors={errors}
                            onChange={handleInputChange}
                        />

                        {activeTab === 'delivery' && (
                            <DeliverySection
                                deliveryAddress={formData.deliveryAddress}
                                deliveryTime={formData.deliveryTime}
                                errors={errors}
                                onChange={handleInputChange}
                            />
                        )}

                        {activeTab === 'returns' && (
                            <ReturnSection
                                returnSchedule={formData.returnSchedule}
                                errors={errors}
                                onChange={handleInputChange}
                            />
                        )}

                        <PharmacySection
                            pharmacy={formData.pharmacy}
                            errors={errors}
                            onChange={handleInputChange}
                        />

                        <FileUploadSection
                            files={formData.prescriptionFiles}
                            onFileUpload={handleFileUpload}
                            onRemoveFile={removeFile}
                        />

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

                <InfoCards />
            </div>

            <ConsentModal
                isOpen={showConsentModal}
                onClose={() => setShowConsentModal(false)}
                onSubmit={handleConsentSubmit}
            />
        </div>
    );
};

export default PrescriptionsPage;