import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/WhatsApp Image 2025-06-02 at 11.26.23 PM.jpeg" 
              alt="NXT Delivery Logo" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-teal-600">NXT Delivery</h1>
              <p className="text-sm text-gray-600">Fast & Reliable</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-teal-600 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-teal-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail size={16} />
              <span>info@nxtdelivery.com</span>
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-teal-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-teal-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">Contact</a>
            </nav>
            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail size={16} />
                <span>info@nxtdelivery.com</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;