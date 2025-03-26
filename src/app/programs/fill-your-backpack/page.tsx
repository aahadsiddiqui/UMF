'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Amiri } from 'next/font/google';
import { FaBookOpen, FaSchool, FaUserGraduate, FaGraduationCap } from 'react-icons/fa';
import Footer from '../../../components/Footer';
import { stripePromise } from '../../../lib/stripe';

const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic'] 
});

export default function FillYourBackpack() {
  const [isLoading, setIsLoading] = useState(false);
  const [backpackCount, setBackpackCount] = useState(1);
  const [donationAmount, setDonationAmount] = useState(10);
  const maxBackpacks = 100;

  useEffect(() => {
    setDonationAmount(backpackCount * 10);
  }, [backpackCount]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackpackCount(parseInt(e.target.value));
  };

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
          amount: donationAmount,
          type: 'One-Time',
          category: 'Fill Your Backpack',
          quantity: backpackCount,
          description: `${backpackCount} backpack${backpackCount > 1 ? 's' : ''} at C$10 each`
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

  const hadith = {
    arabic: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ",
    english: "Whoever takes a path in search of knowledge, Allah will make easy for them a path to Paradise",
    source: "Sahih Muslim 2699",
    narrator: "Narrated by Abu Hurairah (رضي الله عنه)"
  };

  const initiatives = [
    {
      icon: <FaBookOpen className="w-8 h-8" />,
      title: "School Supplies",
      description: "Providing essential educational materials to students in need, ensuring they have the tools to succeed."
    },
    {
      icon: <FaSchool className="w-8 h-8" />,
      title: "Educational Support",
      description: "Offering academic resources and support to help students excel in their studies."
    },
    {
      icon: <FaUserGraduate className="w-8 h-8" />,
      title: "Student Success",
      description: "Creating opportunities for academic achievement and personal growth through education."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/backpack6.png"
            alt="Fill Your Backpack"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c3e50]/90 to-[#2c3e50]/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Fill Your Backpack
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12">
              Empowering students with the tools they need for educational success
            </p>
            <div className={`mb-8 ${amiri.className}`}>
              <p className="text-3xl mb-3">{hadith.arabic}</p>
              <p className="text-lg italic">"{hadith.english}"</p>
              <p className="text-sm text-gray-300 mt-2">
                {hadith.source} - {hadith.narrator}
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/donate"
                className="inline-block bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Support Our Mission
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600">
                Fill Your Backpack is dedicated to ensuring every student has access to the educational 
                materials they need to succeed. We believe that education is a fundamental right, and 
                no student should face barriers to learning due to a lack of basic school supplies. 
                Through our program, we provide backpacks filled with essential educational materials, 
                empowering students to focus on their studies and achieve their academic goals.
              </p>
            </motion.div>

            {/* Initiatives Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {initiatives.map((initiative, index) => (
                <motion.div
                  key={initiative.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="text-[#66e8fd] mb-4">
                    {initiative.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2c3e50] mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600">
                    {initiative.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#2c3e50] text-center mb-8"
            >
              Help students succeed!
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Backpack Graphic */}
              <div className="relative h-48 bg-[#2c3e50] overflow-hidden flex items-center justify-center">
                <motion.div
                  className="relative"
                  animate={{
                    scale: 0.5 + (backpackCount / maxBackpacks) * 1.5,
                    y: [0, -5, 0],
                    rotate: [0, backpackCount > 1 ? 5 : 0, 0]
                  }}
                  transition={{
                    scale: { type: "spring", stiffness: 100, damping: 10 },
                    y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                    rotate: { duration: 0.5 }
                  }}
                  whileHover={{
                    scale: (0.5 + (backpackCount / maxBackpacks) * 1.5) * 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: {
                      rotate: {
                        duration: 0.5,
                        repeat: 0
                      }
                    }
                  }}
                >
                  <span className="text-7xl" role="img" aria-label="backpack">🎒</span>
                </motion.div>
                <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                  <p className="text-lg font-medium">C${donationAmount} / C$10,000</p>
                </div>
              </div>

              {/* Slider Section */}
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Number of Backpacks:</span>
                    <span className="text-lg font-bold text-[#2c3e50]">{backpackCount}</span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="w-full"
                  >
                    <input
                      type="range"
                      min="1"
                      max={maxBackpacks}
                      value={backpackCount}
                      onChange={handleSliderChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2c3e50]"
                    />
                  </motion.div>
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-500">1 backpack</span>
                    <span className="text-sm text-gray-500">{maxBackpacks} backpacks</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <p className="text-lg font-medium text-gray-700">
                    Total Donation: <span className="text-[#2c3e50] font-bold">C${donationAmount}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    {backpackCount} {backpackCount === 1 ? 'backpack' : 'backpacks'} × C$10 each
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDonateClick}
                  disabled={isLoading}
                  className="w-full bg-[#2c3e50] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#3a4f63] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Processing...' : 'Donate Now'}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2c3e50] py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Support Student Education
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Your contribution helps provide essential educational materials to students in need
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={handleDonateClick}
                className="inline-block bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Donate Today
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 