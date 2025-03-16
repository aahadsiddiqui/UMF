'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaHandHoldingHeart, FaGlobeAmericas, FaHandHoldingUsd } from 'react-icons/fa';
import { stripePromise } from '../../lib/stripe';
import Footer from '../../components/Footer';

const donationOptions = [
  {
    id: 'most-needed',
    title: 'Where Most Needed',
    description: 'Support our most urgent causes and help those in immediate need',
    image: '/whoweare3.jpg',
    icon: <FaHandHoldingHeart className="w-6 h-6" />
  },
  {
    id: 'emergency',
    title: 'Emergency Response',
    description: 'Provide immediate relief to disaster-affected communities',
    image: '/whoweareafghanistan.jpeg',
    icon: <FaGlobeAmericas className="w-6 h-6" />
  },
  {
    id: 'education',
    title: 'Education Support',
    description: 'Help students access quality education and essential supplies',
    image: '/landingpage1.jpeg',
    icon: <FaHandHoldingUsd className="w-6 h-6" />
  }
];

const activeCauses = [
  {
    title: 'Gaza Emergency Response',
    description: 'Urgent humanitarian aid for families in Gaza',
    image: '/causes/gaza.jpg',
    raised: 75000,
    goal: 100000
  },
  {
    title: 'Syria Emergency Response',
    description: 'Supporting displaced families in Syria',
    image: '/causes/syria.jpg',
    raised: 45000,
    goal: 80000
  },
  {
    title: 'Lebanon Emergency Response 2024',
    description: 'Providing essential aid to Lebanese communities',
    image: '/causes/lebanon.jpg',
    raised: 25000,
    goal: 50000
  }
];

export default function Donate() {
  const [selectedOption, setSelectedOption] = useState(donationOptions[0].id);
  const [donationAmount, setDonationAmount] = useState('100');
  const [customAmount, setCustomAmount] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const predefinedAmounts = ['10', '20', '50', '100', '250', '500'];

  const handleAmountSelect = (amount: string) => {
    setDonationAmount(amount);
    setCustomAmount(false);
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setDonationAmount(value);
  };

  const handleDonate = async () => {
    try {
      setIsLoading(true);
      
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(donationAmount),
          type: 'One-Time',
          category: donationOptions.find(opt => opt.id === selectedOption)?.title || 'General Donation',
        }),
      });

      const { sessionId, error } = await response.json();

      if (error) {
        console.error('Error creating checkout session:', error);
        alert('Failed to process donation. Please try again.');
        return;
      }

      const stripe = await stripePromise;
      if (!stripe) {
        alert('Failed to load payment system. Please try again.');
        return;
      }

      const { error: stripeError } = await stripe.redirectToCheckout({ sessionId });

      if (stripeError) {
        console.error('Stripe checkout error:', stripeError);
        alert('Failed to process donation. Please try again.');
      }
    } catch (err) {
      console.error('Payment error:', err);
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedOption}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={donationOptions.find(opt => opt.id === selectedOption)?.image || ''}
              alt="Donation cause"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div 
            className="max-w-2xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Make a Difference Today
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Your generosity can change lives and bring hope to those in need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Selection Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Donation Types */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Select Donation Type</h2>
              <div className="space-y-4">
                {donationOptions.map((option) => (
                  <motion.button
                    key={option.id}
                    onClick={() => setSelectedOption(option.id)}
                    className={`w-full p-6 rounded-2xl flex items-start gap-4 transition-all ${
                      selectedOption === option.id
                        ? 'bg-[#2c3e50] text-white shadow-lg'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="mt-1">{option.icon}</div>
                    <div className="text-left">
                      <h3 className="font-semibold text-lg">{option.title}</h3>
                      <p className={`text-sm ${
                        selectedOption === option.id ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {option.description}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Donation Amounts */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Select Amount</h2>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {predefinedAmounts.map((amount) => (
                  <motion.button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`p-4 rounded-xl text-lg font-semibold transition-all ${
                      donationAmount === amount && !customAmount
                        ? 'bg-[#2c3e50] text-white shadow-lg'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ${amount}
                  </motion.button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <input
                    type="text"
                    value={donationAmount}
                    onChange={handleCustomAmount}
                    onFocus={() => setCustomAmount(true)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2c3e50] focus:border-transparent"
                    placeholder="Enter amount"
                  />
                </div>
              </div>

              {/* Donate Button */}
              <motion.button
                onClick={handleDonate}
                disabled={isLoading}
                className="w-full bg-[#2c3e50] text-white py-4 rounded-xl font-semibold text-lg shadow-lg disabled:opacity-75 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? 'Processing...' : `Donate $${donationAmount}`}
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Active Causes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2c3e50] mb-12">
            Active Causes
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {activeCauses.map((cause, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48">
                  <Image
                    src={cause.image}
                    alt={cause.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2c3e50] mb-2">
                    {cause.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {cause.description}
                  </p>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <motion.div
                        className="h-full bg-[#3498db] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(cause.raised / cause.goal) * 100}%` }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Raised: ${cause.raised.toLocaleString()}</span>
                      <span>Goal: ${cause.goal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 