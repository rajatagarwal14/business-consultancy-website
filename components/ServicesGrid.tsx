'use client';

import React, { useState } from 'react';

const services = [
  {
    title: 'Private Limited Company',
    icon: '🏢',
    price: '₹6,999',
    features: ['100% Online', '7-10 Days', 'Free Consultation'],
    popular: true,
    why: 'Protects personal assets, enables funding, builds credibility with investors',
    whoNeeds: 'Startups raising funding, tech companies, businesses with 2+ founders scaling',
    risk: 'Personal assets at risk in lawsuits. Cannot raise VC/angel funding without Pvt Ltd structure',
    penalty: 'Unlimited liability - personal property can be seized for business debts'
  },
  {
    title: 'GST Registration',
    icon: '📋',
    price: '₹1,999',
    features: ['Same Day Filing', 'Expert Guidance', 'Full Support'],
    why: 'Mandatory for most businesses. Enables input tax credit and interstate sales',
    whoNeeds: 'Amazon/Flipkart sellers, ₹40L+ service businesses, ₹20L+ goods traders, all interstate sellers',
    risk: 'Cannot sell online without GST. Blocked from marketplaces. Lost input tax credits',
    penalty: '₹10,000 fine + 10% of tax due + interest. Cannot claim ITC worth lakhs'
  },
  {
    title: 'Trademark Registration',
    icon: '™️',
    price: '₹4,999',
    features: ['Trademark Search', 'Complete Filing', 'Monitoring'],
    why: 'Legal ownership of your brand name/logo. Prevents competitors from copying',
    whoNeeds: 'Anyone with a unique brand name, logo, or product name they want to protect',
    risk: 'Competitors can register your brand. You lose rights. Costly legal disputes',
    penalty: 'No legal protection - anyone can use your brand name. Lose brand equity built over years'
  },
  {
    title: 'MSME/Udyam Registration',
    icon: '🏭',
    price: '₹999',
    features: ['Instant Process', 'Certificate', 'Government Portal'],
    why: 'Unlocks government subsidies, priority loans, tax exemptions worth lakhs',
    whoNeeds: 'Manufacturing/service businesses with investment under ₹50Cr',
    risk: 'Missing subsidies, lower interest rates, procurement preferences',
    penalty: 'Lost benefits worth ₹5-10L+: Priority loans, tax exemptions, tender preferences'
  },
  {
    title: 'Partnership Firm',
    icon: '🤝',
    price: '₹5,999',
    features: ['Deed Drafting', 'Registration', 'PAN Application'],
    why: 'Simple structure for 2-20 partners. Lower compliance than Pvt Ltd',
    whoNeeds: 'Professional services (doctors, CAs), family businesses, retail stores',
    risk: 'Unlimited liability for all partners. Hard to raise external funding',
    penalty: 'Personal assets of ALL partners at risk. Partnership disputes can bankrupt everyone'
  },
  {
    title: 'LLP Registration',
    icon: '⚖️',
    price: '₹7,999',
    features: ['Digital Process', '10-12 Days', 'Full Compliance'],
    popular: true,
    why: 'Limited liability + lower compliance. Best for professionals scaling',
    whoNeeds: 'CAs, architects, consultants, IT services wanting liability protection',
    risk: 'Partners personally liable without LLP. Higher compliance than partnership',
    penalty: 'Unlimited liability without LLP structure. Personal assets at risk'
  },
  {
    title: 'One Person Company',
    icon: '👤',
    price: '₹5,499',
    features: ['Solo Ownership', 'Limited Liability', 'Easy Setup'],
    why: 'Limited liability for solo entrepreneurs. Single-person Pvt Ltd',
    whoNeeds: 'Solo founders, freelancers scaling to agency, consultants',
    risk: 'No liability protection as proprietor. Hard to bring partners later',
    penalty: 'Personal assets exposed to business risks. No succession planning'
  },
  {
    title: 'ISO Certification',
    icon: '✅',
    price: '₹12,999',
    features: ['Audit Support', 'Documentation', 'Certification'],
    why: 'Required for tenders, exports, enterprise B2B. Quality standard proof',
    whoNeeds: 'Manufacturers supplying corporates, exporters, government contractors',
    risk: 'Cannot bid for tenders. Lose enterprise clients. No export opportunities',
    penalty: 'Lost tender opportunities worth crores. Excluded from government/PSU contracts'
  },
  {
    title: 'FSSAI License',
    icon: '🍽️',
    price: '₹2,499',
    features: ['Food License', 'Fast Approval', 'Renewal Support'],
    why: 'MANDATORY for all food businesses. Cannot operate legally without it',
    whoNeeds: 'Restaurants, cloud kitchens, food manufacturers, home bakers, packagers',
    risk: 'Business shutdown. Cannot sell on Swiggy/Zomato. Criminal prosecution',
    penalty: '₹5 lakh fine + up to 6 months jail. Immediate business closure by authorities'
  }
];

const ServicesGrid = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section id="services" className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl md:text-5xl">
            Our <span className="gradient-text">Compliance Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose your service below to understand <strong>why it matters</strong>, <strong>who needs it</strong>, and <strong>risks of non-compliance</strong>
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

                {/* Educational Content - Expandable */}
                <div className="text-left mb-6 space-y-4">
                  {/* Why It Matters */}
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <div className="font-bold text-blue-900 text-sm mb-2 flex items-center gap-2">
                      <span>💡</span> Why This Matters
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{service.why}</p>
                  </div>

                  {/* Who Needs This */}
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <div className="font-bold text-green-900 text-sm mb-2 flex items-center gap-2">
                      <span>👥</span> Who Needs This
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{service.whoNeeds}</p>
                  </div>

                  {/* Risk Warning */}
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <div className="font-bold text-red-900 text-sm mb-2 flex items-center gap-2">
                      <span>⚠️</span> Risk if Ignored
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed font-semibold">{service.penalty}</p>
                  </div>
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
                  href={`https://wa.me/919876543210?text=I need expert guidance on ${service.title}`}
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
                  📞 Get Expert Guidance
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Still confused about which services you need? <strong>Let us guide you.</strong>
          </p>
          <a 
            href="https://wa.me/919876543210?text=I need help choosing the right business registrations" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ fontSize: '18px', padding: '16px 40px' }}
          >
            📞 Book Free Consultation Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
