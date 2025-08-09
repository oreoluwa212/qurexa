import React from "react";
import LandingHeader from "../landing/Header/LandingHeader";
import Footer from "../common/Footer/Footer";

const LandingLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-white">
            <LandingHeader />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default LandingLayout;