'use client';

import React from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    business: 'E-commerce Startup',
    text: 'Excellent service! They made GST registration so simple. Highly recommended for new businesses.'
  },
  {
    name: 'Rahul Verma',
    business: 'Consulting Firm',
    text: 'Professional team, quick processing. Got my Private Limited Company registered within a week.'
  },
  {
    name: 'Anjali Patel',
    business: 'Online Retailer',
    text: 'Very helpful and transparent. They guided me through the entire trademark registration process.'
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What Our <span className="gradient-text">Clients Say</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-premium">
              <div className="text-2xl mb-4">
                {'⭐'.repeat(5)}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                <p className="text-blue-600 font-semibold">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-green-50 px-8 py-4 rounded-2xl border border-blue-200">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-2xl">✓</span>
            </div>
            <span className="text-gray-900 font-bold text-lg">5000+ Happy Clients | 4.9/5 Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
