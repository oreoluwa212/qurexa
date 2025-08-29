import PartnerHeader from "../common/Header/PartnerHeader";
import Footer from "../common/Footer/Footer";

const PartnerLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-white">
            <PartnerHeader />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default PartnerLayout;