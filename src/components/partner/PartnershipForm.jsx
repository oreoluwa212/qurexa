import { useState } from 'react';

const PartnershipForm = () => {
    const [formData, setFormData] = useState({
        businessName: '',
        email: '',
        phoneNumber: '',
        partnerType: '',
        monthlyVolume: '',
        integrationMethod: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const partnerTypes = [
        'Pharmacy',
        'GP Practice',
        'Dentist',
        'Podiatrist',
        'Sexual Health Clinic',
        'Care Home',
        'Hospital',
        'Other'
    ];

    const integrationMethods = [
        'Web/CSV/API/Scheduled Pickups',
        'Web Portal Only',
        'CSV Upload Only',
        'API Integration',
        'Scheduled Pickups Only'
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="p-8 md:p-12">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Ready to Partner with Qurexa?
                                </h2>
                                <p className="text-gray-600 text-lg">
                                    From clinics to care homes, from parcels to prescriptions — Qurexa is your delivery ally.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Business / Clinic / Rider Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="businessName"
                                            name="businessName"
                                            required
                                            placeholder="Enter your full name"
                                            value={formData.businessName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            placeholder="you@email.com"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            required
                                            placeholder="+44 7xxx xxx xxx"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="partnerType" className="block text-sm font-medium text-gray-700 mb-2">
                                            Partner Type <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            id="partnerType"
                                            name="partnerType"
                                            required
                                            value={formData.partnerType}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 bg-white"
                                        >
                                            <option value="">Select Partner Type</option>
                                            {partnerTypes.map((type, index) => (
                                                <option key={index} value={type}>
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="monthlyVolume" className="block text-sm font-medium text-gray-700 mb-2">
                                            Approximate Monthly Volume <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="monthlyVolume"
                                            name="monthlyVolume"
                                            required
                                            placeholder="50-100"
                                            value={formData.monthlyVolume}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="integrationMethod" className="block text-sm font-medium text-gray-700 mb-2">
                                            Preferred Integration Method <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            id="integrationMethod"
                                            name="integrationMethod"
                                            required
                                            value={formData.integrationMethod}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 bg-white"
                                        >
                                            <option value="">Web/CSV/API/Scheduled Pickups</option>
                                            {integrationMethods.map((method, index) => (
                                                <option key={index} value={method}>
                                                    {method}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-8 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                    >
                                        Become a Partner
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnershipForm;