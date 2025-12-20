'use client';

import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-24 md:py-32">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-400/30 to-green-600/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-lg">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-gray-700">🏆 India's #1 Compliance Advisory Platform</span>
          </div>

          {/* Main heading */}
          <h1 className="mb-6 leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Expert Guidance for<br />
            <span className="relative inline-block">
              <span className="gradient-text">Business Compliance</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8C50 4 100 2 150 6C200 10 250 8 300 4" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1e40af" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            {' '}in India
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            We help entrepreneurs <strong className="text-gray-900">understand</strong> what they need,{' '}
            <strong className="text-gray-900">avoid costly mistakes</strong>, and{' '}
            <strong className="text-gray-900">register correctly</strong> the first time.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#quiz"
              className="btn-primary"
            >
              Start Free Assessment
            </a>
            <a
              href="tel:+919876543210"
              className="btn-secondary"
            >
              📞 Book Expert Consultation
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span>5000+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span>100% Online Process</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold text-xl">✓</span>
              <span>Expert Support 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
