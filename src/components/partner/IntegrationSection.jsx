const IntegrationCard = ({ icon, title, description, bgColor }) => (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
        <div className={`w-20 h-20 ${bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
            <div className="text-white text-3xl">{icon}</div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{title}</h3>
        <p className="text-gray-600 text-center leading-relaxed">{description}</p>
    </div>
);

const IntegrationSection = () => {
    const integrations = [
        {
            icon: "🌐",
            title: "Web Portal",
            description: "Schedule, track, and confirm deliveries with no tech setup",
            bgColor: "bg-gradient-to-r from-blue-500 to-cyan-600"
        },
        {
            icon: "📄",
            title: "CSV Upload",
            description: "Send bulk requests via spreadsheet (perfect for care homes)",
            bgColor: "bg-gradient-to-r from-green-500 to-teal-600"
        },
        {
            icon: "🔌",
            title: "API Access",
            description: "Automate delivery booking directly from your system",
            bgColor: "bg-gradient-to-r from-purple-500 to-indigo-600"
        },
        {
            icon: "📅",
            title: "Scheduled Pickups",
            description: "Set daily/weekly logistics flow with our team",
            bgColor: "bg-gradient-to-r from-orange-500 to-red-600"
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
                            bgColor={integration.bgColor}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IntegrationSection;