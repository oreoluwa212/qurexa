import React from 'react';
import { HiOutlineClipboardList, HiOutlinePhone } from 'react-icons/hi';

const PharmacySection = ({ pharmacy, errors, onChange }) => {
    const popularPharmacies = [
        { name: 'Boots Pharmacy', address: 'High Street, London' },
        { name: 'Lloyds Pharmacy', address: 'Main Road, Manchester' },
        { name: 'Superdrug Pharmacy', address: 'City Centre, Birmingham' },
        { name: 'Well Pharmacy', address: 'Market Square, Leeds' },
        { name: 'Tesco Pharmacy', address: 'Shopping Centre, Bristol' },
        { name: 'ASDA Pharmacy', address: 'Retail Park, Newcastle' }
    ];

    return (
        <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <HiOutlineClipboardList className="w-6 h-6 mr-3 text-pink-600" />
                Pharmacy Information
            </h3>

            {/* Popular Pharmacies Quick Select */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Popular Pharmacies</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {popularPharmacies.map((pharmacyOption, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => {
                                onChange('pharmacy', 'name', pharmacyOption.name);
                                onChange('pharmacy', 'address', pharmacyOption.address);
                            }}
                            className="p-3 text-left border border-gray-200 rounded-lg hover:border-pink-300 hover:bg-pink-50 transition-all text-sm"
                        >
                            <div className="font-semibold text-gray-900">{pharmacyOption.name}</div>
                            <div className="text-gray-600 text-xs">{pharmacyOption.address}</div>
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
                        value={pharmacy.name}
                        onChange={(e) => onChange('pharmacy', 'name', e.target.value)}
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
                            value={pharmacy.phoneNumber}
                            onChange={(e) => onChange('pharmacy', 'phoneNumber', e.target.value)}
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
                        value={pharmacy.address}
                        onChange={(e) => onChange('pharmacy', 'address', e.target.value)}
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
                        value={pharmacy.prescriptionRef}
                        onChange={(e) => onChange('pharmacy', 'prescriptionRef', e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default PharmacySection;