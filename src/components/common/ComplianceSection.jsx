import React from "react";
import {
  FaShieldAlt,
  FaLock,
  FaUserMd,
  FaTemperatureHigh,
  FaExclamationTriangle,
} from "react-icons/fa";
import {
  HiOutlineCheckBadge,
  HiOutlineChatBubbleBottomCenterText,
} from "react-icons/hi2";

const ComplianceSection = () => {
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

  return (
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
                  • Qurexa provides delivery services only and does not replace
                  professional pharmacist consultation
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
                  • We operate under strict liability limits as outlined in our
                  Terms of Service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
