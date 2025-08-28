import HeroSection from "../../components/partner/HeroSection";
import IntegrationSection from "../../components/partner/IntegrationSection";
import PartnershipForm from "../../components/partner/PartnershipForm";
import PartnersSection from "../../components/partner/PartnersSection";
import WhyPartnerSection from "../../components/partner/WhyPartnerSection";

const PartnerWithUsPage = () => {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <PartnersSection />
            <WhyPartnerSection />
            <IntegrationSection />
            <PartnershipForm />
        </div>
    );
};

export default PartnerWithUsPage;