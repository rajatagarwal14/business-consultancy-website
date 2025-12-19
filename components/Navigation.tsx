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
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <a href="#services" className="block px-4 py-3 hover:bg-gray-50">Company Registration</a>
                <a href="#services" className="block px-4 py-3 hover:bg-gray-50">GST Registration</a>
                <a href="#services" className="block px-4 py-3 hover:bg-gray-50">Trademark</a>
                <a href="#services" className="block px-4 py-3 hover:bg-gray-50">MSME/Udyam</a>
                <a href="#services" className="block px-4 py-3 hover:bg-gray-50">All Services</a>
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
                <div className="pl-4 space-y-2">
                  <a href="#services" className="block py-2 text-gray-600 hover:text-primary">Company Registration</a>
                  <a href="#services" className="block py-2 text-gray-600 hover:text-primary">GST Registration</a>
                  <a href="#services" className="block py-2 text-gray-600 hover:text-primary">Trademark</a>
                  <a href="#services" className="block py-2 text-gray-600 hover:text-primary">MSME/Udyam</a>
                  <a href="#services" className="block py-2 text-gray-600 hover:text-primary">All Services</a>
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
