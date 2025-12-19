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
