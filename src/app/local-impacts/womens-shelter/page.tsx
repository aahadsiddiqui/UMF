'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../../components/Footer';

export default function WomensShelter() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <>
      <main className="min-h-screen bg-white pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            className="absolute inset-0 bg-[#2c3e50] pattern-grid-lg"
          />
          
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="text-center max-w-4xl mx-auto py-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#2c3e50]">
                Women's Shelter Ramadan Care Packages
              </h1>
              <p className="text-xl md:text-2xl text-gray-600">
                Supporting and empowering women in our local community
              </p>
            </motion.div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/womenshelter.jpeg"
                  alt="Women's Shelter Initiative"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              <motion.div
                className="prose prose-lg max-w-none"
                {...fadeIn}
              >
                <p className="text-lg text-gray-600 leading-relaxed">
                  Driven by the desire to make a difference, we undertook a project to support the cause of helping women in our local community. We partnered up with Nisa Homes, an organization that provides temporary residence and support to Muslim women and children across Canada.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  In collaboration with Nisa Homes, the United Muslim Fund orchestrated a symphony of generosity, ensuring that each basket became a beacon of comfort for the remarkable women and children within Nisa's embrace.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  At Nisa Homes, where the mission is to create the opportunity of 'home' for domestic violence survivors across Canada, your contributions have played a pivotal role in transforming mere shelter into sanctuaries of hope. Each basket, a testament to collective care; each contribution, a lifeline that transformed the walls of Nisa homes into havens of solace. Your generosity painted a vivid picture of empathy, turning the campaign into a narrative of compassion, community, and connection.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Success Story Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-[#2c3e50]"
              {...fadeIn}
            >
              Campaign Success
            </motion.h2>
            
            <div className="max-w-3xl mx-auto">
              <motion.div 
                className="bg-white rounded-2xl shadow-lg p-8"
                {...fadeIn}
              >
                <p className="text-lg text-gray-600 leading-relaxed">
                  Alhamdulillah! With your generous support, our United Muslim Fund successfully completed the Ramadan relief basket campaign in May 2022. Thanks to your contributions, we were able to provide essential items to Muslim women and children residing in Nisa homes. Your donations made a significant impact, bringing comfort and relief to those in need. Together, we created a positive change in the lives of these families during the blessed month of Ramadan. JazakAllah khair for making our campaign a success, and may your generosity continue to inspire positive change in our community.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#2c3e50]">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              className="max-w-3xl mx-auto"
              {...fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Want to help?
              </h2>
              <p className="text-xl mb-8 text-gray-200">
                Your support can make a real difference in the lives of women and children in need.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/donate"
                  className="bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold inline-block hover:bg-gray-100 transition-colors shadow-md"
                >
                  Donate Today
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 