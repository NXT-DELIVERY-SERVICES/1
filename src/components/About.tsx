import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users size={24} />, number: '10,000+', label: 'Happy Customers' },
    { icon: <Clock size={24} />, number: '50,000+', label: 'Deliveries Completed' },
    { icon: <Award size={24} />, number: '99.9%', label: 'On-Time Delivery' },
    { icon: <Shield size={24} />, number: '100%', label: 'Secure & Insured' }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About NXT Delivery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing the delivery industry with cutting-edge technology, 
              exceptional service, and a commitment to getting your packages where they need to be, when they need to be there.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At NXT Delivery, we believe that reliable, fast delivery shouldn't be a luxury. 
                Our mission is to provide exceptional delivery services that connect businesses and 
                individuals with their customers, friends, and family.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, we've grown from a small local delivery service to a trusted 
                partner for thousands of customers across the region. Our commitment to innovation, 
                reliability, and customer satisfaction drives everything we do.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                  Same-Day Delivery
                </span>
                <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                  Real-Time Tracking
                </span>
                <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                  Secure Handling
                </span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Delivery team" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-teal-600 text-white p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">5+ Years</p>
                <p className="text-sm">of Excellence</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-teal-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Meet Our Founder</h3>
                <p className="text-teal-100 mb-6 leading-relaxed">
                  "I started NXT Delivery with a simple vision: to create a delivery service that 
                  treats every package like it's the most important one. Our team is dedicated to 
                  providing exceptional service that exceeds expectations every single time."
                </p>
                <div className="flex items-center space-x-4">
                  <img 
                    src="/founder.png" 
                    alt="Founder" 
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div>
                    <p className="font-semibold text-lg">John Smith</p>
                    <p className="text-teal-200">Founder & CEO</p>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <img 
                  src="/founder.png" 
                  alt="Founder Portrait" 
                  className="w-48 h-48 rounded-full object-cover mx-auto lg:ml-auto border-8 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;