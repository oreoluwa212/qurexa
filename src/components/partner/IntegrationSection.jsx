import {
    webPortalIcon,
    csvUploadIcon,
    apiAccessIcon,
    scheduledPickupsIcon
} from '../../assets';

const IntegrationCard = ({ icon, title, description }) => (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 flex flex-col justify-between min-h-[262px]">
        <div className="flex flex-col items-center flex-grow">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #9333EA 100%)' }}>
                <img src={icon} alt={title} className="w-8 h-8 filter brightness-0 invert" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{title}</h3>
        </div>
        <p className="text-gray-600 text-center leading-relaxed">{description}</p>
    </div>
);

const IntegrationSection = () => {
    const integrations = [
        {
            icon: webPortalIcon,
            title: "Web Portal",
            description: "Schedule, track, and confirm deliveries with no tech setup"
        },
        {
            icon: csvUploadIcon,
            title: "CSV Upload",
            description: "Send bulk requests via spreadsheet (perfect for care homes)"
        },
        {
            icon: apiAccessIcon,
            title: "API Access",
            description: "Automate delivery booking directly from your system"
        },
        {
            icon: scheduledPickupsIcon,
            title: "Scheduled Pickups",
            description: "Set daily/weekly logistics flow with our team"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Integration Made Easy
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {integrations.map((integration, index) => (
                        <IntegrationCard
                            key={index}
                            icon={integration.icon}
                            title={integration.title}
                            description={integration.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IntegrationSection;