import {
    HiOutlineUser,
    HiOutlinePhone,
    HiOutlineMail,
    HiOutlineIdentification
} from 'react-icons/hi';

const PatientInfoSection = ({ formData, errors, onChange }) => {
    return (
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
                        value={formData.firstName}
                        onChange={(e) => onChange('patientInfo', 'firstName', e.target.value)}
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
                        value={formData.lastName}
                        onChange={(e) => onChange('patientInfo', 'lastName', e.target.value)}
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
                        value={formData.dateOfBirth}
                        onChange={(e) => onChange('patientInfo', 'dateOfBirth', e.target.value)}
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
                            value={formData.nhsNumber}
                            onChange={(e) => onChange('patientInfo', 'nhsNumber', e.target.value)}
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
                            value={formData.phoneNumber}
                            onChange={(e) => onChange('patientInfo', 'phoneNumber', e.target.value)}
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
                            value={formData.email}
                            onChange={(e) => onChange('patientInfo', 'email', e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientInfoSection;