import React from 'react';

const features = [
  {
    icon: '💵',
    title: 'Affordable & Transparent',
    description: 'Clear pricing with no hidden charges. Get the best value for your investment.'
  },
  {
    icon: '👨‍💼',
    title: 'Expert Team',
    description: 'Experienced professionals handling your registration with precision and care.'
  },
  {
    icon: '🌐',
    title: '100% Online Process',
    description: 'Complete everything from home. No need to visit any office or stand in queues.'
  },
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    description: 'Quick processing with most registrations completed within 7-14 working days.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">Us?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We make business registration simple, affordable, and stress-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
