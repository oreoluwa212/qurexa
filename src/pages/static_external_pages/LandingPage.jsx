import { useState, useEffect } from "react";
import HeroSection from "../../components/landing/Hero/HeroSection";
import FeaturesSection from "../../components/landing/Features/FeaturesSection";
import HowItWorksSection from "../../components/landing/HowItWorks/HowItWorksSection";
import ConsentModal from "../../components/landing/Modals/ConsentModal";
import ComplianceSection from "../../components/landing/Compliance/ComplianceSection";
import FAQSection from "../../components/landing/FAQ/FAQSection";
import ContactSection from "../../components/landing/Contact/ContactSection";
import LandingLayout from "../../components/layout/LandingLayout";

const LandingPage = () => {
  const [isConsentModalOpen, setIsConsentModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [consentChecks, setConsentChecks] = useState({
    consent1: false,
    consent2: false,
    consent3: false,
    consent4: false,
  });
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleConsentChange = (key) => {
    setConsentChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <LandingLayout>
      <HeroSection />
      <div className="space-y-8">
        <FeaturesSection />
        <HowItWorksSection />
        <ComplianceSection />
        <FAQSection />
        <ContactSection />
      </div>
      {isConsentModalOpen && <ConsentModal />}
    </LandingLayout>
  );
};

export default LandingPage;