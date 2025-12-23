"use client";

import Navbar from "@/Components/Home/Navbar";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Users,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-green-600" size={24} />,
      title: "Email Us",
      details: ["support@vitscatalogue.com", "sales@vitscatalogue.com"],
      description: "We'll respond within 24 hours",
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211"],
      description: "Mon-Fri, 9 AM - 6 PM",
    },
    {
      icon: <MapPin className="text-green-600" size={24} />,
      title: "Visit Us",
      details: ["123 Business Street", "Mumbai, Maharashtra 400001"],
      description: "By appointment only",
    },
    {
      icon: <Clock className="text-green-600" size={24} />,
      title: "Business Hours",
      details: ["Monday - Friday: 9am - 6pm", "Saturday: 10am - 2pm"],
      description: "Sunday: Closed",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to set up my digital catalogue?",
      answer:
        "Most businesses can set up their complete catalogue in under 10 minutes with our easy-to-use interface.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial with all features included. No credit card required.",
    },
    {
      question: "Can I update my products after publishing?",
      answer:
        "Absolutely! You can update prices, add new products, or remove items anytime from your dashboard.",
    },
    {
      question: "Do you offer support for technical issues?",
      answer:
        "Yes, we provide 24/7 email support and phone support during business hours for all paid plans.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
        {/* Hero Section */}
        <section className="relative py-20 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-emerald-500/5 blur-3xl" />
          <div className="relative max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageSquare size={16} />
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Let&apos;s Grow Your Business{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                Together
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about Vits? Our team is here to help you create the
              perfect digital catalogue for your business.
            </p>
          </div>
        </section>

        {/* Contact Cards Grid */}
        <section className="py-12 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-green-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-green-600 font-medium">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* FAQ & Additional Info */}
              <div className="space-y-8">
                {/* FAQ Section */}
                <div className="bg-white rounded-3xl p-8 border border-green-100 shadow-lg">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Users className="text-green-600" size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Frequently Asked Questions
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-100 last:border-0 pb-6 last:pb-0"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Support */}
                <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Need Immediate Assistance?
                  </h3>
                  <p className="mb-6 opacity-90">
                    For urgent inquiries, our support team is available during
                    business hours.
                  </p>
                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition"
                  >
                    <Phone size={20} />
                    Call Now: +91 98765 43210
                  </a>
                </div>

                {/* Social Links */}
                <div className="bg-white rounded-3xl p-8 border border-green-100 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    {[
                      {
                        name: "Twitter",
                        icon: "𝕏",
                        color: "hover:bg-gray-900 hover:text-white",
                      },
                      {
                        name: "LinkedIn",
                        icon: "in",
                        color: "hover:bg-blue-600 hover:text-white",
                      },
                      {
                        name: "Instagram",
                        icon: "📷",
                        color: "hover:bg-pink-600 hover:text-white",
                      },
                      {
                        name: "Facebook",
                        icon: "f",
                        color: "hover:bg-blue-500 hover:text-white",
                      },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href="#"
                        className={`w-12 h-12 flex items-center justify-center rounded-xl border border-gray-200 text-gray-700 font-bold text-lg transition-all duration-300 ${social.color}`}
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* Contact Form */}
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-green-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Send className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Send us a Message
                    </h2>
                    <p className="text-gray-600 mt-1">
                      Fill out the form below and we&apos;ll get back to you
                      soon
                    </p>
                  </div>
                </div>

                {submitStatus && (
                  <div
                    className={`mb-6 p-4 rounded-xl ${
                      submitStatus.success
                        ? "bg-green-50 border border-green-200"
                        : "bg-red-50 border border-red-200"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {submitStatus.success ? (
                        <CheckCircle
                          className="text-green-600 mt-0.5"
                          size={20}
                        />
                      ) : (
                        <AlertCircle
                          className="text-red-600 mt-0.5"
                          size={20}
                        />
                      )}
                      <p
                        className={
                          submitStatus.success
                            ? "text-green-800"
                            : "text-red-800"
                        }
                      >
                        {submitStatus.message}
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                        placeholder="John Doe"
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
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="sales">Sales Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing Questions</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition resize-none"
                      placeholder="Tell us about your business and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-200 transition-all duration-300 ${
                      isSubmitting
                        ? "opacity-80 cursor-not-allowed"
                        : "hover:scale-[1.02]"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send size={20} />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Find Us Here
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Visit our office or connect with our team online
              </p>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-green-100 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Map Placeholder */}
                <div className="lg:col-span-2 h-96 bg-gradient-to-br from-green-100 to-emerald-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <MapPin className="text-green-600" size={32} />
                      </div>
                      <p className="text-gray-700 font-medium">
                        Mumbai, Maharashtra
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        123 Business Street, 400001
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location Details */}
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Office Location
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Address
                      </h4>
                      <p className="text-gray-600">
                        123 Business Street
                        <br />
                        Mumbai, Maharashtra 400001
                        <br />
                        India
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Directions
                      </h4>
                      <p className="text-gray-600">
                        Nearest metro station: Business Line
                        <br />
                        Parking available on premises
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Meeting Hours
                      </h4>
                      <p className="text-gray-600">
                        By appointment only
                        <br />
                        Monday - Friday, 10am - 5pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 text-center bg-gradient-to-r from-green-600 to-emerald-500">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
              Start your free digital catalogue today and join thousands of
              successful local businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="px-10 py-4 bg-white text-green-700 font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
              >
                Start Free Trial
              </a>
              <a
                href="/demo"
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <footer className="py-8 px-6 text-center bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Vits Digital Catalogue. All rights
              reserved. Crafted with ❤️ for local businesses in India.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="/cookies" className="hover:text-white transition">
                Cookie Policy
              </a>
              <a href="/sitemap" className="hover:text-white transition">
                Sitemap
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactPage;
