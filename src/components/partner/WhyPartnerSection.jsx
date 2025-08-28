import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
        <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
            <div className="text-white text-2xl">{icon}</div>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
);

const WhyPartnerSection = () => {
    const features = [
        {
            icon: "🚚",
            title: "Same-Day Delivery",
            description: "We deliver prescriptions, groceries, no health kits on the same day with Lancashire + 20% on no delays"
        },
        {
            icon: "🛡️",
            title: "NHS-Compliant Workflows",
            description: "Our process aligns with NHS guidelines on consent, patient confidentiality, and medication handling"
        },
        {
            icon: "📱",
            title: "Full Tracking & Proof",
            description: "Real-time tracking, delivery confirmation, and secure handoff every time."
        },
        {
            icon: "⚙️",
            title: "Simple Setup",
            description: "No tech skills needed - log in via portal, upload request, no track deliveries instantly."
        },
        {
            icon: "💰",
            title: "Referral Discounts",
            description: "Get rewarded for every successful patient or client referral through our partner scheme."
        },
        {
            icon: "🏍️",
            title: "Trained Medical Riders",
            description: "Riders are trained to handle prescriptions, health supplies, and visitors with care and discretion."
        },
        {
            icon: "📊",
            title: "Rider + Vendor Dashboards",
            description: "Each partner gets their own dashboard to monitor deliveries, earnings, and requests."
        },
        {
            icon: "💊",
            title: "Medication Return Support",
            description: "We help retrieve unused or expired medication safely from patients' homes."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Why Partner With Us
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyPartnerSection;