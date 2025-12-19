'use client';

import React from 'react';

const services = [
  {
    title: 'Private Limited Company',
    icon: '🏢',
    price: '₹6,999',
    features: ['100% Online', '7-10 Days', 'Free Consultation']
  },
  {
    title: 'GST Registration',
    icon: '📋',
    price: '₹1,999',
    features: ['Same Day Filing', 'Expert Guidance', 'Full Support']
  },
  {
    title: 'Trademark Registration',
    icon: '™️',
    price: '₹4,999',
    features: ['Trademark Search', 'Complete Filing', 'Monitoring']
  },
  {
    title: 'MSME/Udyam Registration',
    icon: '🏭',
    price: '₹999',
    features: ['Instant Process', 'Certificate', 'Government Portal']
  },
  {
    title: 'Partnership Firm',
    icon: '🤝',
    price: '₹5,999',
    features: ['Deed Drafting', 'Registration', 'PAN Application']
  },
  {
    title: 'LLP Registration',
    icon: '⚖️',
    price: '₹7,999',
    features: ['Digital Process', '10-12 Days', 'Full Compliance']
  },
  {
    title: 'One Person Company',
    icon: '👤',
    price: '₹5,499',
    features: ['Solo Ownership', 'Limited Liability', 'Easy Setup']
  },
  {
    title: 'ISO Certification',
    icon: '✅',
    price: '₹12,999',
    features: ['Audit Support', 'Documentation', 'Certification']
  },
  {
    title: 'FSSAI License',
    icon: '🍽️',
    price: '₹2,499',
    features: ['Food License', 'Fast Approval', 'Renewal Support']
  }
];

const ServicesGrid = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to start and run your business — all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card text-center">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <div className="text-3xl font-bold text-primary mb-4">{service.price}</div>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center justify-center gap-2">
                    <span className="text-green-600 text-sm">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={`https://wa.me/919876543210?text=I'm interested in ${service.title}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
