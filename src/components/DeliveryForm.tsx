import React, { useState } from 'react';
import { MapPin, Package, Clock, DollarSign } from 'lucide-react';

const DeliveryForm = () => {
  const [formData, setFormData] = useState({
    pickupAddress: '',
    deliveryAddress: '',
    packageType: '',
    deliveryTime: '',
    specialInstructions: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="delivery-form" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img 
                src="/WhatsApp Image 2025-06-02 at 11.26.23 PM.jpeg" 
                alt="NXT Delivery Logo" 
                className="h-16 w-16 object-contain"
              />
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Schedule Your Delivery</h2>
                <p className="text-gray-600 mt-2">Fast, reliable, and secure delivery service</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                    <MapPin size={16} className="text-teal-600" />
                    <span>Pickup Address</span>
                  </label>
                  <input
                    type="text"
                    name="pickupAddress"
                    value={formData.pickupAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Enter pickup location"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                    <MapPin size={16} className="text-teal-600" />
                    <span>Delivery Address</span>
                  </label>
                  <input
                    type="text"
                    name="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Enter delivery location"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                    <Package size={16} className="text-teal-600" />
                    <span>Package Type</span>
                  </label>
                  <select
                    name="packageType"
                    value={formData.packageType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Select package type</option>
                    <option value="documents">Documents</option>
                    <option value="small-package">Small Package</option>
                    <option value="medium-package">Medium Package</option>
                    <option value="large-package">Large Package</option>
                    <option value="fragile">Fragile Items</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                    <Clock size={16} className="text-teal-600" />
                    <span>Delivery Time</span>
                  </label>
                  <select
                    name="deliveryTime"
                    value={formData.deliveryTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Select delivery time</option>
                    <option value="same-day">Same Day (2-4 hours)</option>
                    <option value="next-day">Next Day</option>
                    <option value="express">Express (1 hour)</option>
                    <option value="scheduled">Schedule for Later</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Instructions (Optional)
                </label>
                <textarea
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="Any special handling instructions or delivery notes..."
                />
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <DollarSign size={20} className="text-teal-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Estimated Cost</h3>
                </div>
                <p className="text-2xl font-bold text-teal-600">$15.99</p>
                <p className="text-sm text-gray-600 mt-1">Final price will be calculated based on distance and package size</p>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Schedule Delivery
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryForm;