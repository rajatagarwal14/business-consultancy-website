'use client';

import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              BusinessHub
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary transition-colors flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all max-h-96 overflow-y-auto">
                <a href="/services/private-limited-company" className="block px-4 py-3 hover:bg-blue-50 border-b border-gray-100">
                  <div className="font-semibold text-gray-900">⭐ Private Limited Company</div>
                  <div className="text-xs text-gray-500">Investor-ready structure</div>
                </a>
                <a href="/services/gst-registration" className="block px-4 py-3 hover:bg-orange-50 border-b border-gray-100">
                  <div className="font-semibold text-gray-900">GST Registration</div>
                  <div className="text-xs text-gray-500">Mandatory for e-commerce</div>
                </a>
                <a href="/services/fssai-license" className="block px-4 py-3 hover:bg-red-50 border-b border-gray-100">
                  <div className="font-semibold text-gray-900">⚠️ FSSAI License</div>
                  <div className="text-xs text-red-600">Critical - Jail risk</div>
                </a>
                <a href="/services/trademark-registration" className="block px-4 py-3 hover:bg-green-50 border-b border-gray-100">
                  <div className="font-semibold text-gray-900">Trademark Registration</div>
                  <div className="text-xs text-gray-500">Brand protection</div>
                </a>
                <a href="/services/msme-udyam-registration" className="block px-4 py-3 hover:bg-green-50 border-b border-gray-100">
                  <div className="font-semibold text-gray-900">MSME/Udyam Registration</div>
                  <div className="text-xs text-gray-500">₹5-10L+ subsidies</div>
                </a>
                <a href="/services/partnership-firm" className="block px-4 py-3 hover:bg-blue-50 border-b border-gray-100">
                  <div className="font-semibold text-gray-900">Partnership Firm</div>
                  <div className="text-xs text-gray-500">2-20 partners</div>
                </a>
                <a href="/services/llp-registration" className="block px-4 py-3 hover:bg-blue-50 border-b border-gray-100">
                  <div className="font-semibold text-gray-900">⭐ LLP Registration</div>
                  <div className="text-xs text-gray-500">Limited liability</div>
                </a>
                <a href="/services/one-person-company" className="block px-4 py-3 hover:bg-green-50 border-b border-gray-100">
                  <div className="font-semibold text-gray-900">One Person Company</div>
                  <div className="text-xs text-gray-500">Solo ownership</div>
                </a>
                <a href="/services/iso-certification" className="block px-4 py-3 hover:bg-green-50 border-b border-gray-100">
                  <div className="font-semibold text-gray-900">ISO Certification</div>
                  <div className="text-xs text-gray-500">Required for tenders</div>
                </a>
                <a href="/#services" className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white text-center font-semibold rounded-b-lg hover:from-blue-700 hover:to-green-700">
                  View All Services →
                </a>
              </div>
            </div>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <a href="/" className="block py-2 text-gray-700 hover:text-primary">
              Home
            </a>
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left py-2 text-gray-700 hover:text-primary flex justify-between items-center"
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1">
                  <a href="/services/private-limited-company" className="block py-2 text-gray-600 hover:text-primary">⭐ Private Limited Company</a>
                  <a href="/services/gst-registration" className="block py-2 text-gray-600 hover:text-primary">GST Registration</a>
                  <a href="/services/fssai-license" className="block py-2 text-red-600 hover:text-red-700 font-semibold">⚠️ FSSAI License (Critical)</a>
                  <a href="/services/trademark-registration" className="block py-2 text-gray-600 hover:text-primary">Trademark Registration</a>
                  <a href="/services/msme-udyam-registration" className="block py-2 text-gray-600 hover:text-primary">MSME/Udyam Registration</a>
                  <a href="/services/partnership-firm" className="block py-2 text-gray-600 hover:text-primary">Partnership Firm</a>
                  <a href="/services/llp-registration" className="block py-2 text-gray-600 hover:text-primary">⭐ LLP Registration</a>
                  <a href="/services/one-person-company" className="block py-2 text-gray-600 hover:text-primary">One Person Company</a>
                  <a href="/services/iso-certification" className="block py-2 text-gray-600 hover:text-primary">ISO Certification</a>
                  <a href="/#services" className="block py-2 text-primary font-semibold hover:underline mt-2">View All Services →</a>
                </div>
              )}
            </div>
            <a href="#how-it-works" className="block py-2 text-gray-700 hover:text-primary">
              How It Works
            </a>
            <a href="#testimonials" className="block py-2 text-gray-700 hover:text-primary">
              Testimonials
            </a>
            <a href="#faq" className="block py-2 text-gray-700 hover:text-primary">
              FAQ
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4 inline-block">
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
