import React from 'react';
import { Truck, Clock, Package, Shield, MapPin, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Clock size={32} />,
      title: 'Same-Day Delivery',
      description: 'Get your packages delivered within hours, not days. Perfect for urgent deliveries.',
      features: ['2-4 hour delivery', 'Real-time tracking', 'SMS notifications']
    },
    {
      icon: <Truck size={32} />,
      title: 'Express Delivery',
      description: 'Ultra-fast delivery for time-sensitive packages. Delivered within 1 hour.',
      features: ['1 hour delivery', 'Priority handling', 'Dedicated courier']
    },
    {
      icon: <Package size={32} />,
      title: 'Standard Delivery',
      description: 'Reliable next-day delivery for all your regular shipping needs.',
      features: ['Next day delivery', 'Affordable rates', 'Secure packaging']
    },
    {
      icon: <Shield size={32} />,
      title: 'Secure Handling',
      description: 'Special care for fragile and valuable items with full insurance coverage.',
      features: ['Insurance included', 'Fragile item care', 'Signature required']
    },
    {
      icon: <MapPin size={32} />,
      title: 'Real-Time Tracking',
      description: 'Track your package every step of the way with our advanced tracking system.',
      features: ['Live GPS tracking', 'Delivery updates', 'ETA notifications']
    },
    {
      icon: <Headphones size={32} />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help you with any delivery concerns.',
      features: ['24/7 availability', 'Live chat support', 'Phone support']
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of delivery services to meet all your shipping needs, 
              from urgent same-day delivery to secure handling of valuable items.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="text-teal-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-teal-100 mb-6 text-lg">
              Choose the delivery service that best fits your needs and schedule your delivery today.
            </p>
            <a 
              href="#delivery-form" 
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Schedule Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;