import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaFileContract,
  FaUserShield,
  FaCheckCircle,
  FaInstagram,
  FaTwitter,
  FaPlus,
} from "react-icons/fa";
import { logo } from "../../../assets";

const Footer = () => {
  const handleNavClick = (item) => {
    const sectionId = item.toLowerCase().replace(/\s+/g, "-");

    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;

      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Q</span>
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors text-left">
                  Qurexa
                </h3>
                <p className="text-gray-400 text-sm text-left">
                  Trust. Care. Deliver.
                </p>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Safe, secure prescription delivery service working with registered
              UK pharmacies to bring your medications directly to your door.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaPlus className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400 mt-4">
              <FaCheckCircle className="w-4 h-4 text-green-400" />
              <span>GPhC Partner Network Certified</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "Prescription Delivery",
                "Grocery Delivery",
                "Become a Rider",
                "Vendor Portal",
                "Pharmacy Partners",
                "Blog & Insights"
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="text-gray-300 hover:text-white transition-colors text-sm text-left hover:underline bg-transparent border-none cursor-pointer p-0"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Legal & Compliance</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-white transition-colors hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-gray-300 hover:text-white transition-colors hover:underline"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-policy"
                  className="text-gray-300 hover:text-white transition-colors hover:underline"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/gdpr-compliance"
                  className="text-gray-300 hover:text-white transition-colors hover:underline"
                >
                  GDPR Compliance
                </Link>
              </li>
              <li>
                <Link
                  to="/complaints-procedure"
                  className="text-gray-300 hover:text-white transition-colors hover:underline"
                >
                  Complaints Procedure
                </Link>
              </li>
              <li>
                <Link
                  to="/professional-standards"
                  className="text-gray-300 hover:text-white transition-colors hover:underline"
                >
                  Professional Standards
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <FaPhone className="w-4 h-4 text-gray-400" />
                <a
                  href="tel:08001234567"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  0800 123 4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-4 h-4 text-gray-400" />
                <a
                  href="mailto:support@qurexa.co.uk"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  support@qurexa.co.uk
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">England, Wales & Scotland</span>
              </div>
              <div className="text-sm text-gray-400 mt-4">
                <p>Company Registration: 16242915</p>
              </div>
              <div className="mt-6 p-3 bg-red-900/20 border border-red-800 rounded-lg">
                <p className="text-red-400 text-xs font-medium">
                  Emergency? Contact your GP or call 999
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-12 mb-8">
          <div className="flex items-center mb-6">
            <FaFileContract className="w-5 h-5 mr-3 text-blue-400" />
            <h4 className="text-lg font-semibold">Regulatory & Legal Information</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-300">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaCheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-white mb-2">Professional Standards</h5>
                  <p>
                    Operating in partnership with GPhC registered pharmacies. All deliveries comply with
                    professional pharmacy standards and UK medicines regulations.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaUserShield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-white mb-2">Controlled Substances</h5>
                  <p>
                    Special procedures for Schedule 2 & 3 controlled drugs including enhanced ID
                    verification, written authorization, and secure transport protocols.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaShieldAlt className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-white mb-2">Data Protection</h5>
                  <p>
                    Fully compliant with UK GDPR and Data Protection Act 2018. Your personal and medical
                    data is protected with enterprise-grade security and strict access controls.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaCheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-white mb-2">Patient Consent</h5>
                  <p>
                    All prescription collections and deliveries require explicit patient consent. We maintain
                    detailed consent records in compliance with UK healthcare regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            <p>&copy; 2025 Qurexa Ltd. All rights reserved.</p>
            <p className="mt-1">
              Qurexa is a prescription delivery service operating in partnership
              with GPhC registered pharmacies across the UK.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <FaUserShield className="w-4 h-4 text-green-400" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <FaShieldAlt className="w-4 h-4 text-green-400" />
              <span>GPhC Partner</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;