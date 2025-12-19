'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-[#1E40AF]">
              BizComply
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-[#1E40AF] font-medium transition">Home</a>
            <a href="/services" className="text-gray-700 hover:text-[#1E40AF] font-medium transition">Services</a>
            <a href="/pricing" className="text-gray-700 hover:text-[#1E40AF] font-medium transition">Pricing</a>
            <a href="/about" className="text-gray-700 hover:text-[#1E40AF] font-medium transition">About</a>
            <a href="/contact" className="text-gray-700 hover:text-[#1E40AF] font-medium transition">Contact</a>
            <Button href="/consultation" size="md">Book Free Consultation</Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="/" className="block py-2 text-gray-700">Home</a>
            <a href="/services" className="block py-2 text-gray-700">Services</a>
            <a href="/pricing" className="block py-2 text-gray-700">Pricing</a>
            <a href="/about" className="block py-2 text-gray-700">About</a>
            <a href="/contact" className="block py-2 text-gray-700">Contact</a>
            <Button href="/consultation" size="sm" fullWidth>Book Consultation</Button>
          </div>
        </div>
      )}
    </nav>
  );
};
