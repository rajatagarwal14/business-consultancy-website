'use client';

import React from 'react';

const services = [
  {
    icon: '🏢',
    title: 'Company Registration',
    description: 'Register your Private Limited, LLP, OPC, or Partnership firm with complete documentation',
    price: '₹4,999',
    features: ['DIN & DSC', 'Name Approval', 'MOA & AOA', 'PAN & TAN']
  },
  {
    icon: '📊',
    title: 'GST Registration',
    description: 'Get your GSTIN within 7 days with expert guidance and complete documentation support',
    price: '₹999',
    features: ['Fast Processing', 'Expert Support', 'Document Help', 'Follow-up']
  },
  {
    icon: '🏭',
    title: 'MSME Registration',
    description: 'Udyam registration for MSMEs with government benefits and subsidies',
    price: '₹499',
    features: ['Udyam Certificate', 'Govt Benefits', 'Easy Loans', 'Tax Benefits']
  },
  {
    icon: '®️',
    title: 'Trademark Registration',
    description: 'Protect your brand with trademark registration in India with complete legal support',
    price: '₹4,999',
    features: ['Name Search', 'Filing', 'Objection Reply', 'Certificate']
  },
  {
    icon: '⭐',
    title: 'ISO Certification',
    description: 'Get ISO 9001, 14001, 27001 certification for your business with implementation support',
    price: '₹14,999',
    features: ['Documentation', 'Audit Support', 'Certificate', 'Training']
  },
  {
    icon: '💰',
    title: 'ITR Filing',
    description: 'File income tax returns for individuals and businesses with maximum refunds',
    price: '₹499',
    features: ['All ITR Forms', 'Max Refund', 'CA Verified', 'E-Filing']
  },
  {
    icon: '📜',
    title: 'Business License',
    description: 'Get various business licenses like Shop Act, Trade License, FSSAI with ease',
    price: '₹2,999',
    features: ['Shop Act', 'Trade License', 'FSSAI', 'Quick Process']
  },
  {
    icon: '🌍',
    title: 'IEC Registration',
    description: 'Import Export Code registration for international business within 3-5 days',
    price: '₹1,999',
    features: ['DGFT Portal', 'Fast Process', 'Expert Help', 'Support']
  },
  {
    icon: '📖',
    title: 'Accounting Services',
    description: 'Monthly bookkeeping, accounting, and financial reporting for your business',
    price: '₹2,999/mo',
    features: ['Bookkeeping', 'GST Filing', 'Payroll', 'Reports']
  }
];

const ServicesGrid = () => {
  return (
    <section id="services" className="section bg-gradient-to-b from-white to-gray-50 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-semibold text-sm mb-4">
            Our Services
          </span>
          <h2 className="heading-lg text-gray-900 mb-4">
            Complete Business <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From registration to compliance, we provide end-to-end business services at transparent pricing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-premium group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Starting at</div>
                  <div className="text-2xl font-bold gradient-text">{service.price}</div>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fadeInUp delay-500">
          <p className="text-gray-600 mb-6">
            Can&apos;t find what you&apos;re looking for? We offer customized solutions too!
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium btn-secondary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Talk to Our Expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
