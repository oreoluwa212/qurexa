import React, { useState, useEffect } from "react";
import {
  HiOutlineHeart,
  HiShieldCheck,
  HiUserGroup,
  HiDatabase,
  HiLockClosed,
  HiDocumentText,
  HiClock,
  HiMail,
  HiPhone,
  HiGlobe,
  HiInformationCircle,
  HiChevronRight,
  HiArrowLeft,
} from "react-icons/hi";
import { FaFileContract, FaUserShield, FaShieldAlt } from "react-icons/fa";
import Footer from "../../components/common/Footer";
import ContactSection from "../../components/common/ContactSection";
import {
  HiExclamationTriangle,
  HiMiniExclamationTriangle,
} from "react-icons/hi2";

const PrivacyPolicy = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "who-we-are", title: "Who We Are", icon: HiUserGroup },
    {
      id: "information-we-collect",
      title: "What Information We Collect",
      icon: HiDatabase,
    },
    { id: "how-we-use", title: "How We Use Your Data", icon: HiDocumentText },
    {
      id: "legal-basis",
      title: "Legal Basis for Processing",
      icon: FaFileContract,
    },
    { id: "data-sharing", title: "Data Sharing", icon: HiUserGroup },
    { id: "data-retention", title: "Data Retention", icon: HiClock },
    { id: "your-rights", title: "Your Rights", icon: HiShieldCheck },
    {
      id: "data-protection",
      title: "How We Protect Your Data",
      icon: HiLockClosed,
    },
    {
      id: "updates",
      title: "Updates to This Policy",
      icon: HiInformationCircle,
    },
    { id: "contact", title: "Contact Us", icon: HiMail },
  ];

  const dataTypes = [
    {
      type: "Personal Identity",
      items: ["Full Name", "Date of Birth", "Home Address"],
      icon: HiUserGroup,
    },
    {
      type: "Contact Information",
      items: ["Email Address", "Phone Number", "Emergency Contact Info"],
      icon: HiMail,
    },
    {
      type: "Health Information",
      items: [
        "Prescription Details",
        "Health Information (delivery-related)",
        "Medication History",
      ],
      icon: HiShieldCheck,
    },
    {
      type: "Service Data",
      items: [
        "Delivery Preferences",
        "Service History",
        "Feedback & Enquiries",
      ],
      icon: HiDocumentText,
    },
  ];

  const userRights = [
    {
      right: "Access Your Data",
      description: "Request a copy of all personal data we hold about you",
      icon: HiDatabase,
    },
    {
      right: "Rectification",
      description: "Request correction of inaccurate or incomplete information",
      icon: HiDocumentText,
    },
    {
      right: "Erasure",
      description: "Request deletion of your data (where legally permissible)",
      icon: HiLockClosed,
    },
    {
      right: "Withdraw Consent",
      description: "Withdraw consent at any time for data processing",
      icon: HiShieldCheck,
    },
    {
      right: "File Complaints",
      description:
        "File a complaint with the Information Commissioner's Office (ICO)",
      icon: HiMiniExclamationTriangle,
    },
  ];

  const handleBackToHome = () => {
    window.location.href = "/";
  };

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
            <div
              className="flex items-center space-x-3 group cursor-pointer"
              onClick={handleBackToHome}
            >
              <div
                className={`relative p-2 rounded-full transition-all duration-300 ${
                  scrollY > 50
                    ? "bg-gradient-to-r from-blue-600 to-pink-600"
                    : "bg-white/20 backdrop-blur-sm"
                } group-hover:scale-110 group-hover:rotate-12`}
              >
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

            {/* Back to Home Button */}
            <button
              onClick={handleBackToHome}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                scrollY > 50
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/20"
              }`}
            >
              <HiArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                <HiShieldCheck className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Your privacy and data protection are our top priorities
            </p>
            <p className="text-white/80 max-w-2xl mx-auto">
              Effective Date: 01/05/2025 | Last Updated: 01/05/2025
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center space-x-2 px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 text-sm"
              >
                <section.icon className="w-4 h-4 text-purple-600" />
                <span className="text-gray-700">{section.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Who We Are */}
        <section id="who-we-are" className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white">
              <HiUserGroup className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
            <p className="text-gray-700 mb-4">
              Qurexa Ltd provides prescription delivery, medicine return and
              disposal, and healthcare logistics services across Lincolnshire
              and surrounding areas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center space-x-3">
                <FaFileContract className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Company Number</p>
                  <p className="text-gray-600">16242915</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <HiMail className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">info@qurexa.co.uk</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <HiPhone className="w-5 h-5 text-pink-600" />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">07776734153</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <HiGlobe className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">Website</p>
                  <p className="text-gray-600">www.qurexa.co.uk</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Information We Collect */}
        <section id="information-we-collect" className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg text-white">
              <HiDatabase className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              What Information We Collect
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataTypes.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <category.icon className="w-6 h-6 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {category.type}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2">
                      <HiChevronRight className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* How We Use Your Data */}
        <section id="how-we-use" className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg text-white">
              <HiDocumentText className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              How We Use Your Data
            </h2>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <p className="text-gray-700 mb-6">We use your information to:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Collect and deliver prescriptions on your behalf",
                "Return unused or expired medications to your nominated pharmacy",
                "Contact you regarding your delivery or consent",
                "Comply with pharmacy, NHS, or regulatory requirements",
                "Improve our services and respond to feedback or enquiries",
                "Ensure safe delivery of healthcare items",
              ].map((use, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <HiChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{use}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 font-semibold">Important Note:</p>
              <p className="text-blue-700 mt-1">
                We do not sell or share your personal data with any third-party
                marketing agencies.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Basis */}
        <section id="legal-basis" className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-red-500 to-purple-600 rounded-lg text-white">
              <FaFileContract className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Legal Basis for Processing
            </h2>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <p className="text-gray-700 mb-6">
              We process your personal data under the following lawful bases:
            </p>
            <div className="space-y-4">
              {[
                {
                  basis: "Consent",
                  example: "via our prescription collection form",
                  color: "bg-green-100 border-green-400 text-green-800",
                },
                {
                  basis: "Performance of a contract",
                  example: "delivery services",
                  color: "bg-blue-100 border-blue-400 text-blue-800",
                },
                {
                  basis: "Legal obligation",
                  example: "to NHS or pharmacy regulatory bodies",
                  color: "bg-purple-100 border-purple-400 text-purple-800",
                },
                {
                  basis: "Legitimate interest",
                  example: "ensuring safe delivery of healthcare items",
                  color: "bg-orange-100 border-orange-400 text-orange-800",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-4 border-l-4 rounded-lg ${item.color}`}
                >
                  <h4 className="font-semibold">{item.basis}</h4>
                  <p className="text-sm mt-1">Example: {item.example}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Sharing */}
        <section id="data-sharing" className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg text-white">
              <HiUserGroup className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Data Sharing</h2>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <p className="text-gray-700 mb-6">We may share your data with:</p>
            <div className="space-y-4">
              {[
                "Your nominated pharmacy (for prescription collection or medicine returns)",
                "The NHS or healthcare regulators (when required)",
                "Our employees or subcontractors who provide delivery services",
                "Service providers who securely host or process data on our behalf (e.g. cloud storage)",
              ].map((entity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <HiChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{entity}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start space-x-2">
                <HiExclamationTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-yellow-800 font-semibold">
                    Data Protection Guarantee
                  </p>
                  <p className="text-yellow-700 mt-1">
                    All third parties are under strict confidentiality
                    agreements and follow data protection standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Retention */}
        <section id="data-retention" className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg text-white">
              <HiClock className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Data Retention</h2>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white text-2xl font-bold mb-4">
                6
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Years Maximum Retention
              </h3>
            </div>
            <p className="text-gray-700 text-center mb-6">
              We retain personal data for as long as is necessary to fulfill our
              services and meet legal or regulatory obligations, typically up to
              6 years.
            </p>
            <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
              <p className="text-indigo-800 font-semibold">Secure Deletion</p>
              <p className="text-indigo-700 mt-1">
                After the retention period, your data will be securely deleted
                or anonymised.
              </p>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section id="your-rights" className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg text-white">
              <HiShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Your Rights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userRights.map((right, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg text-white">
                    <right.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {right.right}
                    </h3>
                    <p className="text-gray-600 text-sm">{right.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <HiInformationCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-green-800 mb-2">
                  Additional Information
                </h4>
                <p className="text-green-700 text-sm">
                  You can file a complaint with the Information Commissioner's
                  Office (ICO) at{" "}
                  <a
                    href="https://www.ico.org.uk"
                    className="underline font-semibold"
                  >
                    www.ico.org.uk
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Protect Your Data */}
        <section id="data-protection" className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg text-white">
              <HiLockClosed className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              How We Protect Your Data
            </h2>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  protection: "Secure Technologies",
                  description: "Enterprise-grade security systems",
                  icon: HiShieldCheck,
                },
                {
                  protection: "Encrypted Storage",
                  description: "All data encrypted at rest and in transit",
                  icon: HiLockClosed,
                },
                {
                  protection: "Password Protection",
                  description: "Multi-factor authentication systems",
                  icon: HiUserGroup,
                },
                {
                  protection: "Staff Training",
                  description: "Regular data protection training for all staff",
                  icon: HiDocumentText,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="p-2 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg text-white">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.protection}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Updates to Policy */}
        <section id="updates" className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg text-white">
              <HiInformationCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Updates to This Policy
            </h2>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <p className="text-gray-700 mb-4">
              We may update this policy occasionally to reflect changes in our
              services, legal requirements, or data protection practices.
            </p>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 font-semibold">Stay Informed</p>
              <p className="text-blue-700 mt-1">
                Any changes will be posted on our website and will be effective
                immediately. We recommend checking this page periodically for
                updates.
              </p>
            </div>
          </div>
        </section>
      </div>
      <ContactSection />
      {/* Footer */}
      <Footer />
      {/* <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center space-x-6">
              <div className="flex items-center space-x-2">
                <FaUserShield className="w-5 h-5 text-blue-400" />
                <span className="text-sm">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaShieldAlt className="w-5 h-5 text-green-400" />
                <span className="text-sm">GPhC Partner</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; 2025 Qurexa Ltd. All rights reserved. | Company
              Registration: 16242915
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default PrivacyPolicy;
