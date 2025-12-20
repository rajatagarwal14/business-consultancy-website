'use client';

import React from 'react';

const FinalCTA = () => {
  return (
    <section className="section bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your <br/>Business Journey? 🚀
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
            Join <span className="font-bold">5,000+ entrepreneurs</span> who trust us for their business registration needs.<br/>
            <span className="font-semibold">Get started today — it takes just 2 minutes.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-3">
              <span className="text-2xl">💬</span> Start on WhatsApp
            </a>
            <a href="#services" className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/30 transition-all duration-300 inline-flex items-center justify-center gap-3">
              <span className="text-2xl">📋</span> View All Services
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-extrabold mb-2">5000+</div>
              <div className="opacity-90">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-extrabold mb-2">4.9/5</div>
              <div className="opacity-90">Average Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-extrabold mb-2">7-10</div>
              <div className="opacity-90">Days Average</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
