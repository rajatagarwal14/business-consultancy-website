'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: 'How long does company registration take?',
    answer: 'Private Limited Company registration typically takes 7-10 working days. GST and MSME registrations can be completed within 1-3 days.'
  },
  {
    question: 'Is everything done online?',
    answer: 'Yes, 100% online. You don\'t need to visit any government office. Just share your documents digitally, and we handle the rest.'
  },
  {
    question: 'What documents do I need?',
    answer: 'Basic documents include PAN card, Aadhaar, address proof, and passport-size photos. Specific requirements vary by service — we\'ll guide you through it.'
  },
  {
    question: 'Are there any hidden charges?',
    answer: 'No hidden charges. The price you see is the price you pay. Government fees (if any) are mentioned separately.'
  },
  {
    question: 'What if I need help after registration?',
    answer: 'We provide ongoing support for compliance, tax filing, annual returns, and any legal queries you may have.'
  },
  {
    question: 'Can I register a business from anywhere in India?',
    answer: 'Yes, our services are available pan-India. You can register your business from any state or city.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card" style={{ cursor: 'pointer' }}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                <span 
                  className="text-2xl text-blue-600 flex-shrink-0"
                  style={{
                    transition: 'transform 0.3s ease',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  ▼
                </span>
              </button>
              <div 
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  opacity: openIndex === index ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="mt-4 pt-4 text-gray-600 border-t border-gray-200">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
