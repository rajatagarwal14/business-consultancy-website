'use client';

import React from 'react';

const EducationIntro = () => {
  return (
    <section className="section bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h2 className="text-center mb-6 text-3xl md:text-4xl font-extrabold text-gray-900">
            Understanding Business Registration in India
          </h2>
          
          <p className="text-center text-xl text-gray-600 mb-12 leading-relaxed">
            Starting a business in India requires more than just a great idea. Legal compliance isn't optional—it's your foundation for growth, credibility, and protection.
          </p>

          {/* Key Points Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚠️</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Why It Matters</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Operating without proper registration exposes you to <strong className="text-red-600">penalties up to ₹5 lakhs</strong>, legal disputes, and business shutdown.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Protection First</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Proper structure protects your <strong className="text-blue-600">personal assets</strong>, enables funding, and builds trust with clients and investors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Growth Enabler</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Compliance unlocks <strong className="text-green-600">government benefits</strong>, bank loans, GST credits, and access to larger markets.
              </p>
            </div>
          </div>

          {/* Registration Timeline Context */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="font-bold text-xl mb-6 text-gray-900 text-center">
              When Should You Register?
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Before You Start</h4>
                  <p className="text-gray-600 text-sm">
                    <strong>Trademark</strong> (if unique brand), <strong>Business Structure</strong> (Pvt Ltd/LLP/Partnership), <strong>FSSAI</strong> (food businesses - mandatory before first sale)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Within First Month</h4>
                  <p className="text-gray-600 text-sm">
                    <strong>GST</strong> (if turnover exceeds limits or selling online), <strong>MSME/Udyam</strong> (for government benefits)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">When Scaling</h4>
                  <p className="text-gray-600 text-sm">
                    <strong>ISO Certification</strong> (for enterprise clients/exports), <strong>Private Limited</strong> (before raising funding)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <p className="text-gray-700 mb-4 font-medium">
              Not sure which registrations you need?
            </p>
            <a 
              href="https://wa.me/919876543210?text=I need help understanding which business registrations I need" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
              style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #059669 100%)',
                color: 'white',
                padding: '16px 40px',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '16px',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(30, 64, 175, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(30, 64, 175, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(30, 64, 175, 0.3)';
              }}
            >
              📞 Talk to a Compliance Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationIntro;
