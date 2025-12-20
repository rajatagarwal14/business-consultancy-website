'use client';

import React, { useState } from 'react';

type BusinessType = 'solo' | 'partnership' | 'startup' | 'existing' | null;
type Industry = 'food' | 'tech' | 'manufacturing' | 'retail' | 'services' | null;
type OnlineSales = 'yes' | 'no' | null;
type Revenue = 'under20' | '20to40' | 'over40' | null;

interface Recommendation {
  service: string;
  urgency: 'critical' | 'mandatory' | 'important' | 'beneficial';
  timing: 'before' | 'first-month' | 'scaling';
  price: string;
  reason: string;
}

const DecisionQuiz = () => {
  const [businessType, setBusinessType] = useState<BusinessType>(null);
  const [industry, setIndustry] = useState<Industry>(null);
  const [onlineSales, setOnlineSales] = useState<OnlineSales>(null);
  const [revenue, setRevenue] = useState<Revenue>(null);
  const [showResults, setShowResults] = useState(false);

  const getRecommendations = (): Recommendation[] => {
    const recommendations: Recommendation[] = [];

    // Food industry - FSSAI is CRITICAL
    if (industry === 'food') {
      recommendations.push({
        service: 'FSSAI License',
        urgency: 'critical',
        timing: 'before',
        price: '₹2,499',
        reason: '⚠️ MANDATORY - Cannot operate legally. ₹5L fine + jail risk'
      });
    }

    // Online sales or high revenue - GST is MANDATORY
    if (onlineSales === 'yes' || revenue === '20to40' || revenue === 'over40') {
      recommendations.push({
        service: 'GST Registration',
        urgency: 'mandatory',
        timing: 'before',
        price: '₹1,999',
        reason: 'Required for online marketplaces and businesses over ₹20L/40L'
      });
    }

    // Business structure recommendations
    if (businessType === 'solo') {
      recommendations.push({
        service: 'One Person Company',
        urgency: 'important',
        timing: 'before',
        price: '₹5,499',
        reason: 'Limited liability protection for solo entrepreneurs'
      });
    } else if (businessType === 'partnership') {
      recommendations.push({
        service: 'LLP Registration',
        urgency: 'important',
        timing: 'before',
        price: '₹7,999',
        reason: 'Limited liability + lower compliance for partners'
      });
    } else if (businessType === 'startup') {
      recommendations.push({
        service: 'Private Limited Company',
        urgency: 'important',
        timing: 'before',
        price: '₹6,999',
        reason: 'Required for VC/angel funding and investor credibility'
      });
    }

    // Trademark for tech/retail with online presence
    if ((industry === 'tech' || industry === 'retail') && onlineSales === 'yes') {
      recommendations.push({
        service: 'Trademark Registration',
        urgency: 'beneficial',
        timing: 'first-month',
        price: '₹4,999',
        reason: 'Protect your brand name before competitors register it'
      });
    }

    // MSME for manufacturing or eligible businesses
    if (industry === 'manufacturing' || industry === 'services') {
      recommendations.push({
        service: 'MSME/Udyam Registration',
        urgency: 'beneficial',
        timing: 'scaling',
        price: '₹999',
        reason: 'Unlock subsidies, priority loans worth ₹5-10L+'
      });
    }

    // ISO for manufacturing B2B
    if (industry === 'manufacturing') {
      recommendations.push({
        service: 'ISO Certification',
        urgency: 'beneficial',
        timing: 'scaling',
        price: '₹12,999',
        reason: 'Required for tenders and enterprise B2B sales'
      });
    }

    return recommendations;
  };

  const handleSubmit = () => {
    if (businessType && industry && onlineSales && revenue) {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setBusinessType(null);
    setIndustry(null);
    setOnlineSales(null);
    setRevenue(null);
    setShowResults(false);
  };

  const recommendations = showResults ? getRecommendations() : [];
  const totalCost = recommendations.reduce((sum, rec) => {
    return sum + parseInt(rec.price.replace(/[₹,]/g, ''));
  }, 0);

  const urgencyColors = {
    critical: '#dc2626',
    mandatory: '#FF6B35',
    important: '#1e40af',
    beneficial: '#059669'
  };

  const timingLabels = {
    before: 'Before You Start',
    'first-month': 'Within First Month',
    scaling: 'When Scaling'
  };

  if (showResults) {
    return (
      <section className="section bg-gradient-to-b from-blue-50 to-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your <span className="gradient-text">Personalized Compliance Roadmap</span>
            </h2>
            <p className="text-xl text-gray-600">
              Based on your answers, here's what you need and when
            </p>
          </div>

          {/* Recommendations by Timeline */}
          {(['before', 'first-month', 'scaling'] as const).map((timing) => {
            const recs = recommendations.filter((r) => r.timing === timing);
            if (recs.length === 0) return null;

            return (
              <div key={timing} className="mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">
                    {timing === 'before' && '🚀'}
                    {timing === 'first-month' && '📅'}
                    {timing === 'scaling' && '📈'}
                  </span>
                  {timingLabels[timing]}
                </h3>

                <div className="space-y-4">
                  {recs.map((rec, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-2xl"
                      style={{
                        background: 'white',
                        border: `3px solid ${urgencyColors[rec.urgency]}`,
                        boxShadow: `0 4px 20px ${urgencyColors[rec.urgency]}20`
                      }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-xl font-bold">{rec.service}</h4>
                            <span
                              className="px-3 py-1 rounded-full text-xs font-bold text-white"
                              style={{ background: urgencyColors[rec.urgency] }}
                            >
                              {rec.urgency.toUpperCase()}
                            </span>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">{rec.reason}</p>
                        </div>
                        <div
                          className="text-3xl font-extrabold"
                          style={{ color: urgencyColors[rec.urgency] }}
                        >
                          {rec.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Total Cost */}
          <div
            className="p-8 rounded-2xl text-center mb-8"
            style={{
              background: 'linear-gradient(135deg, #1e40af, #059669)',
              color: 'white'
            }}
          >
            <div className="text-lg mb-2 opacity-90">Total Estimated Investment</div>
            <div className="text-6xl font-extrabold mb-2">₹{totalCost.toLocaleString('en-IN')}</div>
            <div className="text-sm opacity-90">
              vs. potential penalties of ₹5-10 lakhs+ for non-compliance
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/919876543210?text=I completed the quiz. I need: ${recommendations.map(r => r.service).join(', ')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-lg"
              style={{ padding: '16px 32px' }}
            >
              📞 Talk to Expert About These
            </a>
            <button
              onClick={resetQuiz}
              className="btn btn-secondary text-lg"
              style={{ padding: '16px 32px' }}
            >
              🔄 Retake Quiz
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-gradient-to-b from-white to-blue-50">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Do <span className="gradient-text">You Actually Need?</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Answer 4 quick questions to get your personalized compliance roadmap with timeline and costs
          </p>
        </div>

        <div
          className="p-8 md:p-12 rounded-3xl"
          style={{
            background: 'white',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }}
        >
          {/* Question 1: Business Type */}
          <div className="mb-10">
            <label className="block text-xl font-bold mb-4 text-gray-900">
              1. What type of business are you starting?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: 'solo', label: '👤 Solo Founder', desc: 'Just me' },
                { value: 'partnership', label: '🤝 Partnership', desc: '2-20 partners' },
                { value: 'startup', label: '🚀 Startup', desc: 'Raising funding' },
                { value: 'existing', label: '🏢 Existing Business', desc: 'Already running' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setBusinessType(option.value as BusinessType)}
                  className={`p-4 rounded-xl text-left transition-all ${
                    businessType === option.value
                      ? 'bg-blue-600 text-white ring-4 ring-blue-200'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                  }`}
                  style={{
                    border: businessType === option.value ? '2px solid #1e40af' : '2px solid transparent'
                  }}
                >
                  <div className="font-semibold text-base mb-1">{option.label}</div>
                  <div className={`text-sm ${businessType === option.value ? 'text-blue-100' : 'text-gray-600'}`}>
                    {option.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Industry */}
          {businessType && (
            <div className="mb-10">
              <label className="block text-xl font-bold mb-4 text-gray-900">
                2. What industry are you in?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { value: 'food', label: '🍽️ Food & Beverage' },
                  { value: 'tech', label: '💻 Technology' },
                  { value: 'manufacturing', label: '🏭 Manufacturing' },
                  { value: 'retail', label: '🛒 Retail' },
                  { value: 'services', label: '💼 Professional Services' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setIndustry(option.value as Industry)}
                    className={`p-4 rounded-xl text-center transition-all ${
                      industry === option.value
                        ? 'bg-green-600 text-white ring-4 ring-green-200'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                    }`}
                    style={{
                      border: industry === option.value ? '2px solid #059669' : '2px solid transparent'
                    }}
                  >
                    <div className="font-semibold text-sm">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 3: Online Sales */}
          {industry && (
            <div className="mb-10">
              <label className="block text-xl font-bold mb-4 text-gray-900">
                3. Will you sell online or on marketplaces?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'yes', label: '✅ Yes', desc: 'Amazon, Flipkart, own website, etc.' },
                  { value: 'no', label: '❌ No', desc: 'Offline only' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setOnlineSales(option.value as OnlineSales)}
                    className={`p-4 rounded-xl text-left transition-all ${
                      onlineSales === option.value
                        ? 'bg-orange-500 text-white ring-4 ring-orange-200'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                    }`}
                    style={{
                      border: onlineSales === option.value ? '2px solid #FF6B35' : '2px solid transparent'
                    }}
                  >
                    <div className="font-semibold text-base mb-1">{option.label}</div>
                    <div className={`text-sm ${onlineSales === option.value ? 'text-orange-100' : 'text-gray-600'}`}>
                      {option.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 4: Revenue */}
          {onlineSales && (
            <div className="mb-10">
              <label className="block text-xl font-bold mb-4 text-gray-900">
                4. What's your expected annual revenue?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { value: 'under20', label: 'Under ₹20L', desc: 'Small scale' },
                  { value: '20to40', label: '₹20L - ₹40L', desc: 'Medium scale' },
                  { value: 'over40', label: 'Over ₹40L', desc: 'Large scale' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setRevenue(option.value as Revenue)}
                    className={`p-4 rounded-xl text-center transition-all ${
                      revenue === option.value
                        ? 'bg-red-600 text-white ring-4 ring-red-200'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                    }`}
                    style={{
                      border: revenue === option.value ? '2px solid #dc2626' : '2px solid transparent'
                    }}
                  >
                    <div className="font-semibold text-base mb-1">{option.label}</div>
                    <div className={`text-sm ${revenue === option.value ? 'text-red-100' : 'text-gray-600'}`}>
                      {option.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Submit Button */}
          {revenue && (
            <div className="text-center mt-8">
              <button
                onClick={handleSubmit}
                className="btn btn-primary text-xl"
                style={{
                  padding: '18px 48px',
                  fontSize: '20px',
                  boxShadow: '0 8px 24px rgba(30, 64, 175, 0.3)'
                }}
              >
                🎯 Show My Personalized Roadmap
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DecisionQuiz;
