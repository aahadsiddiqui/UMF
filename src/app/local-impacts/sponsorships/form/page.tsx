'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Amiri } from 'next/font/google';

import Footer from '../../../../components/Footer';
import Image from 'next/image';

const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic'] 
});

export default function SponsorshipForm() {
  const hadith = {
    arabic: "مَنْ فَرَّجَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا فَرَّجَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ",
    english: "Whoever relieves a believer's hardship in this world, Allah will relieve their hardship on the Day of Judgment",
    source: "Sahih Muslim 2699",
    narrator: "Narrated by Abu Hurairah (رضي الله عنه)"
  };

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section with Hadith */}
      <section className="relative bg-[#2c3e50] py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sponsorship Request
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Fill out the form below and we'll get back to you shortly
            </p>
            <div className={`mb-6 ${amiri.className}`}>
              <h3 className="text-3xl md:text-4xl mb-4 leading-relaxed">
                {hadith.arabic}
              </h3>
            </div>
            <p className="text-xl font-semibold mb-4">
              "{hadith.english}"
            </p>
            <div className="text-sm text-gray-400">
              <p className="mb-1">{hadith.source}</p>
              <p>{hadith.narrator}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2c3e50] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2c3e50] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2c3e50] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="123-456-7890"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2c3e50] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date*
                </label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2c3e50] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What would you like us to sponsor?*
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Please describe your event or initiative..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2c3e50] focus:border-transparent transition-all"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-[#2c3e50] text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-[#3a4f63] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Logo and Mission Statement Section */}
      <section className="py-20 bg-gray-50">
        <motion.div 
          className="max-w-xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative w-128 h-64 mx-auto mb-16">
            <Image
              src="/UMG-Logo.png"
              alt="United Muslim Fund Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <motion.h3 
            className="text-2xl font-bold text-[#2c3e50] mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Go. Love. Serve.
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Non profit organization dedicated to helping people around the world from a youth perspective
          </motion.p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
} 