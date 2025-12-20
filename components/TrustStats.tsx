'use client';

import React from 'react';

const stats = [
  {
    icon: '👥',
    number: '5000+',
    label: 'Happy Clients',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: '⭐',
    number: '4.9/5',
    label: 'Average Rating',
    gradient: 'from-yellow-500 to-orange-600'
  },
  {
    icon: '💻',
    number: '100%',
    label: 'Online Process',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: '⚡',
    number: '7-10',
    label: 'Days Average',
    gradient: 'from-purple-500 to-pink-600'
  }
];

const TrustStats = () => {
  return (
    <section className="section bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join India's fastest-growing community of registered businesses
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="card-premium text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className={`icon-wrapper mx-auto mb-4 bg-gradient-to-br ${stat.gradient}`}>
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm md:text-base font-semibold text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-2xl">🏆</span>
            </div>
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
