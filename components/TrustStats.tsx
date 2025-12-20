'use client';

import React from 'react';

const stats = [
  {
    number: '5,000+',
    label: 'Happy Clients',
    icon: '👥',
    color: '#1e40af'
  },
  {
    number: '4.9/5',
    label: 'Average Rating',
    icon: '⭐',
    color: '#059669'
  },
  {
    number: '100%',
    label: 'Online Process',
    icon: '💻',
    color: '#FF6B35'
  },
  {
    number: '7-10',
    label: 'Days Average',
    icon: '⚡',
    color: '#dc2626'
  }
];

const TrustStats = () => {
  return (
    <section className="section bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've helped over 5,000 Indian entrepreneurs successfully register and grow their businesses
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative"
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '40px 20px',
                textAlign: 'center',
                border: `3px solid ${stat.color}20`,
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = `0 12px 32px ${stat.color}40`;
                e.currentTarget.style.borderColor = `${stat.color}80`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = `${stat.color}20`;
              }}
            >
              {/* Icon with gradient background */}
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto"
                style={{
                  background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}40)`,
                  fontSize: '32px'
                }}
              >
                {stat.icon}
              </div>

              {/* Number */}
              <div 
                className="text-5xl md:text-6xl font-extrabold mb-2"
                style={{ 
                  color: stat.color,
                  lineHeight: '1',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                {stat.number}
              </div>

              {/* Label */}
              <div 
                className="text-sm md:text-base font-semibold text-gray-600"
                style={{
                  letterSpacing: '0.5px'
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #1e40af15, #05966915)',
              border: '2px solid #1e40af30'
            }}
          >
            <span className="text-3xl">🏆</span>
            <div className="text-left">
              <div className="font-bold text-gray-900 text-lg">Certified Business Advisors</div>
              <div className="text-sm text-gray-600">Recognized by Ministry of Corporate Affairs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
