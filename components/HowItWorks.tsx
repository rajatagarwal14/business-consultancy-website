'use client';

import React from 'react';

const steps = [
  {
    icon: '🎯',
    title: 'Choose Your Service',
    description: 'Select the registration service that fits your business needs from our comprehensive list'
  },
  {
    icon: '📝',
    title: 'Submit Documents',
    description: 'Upload required documents through our secure platform or share via WhatsApp'
  },
  {
    icon: '⚙️',
    title: 'We Process',
    description: 'Our experts handle all paperwork, filing, and follow-ups with government authorities'
  },
  {
    icon: '🎉',
    title: 'Get Registered',
    description: 'Receive your registration certificate and start your business legally'
  }
];

const HowItWorks = () => {
  return (
    <section className="section">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          How It <span className="gradient-text">Works</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="card-premium relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {index + 1}
              </div>
              <div className="icon-wrapper mb-6 bg-gradient-to-br from-blue-500 to-green-500">
                <span className="text-3xl">{step.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Get Started Now →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
