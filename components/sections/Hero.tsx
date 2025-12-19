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
