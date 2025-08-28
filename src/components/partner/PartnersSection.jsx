import React from 'react';

const PartnerIcon = ({ icon, label }) => (
    <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-all duration-300 transform hover:scale-105 group">
        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <span className="text-gray-700 font-medium text-center text-sm">{label}</span>
    </div>
);

const PartnersSection = () => {
    const partners = [
        { icon: "💊", label: "Pharmacies" },
        { icon: "🏥", label: "GP Practices" },
        { icon: "🦷", label: "Dentists" },
        { icon: "🦶", label: "Podiatrists" },
        { icon: "🩺", label: "Sexual Health Clinics" },
        { icon: "🏠", label: "Care Homes" },
        { icon: "🏥", label: "Hospitals" }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 max-w-4xl mx-auto">
                        We partner with a wide range of professionals and organisations:
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex-shrink-0">
                            <PartnerIcon
                                icon={partner.icon}
                                label={partner.label}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;