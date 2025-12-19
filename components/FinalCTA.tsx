'use client';

import React from 'react';

const FinalCTA = () => {
  return (
    <section 
      className="section py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #059669 100%)'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6 text-4xl md:text-5xl font-extrabold leading-tight">
            Ready to Start Your<br />
            Business Journey? 🚀
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
            Join <span className="text-white font-bold">5,000+ entrepreneurs</span> who trust us for their business registration needs.<br />
            <span className="text-green-200 font-semibold">Get started today — it takes just 2 minutes.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
              }}
            >
              💬 Start on WhatsApp
            </a>
            <a 
              href="#services"
              style={{
                background: 'transparent',
                color: 'white',
                padding: '18px 48px',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '18px',
                textDecoration: 'none',
                border: '2px solid white',
                boxShadow: '0 4px 16px rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#1e40af';
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              📋 View All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
