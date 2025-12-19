'use client';

import React from 'react';

const Hero = () => {
  return (
    <section className="section py-24 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #f0fdf4 100%)',
    }}>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #1e40af 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="mb-6">
            Start, Register & Grow Your Business — <span className="gradient-text">The Easy Way</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Simple, affordable online compliance services for Indian entrepreneurs. Company registration, GST, MSME, trademarks, and more — all handled by experts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#services" className="btn btn-primary">
              Get Started Now
            </a>
            <a href="https://wa.me/919876543210" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Book Free Consultation
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>5000+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>100% Online Process</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
