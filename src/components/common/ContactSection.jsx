import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaQuestionCircle,
} from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message. We will respond within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
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
                  Our support team is available to help with any questions about
                  our delivery service, complaints, or general inquiries.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-all duration-300">
                    <div className="p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                      <FaPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone Support</h4>
                      <p className="text-white/80">0777 673 4153</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-all duration-300">
                    <div className="p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                      <FaEnvelope className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email Support</h4>
                      <p className="text-white/80">info@qurexa.co.uk</p>
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
                      <p className="text-white/80">England, Wales & Scotland</p>
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
  );
};

export default ContactSection;
