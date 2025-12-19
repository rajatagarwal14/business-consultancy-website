'use client';

import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Choose Your Service',
    description: 'Select the business registration service you need from our comprehensive list'
  },
  {
    number: '2',
    title: 'Share Your Details',
    description: 'Fill out a simple online form or chat with our experts on WhatsApp'
  },
  {
    number: '3',
    title: 'We Handle Everything',
    description: 'Our team prepares documents, files applications, and tracks progress'
  },
  {
    number: '4',
    title: 'Get Your Certificate',
    description: 'Receive your registration certificate and start your business legally'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started is easy — just 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Step Number Circle */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                {step.number}
              </div>
              
              {/* Connecting Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200" style={{ transform: 'translateX(0%)' }} />
              )}
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Start Your Business Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
