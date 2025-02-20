'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  campaign?: string;
}

export default function DonationModal({ isOpen, onClose, campaign }: DonationModalProps) {
  const [donationAmount, setDonationAmount] = useState('100');
  const [customAmount, setCustomAmount] = useState(false);
  const predefinedAmounts = ['10', '20', '50', '100', '250', '500'];

  const handleAmountSelect = (amount: string) => {
    setDonationAmount(amount);
    setCustomAmount(false);
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setDonationAmount(value);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-[#2c3e50]">
                    Make a Donation
                    {campaign && <span className="block text-lg text-gray-600 mt-1">{campaign}</span>}
                  </h2>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <FaTimes className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[#2c3e50] mb-3">
                      Select Amount
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {predefinedAmounts.map((amount) => (
                        <motion.button
                          key={amount}
                          onClick={() => handleAmountSelect(amount)}
                          className={`p-4 rounded-xl text-lg font-semibold transition-all ${
                            donationAmount === amount && !customAmount
                              ? 'bg-[#2c3e50] text-white shadow-lg'
                              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          ${amount}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
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

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#2c3e50] text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-[#3a4f63] transition-colors"
                  >
                    Donate ${donationAmount}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 