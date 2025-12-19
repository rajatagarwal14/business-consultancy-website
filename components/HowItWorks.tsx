import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Choose Your Service',
    description: 'Browse our services and select the one that fits your business needs'
  },
  {
    number: '02',
    title: 'Submit Documents Online',
    description: 'Upload required documents securely through our platform'
  },
  {
    number: '03',
    title: 'We File with Authorities',
    description: 'Our experts handle all paperwork and government filings'
  },
  {
    number: '04',
    title: 'Receive Certificates',
    description: 'Get your registration certificates delivered digitally'
  }
];

const HowItWorks = () => {
  return (
    <section className="section bg-gradient-to-br from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Getting started is easy. Follow these simple steps to register your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 h-full border border-white/20">
                <div className="text-6xl font-bold text-white/30 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-blue-100 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg className="w-8 h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
