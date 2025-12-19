#!/bin/bash

# Hero Section
cat > components/sections/Hero.tsx << 'EOFHERO'
'use client';
import React from 'react';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Start, Register & Grow Your Business — <span className="text-[#1E40AF]">The Easy Way</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Complete online compliance services for Indian entrepreneurs. From company registration to GST filing — we handle it all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/services" size="lg">Get Started Now</Button>
            <Button href="/consultation" variant="outline" size="lg">Book Free Consultation</Button>
          </div>
          
          <div className="mt-16">
            <div className="inline-block p-8 bg-white rounded-2xl shadow-xl">
              <svg className="w-48 h-48 mx-auto text-[#1E40AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
EOFHERO

# Services Grid
cat > components/sections/ServicesGrid.tsx << 'EOFSERVICES'
import React from 'react';

const services = [
  { title: 'Company Registration', desc: 'Start your Private Limited, LLP, or OPC', icon: '🏢' },
  { title: 'GST Registration', desc: 'Get your GSTIN in 3-5 days', icon: '📝' },
  { title: 'MSME Registration', desc: 'Udyam registration for benefits', icon: '🏭' },
  { title: 'Trademark Registration', desc: 'Protect your brand legally', icon: '™️' },
  { title: 'Income Tax Filing', desc: 'Expert ITR filing services', icon: '💼' },
  { title: 'Annual Compliance', desc: 'ROC filings & returns', icon: '📊' },
  { title: 'Accounting & Bookkeeping', desc: 'Professional financial management', icon: '💰' },
  { title: 'Business Licenses', desc: 'FSSAI, Import-Export & more', icon: '📜' },
  { title: 'RTI Filing', desc: 'Right to Information assistance', icon: '📋' },
];

export const ServicesGrid = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600">Everything you need to run a compliant business in India</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition cursor-pointer group">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1E40AF] transition">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/services" className="text-[#1E40AF] font-semibold text-lg hover:underline">
            View All Services →
          </a>
        </div>
      </div>
    </section>
  );
};
EOFSERVICES

# Why Choose Us
cat > components/sections/WhyChooseUs.tsx << 'EOFWHY'
import React from 'react';

const features = [
  { title: 'Affordable & Transparent', desc: 'No hidden charges, clear pricing', icon: '💵' },
  { title: 'Expert Team', desc: 'CAs, CSs & legal professionals', icon: '👨‍💼' },
  { title: '100% Online', desc: 'Complete process from home', icon: '💻' },
  { title: 'Fast Turnaround', desc: 'Quick processing & delivery', icon: '⚡' },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
EOFWHY

chmod +x setup-components.sh
./setup-components.sh
