import {
    sameDayIcon,
    nhsIcon,
    trackingIcon,
    setupIcon,
    referralIcon,
    ridersIcon,
    dashboardIcon,
    medicationIcon
} from '../../assets';

const FeatureCard = ({ icon, title, description }) => (
    <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:bg-white/70 transition-all duration-300">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
            <img src={icon} alt={title} className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
);

const WhyPartnerSection = () => {
    const features = [
        {
            icon: sameDayIcon,
            title: "Same-Day Delivery",
            description: "We deliver prescriptions, groceries, no health kits on the same day with Lancashire + 20% on no delays"
        },
        {
            icon: nhsIcon,
            title: "NHS-Compliant Workflows",
            description: "Our process aligns with NHS guidelines on consent, patient confidentiality, and medication handling"
        },
        {
            icon: trackingIcon,
            title: "Full Tracking & Proof",
            description: "Real-time tracking, delivery confirmation, and secure handoff every time."
        },
        {
            icon: setupIcon,
            title: "Simple Setup",
            description: "No tech skills needed - log in via portal, upload request, no track deliveries instantly."
        },
        {
            icon: referralIcon,
            title: "Referral Discounts",
            description: "Get rewarded for every successful patient or client referral through our partner scheme."
        },
        {
            icon: ridersIcon,
            title: "Trained Medical Riders",
            description: "Riders are trained to handle prescriptions, health supplies, and visitors with care and discretion."
        },
        {
            icon: dashboardIcon,
            title: "Rider + Vendor Dashboards",
            description: "Each partner gets their own dashboard to monitor deliveries, earnings, and requests."
        },
        {
            icon: medicationIcon,
            title: "Medication Return Support",
            description: "We help retrieve unused or expired medication safely from patients' homes."
        }
    ];

    return (
        <section className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
            <div className="relative z-10">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-block p-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Why Partner With Us
                            </h2>
                        </div>
                    </div>

                    {/* Features Grid */}
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
            </div>
        </section>
    );
};

export default WhyPartnerSection;
