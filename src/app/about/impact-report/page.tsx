'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Amiri } from 'next/font/google';
import { FaUsers, FaGlobeAmericas, FaHandHoldingHeart, FaSchool, FaDownload, FaHeartbeat } from 'react-icons/fa';
import Footer from '../../../components/Footer';

const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic'] 
});

export default function ImpactReport() {
  const hadith = {
    arabic: "وَمَنْ فَرَّجَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا فَرَّجَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ",
    english: "Whoever relieves a believer's hardship in this world, Allah will relieve their hardship on the Day of Judgment",
    source: "Sahih Muslim 2699",
    narrator: "Narrated by Abu Hurairah (رضي الله عنه)"
  };

  const impactStats = [
    {
      number: "1,800+",
      label: "Backpacks Distributed",
      icon: <FaSchool className="w-8 h-8" />,
      description: "Supporting education through essential supplies"
    },
    {
      number: "1,000+",
      label: "Orphans Supported",
      icon: <FaHandHoldingHeart className="w-8 h-8" />,
      description: "Providing care and support to orphans in need"
    },
    {
      number: "500+",
      label: "Vaccines Delivered",
      icon: <FaHeartbeat className="w-8 h-8" />,
      description: "Promoting health and wellness in communities"
    },
    {
      number: "15,000+",
      label: "Lives Impacted",
      icon: <FaUsers className="w-8 h-8" />,
      description: "Creating positive change in communities"
    }
  ];

  const yearlyHighlights = [
    {
      year: "2024",
      achievements: [
        "Supported orphans in Afghanistan",
        "Launched Fuel your health",
        "Delivered 500 vaccines in Indonesia",
        "Sponsored local community initiatives"
      ]
    },
    {
      year: "2023",
      achievements: [
        "Distributed over 1,400 backpacks to students",
        "Launched Turkey and Morocco earthquake relief programs",
        "Served 300+ warm meals in Toronto Winter Food Drive",
        "Expanded operations to 6 countries"
      ]
    },
    {
      year: "2022",
      achievements: [
        "Initiated the Fill Your Backpack program",
        "Established partnerships with local organizations",
        "Started international relief efforts",
        "Built volunteer network across communities"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-20">
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
              Our Impact Report
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Measuring our contribution to positive change
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hadith Section */}
      <section className="py-16 bg-[#2c3e50] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#2c3e50]/10" />
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={`mb-6 ${amiri.className}`}>
              <h3 className="text-4xl md:text-5xl mb-4 leading-relaxed">
                {hadith.arabic}
              </h3>
            </div>
            <p className="text-2xl font-semibold mb-4">
              "{hadith.english}"
            </p>
            <div className="text-sm text-gray-400">
              <p className="mb-1">{hadith.source}</p>
              <p>{hadith.narrator}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-[#3498db] mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-[#2c3e50] mb-2">
                  {stat.number}
                </h3>
                <p className="text-xl font-semibold text-gray-700 mb-2">
                  {stat.label}
                </p>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Yearly Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#2c3e50]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Yearly Highlights
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {yearlyHighlights.map((year, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-8">
                  <div className="text-4xl font-bold text-[#3498db] whitespace-nowrap">
                    {year.year}
                  </div>
                  <div className="space-y-4">
                    {year.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#3498db]" />
                        <p className="text-lg text-gray-700">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Report Section */}
      <section className="py-20 bg-[#2c3e50] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Annual Impact Report
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Download our detailed annual report to learn more about our initiatives and their impact
            </p>
            <motion.a
              href="/annual-report.pdf"
              download
              className="inline-flex items-center bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="mr-2 group-hover:animate-bounce" />
              Download Report
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 