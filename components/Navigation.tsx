'use client';

import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-dark shadow-premium py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">BC</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              BusinessConsult<span className="text-green-400">.in</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-white/90 hover:text-white transition-colors font-medium">
              Home
            </a>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-white/90 hover:text-white transition-colors font-medium flex items-center gap-1">
                Services
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-4 w-64 glass-dark rounded-2xl p-4 shadow-premium-lg animate-fadeInDown">
                  <div className="grid gap-2">
                    {[
                      'Company Registration',
                      'GST Registration',
                      'MSME Registration',
                      'Trademark Registration',
                      'ISO Certification',
                      'ITR Filing'
                    ].map((service) => (
                      <a
                        key={service}
                        href="#services"
                        className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all"
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#about" className="text-white/90 hover:text-white transition-colors font-medium">
              About
            </a>
            <a href="#process" className="text-white/90 hover:text-white transition-colors font-medium">
              How It Works
            </a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="text-white/90 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold">+91 98765 43210</span>
            </a>
            <a
              href="#services"
              className="btn-premium btn-secondary"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 glass-dark rounded-2xl p-6 animate-fadeInDown">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-white/90 hover:text-white transition-colors font-medium py-2">
                Home
              </a>
              <a href="#services" className="text-white/90 hover:text-white transition-colors font-medium py-2">
                Services
              </a>
              <a href="#about" className="text-white/90 hover:text-white transition-colors font-medium py-2">
                About
              </a>
              <a href="#process" className="text-white/90 hover:text-white transition-colors font-medium py-2">
                How It Works
              </a>
              <a href="#contact" className="text-white/90 hover:text-white transition-colors font-medium py-2">
                Contact
              </a>
              <hr className="border-white/20" />
              <a
                href="tel:+919876543210"
                className="text-white flex items-center gap-2 py-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 98765 43210</span>
              </a>
              <a
                href="#services"
                className="btn-premium btn-secondary w-full text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
