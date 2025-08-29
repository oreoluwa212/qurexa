import { partnerHeroImg } from '../../assets';

const HeroSection = () => {
    return (
        <section
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600"
            style={{
                backgroundImage: `url(${partnerHeroImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative z-10 px-4 md:px-8 h-screen flex items-center justify-center">
                <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] max-w-none">
                    <div
                        className="p-8 md:p-16 lg:p-20 xl:p-24 rounded-2xl md:rounded-3xl text-white w-full min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center border border-white/20"
                        style={{
                            backdropFilter: 'blur(25px)',
                            WebkitBackdropFilter: 'blur(25px)',
                            background: 'linear-gradient(90deg, rgba(72, 115, 237, 0.15) 0%, rgba(77, 71, 212, 0.15) 50%, rgba(203, 43, 125, 0.15) 100%)',
                            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                        }}
                    >
                        <div className="space-y-4 md:space-y-6 lg:space-y-8 text-center">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight px-2">
                                Partner With Qurexa
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/90 max-w-xl md:max-2xl lg:max-w-3xl mx-auto px-4">
                                Connecting Healthcare & Communities Through Trusted Delivery—
                                let's simplify delivery together.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-6 md:mt-8 lg:mt-10 px-2 sm:px-4">
                            <button className="px-4 sm:px-6 md:px-8 py-3 md:py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base whitespace-nowrap">
                                Become a Partner
                            </button>
                            <button className="px-4 sm:px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 text-sm md:text-base whitespace-nowrap">
                                Join as a Rider
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;