import React from "react";
import DefaultHeader from "../common/Header/DefaultHeader";
import Footer from "../common/Footer/Footer";

const DefaultLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-white">
            <DefaultHeader />
            <main className="flex-1 pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default DefaultLayout;