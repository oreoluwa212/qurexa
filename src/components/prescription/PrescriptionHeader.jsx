import React from 'react';
import { HiOutlineShieldCheck, HiOutlineClock } from 'react-icons/hi';

const PrescriptionHeader = () => {
    return (
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
    );
};

export default PrescriptionHeader;