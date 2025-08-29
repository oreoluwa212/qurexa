const InfoCards = () => {
    const cards = [
        {
            title: "Secure & Compliant",
            description: "All services are GPhC registered and fully compliant with UK medicines regulations."
        },
        {
            title: "Professional Service",
            description: "Trained healthcare professionals handle your medications with the utmost care."
        },
        {
            title: "24/7 Support",
            description: "Our support team is available around the clock for any questions or concerns."
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {cards.map((card, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="font-bold text-gray-900 mb-3">{card.title}</h4>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default InfoCards;