import React, { useState, useEffect } from "react";
import {
  FaTruck,
  FaHospital,
  FaShieldAlt,
  FaMobile,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaCheck,
  FaTimes,
  FaChevronDown,
  FaPlay,
  FaStar,
  FaClock,
  FaMapMarkerAlt,
  FaUserMd,
  FaLock,
  FaTemperatureHigh,
  FaHandshake,
  FaQuestionCircle,
  FaExclamationTriangle,
  FaFileContract,
  FaUserShield,
} from "react-icons/fa";
import {
  HiOutlineHeart,
  HiOutlineDocumentText,
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckBadge,
} from "react-icons/hi2";
import { logo } from "./assets";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConsentModalOpen, setIsConsentModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [consentChecks, setConsentChecks] = useState({
    consent1: false,
    consent2: false,
    consent3: false,
    consent4: false,
  });
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [activeFAQ, setActiveFAQ] = useState(null);

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

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message. We will respond within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const canSubmitConsent = Object.values(consentChecks).every(Boolean);

  const features = [
    {
      icon: FaTruck,
      title: "Safe Delivery",
      description:
        "Temperature-controlled transport for all medications, including cold-chain items. Fully insured and tracked deliveries.",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: FaHospital,
      title: "Pharmacy Partnership",
      description:
        "Working exclusively with GPhC registered pharmacies to ensure all medications meet professional standards.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: FaShieldAlt,
      title: "Secure & Compliant",
      description:
        "Full GDPR compliance, secure handling of controlled substances, and patient consent at every step.",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: FaMobile,
      title: "Easy Tracking",
      description:
        "Real-time delivery updates, SMS notifications, and 24/7 customer support for peace of mind.",
      color: "from-blue-600 to-cyan-500",
    },
  ];

  const steps = [
    {
      icon: HiOutlineDocumentText,
      title: "Consent & Request",
      description:
        "Provide your consent and prescription details through our secure platform.",
    },
    {
      icon: FaHandshake,
      title: "Pharmacy Coordination",
      description:
        "We coordinate with your registered pharmacy to prepare your medication safely.",
    },
    {
      icon: FaTruck,
      title: "Secure Delivery",
      description:
        "Your medication is delivered safely to your door with full tracking and insurance.",
    },
  ];

  const complianceItems = [
    {
      icon: HiOutlineCheckBadge,
      title: "Patient Consent",
      description:
        "All deliveries require explicit patient consent. We provide clear consent forms and maintain records in compliance with UK regulations.",
    },
    {
      icon: FaLock,
      title: "Data Protection",
      description:
        "Full compliance with UK GDPR and Data Protection Act 2018. Your personal and medical information is protected with enterprise-grade security.",
    },
    {
      icon: FaUserMd,
      title: "GPhC Standards",
      description:
        "All partner pharmacies are registered with the General Pharmaceutical Council, ensuring professional standards are maintained.",
    },
    {
      icon: FaShieldAlt,
      title: "Controlled Substances",
      description:
        "Special procedures for Schedule 2 & 3 controlled drugs including ID verification and written authorization as required by law.",
    },
    {
      icon: FaTemperatureHigh,
      title: "Safe Storage",
      description:
        "Temperature-controlled transport, insulated containers, and proper handling procedures for all medication types.",
    },
    {
      icon: HiOutlineChatBubbleBottomCenterText,
      title: "Professional Standards",
      description:
        "Qurexa complements but does not replace professional pharmacist consultation. Emergency medical advice should be sought from healthcare professionals.",
    },
  ];

  const faqItems = [
    {
      question: "What medications can be delivered?",
      answer:
        "We can deliver most prescription medications including regular medications, cold-chain items, and controlled substances (with additional verification). We cannot deliver emergency medications or items requiring immediate pharmacist consultation.",
    },
    {
      question: "How do you handle controlled drugs?",
      answer:
        "For Schedule 2 & 3 controlled drugs, we require additional ID verification, written authorization, and special secure transport procedures in compliance with UK regulations.",
    },
    {
      question: "What happens if I miss my delivery?",
      answer:
        "We'll attempt delivery twice and leave secure collection cards. You can reschedule through our app or contact support. Controlled substances require personal collection with ID verification.",
    },
    {
      question: "How do you ensure medication safety during transport?",
      answer:
        "We use temperature-controlled vehicles, insulated containers with monitoring, and trained drivers. All cold-chain medications are tracked throughout transport to ensure integrity.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, we're fully compliant with UK GDPR and Data Protection Act 2018. All data is encrypted, access is strictly controlled, and we maintain comprehensive audit trails.",
    },
    {
      question: "Do you work with my existing pharmacy?",
      answer:
        "Yes, we coordinate with your registered GPhC pharmacy. We don't replace your pharmacist relationship but provide secure delivery services with their cooperation.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrollY > 50
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
            : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div
                className={`relative p-2 rounded-full transition-all duration-300 ${
                  scrollY > 50
                    ? "bg-gradient-to-r from-blue-600 to-pink-600"
                    : "bg-white/20 backdrop-blur-sm"
                } group-hover:scale-110 group-hover:rotate-12`}
              >
                <img src="" alt="" />
                <HiOutlineHeart
                  className={`w-6 h-6 transition-all duration-300 ${
                    scrollY > 50 ? "text-white" : "text-white"
                  } group-hover:animate-pulse`}
                />
              </div>
              <div>
                <h1
                  className={`text-xl font-bold transition-colors duration-300 ${
                    scrollY > 50 ? "text-gray-900" : "text-white"
                  }`}
                >
                  Qurexa
                </h1>
                <p
                  className={`text-sm transition-colors duration-300 ${
                    scrollY > 50 ? "text-gray-600" : "text-white/80"
                  }`}
                >
                  Care. Delivered.
                </p>
              </div>
            </div>
            {/* <div className="flex items-center space-x-3 group cursor-pointer">
              <div
                className={`relative p-2 rounded-full transition-all duration-300 ${
                  scrollY > 50
                    ? "bg-gradient-to-r from-blue-600 to-pink-600"
                    : "bg-white/20 backdrop-blur-sm"
                } group-hover:scale-110 group-hover:rotate-12`}
              >
                <img
                  src={logo}
                  alt="Qurexa Logo"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div>
                <h1
                  className={`text-xl font-bold transition-colors duration-300 ${
                    scrollY > 50 ? "text-gray-900" : "text-white"
                  }`}
                >
                  Qurexa
                </h1>
                <p
                  className={`text-sm transition-colors duration-300 ${
                    scrollY > 50 ? "text-gray-600" : "text-white/80"
                  }`}
                >
                  Care. Delivered.
                </p>
              </div>
            </div> */}

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Services", "How It Works", "Compliance", "FAQ", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                      scrollY > 50
                        ? "text-gray-700 hover:text-blue-600"
                        : "text-white hover:text-blue-200"
                    }`}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                scrollY > 50
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/20"
              }`}
            >
              <div className="space-y-1">
                <div
                  className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-500 overflow-hidden ${
              isMenuOpen ? "max-h-64 pb-4" : "max-h-0"
            }`}
          >
            <nav className="flex flex-col space-y-3">
              {["Services", "How It Works", "Compliance", "FAQ", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                      scrollY > 50
                        ? "text-gray-700 hover:bg-gray-100"
                        : "text-white hover:bg-white/20 backdrop-blur-sm"
                    }`}
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${50 + Math.random() * 100}px`,
                height: `${50 + Math.random() * 100}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in-up">
            {/* Logo Animation */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>
                <div className="relative bg-white/20 backdrop-blur-sm p-6 rounded-full border border-white/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <HiOutlineHeart className="w-16 h-16 text-white animate-pulse" />
                </div>
              </div>
            </div>

            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Qurexa
            </h1>
            <p
              className="text-2xl md:text-3xl text-white/90 mb-6 font-light animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Care. Delivered.
            </p>
            <p
              className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              Safe, secure prescription delivery service working with registered
              UK pharmacies. Your medications delivered with care, compliance,
              and complete confidentiality.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <button
                onClick={() => setIsConsentModalOpen(true)}
                className="group relative px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 overflow-hidden"
              >
                <span className="relative z-10 flex hover:text-white items-center gap-2">
                  <FaPlay className="w-4 h-4 group-hover:animate-pulse" />
                  Request Delivery
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <div className="flex items-center gap-2 text-white/80 group cursor-pointer hover:text-white transition-colors">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="w-4 h-4 text-yellow-400 group-hover:animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <span className="text-sm">Trusted by 10,000+ patients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <FaChevronDown className="w-6 h-6 text-white/60" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive medication delivery solutions designed with your
              safety and convenience in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 cursor-pointer overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div
                  className={`relative mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br ${
                    feature.color
                  } text-white transform transition-all duration-500 ${
                    hoveredFeature === index ? "scale-110 rotate-12" : ""
                  }`}
                >
                  <feature.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-200 rounded-2xl transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, secure, and seamless medication delivery in three easy
              steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 -translate-y-1/2"></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div
                  className={`relative inline-flex items-center justify-center w-20 h-20 rounded-full text-2xl font-bold text-white mb-6 transition-all duration-300 ${
                    activeStep === index
                      ? "bg-gradient-to-br from-blue-600 to-pink-600 scale-125 shadow-2xl"
                      : "bg-gradient-to-br from-gray-400 to-gray-500 group-hover:from-blue-500 group-hover:to-pink-500"
                  } group-hover:scale-110`}
                >
                  <span className="relative z-10">{index + 1}</span>
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <step.icon
                    className={`w-12 h-12 mx-auto transition-all duration-300 ${
                      activeStep === index
                        ? "text-purple-600 scale-110"
                        : "text-gray-400 group-hover:text-purple-500"
                    }`}
                  />
                </div>

                {/* Content */}
                <h3
                  className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                    activeStep === index
                      ? "text-purple-600"
                      : "text-gray-900 group-hover:text-purple-600"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-12 space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeStep === index
                    ? "bg-gradient-to-r from-blue-600 to-pink-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Compliance */}
      <section id="compliance" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Legal Compliance & Safety
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your safety and privacy are our top priorities. We maintain the
              highest standards of compliance with UK regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-transparent hover:border-purple-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Legal Disclaimers */}
          <div className="mt-16 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg animate-fade-in-up">
            <div className="flex items-start">
              <FaExclamationTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Important Legal Disclaimers
                </h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>
                    • Qurexa provides delivery services only and does not
                    replace professional pharmacist consultation
                  </li>
                  <li>
                    • For medical emergencies, contact your GP or call 999
                    immediately
                  </li>
                  <li>
                    • All deliveries are subject to patient consent and pharmacy
                    approval
                  </li>
                  <li>
                    • We operate under strict liability limits as outlined in
                    our Terms of Service
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our prescription delivery
              service
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() =>
                    setActiveFAQ(activeFAQ === index ? null : index)
                  }
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {item.question}
                  </span>
                  <FaChevronDown
                    className={`w-5 h-5 text-purple-600 transition-transform duration-300 ${
                      activeFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeFAQ === index ? "max-h-96 pb-4" : "max-h-0"
                  }`}
                >
                  <div className="px-6 text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact & Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated support team is here to help with any questions,
              concerns, or complaints
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                  <p className="mb-8 text-white/90">
                    Our support team is available to help with any questions
                    about our delivery service, complaints, or general
                    inquiries.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 group cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-all duration-300">
                      <div className="p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                        <FaPhone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Phone Support</h4>
                        <p className="text-white/80">0800 123 4567</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-all duration-300">
                      <div className="p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                        <FaEnvelope className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Email Support</h4>
                        <p className="text-white/80">support@qurexa.co.uk</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-all duration-300">
                      <div className="p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                        <FaClock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Support Hours</h4>
                        <p className="text-white/80">
                          Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-5PM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-all duration-300">
                      <div className="p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                        <FaMapMarkerAlt className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Coverage Area</h4>
                        <p className="text-white/80">
                          England, Wales & Scotland
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Complaints Procedure */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
                <div className="flex items-start space-x-3">
                  <FaQuestionCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Complaints Procedure
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      We take all complaints seriously and aim to resolve issues
                      promptly in accordance with GPhC standards.
                    </p>
                    <div className="text-sm text-gray-600">
                      <p className="mb-1">
                        1. Contact our support team first:{" "}
                        <strong>complaints@qurexa.co.uk</strong>
                      </p>
                      <p className="mb-1">
                        2. We will acknowledge within 24 hours and investigate
                        within 7 days
                      </p>
                      <p>
                        3. If unresolved, you may contact the General
                        Pharmaceutical Council
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h3>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="07xxx xxx xxx"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="delivery">Delivery Question</option>
                        <option value="complaint">Complaint</option>
                        <option value="technical">Technical Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Please describe your inquiry or concern..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-purple-200 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-pink-600">
                  <HiOutlineHeart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Qurexa</h3>
                  <p className="text-gray-400 text-sm">Care. Delivered.</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Safe, secure prescription delivery service working with
                registered UK pharmacies to bring your medications directly to
                your door.
              </p>
              <div className="text-sm text-gray-400">
                <p>Company Registration: 12345678</p>
                <p>GPhC Partner Network Certified</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  "Services",
                  "How It Works",
                  "Compliance",
                  "FAQ",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal & Compliance</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    GDPR Compliance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Complaints Procedure
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Professional Standards
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">
                Contact Information
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <FaPhone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">0800 123 4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">support@qurexa.co.uk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaGlobe className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">
                    England, Wales & Scotland
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-xs text-gray-400">
                    Emergency? Contact your GP or call 999
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Regulatory Information */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <FaFileContract className="w-5 h-5 mr-2 text-blue-400" />
                Regulatory & Legal Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
                <div>
                  <h5 className="font-semibold text-white mb-2">
                    Data Protection
                  </h5>
                  <p>
                    Fully compliant with UK GDPR and Data Protection Act 2018.
                    Your personal and medical data is protected with
                    enterprise-grade security and strict access controls.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">
                    Professional Standards
                  </h5>
                  <p>
                    Operating in partnership with GPhC registered pharmacies.
                    All deliveries comply with professional pharmacy standards
                    and UK medicines regulations.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">
                    Patient Consent
                  </h5>
                  <p>
                    All prescription collections and deliveries require explicit
                    patient consent. We maintain detailed consent records in
                    compliance with UK healthcare regulations.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">
                    Controlled Substances
                  </h5>
                  <p>
                    Special procedures for Schedule 2 & 3 controlled drugs
                    including enhanced ID verification, written authorization,
                    and secure transport protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p>&copy; 2025 Qurexa Ltd. All rights reserved.</p>
              <p className="mt-1">
                Qurexa is a prescription delivery service operating in
                partnership with GPhC registered pharmacies across the UK.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <FaUserShield className="w-4 h-4" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <FaShieldAlt className="w-4 h-4" />
                <span>GPhC Partner</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Consent Modal */}
      {isConsentModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Patient Consent Form
              </h3>
              <p className="text-gray-600">
                Please read and confirm your consent for prescription delivery
                services
              </p>
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent1"
                    checked={consentChecks.consent1}
                    onChange={() => handleConsentChange("consent1")}
                    className="mt-1 w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <label
                    htmlFor="consent1"
                    className="text-sm text-gray-700 leading-relaxed"
                  >
                    <strong>Collection & Delivery Consent:</strong> I consent to
                    Qurexa collecting my prescription from my registered
                    pharmacy and delivering it to the address I specify. I
                    understand this service is provided in partnership with GPhC
                    registered pharmacies.
                  </label>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent2"
                    checked={consentChecks.consent2}
                    onChange={() => handleConsentChange("consent2")}
                    className="mt-1 w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <label
                    htmlFor="consent2"
                    className="text-sm text-gray-700 leading-relaxed"
                  >
                    <strong>Data Processing Consent:</strong> I consent to the
                    processing of my personal and medical data as outlined in
                    the Privacy Policy. I understand my data will be used solely
                    for prescription delivery services and shared only with
                    authorized healthcare partners.
                  </label>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent3"
                    checked={consentChecks.consent3}
                    onChange={() => handleConsentChange("consent3")}
                    className="mt-1 w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <label
                    htmlFor="consent3"
                    className="text-sm text-gray-700 leading-relaxed"
                  >
                    <strong>Terms Acceptance:</strong> I have read and agree to
                    the Terms of Service, including delivery conditions,
                    liability limitations, and the complaints procedure. I
                    understand this service does not replace professional
                    pharmacist consultation.
                  </label>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent4"
                    checked={consentChecks.consent4}
                    onChange={() => handleConsentChange("consent4")}
                    className="mt-1 w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <label
                    htmlFor="consent4"
                    className="text-sm text-gray-700 leading-relaxed"
                  >
                    <strong>ID Verification (if required):</strong> For
                    controlled substances, I consent to additional ID
                    verification procedures and understand that written
                    authorization may be required in compliance with UK
                    medicines regulations.
                  </label>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <FaExclamationTriangle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-yellow-800">
                    <p className="font-semibold mb-1">Important Reminders:</p>
                    <ul className="space-y-1 text-xs">
                      <li>
                        • For medical emergencies, contact your GP or call 999
                        immediately
                      </li>
                      <li>
                        • This service does not replace professional pharmacist
                        consultation
                      </li>
                      <li>
                        • You can withdraw consent at any time by contacting our
                        support team
                      </li>
                      <li>
                        • All data is processed in accordance with UK GDPR
                        regulations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setIsConsentModalOpen(false)}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (canSubmitConsent) {
                    alert(
                      "Thank you for providing consent. You will be redirected to complete your delivery request."
                    );
                    setIsConsentModalOpen(false);
                  }
                }}
                disabled={!canSubmitConsent}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  canSubmitConsent
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Submit Consent & Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
