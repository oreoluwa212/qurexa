import React from 'react';
import { HiOutlineLocationMarker, HiOutlineRefresh } from 'react-icons/hi';

const ServiceTabs = ({ activeTab, setActiveTab }) => {
    return (
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
    );
};

export default ServiceTabs;