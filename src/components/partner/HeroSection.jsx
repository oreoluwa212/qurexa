import React from 'react';
import { partnerHeroImg } from '../../assets';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 overflow-hidden pt-20">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-32 right-20 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-16 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-purple-300/25 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    {/* Left Content */}
                    <div className="text-white space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Partner With Qurexa
                            </h1>
                            <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-lg">
                                Connecting Healthcare & Communities Through Trusted Delivery—
                                let's simplify delivery together.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Become a Partner
                            </button>
                            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
                                Join as a Rider
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative z-10">
                            <img
                                src={partnerHeroImg}
                                alt="Healthcare professionals"
                                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                            />
                        </div>
                        {/* Image backdrop effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl transform translate-x-4 translate-y-4"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;