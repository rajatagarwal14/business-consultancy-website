'use client';

import React from 'react';
import Link from 'next/link';

const services = [
  {
    title: 'Private Limited Company',
    description: 'Limited liability, easy funding, separate legal entity',
    icon: '🏢',
    urgency: 'important' as const,
    slug: 'private-limited-company'
  },
  {
    title: 'GST Registration',
    description: 'Mandatory for businesses with turnover > ₹40L',
    icon: '📋',
    urgency: 'critical' as const,
    slug: 'gst-registration'
  },
  {
    title: 'Trademark Registration',
    description: 'Protect your brand identity and logo legally',
    icon: '™️',
    urgency: 'beneficial' as const,
    slug: 'trademark-registration'
  },
  {
    title: 'MSME/Udyam Registration',
    description: 'Get government benefits, subsidies, and easier loans',
    icon: '🏭',
    urgency: 'beneficial' as const,
    slug: 'msme-registration'
  },
  {
    title: 'Partnership Firm',
    description: 'Ideal for 2+ partners sharing profits and losses',
    icon: '🤝',
    urgency: 'important' as const,
    slug: 'partnership-firm'
  },
  {
    title: 'LLP Registration',
    description: 'Limited liability with partnership flexibility',
    icon: '⚖️',
    urgency: 'important' as const,
    slug: 'llp-registration'
  },
  {
    title: 'One Person Company',
    description: 'Single owner with limited liability protection',
    icon: '👤',
    urgency: 'important' as const,
    slug: 'one-person-company'
  },
  {
    title: 'Digital Signature (DSC)',
    description: 'Required for online filing of company documents',
    icon: '✅',
    urgency: 'mandatory' as const,
    slug: 'digital-signature'
  },
  {
    title: 'FSSAI License',
    description: 'Mandatory for all food businesses in India',
    icon: '🍽️',
    urgency: 'critical' as const,
    slug: 'fssai-license'
  }
];

const urgencyColors = {
  critical: 'border-red-600 bg-red-50',
  mandatory: 'border-orange-500 bg-orange-50',
  important: 'border-blue-600 bg-blue-50',
  beneficial: 'border-green-600 bg-green-50'
};

const ServicesGrid = () => {
  return (
    <section className="section bg-gray-50" id="services">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the right registration for your business needs
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-red-600 rounded"></div>
              <span className="text-gray-700 font-medium">Critical - Jail Risk</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-orange-500 rounded"></div>
              <span className="text-gray-700 font-medium">Mandatory - High Penalty</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-600 rounded"></div>
              <span className="text-gray-700 font-medium">Important - Liability Risk</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-600 rounded"></div>
              <span className="text-gray-700 font-medium">Beneficial - Optional</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link href={`/services/${service.slug}`} key={index}>
              <div className={`card-premium relative border-l-4 ${urgencyColors[service.urgency]} hover:scale-105 transition-all duration-300 cursor-pointer h-full`}>
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                
                <div className="mt-6 inline-flex items-center text-blue-600 font-semibold group-hover:gap-3 transition-all">
                  Learn More 
                  <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
