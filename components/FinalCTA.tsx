'use client';

import React from 'react';

const FinalCTA = () => {
  return (
    <section className="section bg-primary text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6">
            Ready to Start Your Business Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of entrepreneurs who trust us for their business registration needs. Get started today — it takes just 2 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn bg-white text-primary hover:bg-gray-100">
              Start on WhatsApp
            </a>
            <a href="#services" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
              View All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
