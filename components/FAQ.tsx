'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: 'How long does company registration take?',
    answer: 'Typically, company registration takes 7-14 working days depending on government processing times. We ensure all documents are properly filed to avoid any delays.'
  },
  {
    question: 'Is the entire process really online?',
    answer: 'Yes! Our entire process is 100% online. You can submit documents, track progress, and receive certificates digitally without visiting any office.'
  },
  {
    question: 'What documents do I need for registration?',
    answer: 'Basic documents include PAN card, Aadhaar card, address proof, and photographs. Specific requirements vary by service type. Our team will guide you through the exact requirements.'
  },
  {
    question: 'Are there any hidden charges?',
    answer: 'No hidden charges at all. Our pricing is completely transparent. The price you see includes all our service fees. Government fees are clearly mentioned separately.'
  },
  {
    question: 'Do you provide support after registration?',
    answer: 'Absolutely! We provide ongoing support for compliance, filing requirements, and any queries you may have even after your registration is complete.'
  },
  {
    question: 'Can I register from anywhere in India?',
    answer: 'Yes, we serve clients across all states in India. Our online process makes it possible to register your business from anywhere in the country.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
