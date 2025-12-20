'use client';

import React from 'react';

const EducationIntro = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-center mb-6 text-4xl md:text-5xl font-bold text-gray-900">
          Why Business <span className="gradient-text">Registration</span> Matters
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16 leading-relaxed max-w-4xl mx-auto">
          Most entrepreneurs don't realize the critical importance of proper registration until it's too late
        </p>

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

        <div className="card-premium max-w-4xl mx-auto">
          <h3 className="font-bold text-3xl mb-8 text-gray-900 text-center">
            Your Registration <span className="gradient-text">Timeline</span>
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Before You Start</h4>
                <p className="text-gray-700 leading-relaxed">
                  Many entrepreneurs skip this and face rejection, delays, or legal issues later. <strong>Get it right from day one.</strong>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl text-gray-900 mb-2">During Registration</h4>
                <p className="text-gray-700 leading-relaxed">
                  Incomplete or incorrect documentation causes 70% of registration delays. Our experts ensure 100% accuracy.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-xl text-gray-900 mb-2">After Registration</h4>
                <p className="text-gray-700 leading-relaxed">
                  Ongoing compliance is crucial. We provide continued support to keep your business legally protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationIntro;
