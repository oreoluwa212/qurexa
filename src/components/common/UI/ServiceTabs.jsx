const ServiceTabs = ({
    activeTab,
    setActiveTab,
    tabs,
    gradientColors = 'from-blue-500 to-blue-600',
    description,
    showDescription = true
}) => {
    return (
        <div className="">
            <div className="flex flex-row border-b">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 text-center font-semibold transition-all ${activeTab === tab.id
                                ? 'text-white'
                                : 'bg-white text-gray-600 hover:bg-gray-50'
                            }`}
                        style={
                            activeTab === tab.id
                                ? { background: `linear-gradient(to right, ${gradientColors.replace('from-', '').replace('to-', '').replace('-500', '').replace('-600', '')})` }
                                : {}
                        }
                    >
                        {tab.icon && (
                            <tab.icon className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-2" />
                        )}
                        <span className="text-sm sm:text-base">{tab.label}</span>
                    </button>
                ))}
            </div>

            {showDescription && description && (
                <div className="p-4 sm:p-6 lg:p-8">
                    <p className="text-gray-600 text-center text-sm sm:text-base">
                        {description}
                    </p>
                </div>
            )}
        </div>
    );
};

export default ServiceTabs;