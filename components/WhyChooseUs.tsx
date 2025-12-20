'use client';

import React from 'react';

const features = [
  {
    icon: '🎓',
    title: 'Expert Guidance',
    description: 'Industry professionals with years of experience in business registration',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: '💻',
    title: 'Online Process',
    description: 'Complete your registration from the comfort of your home',
    gradient: 'from-green-500 to-green-600'
  },
  {
    icon: '💰',
    title: 'Transparent Pricing',
    description: 'No hidden charges. Clear pricing for all our services',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: '⚡',
    title: 'Fast Processing',
    description: 'Quick turnaround time with regular status updates',
    gradient: 'from-orange-500 to-orange-600'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Why Choose <span className="gradient-text">Us?</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-premium text-center group">
              <div className={`icon-wrapper mx-auto bg-gradient-to-br ${feature.gradient}`}>
                <span className="text-4xl">{feature.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
