'use client';

import React from 'react';

const EducationIntro = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Main Headline */}
        <h2 className="text-center mb-6 text-4xl md:text-5xl font-bold text-gray-900">
          Understanding Business Registration in India
        </h2>
        
        <p className="text-center text-xl text-gray-600 mb-16 leading-relaxed max-w-4xl mx-auto">
          Starting a business in India requires more than just a great idea. Legal compliance isn't optional—it's your foundation for growth, credibility, and protection.
        </p>

        {/* Key Points Grid - Consistent Card Style */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card-premium text-center group">
            <div className="icon-wrapper mx-auto mb-6 bg-gradient-to-br from-red-50 to-red-100">
              <span className="text-3xl">⚠️</span>
            </div>
            <h3 className="font-bold text-2xl mb-4 text-gray-900">Why It Matters</h3>
            <p className="text-gray-600 leading-relaxed">
              Operating without proper registration exposes you to <strong className="text-red-600">penalties up to ₹5 lakhs</strong>, legal disputes, and business shutdown.
            </p>
          </div>

          <div className="card-premium text-center group">
            <div className="icon-wrapper mx-auto mb-6 bg-gradient-to-br from-blue-50 to-blue-100">
              <span className="text-3xl">🛡️</span>
            </div>
            <h3 className="font-bold text-2xl mb-4 text-gray-900">Protection First</h3>
            <p className="text-gray-600 leading-relaxed">
              Proper structure protects your <strong className="text-blue-600">personal assets</strong>, enables funding, and builds trust with clients and investors.
            </p>
          </div>

          <div className="card-premium text-center group">
            <div className="icon-wrapper mx-auto mb-6 bg-gradient-to-br from-green-50 to-green-100">
              <span className="text-3xl">✓</span>
            </div>
            <h3 className="font-bold text-2xl mb-4 text-gray-900">Growth Enabler</h3>
            <p className="text-gray-600 leading-relaxed">
              Compliance unlocks <strong className="text-green-600">government benefits</strong>, bank loans, GST credits, and access to larger markets.
            </p>
          </div>
        </div>

        {/* Registration Timeline - Premium Card */}
        <div className="card-premium max-w-4xl mx-auto">
          <h3 className="font-bold text-3xl mb-8 text-gray-900 text-center">
            When Should You Register?
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Before You Start</h4>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Trademark</strong> (if unique brand), <strong>Business Structure</strong> (Pvt Ltd/LLP/Partnership), <strong>FSSAI</strong> (food businesses - mandatory before first sale)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Within First Month</h4>
                <p className="text-gray-700 leading-relaxed">
                  <strong>GST</strong> (if turnover exceeds limits or selling online), <strong>MSME/Udyam</strong> (for government benefits)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl text-gray-900 mb-2">When Scaling</h4>
                <p className="text-gray-700 leading-relaxed">
                  <strong>ISO Certification</strong> (for enterprise clients/exports), <strong>Private Limited</strong> (before raising funding)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-6 font-semibold text-lg">
            Not sure which registrations you need?
          </p>
          <a 
            href="#services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            💡 Take Our Free Quiz
          </a>
        </div>
      </div>
    </section>
  );
};

export default EducationIntro;
