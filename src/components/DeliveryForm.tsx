import React, { useState } from 'react';
import { MapPin, Package, Clock, DollarSign, Calculator } from 'lucide-react';

const DeliveryForm = () => {
  const [formData, setFormData] = useState({
    pickupAddress: '',
    deliveryAddress: '',
    packageType: '',
    deliveryTime: '',
    specialInstructions: ''
  });

  const [estimatedCost, setEstimatedCost] = useState(15.99);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Delivery scheduled successfully! We will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Calculate estimated cost based on selections
    if (name === 'deliveryTime' || name === 'packageType') {
      calculateCost({ ...formData, [name]: value });
    }
  };

  const calculateCost = (data: typeof formData) => {
    let baseCost = 8;
    
    // Delivery time pricing
    switch (data.deliveryTime) {
      case 'express':
        baseCost = 25;
        break;
      case 'same-day':
        baseCost = 15;
        break;
      case 'next-day':
        baseCost = 8;
        break;
      case 'scheduled':
        baseCost = 10;
        break;
    }

    // Package type pricing
    switch (data.packageType) {
      case 'large-package':
        baseCost += 10;
        break;
      case 'medium-package':
        baseCost += 5;
        break;
      case 'fragile':
        baseCost += 8;
        break;
    }

    setEstimatedCost(baseCost);
  };

  return (
    <section id="delivery-form" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <img 
                src="/WhatsApp Image 2025-06-02 at 11.26.23 PM.jpeg" 
                alt="NXT Delivery Logo" 
                className="h-16 w-16 object-contain rounded-full shadow-lg"
              />
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Schedule Your Delivery</h2>
                <p className="text-gray-600 mt-2 text-lg">Fast, reliable, and secure delivery service</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-3">
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
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-3">
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
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-3">
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
                    <option value="medium-package">Medium Package (+$5)</option>
                    <option value="large-package">Large Package (+$10)</option>
                    <option value="fragile">Fragile Items (+$8)</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-3">
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
                    <option value="express">Express (1 hour) - $25</option>
                    <option value="same-day">Same Day (2-4 hours) - $15</option>
                    <option value="scheduled">Schedule for Later - $10</option>
                    <option value="next-day">Next Day - $8</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
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

              <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-lg border border-teal-200">
                <div className="flex items-center space-x-2 mb-3">
                  <Calculator size={20} className="text-teal-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Estimated Cost</h3>
                </div>
                <p className="text-3xl font-bold text-teal-600">${estimatedCost.toFixed(2)}</p>
                <p className="text-sm text-gray-600 mt-1">Final price will be calculated based on distance and package size</p>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-teal-700 hover:to-teal-800 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
              >
                <Package size={20} />
                <span>Schedule Delivery</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryForm;