'use client';

import React from 'react';

const services = [
  {
    title: 'Private Limited Company',
    icon: '🏢',
    price: '₹6,999',
    features: ['100% Online', '7-10 Days', 'Free Consultation'],
    popular: true
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
    features: ['Digital Process', '10-12 Days', 'Full Compliance'],
    popular: true
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
    icon: '��️',
    price: '₹2,499',
    features: ['Food License', 'Fast Approval', 'Renewal Support']
  }
];

const ServicesGrid = () => {
  return (
    <section id="services" className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl md:text-5xl">
            Our <span className="gradient-text">Premium Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to start and run your business — all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative group"
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '32px 24px',
                border: service.popular ? '2px solid transparent' : '1px solid #e5e7eb',
                backgroundImage: service.popular 
                  ? 'linear-gradient(white, white), linear-gradient(135deg, #1e40af 0%, #059669 100%)'
                  : 'none',
                backgroundOrigin: 'border-box',
                backgroundClip: service.popular ? 'padding-box, border-box' : 'padding-box',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(30, 64, 175, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
              }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                  style={{
                    background: 'linear-gradient(135deg, #1e40af 0%, #059669 100%)',
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: '0.5px',
                    boxShadow: '0 4px 12px rgba(30, 64, 175, 0.3)'
                  }}
                >
                  ⭐ MOST POPULAR
                </div>
              )}

              <div className="text-center">
                {/* Icon with colored background */}
                <div 
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
                  style={{
                    background: service.popular 
                      ? 'linear-gradient(135deg, #dbeafe 0%, #d1fae5 100%)'
                      : '#f3f4f6',
                    fontSize: '40px'
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3" style={{ minHeight: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {service.title}
                </h3>

                {/* Price Badge */}
                <div 
                  className="inline-block mb-6"
                  style={{
                    background: service.popular 
                      ? 'linear-gradient(135deg, #1e40af 0%, #059669 100%)'
                      : '#eff6ff',
                    color: service.popular ? 'white' : '#1e40af',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    fontSize: '32px',
                    fontWeight: '800',
                    boxShadow: service.popular ? '0 4px 16px rgba(30, 64, 175, 0.3)' : 'none'
                  }}
                >
                  {service.price}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center gap-2 text-gray-700">
                      <span 
                        className="flex-shrink-0"
                        style={{
                          color: '#059669',
                          fontSize: '18px',
                          fontWeight: 'bold'
                        }}
                      >
                        ✓
                      </span>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a 
                  href={`https://wa.me/919876543210?text=I'm interested in ${service.title}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                  style={{
                    background: service.popular 
                      ? 'linear-gradient(135deg, #1e40af 0%, #059669 100%)'
                      : '#1e40af',
                    color: 'white',
                    padding: '14px 28px',
                    borderRadius: '10px',
                    fontWeight: '700',
                    fontSize: '16px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(30, 64, 175, 0.3)',
                    display: 'block',
                    textAlign: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(30, 64, 175, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 64, 175, 0.3)';
                  }}
                >
                  Get Started →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Not sure which service you need? <strong>We'll help you choose!</strong>
          </p>
          <a 
            href="https://wa.me/919876543210" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ fontSize: '18px', padding: '16px 40px' }}
          >
            📞 Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
