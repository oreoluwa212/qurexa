import React, { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const ConsentModal = ({ isOpen, onClose, onSubmit }) => {
  const [consentChecks, setConsentChecks] = useState({
    consent1: false,
    consent2: false,
    consent3: false,
    consent4: false,
  });

  const handleConsentChange = (key) => {
    setConsentChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const canSubmitConsent = Object.values(consentChecks).every(Boolean);

  const handleSubmit = () => {
    if (canSubmitConsent) {
      onSubmit();
      setConsentChecks({
        consent1: false,
        consent2: false,
        consent3: false,
        consent4: false,
      });
    }
  };

  if (!isOpen) return null;

  return (
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
                className="text-sm text-gray-700 leading-relaxed cursor-pointer"
              >
                <strong>Collection & Delivery Consent:</strong> I consent to
                Qurexa collecting my prescription from my registered pharmacy
                and delivering it to the address I specify. I understand this
                service is provided in partnership with GPhC registered
                pharmacies.
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
                className="text-sm text-gray-700 leading-relaxed cursor-pointer"
              >
                <strong>Data Processing Consent:</strong> I consent to the
                processing of my personal and medical data as outlined in the
                Privacy Policy. I understand my data will be used solely for
                prescription delivery services and shared only with authorized
                healthcare partners.
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
                className="text-sm text-gray-700 leading-relaxed cursor-pointer"
              >
                <strong>Terms Acceptance:</strong> I have read and agree to the
                Terms of Service, including delivery conditions, liability
                limitations, and the complaints procedure. I understand this
                service does not replace professional pharmacist consultation.
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
                className="text-sm text-gray-700 leading-relaxed cursor-pointer"
              >
                <strong>ID Verification (if required):</strong> For controlled
                substances, I consent to additional ID verification procedures
                and understand that written authorization may be required in
                compliance with UK medicines regulations.
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
            onClick={onClose}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
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
  );
};

export default ConsentModal;
