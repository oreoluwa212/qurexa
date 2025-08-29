import {
    pharmacyIcon,
    gpIcon,
    dentistIcon,
    podiatristIcon,
    sexualHealthIcon,
    careHomeIcon,
    hospitalIcon
} from '../../assets';

const PartnerIcon = ({ icon, label }) => (
    <div className="flex items-center gap-3 whitespace-nowrap px-6">
        <div className="w-8 h-8 flex-shrink-0">
            <img
                src={icon}
                alt={label}
                className="w-full h-full object-contain"
            />
        </div>
        <span className="text-gray-700 font-medium text-base">
            {label}
        </span>
    </div>
);

const PartnersSection = () => {
    const partners = [
        { icon: pharmacyIcon, label: "Pharmacies" },
        { icon: gpIcon, label: "GP Practices" },
        { icon: dentistIcon, label: "Dentists" },
        { icon: podiatristIcon, label: "Podiatrists" },
        { icon: sexualHealthIcon, label: "Sexual Health Clinics" },
        { icon: careHomeIcon, label: "Care Homes" },
        { icon: hospitalIcon, label: "Hospitals" }
    ];

    const duplicatedPartners = [...partners, ...partners];

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="px-4 w-full">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        We partner with a wide range of professionals and organisations:
                    </h2>
                </div>

                <div className="relative">
                    <div className="flex overflow-hidden">
                        <div className="flex animate-scroll">
                            {duplicatedPartners.map((partner, index) => (
                                <PartnerIcon
                                    key={index}
                                    icon={partner.icon}
                                    label={partner.label}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;