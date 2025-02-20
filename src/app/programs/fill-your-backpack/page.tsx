'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Amiri } from 'next/font/google';
import { FaBookOpen, FaSchool, FaUserGraduate } from 'react-icons/fa';
import Footer from '../../../components/Footer';
import DonationModal from '../../../components/DonationModal';

const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic'] 
});

export default function FillYourBackpack() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<string | undefined>();

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

  const openDonateModal = (campaign?: string) => {
    setSelectedCampaign(campaign);
    setIsDonateModalOpen(true);
  };

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

      {/* Donation Progress Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src="/backpack5.png"
                  alt="Support student education"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c3e50] to-transparent" />
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap items-center justify-between gap-6 mb-6">
                  <h2 className="text-3xl font-bold text-[#2c3e50]">
                    Help students succeed!
                  </h2>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-1">Progress</p>
                      <p className="text-xl font-bold text-[#2c3e50]">
                        C$2,850 / C$10,000
                      </p>
                    </div>
                    <div className="w-20 h-20 rounded-full border-4 border-[#66e8fd] flex items-center justify-center">
                      <span className="text-xl font-bold text-[#2c3e50]">28%</span>
                    </div>
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                  <div 
                    className="bg-[#66e8fd] h-2 rounded-full transition-all duration-1000"
                    style={{ width: '28%' }}
                  />
                </div>

                <div className="flex items-center justify-between mb-8">
                  <p className="text-gray-600">12 Donations</p>
                  <p className="text-gray-600">Goal: C$10,000</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openDonateModal('Fill Your Backpack Campaign')}
                  className="w-full bg-[#2c3e50] text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-[#3a4f63] transition-colors"
                >
                  Donate Now
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
                onClick={() => openDonateModal('Fill Your Backpack Campaign')}
                className="inline-block bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Donate Today
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <DonationModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
        campaign={selectedCampaign}
      />

      <Footer />
    </main>
  );
} 