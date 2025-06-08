import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/WhatsApp Image 2025-06-02 at 11.26.23 PM.jpeg" 
                  alt="NXT Delivery Logo" 
                  className="h-12 w-12 object-contain rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold text-teal-400">NXT Delivery</h3>
                  <p className="text-sm text-gray-400">Fast & Reliable</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted partner for fast, reliable, and secure delivery services. 
                We're committed to getting your packages where they need to be, when they need to be there.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors hover:underline">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors hover:underline">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors hover:underline">About Us</a></li>
                <li><a href="#delivery-form" className="text-gray-400 hover:text-white transition-colors hover:underline">Schedule Delivery</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors hover:underline">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                <li><span className="text-gray-400">Same-Day Delivery</span></li>
                <li><span className="text-gray-400">Express Delivery</span></li>
                <li><span className="text-gray-400">Standard Delivery</span></li>
                <li><span className="text-gray-400">Secure Handling</span></li>
                <li><span className="text-gray-400">Real-Time Tracking</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-teal-400" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-teal-400" />
                  <span className="text-gray-400">info@nxtdelivery.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-teal-400 mt-1" />
                  <span className="text-gray-400">123 Delivery Street<br />Business District, City 12345</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 NXT Delivery. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;