'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../../components/Footer';

export default function TorontoFoodDrive() {
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
                Toronto Winter Food Drive
              </h1>
              <p className="text-xl md:text-2xl text-gray-600">
                Providing warm meals to families in Thorncliffe Park
              </p>
            </motion.div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="relative aspect-video rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <iframe
                  src="https://www.youtube.com/embed/S70sE7GPAF4"
                  title="Toronto Winter Food Drive"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16">
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
                  src="/torontofood.jpeg"
                  alt="Toronto Food Drive Initiative"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              <motion.div
                className="prose prose-lg max-w-none"
                {...fadeIn}
              >
                <p className="text-lg text-gray-600 leading-relaxed">
                  In the heart of winter's chill, our Winter Food Drive for the Less Fortunate unfolded on the 12th of February, creating a tapestry of warmth and compassion in Thorncliffe. Hand in hand with our dedicated officers from division 53, @officerfarhan and @officervik, alongside the selfless efforts of our incredible volunteers, and the unwavering support from individuals like you, we brought the spirit of generosity to life.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  On this special day, we had the privilege of distributing halal warm meals to families in need. It was more than a food drive; it was a collective effort that spoke volumes about the strength of our community. The atmosphere was filled not just with the aroma of nourishing meals but with the palpable sense of empathy and connection.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Looking back on our Winter Food Drive, we see your support creating not just full bellies but also smiles and a sense of belonging for those families. Your kindness, mixed with our team's hard work, turned a simple idea into a big success that felt just right for the season.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center"
              {...fadeIn}
            >
              <h2 className="text-2xl font-bold text-[#2c3e50] mb-4">Impact</h2>
              <p className="text-xl text-gray-600">
                On the 12th of February United Muslim Fund was able to hand out more than <span className="font-bold text-[#2c3e50]">300 warm meals</span> to the families here at Thorncliffe Park, with the help of our amazing officers from 53 division.
              </p>
              <p className="text-lg text-gray-600 mt-4">
                Food insecurity affects 1 in 6 households in Ontario, we need to act now.
              </p>
            </motion.div>
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
                Your support can help us provide warm meals to more families in need.
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