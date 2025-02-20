'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Amiri } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic'] 
});

export default function Home() {
  const featuredHadith = {
    arabic: "مَن دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ",
    english: "Whoever guides someone to goodness will have a reward like one who did it",
    source: "Sahih Muslim 1893",
    narrator: "Narrated by Abu Mas'ud Al-Ansari (رضي الله عنه)"
  };

  const charityHadith = {
    arabic: "مَا نَقَصَ مَالٌ مِنْ صَدَقَةٍ",
    english: "Wealth does not decrease because of charity",
    translation: "Charity does not decrease wealth, no one forgives another except that Allah increases his honor, and no one humbles himself for the sake of Allah except that Allah raises his status.",
    source: "Sahih Muslim 2588",
    narrator: "Narrated by Abu Hurairah (رضي الله عنه)"
  };

  const impactStats = [
    { number: "15K+", label: "Meals Provided" },
    { number: "1000+", label: "Students Supported" },
    { number: "5", label: "Countries Reached" },
    { number: "100%", label: "Donation Policy" }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute inset-0 bg-[#2c3e50] pattern-grid-lg"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2c3e50]/30 to-[#2c3e50]" />
        
        {/* Hadith Section - Inside Hero */}
        <motion.div 
          className="container mx-auto px-4 relative z-10 text-center mb-16 pt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={`mb-6 ${amiri.className}`}>
            <h3 className="text-4xl md:text-5xl mb-4 leading-relaxed text-black">
              {featuredHadith.arabic}
            </h3>
          </div>
          <p className="text-2xl font-semibold mb-4 text-black">
            "{featuredHadith.english}"
          </p>
          <div className="text-sm text-gray-700">
            <p className="mb-1">{featuredHadith.source}</p>
            <p>{featuredHadith.narrator}</p>
          </div>
        </motion.div>

        {/* Main Hero Content */}
        <motion.div 
          className="container mx-auto px-4 relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-white to-gray-200 text-transparent bg-clip-text">
              Making a Difference
            </span>
            <br />
            <motion.span 
              className="text-4xl md:text-6xl relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="bg-gradient-to-r from-[#2c3e50] to-[#3498db] text-transparent bg-clip-text">
                Together
              </span>
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3498db]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="text-gray-200">Join us in our mission to</span>
            <span className="text-[#3498db]"> create positive change </span>
            <span className="text-gray-200">and</span>
            <span className="text-[#3498db]"> empower communities </span>
            <span className="text-gray-200">worldwide through youth-driven initiatives.</span>
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/donate"
                className="bg-gradient-to-r from-[#2c3e50] to-[#3498db] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Donate Now
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/about/volunteer"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 shadow-lg backdrop-blur-sm"
              >
                Get Involved
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Updated position */}
        <motion.div 
          className="absolute bottom-8 right-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Second Hadith Section */}
      <section className="py-20 bg-[#1e2a37] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern-islamic"></div>
        </div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={`mb-6 ${amiri.className}`}>
              <h3 className="text-4xl md:text-5xl mb-4 leading-relaxed">
                {charityHadith.arabic}
              </h3>
            </div>
            <p className="text-2xl font-semibold mb-4">
              "{charityHadith.english}"
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {charityHadith.translation}
            </p>
            <div className="text-sm text-gray-400">
              <p className="mb-1">{charityHadith.source}</p>
              <p>{charityHadith.narrator}</p>
            </div>
          </motion.div>
        </div>

        {/* Decorative Islamic Pattern Elements */}
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 opacity-10"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="/islamic-pattern.png" // You'll need to add this image
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32 opacity-10"
          initial={{ rotate: 360 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="/islamic-pattern.png" // You'll need to add this image
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#2c3e50]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Programs
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Program Cards */}
            {/* Add your program cards here */}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#2c3e50] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Your support can help us continue our mission of serving communities in need.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/donate"
                className="bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
              >
                Donate Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 