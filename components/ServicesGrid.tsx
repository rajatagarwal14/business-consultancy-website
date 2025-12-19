import React from 'react';
import Link from 'next/link';

const services = [
  {
    name: 'Company Registration',
    description: 'Register your Private Limited, LLP, OPC, or Partnership firm hassle-free',
    icon: '🏢',
    href: '/services/company-registration',
    price: 'Starting ₹4,999'
  },
  {
    name: 'GST Registration',
    description: 'Quick GST registration for all business types across India',
    icon: '📋',
    href: '/services/gst-registration',
    price: 'Starting ₹999'
  },
  {
    name: 'MSME Registration',
    description: 'Get Udyam MSME certificate online in 48 hours',
    icon: '🏭',
    href: '/services/msme-registration',
    price: 'Starting ₹499'
  },
  {
    name: 'Trademark Registration',
    description: 'Protect your brand name and logo with trademark registration',
    icon: '®️',
    href: '/services/trademark-registration',
    price: 'Starting ₹4,999'
  },
  {
    name: 'ISO Certification',
    description: 'Get ISO 9001, ISO 14001, ISO 27001 certifications',
    icon: '🎖️',
    href: '/services/iso-certification',
    price: 'Starting ₹14,999'
  },
  {
    name: 'ITR Filing',
    description: 'Expert income tax return filing services for individuals and businesses',
    icon: '💰',
    href: '/services/itr-filing',
    price: 'Starting ₹499'
  },
  {
    name: 'Business License',
    description: 'Obtain necessary licenses for your business operations',
    icon: '📜',
    href: '/services/business-license',
    price: 'Starting ₹2,999'
  },
  {
    name: 'Import Export Code',
    description: 'Get IEC for international trade and customs clearance',
    icon: '🌐',
    href: '/services/iec',
    price: 'Starting ₹1,999'
  },
  {
    name: 'Accounting Services',
    description: 'Professional bookkeeping and accounting for your business',
    icon: '📊',
    href: '/services/accounting',
    price: 'Starting ₹2,999/month'
  }
];

const ServicesGrid = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive business registration and compliance services to help you start and grow your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-semibold text-sm">{service.price}</span>
                <span className="text-blue-600 font-medium text-sm group-hover:translate-x-2 transition-transform inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors"
          >
            View All Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
