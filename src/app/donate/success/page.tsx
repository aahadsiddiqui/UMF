'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaHome } from 'react-icons/fa';

export default function Success() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (sessionId) {
      fetch(`/api/checkout-session?session_id=${sessionId}`)
        .then(res => res.json())
        .then(data => {
          setSession(data);
          setIsLoading(false);
        })
        .catch(err => {
          console.error('Error fetching session:', err);
          setIsLoading(false);
        });
    }
  }, [searchParams]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#CC2936]"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Thank You for Your Donation!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your generous contribution will help make a difference in the lives of those in need.
              We've sent you a confirmation email with the details of your donation.
            </p>
            <div className="space-y-4">
              <Link 
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-[#CC2936] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a62029] transition-colors"
              >
                <FaHome />
                Return Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 