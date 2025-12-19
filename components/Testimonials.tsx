'use client';

import React from 'react';

const testimonials = [
  {
    name: 'Raj Patel',
    location: 'Mumbai',
    rating: 5,
    text: 'Excellent service! They helped me register my company in just 10 days. The team was very professional and guided me through every step.',
    business: 'Tech Startup'
  },
  {
    name: 'Priya Sharma',
    location: 'Delhi',
    rating: 5,
    text: 'Very affordable and transparent pricing. No hidden charges. Got my GST registration done smoothly without any hassle.',
    business: 'E-commerce Store'
  },
  {
    name: 'Amit Kumar',
    location: 'Bangalore',
    rating: 5,
    text: 'Highly recommend! Their online process made everything so easy. I did not have to visit any office. Everything was done from home.',
    business: 'Manufacturing Unit'
  },
  {
    name: 'Neha Gupta',
    location: 'Pune',
    rating: 5,
    text: 'Best consultancy for business registration. They handled my trademark registration perfectly. Great support team!',
    business: 'Fashion Brand'
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied entrepreneurs who trust us with their business registrations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.business}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-full">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 font-medium">
              5000+ Happy Clients | 4.9/5 Average Rating
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
