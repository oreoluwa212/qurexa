import { Button } from '../../components/common/UI/Button';
import { Input } from '../../components/common/UI/Input';
import { HiOutlineUpload, HiOutlineCheckCircle } from 'react-icons/hi';
import { FaStethoscope, FaLink } from 'react-icons/fa';
import FAQSection from '../../components/landing/FAQ/FAQSection';
import { useState } from 'react';

const PrescriptionPage = () => {
    const [activeTab, setActiveTab] = useState('delivery');
    const [uploadedFile, setUploadedFile] = useState(null);
    const [consentChecked, setConsentChecked] = useState(false);

    // Form states for Delivery Request
    const [deliveryForm, setDeliveryForm] = useState({
        fullName: '',
        dateOfBirth: '',
        phoneNumber: '',
        nhsNumber: '',
        streetAddress: '',
        city: '',
        postcode: '',
        deliveryTime: '',
        pharmacyName: '',
        pharmacyAddress: '',
        additionalNotes: ''
    });

    // Form states for Return Service
    const [returnForm, setReturnForm] = useState({
        fullName: '',
        phoneNumber: '',
        reason: '',
        streetAddress: '',
        city: '',
        postcode: '',
        deliveryTime: '',
        additionalNotes: ''
    });

    const handleDeliveryFormChange = (field, value) => {
        setDeliveryForm(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleReturnFormChange = (field, value) => {
        setReturnForm(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFile(file);
        }
    };

    const handleSubmit = (type) => {
        console.log(`Submitting ${type} form:`, type === 'delivery' ? deliveryForm : returnForm);
        // Handle form submission logic here
    };

    return (
        <>
            <div className="min-h-screen pt-20">
                {/* Header Section */}
                <div className="bg-white shadow-sm">
                    <div className="max-w-4xl mx-auto px-4 py-8">
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                <FaStethoscope className="text-white text-xl" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Prescription Services</h1>
                                <p className="text-gray-600">Fast, secure prescription delivery and medication return services</p>
                            </div>
                        </div>

                        {/* Service Tags */}
                        <div className="flex justify-center gap-4 mb-8">
                            <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium flex items-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Same-day delivery
                            </span>
                            <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium flex items-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                NHS approved
                            </span>
                            <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium flex items-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                Secure handling
                            </span>
                        </div>

                        {/* Navigation Tabs */}
                        <div className="flex justify-center gap-8 mb-8">
                            <button
                                onClick={() => setActiveTab('delivery')}
                                className={`pb-2 font-medium transition-colors flex items-center gap-2 ${activeTab === 'delivery'
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                <FaStethoscope className="w-4 h-4" /> Request Delivery
                            </button>
                            <button
                                onClick={() => setActiveTab('return')}
                                className={`pb-2 font-medium transition-colors flex items-center gap-2 ${activeTab === 'return'
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                <FaLink className="w-4 h-4" /> Return Medicine
                            </button>
                        </div>
                    </div>
                </div>

                {/* Forms Section */}
                <div className="max-w-4xl mx-auto px-4 py-8">
                    {activeTab === 'delivery' ? (
                        /* Prescription Delivery Request Form */
                        <div className="bg-sky-100 rounded-3xl shadow-sm border p-8">
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                    <FaStethoscope className="w-5 h-5" /> Prescription Delivery Request
                                </h2>
                                <p className="text-gray-600">
                                    Fill out the form below to request prescription delivery
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Personal Information */}
                                <div className="rounded-3xl">
                                    <Input
                                        label="Full Name"
                                        placeholder="John Doe (Full name)"
                                        value={deliveryForm.fullName}
                                        onChange={(value) => handleDeliveryFormChange('fullName', value)}
                                        required
                                        className="border-gray-200"
                                    />
                                </div>

                                <div className=" rounded-3xl ">
                                    <Input
                                        label="Date of Birth"
                                        placeholder="dd/mm/yyyy"
                                        value={deliveryForm.dateOfBirth}
                                        onChange={(value) => handleDeliveryFormChange('dateOfBirth', value)}
                                        required
                                        className="border-gray-200"
                                    />
                                </div>

                                <div className=" rounded-3xl ">
                                    <Input
                                        label="Phone Number"
                                        placeholder="+44 123 456 789"
                                        value={deliveryForm.phoneNumber}
                                        onChange={(value) => handleDeliveryFormChange('phoneNumber', value)}
                                        required
                                        className="border-gray-200"
                                    />
                                </div>

                                <div className=" rounded-3xl ">
                                    <Input
                                        label="NHS Number (Optional)"
                                        placeholder="123 456 7890"
                                        value={deliveryForm.nhsNumber}
                                        onChange={(value) => handleDeliveryFormChange('nhsNumber', value)}
                                        className="border-gray-200"
                                    />
                                </div>
                            </div>

                            {/* Delivery Address Section */}
                            <div className="mt-8">
                                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                                    <span>📍</span> Delivery Address
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2  rounded-3xl ">
                                        <Input
                                            label="Street Address"
                                            placeholder="123 Main Street"
                                            value={deliveryForm.streetAddress}
                                            onChange={(value) => handleDeliveryFormChange('streetAddress', value)}
                                            required
                                            className="border-gray-200"
                                        />
                                    </div>

                                    <div className=" rounded-3xl ">
                                        <Input
                                            label="City"
                                            placeholder="London"
                                            value={deliveryForm.city}
                                            onChange={(value) => handleDeliveryFormChange('city', value)}
                                            required
                                            className="border-gray-200"
                                        />
                                    </div>

                                    <div className=" rounded-3xl ">
                                        <Input
                                            label="Postcode"
                                            placeholder="SW1A 1AA"
                                            value={deliveryForm.postcode}
                                            onChange={(value) => handleDeliveryFormChange('postcode', value)}
                                            required
                                            className="border-gray-200"
                                        />
                                    </div>

                                    <div className="md:col-span-2  rounded-3xl ">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Preferred Delivery Time <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            value={deliveryForm.deliveryTime}
                                            onChange={(e) => handleDeliveryFormChange('deliveryTime', e.target.value)}
                                            className="w-full h-10 px-4 py-2.5 border border-gray-200 rounded-3xl focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 "
                                            required
                                        >
                                            <option value="">Select time slot</option>
                                            <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                                            <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                                            <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                                            <option value="anytime">Anytime</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Pharmacy Information */}
                            <div className="mt-8">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Pharmacy Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className=" rounded-3xl ">
                                        <Input
                                            label="Pharmacy Name"
                                            placeholder="Your Local Pharmacy"
                                            value={deliveryForm.pharmacyName}
                                            onChange={(value) => handleDeliveryFormChange('pharmacyName', value)}
                                            className="border-gray-200"
                                        />
                                    </div>

                                    <div className=" rounded-3xl ">
                                        <Input
                                            label="Pharmacy Address"
                                            placeholder="Pharmacy street address"
                                            value={deliveryForm.pharmacyAddress}
                                            onChange={(value) => handleDeliveryFormChange('pharmacyAddress', value)}
                                            className="border-gray-200"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Upload Prescription */}
                            <div className="mt-8">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Upload Prescription (Optional)</h3>
                                <div className="bg-white rounded-3xl p-4">
                                    <div className="border-2 border-dashed border-gray-200 rounded-3xl p-8 text-center hover:border-gray-400 transition-colors">
                                        {uploadedFile ? (
                                            <div className="flex items-center justify-center">
                                                <HiOutlineCheckCircle className="w-8 h-8 text-green-500 mr-2" />
                                                <span className="text-gray-700">File uploaded: {uploadedFile.name}</span>
                                            </div>
                                        ) : (
                                            <>
                                                <HiOutlineUpload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                                <p className="text-gray-600 mb-2">Drop prescription image here or click to upload</p>
                                                <input
                                                    type="file"
                                                    accept="image/*,.pdf"
                                                    onChange={handleFileUpload}
                                                    className="hidden"
                                                    id="file-upload-delivery"
                                                />
                                                <label
                                                    htmlFor="file-upload-delivery"
                                                    className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-3xl text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                                                >
                                                    Choose File
                                                </label>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Consent Checkbox */}
                            <div className="mt-8  rounded-3xl ">
                                <label className="flex items-start">
                                    <input
                                        type="checkbox"
                                        checked={consentChecked}
                                        onChange={(e) => setConsentChecked(e.target.checked)}
                                        className="mt-1 mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <span className="text-sm text-gray-700">
                                        I authorize Quickee to collect my prescription on my behalf.
                                        This allows our team to collect your prescription from the pharmacy.
                                    </span>
                                </label>
                            </div>

                            {/* Additional Notes */}
                            <div className="mt-6 rounded-3xl ">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Additional Notes
                                </label>
                                <textarea
                                    value={deliveryForm.additionalNotes}
                                    onChange={(e) => handleDeliveryFormChange('additionalNotes', e.target.value)}
                                    placeholder="Any special instructions or requirements..."
                                    rows="4"
                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-3xl focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8">
                                <Button
                                    fullWidth
                                    variant="info"
                                    size="lg"
                                    onClick={() => handleSubmit('delivery')}
                                    disabled={!consentChecked}
                                    className="rounded-3xl"
                                >
                                    Request Delivery
                                </Button>
                            </div>
                        </div>
                    ) : (
                        /* Medication Return Service Form */
                        <div className="bg-sky-100 rounded-3xl shadow-sm border p-8">
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                    <FaLink className="w-5 h-5" /> Medication Return Service
                                </h2>
                                <p className="text-gray-600">
                                    Safe disposal of unused, expired, or unwanted medications
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Personal Information */}
                                <div className=" rounded-3xl ">
                                    <Input
                                        label="Full Name"
                                        placeholder="Enter your full name"
                                        value={returnForm.fullName}
                                        onChange={(value) => handleReturnFormChange('fullName', value)}
                                        required
                                        className="border-gray-200"
                                    />
                                </div>

                                <div className=" rounded-3xl ">
                                    <Input
                                        label="Phone Number"
                                        placeholder="Enter your phone number"
                                        value={returnForm.phoneNumber}
                                        onChange={(value) => handleReturnFormChange('phoneNumber', value)}
                                        required
                                        className="border-gray-200"
                                    />
                                </div>

                                <div className="md:col-span-2  rounded-3xl ">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Reason for Return <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        value={returnForm.reason}
                                        onChange={(e) => handleReturnFormChange('reason', e.target.value)}
                                        className="w-full h-10 px-4 py-2.5 border border-gray-200 rounded-3xl focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 bg-white"
                                        required
                                    >
                                        <option value="">Select Reason</option>
                                        <option value="expired">Expired medication</option>
                                        <option value="unused">Unused medication</option>
                                        <option value="changed">Prescription changed</option>
                                        <option value="side-effects">Side effects</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Pickup Address Section */}
                            <div className="mt-8">
                                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                                    <span>📍</span> Pickup Address
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2  rounded-3xl ">
                                        <Input
                                            label="Street Address"
                                            placeholder="123 Main Street"
                                            value={returnForm.streetAddress}
                                            onChange={(value) => handleReturnFormChange('streetAddress', value)}
                                            required
                                            className="border-gray-200"
                                        />
                                    </div>

                                    <div className=" rounded-3xl ">
                                        <Input
                                            label="City"
                                            placeholder="London"
                                            value={returnForm.city}
                                            onChange={(value) => handleReturnFormChange('city', value)}
                                            required
                                            className="border-gray-200"
                                        />
                                    </div>

                                    <div className=" rounded-3xl ">
                                        <Input
                                            label="Postcode"
                                            placeholder="SW1A 1AA"
                                            value={returnForm.postcode}
                                            onChange={(value) => handleReturnFormChange('postcode', value)}
                                            required
                                            className="border-gray-200"
                                        />
                                    </div>

                                    <div className="md:col-span-2  rounded-3xl ">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Preferred Delivery Time <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            value={returnForm.deliveryTime}
                                            onChange={(e) => handleReturnFormChange('deliveryTime', e.target.value)}
                                            className="w-full h-10 px-4 py-2.5 border border-gray-200 rounded-3xl focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 bg-white"
                                            required
                                        >
                                            <option value="">Select time slot</option>
                                            <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                                            <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                                            <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                                            <option value="anytime">Anytime</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Notes */}
                            <div className="mt-8  rounded-3xl ">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Additional Notes
                                </label>
                                <textarea
                                    value={returnForm.additionalNotes}
                                    onChange={(e) => handleReturnFormChange('additionalNotes', e.target.value)}
                                    placeholder="Any special instructions or requirements..."
                                    rows="4"
                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-3xl focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8">
                                <Button
                                    fullWidth
                                    variant="info"
                                    size="lg"
                                    onClick={() => handleSubmit('return')}
                                    className="rounded-3xl"
                                >
                                    Request Delivery
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* FAQ Section */}
            <FAQSection />
        </>
    );
};

export default PrescriptionPage;