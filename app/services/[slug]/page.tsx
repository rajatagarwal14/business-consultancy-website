import { notFound } from 'next/navigation';
import { servicesData } from './servicesData';

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} - Expert Registration Service | Business Consultancy`,
    description: service.tagline,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">{service.tagline}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/20 backdrop-blur px-8 py-4 rounded-2xl">
                <div className="text-5xl font-extrabold">{service.price}</div>
                <div className="text-sm opacity-80 mt-1">All-Inclusive</div>
              </div>
              <a
                href={`https://wa.me/919876543210?text=I need help with ${service.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
              >
                📞 Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Critical Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why <span className="gradient-text">{service.title}</span> Is Critical
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{service.whyCritical.main}</p>
            <ul className="space-y-4">
              {service.whyCritical.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0 text-green-600">✓</span>
                  <span className="text-gray-700 text-lg" dangerouslySetInnerHTML={{ __html: point }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who Must Register */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Who Must Register?</h2>
          <p className="text-xl text-gray-600 mb-8 text-center">{service.whoMustRegister.main}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whoMustRegister.scenarios.map((scenario, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl border-2 border-blue-200">
                <h3 className="font-bold text-lg mb-2 text-blue-900">{scenario.type}</h3>
                <p className="text-gray-700">{scenario.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Register & Consequences */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-red-900">
            ⚠️ When Should You Register?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border-l-4 border-green-600">
              <h3 className="font-bold text-xl mb-4 text-green-900">✅ Best Time to Register</h3>
              <p className="text-lg text-gray-700">{service.whenToRegister.timing}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border-l-4 border-red-600">
              <h3 className="font-bold text-xl mb-4 text-red-900">❌ Consequences of Delay</h3>
              <p className="text-lg text-gray-700">{service.whenToRegister.consequences}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Risks & Penalties */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Risks & Penalties of Non-Compliance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
              <h3 className="font-bold text-lg mb-3 text-red-900 flex items-center gap-2">
                <span>💰</span> Financial Impact
              </h3>
              <p className="text-gray-700">{service.risksAndPenalties.financial}</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
              <h3 className="font-bold text-lg mb-3 text-orange-900 flex items-center gap-2">
                <span>🚫</span> Operational Impact
              </h3>
              <p className="text-gray-700">{service.risksAndPenalties.operational}</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200">
              <h3 className="font-bold text-lg mb-3 text-yellow-900 flex items-center gap-2">
                <span>⚖️</span> Legal Impact
              </h3>
              <p className="text-gray-700">{service.risksAndPenalties.legal}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Documents Required</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <ul className="grid md:grid-cols-2 gap-4">
              {service.documents.map((doc, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 text-blue-600">📄</span>
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Real World Scenarios */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Real-World Scenarios</h2>
          <div className="space-y-6">
            {service.realWorldScenarios.map((scenario, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl border-l-4 border-blue-600">
                <h3 className="font-bold text-xl mb-4 text-blue-900">{scenario.title}</h3>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-gray-900">Situation: </span>
                    <span className="text-gray-700">{scenario.situation}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-green-900">Solution: </span>
                    <span className="text-gray-700">{scenario.solution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Advisory-Led Process</h2>
          <div className="space-y-4">
            {service.process.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-gray-900">{step.step}</h3>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing ROI */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Investment vs. Returns</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur p-6 rounded-xl text-center">
              <div className="text-sm mb-2 opacity-80">Your Investment</div>
              <div className="text-4xl font-extrabold">{service.pricingROI.investment}</div>
            </div>
            <div className="bg-white/20 backdrop-blur p-6 rounded-xl text-center">
              <div className="text-sm mb-2 opacity-80">Cost Avoided</div>
              <div className="text-2xl font-bold">{service.pricingROI.avoidedCost}</div>
            </div>
            <div className="bg-white/20 backdrop-blur p-6 rounded-xl text-center">
              <div className="text-sm mb-2 opacity-80">ROI</div>
              <div className="text-4xl font-extrabold">10-100x</div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
            <h3 className="font-bold text-xl mb-4">What You Get:</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {service.pricingROI.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-xl flex-shrink-0">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Talk to our experts and get {service.title} done right - first time, every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/919876543210?text=I want to register for ${service.title}. Price: ${service.price}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg inline-block"
            >
              📞 WhatsApp Us Now
            </a>
            <a
              href="/#services"
              className="bg-white/20 backdrop-blur text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all inline-block"
            >
              ← Back to All Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
