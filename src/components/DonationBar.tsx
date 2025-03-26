'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { stripePromise } from '../lib/stripe';

const DonationBar = () => {
  const router = useRouter();
  const [donationType, setDonationType] = useState('One-Time');
  const [amount, setAmount] = useState('50');
  const [category, setCategory] = useState('Where Most Needed');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const donationTypes = ['One-Time', 'Monthly'];
  const categories = ['Afghanistan Orphan Relief', 'Uganda Healthcare', 'Zakat', 'Where Most Needed'];
  const amounts = ['30', '50', '100', '250', '500'];

  const handleDonateClick = async () => {
    try {
      setIsLoading(true);

      // Create a checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(amount),
          type: donationType,
          category: category,
        }),
      });

      const { sessionId, error } = await response.json();

      if (error) {
        console.error('Error creating checkout session:', error);
        alert('Failed to create checkout session. Please try again.');
        return;
      }

      // Redirect to Stripe checkout
      const stripe = await stripePromise;
      if (!stripe) {
        alert('Failed to load payment system. Please try again.');
        return;
      }

      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (stripeError) {
        console.error('Stripe checkout error:', stripeError);
        alert('Failed to redirect to checkout. Please try again.');
      }
    } catch (err) {
      console.error('Payment error:', err);
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#CC2936] text-white sticky top-[80px] z-40 shadow-lg">
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <span className="text-lg font-medium">Quick Donate</span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          
          {/* Mobile Expandable Menu */}
          <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-4' : 'max-h-0'}`}>
            <div className="space-y-4">
              {/* Donation Type */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Donation Type:</label>
                <div className="relative">
                  <select
                    value={donationType}
                    onChange={(e) => setDonationType(e.target.value)}
                    className="w-full appearance-none bg-transparent border border-white rounded px-3 py-2 pr-8 cursor-pointer focus:outline-none text-base"
                  >
                    {donationTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#CC2936] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                </div>
              </div>

              {/* Amount */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Amount:</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base">$</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-transparent border border-white rounded px-3 py-2 pl-7 focus:outline-none text-base"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Category:</label>
                <div className="relative">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full appearance-none bg-transparent border border-white rounded px-3 py-2 pr-8 cursor-pointer focus:outline-none text-base"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat} className="bg-[#CC2936] text-white">
                        {cat}
                      </option>
                    ))}
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                </div>
              </div>

              {/* Donate Button */}
              <button
                onClick={handleDonateClick}
                disabled={isLoading}
                className="w-full bg-white text-[#CC2936] px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-base flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Processing...' : `Donate $${amount} ${donationType.toLowerCase()}`}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            {/* Donation Type */}
            <div className="flex items-center gap-2">
              <label className="text-base font-medium whitespace-nowrap">Type:</label>
              <div className="relative">
                <select
                  value={donationType}
                  onChange={(e) => setDonationType(e.target.value)}
                  className="appearance-none bg-transparent border border-white rounded px-3 py-2 pr-8 cursor-pointer focus:outline-none text-base min-w-[120px]"
                >
                  {donationTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#CC2936] text-white">
                      {type}
                    </option>
                  ))}
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
              </div>
            </div>

            {/* Amount */}
            <div className="flex items-center gap-2">
              <label className="text-base font-medium">Amount:</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base">$</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-transparent border border-white rounded px-3 py-2 pl-7 focus:outline-none text-base w-24"
                />
              </div>
            </div>

            {/* Category */}
            <div className="flex items-center gap-2">
              <label className="text-base font-medium">Category:</label>
              <div className="relative">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="appearance-none bg-transparent border border-white rounded px-3 py-2 pr-8 cursor-pointer focus:outline-none text-base min-w-[180px]"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="bg-[#CC2936] text-white">
                      {cat}
                    </option>
                  ))}
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
              </div>
            </div>

            {/* Donate Button */}
            <button
              onClick={handleDonateClick}
              disabled={isLoading}
              className="bg-white text-[#CC2936] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-base flex items-center justify-center whitespace-nowrap disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Processing...' : `Donate $${amount} ${donationType.toLowerCase()}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationBar; 