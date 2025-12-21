import Navbar from "@/Components/Home/Navbar";
import React from "react";
import {
  CheckCircle,
  Rocket,
  Target,
  Users,
  Zap,
  Shield,
  ArrowRight,
} from "lucide-react";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
        {/* Hero Section - More Impactful */}
        <section className="relative py-24 text-center px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-500/10 blur-3xl" />
          <div className="relative max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket size={16} />
              Empowering Local Businesses
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                Business
              </span>{" "}
              with Vits
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to help every local shop owner create beautiful
              digital catalogues—
              <span className="font-semibold text-green-700">
                no tech skills needed
              </span>
              . Turn visitors into customers in minutes.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-green-200 hover:-translate-y-1 transition-all duration-300 text-lg inline-flex items-center justify-center gap-2"
              >
                Start Free Catalogue
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 bg-white text-green-700 border-2 border-green-200 font-semibold rounded-xl hover:bg-green-50 transition-all duration-300 text-lg"
              >
                See How It Works
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Products Listed", icon: "📱" },
              { number: "500+", label: "Happy Businesses", icon: "🏪" },
              { number: "24/7", label: "Support", icon: "🛡️" },
              { number: "98%", label: "Satisfaction", icon: "⭐" },
            ].map((stat, idx) => (
              <div key={idx} className="p-6">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold text-green-700">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission with Visual Impact */}
        <section className="py-24 px-6 relative">
          <div className="absolute left-0 top-0 w-64 h-64 bg-green-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 blur-3xl" />
          <div className="max-w-5xl mx-auto relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Target size={16} />
                Our Core Mission
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Building Bridges Between{" "}
                <span className="text-green-700">Local Businesses</span> and{" "}
                <span className="text-green-700">Modern Customers</span>
              </h2>
            </div>
            <div className="bg-gradient-to-br from-white to-green-50 border border-green-100 rounded-3xl p-8 md:p-12 shadow-xl">
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                In today's digital world, customers expect to browse products
                online—even from their neighborhood shops. Yet most local
                businesses struggle with expensive websites or limited WhatsApp
                catalogues.{" "}
                <span className="font-semibold text-green-800">
                  Vits changes that.
                </span>
              </p>
              <p className="mt-6 text-lg text-gray-600 text-center">
                We provide a{" "}
                <span className="font-bold">
                  simple, affordable, and mobile-friendly
                </span>{" "}
                platform where any shop owner can create a stunning digital
                catalogue in minutes and share it instantly via link, QR code,
                or social media.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Vits - Feature Cards */}
        <section className="py-24 px-6 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Thousands of Businesses Choose{" "}
                <span className="text-green-700">Vits</span>
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                Designed specifically for retailers, wholesalers, and small
                business owners
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="text-green-600" size={28} />,
                  title: "Lightning Fast Setup",
                  desc: "Create your complete catalogue in under 10 minutes. No waiting, no complex forms.",
                  color: "from-green-50 to-emerald-50",
                },
                {
                  icon: <Users className="text-green-600" size={28} />,
                  title: "Customer-First Design",
                  desc: "Beautiful layouts that look great on any device—mobile, tablet, or desktop.",
                  color: "from-green-50 to-emerald-50",
                },
                {
                  icon: <Shield className="text-green-600" size={28} />,
                  title: "No Tech Headaches",
                  desc: "Zero coding required. Update products, prices, and images with just a few clicks.",
                  color: "from-green-50 to-emerald-50",
                },
                {
                  icon: "💰",
                  title: "Budget-Friendly",
                  desc: "Professional features at a fraction of website costs. Grow without breaking the bank.",
                  color: "from-emerald-50 to-green-50",
                },
                {
                  icon: "📱",
                  title: "Mobile Optimized",
                  desc: "85% of your customers browse on phones. We ensure perfect mobile experience.",
                  color: "from-emerald-50 to-green-50",
                },
                {
                  icon: "🚀",
                  title: "Business Growth Tools",
                  desc: "Track views, collect enquiries, and analyze what products attract customers most.",
                  color: "from-emerald-50 to-green-50",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${feature.color} border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
                >
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Timeline Style */}
        <section id="how-it-works" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Start Selling Online in{" "}
                <span className="text-green-700">4 Simple Steps</span>
              </h2>
              <p className="text-gray-600 text-xl">
                Your journey from local shop to digital storefront
              </p>
            </div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-300 to-emerald-300 -translate-x-1/2" />

              <div className="space-y-12 md:space-y-0">
                {[
                  {
                    step: "01",
                    title: "Sign Up Free",
                    desc: "Create your account in 30 seconds. No credit card required to start.",
                    icon: "👤",
                  },
                  {
                    step: "02",
                    title: "Add Your Products",
                    desc: "Upload photos, set prices, add descriptions. Bulk upload available.",
                    icon: "📦",
                  },
                  {
                    step: "03",
                    title: "Customize Your Catalogue",
                    desc: "Choose colors, layout, and branding that match your shop style.",
                    icon: "🎨",
                  },
                  {
                    step: "04",
                    title: "Share & Grow",
                    desc: "Share via WhatsApp, Instagram, QR code, or direct link. Start getting orders!",
                    icon: "🚀",
                  },
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col md:flex-row items-center ${
                      idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-8`}
                  >
                    <div className="md:w-1/2">
                      <div
                        className={`p-8 rounded-2xl ${
                          idx % 2 === 0
                            ? "bg-gradient-to-r from-green-50 to-white md:text-right"
                            : "bg-gradient-to-l from-emerald-50 to-white"
                        }`}
                      >
                        <div className="inline-flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                            {step.step}
                          </div>
                          <span className="text-3xl">{step.icon}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:block w-8 h-8 rounded-full bg-green-500 border-4 border-white" />
                    <div className="md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Message */}
        <section className="py-24 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-green-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-6xl">
                    👨‍💼
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <Users size={16} />A Personal Message
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    "We Built Vits for Shop Owners Like My Father"
                  </h3>
                  <blockquote className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-green-500 pl-6 py-2">
                    "I watched my father struggle for years with outdated
                    methods to showcase his products. He wanted something
                    simple, affordable, and effective. That's why we created
                    Vits—to give every local business the digital presence they
                    deserve, without the complexity or high costs."
                  </blockquote>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="font-bold text-gray-900">Founder, Vits</div>
                    <div className="text-green-700">
                      On a mission to digitize local commerce
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 text-center bg-gradient-to-r from-green-600 to-emerald-500">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
              Join thousands of local businesses already growing with Vits.
              Start your free digital catalogue today—no commitments, no hidden
              fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="px-10 py-5 bg-white text-green-700 font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Schedule a Demo
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center gap-2 text-green-100">
              <CheckCircle size={20} />
              <span>
                No credit card required • 14-day free trial • Cancel anytime
              </span>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-8">
              Trusted by Local Businesses Across
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-gray-400">
              {[
                "Retail Shops",
                "Wholesalers",
                "Restaurants",
                "Beauty Salons",
                "Hardware Stores",
                "Boutiques",
              ].map((type) => (
                <div key={type} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="font-medium">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
