'use client';

import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Choose Service',
    description: 'Select the service you need from our comprehensive range of business solutions',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Submit Documents',
    description: 'Upload required documents online through our secure platform or WhatsApp',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'We Process & File',
    description: 'Our experts handle all paperwork, filing, and follow-ups with government authorities',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Receive Certificates',
    description: 'Get your certificates and documents delivered to your email within 7 days',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  }
];

const HowItWorks = () => {
  return (
    <section id="process" className="section gradient-hero relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-sm mb-4">
            How It Works
          </span>
          <h2 className="heading-lg text-white mb-4">
            Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">4-Step Process</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Get your business registered in just 4 simple steps with complete online process
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fadeInUp"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-white/30 to-transparent transform translate-x-4"></div>
                )}
                
                <div className="glass-dark rounded-3xl p-8 text-center h-full backdrop-blur-xl hover:scale-105 transition-all duration-300">
                  {/* Number Badge */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-xl">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-white/90 flex justify-center mb-6">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fadeInUp delay-500">
          <a
            href="#services"
            className="btn-premium btn-primary inline-flex items-center gap-2"
          >
            <span>Start Your Business Journey</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
