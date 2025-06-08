import React from 'react';
import { Truck, Clock, Shield, Star, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Fast & Reliable
                  <span className="block text-yellow-400">Delivery Service</span>
                </h1>
                <p className="text-xl text-teal-100 leading-relaxed">
                  Get your packages delivered quickly and safely with NXT Delivery. 
                  We provide same-day delivery, real-time tracking, and exceptional customer service.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock size={20} className="text-yellow-400" />
                  <span className="text-sm font-medium">Same Day Delivery</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Shield size={20} className="text-yellow-400" />
                  <span className="text-sm font-medium">100% Secure</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Star size={20} className="text-yellow-400" />
                  <span className="text-sm font-medium">5-Star Service</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#delivery-form" 
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 text-center shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Schedule Delivery</span>
                  <ArrowRight size={20} />
                </a>
                <a 
                  href="#services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-700 transition-all duration-200 text-center"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Delivery service" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-gray-900 p-6 rounded-xl shadow-lg z-20">
                <Truck size={32} />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-teal-700 p-6 rounded-xl shadow-lg z-20">
                <p className="text-2xl font-bold">99.9%</p>
                <p className="text-sm">On-Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;