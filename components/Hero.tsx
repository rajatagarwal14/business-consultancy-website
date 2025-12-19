'use client';

import React from 'react';

const Hero = () => {
  return (
    <section className="section py-32 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #f0fdf4 100%)',
    }}>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #1e40af 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="mb-6 leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Start, Register & Grow<br />
            Your Business — <span className="gradient-text" style={{ 
              background: 'linear-gradient(135deg, #1e40af 0%, #059669 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '800'
            }}>The Easy Way</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            Simple, affordable online compliance services for Indian entrepreneurs.<br />
            <span className="text-blue-700 font-semibold">Company registration, GST, MSME, trademarks</span> — all handled by experts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <a 
              href="#services" 
              className="inline-block"
              style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                color: 'white',
                padding: '18px 48px',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '18px',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(30, 64, 175, 0.4)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(30, 64, 175, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(30, 64, 175, 0.4)';
              }}
            >
              🚀 Get Started Now
            </a>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                background: 'white',
                color: '#1e40af',
                padding: '18px 48px',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '18px',
                textDecoration: 'none',
                border: '2px solid #1e40af',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1e40af';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(30, 64, 175, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#1e40af';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
              }}
            >
              💬 Book Free Consultation
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-10 text-base">
            <div 
              className="flex items-center gap-3 px-6 py-3 rounded-full"
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
              }}
            >
              <span className="text-2xl">✓</span>
              <span className="font-semibold text-gray-800">
                <span className="text-green-600 font-bold">5000+</span> Happy Clients
              </span>
            </div>
            <div 
              className="flex items-center gap-3 px-6 py-3 rounded-full"
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
              }}
            >
              <span className="text-2xl">✓</span>
              <span className="font-semibold text-gray-800">
                <span className="text-blue-600 font-bold">100%</span> Online Process
              </span>
            </div>
            <div 
              className="flex items-center gap-3 px-6 py-3 rounded-full"
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
              }}
            >
              <span className="text-2xl">✓</span>
              <span className="font-semibold text-gray-800">
                <span className="text-purple-600 font-bold">Expert</span> Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
