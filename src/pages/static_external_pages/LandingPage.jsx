import React, { useState, useEffect } from "react";
import Header from "../../components/common/Header";
import HeroSection from "../../components/common/HeroSection";
import FeaturesSection from "../../components/common/FeaturesSection";
import HowItWorksSection from "../../components/common/HowItWorksSection";
import ConsentModal from "../../components/common/ConsentModal";
import ComplianceSection from "../../components/common/ComplianceSection";
import FAQSection from "../../components/common/FAQSection";
import ContactSection from "../../components/common/ContactSection";
import Footer from "../../components/common/Footer";

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

  // Auto-cycle through steps
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
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ComplianceSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      {isConsentModalOpen && <ConsentModal />}
    </div>
  );
};

export default LandingPage;
