'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Amiri } from 'next/font/google';
import { FaClinicMedical, FaHandHoldingWater, FaAppleAlt } from 'react-icons/fa';
import Footer from '../../../components/Footer';
import DonationModal from '../../../components/DonationModal';

const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic'] 
});

export default function FuelYourHealth() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<string | undefined>();

  const hadith = {
    arabic: "مَا مَلَأَ آدَمِيٌّ وِعَاءً شَرًّا مِنْ بَطْنٍ",
    english: "No human being has ever filled a vessel worse than his stomach",
    source: "Sunan al-Tirmidhi 2380",
    narrator: "Narrated by Al-Miqdam ibn Ma'dikarib (رضي الله عنه)"
  };

  const initiatives = [
    {
      icon: <FaClinicMedical className="w-8 h-8" />,
      title: "Medical Clinics",
      description: "Establishing clinics for essential medical care and partnering with healthcare professionals to serve communities in need."
    },
    {
      icon: <FaHandHoldingWater className="w-8 h-8" />,
      title: "Clean Water Access",
      description: "Securing clean water supply through infrastructure development and water purification systems."
    },
    {
      icon: <FaAppleAlt className="w-8 h-8" />,
      title: "Nutritious Food",
      description: "Promoting access to healthy food and nutrition education to build stronger, healthier communities."
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
            src="/fuelyourhealth.png"
            alt="Fuel Your Health"
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
              Fuel Your Health
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12">
              Fostering healthy communities across the globe by providing vital resources and infrastructure
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
                Our Latest Campaign: Uganda Clinic 2025
              </h2>
              <p className="text-lg text-gray-600">
                We are currently launching our newest campaign focused on constructing a clinic in Uganda. 
                Our objective is to establish this clinic in a community that lacks adequate medical facilities, 
                with the aim of completing it by the summer of 2025. Once operational, the clinic will serve 
                as a pivotal hub for healthcare professionals and medical NGOs, such as Doctors Without Borders, 
                to deliver essential medical services to the local population.
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

      {/* After Uganda Campaign Section */}
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
                  src="/fuelyourhealth2.png"
                  alt="Sudan Clinic Campaign"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c3e50] to-transparent" />
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap items-center justify-between gap-6 mb-6">
                  <h2 className="text-3xl font-bold text-[#2c3e50]">
                    Sudan Clinic Campaign
                  </h2>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm text-gray-600 mb-1">Progress</p>
                      <p className="text-xl font-bold text-[#2c3e50]">
                        C$15,597 / C$50,000
                      </p>
                    </div>
                    <div className="w-20 h-20 rounded-full border-4 border-[#66e8fd] flex items-center justify-center">
                      <span className="text-xl font-bold text-[#2c3e50]">31%</span>
                    </div>
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                  <div 
                    className="bg-[#66e8fd] h-2 rounded-full transition-all duration-1000"
                    style={{ width: '31%' }}
                  />
                </div>

                <div className="flex items-center justify-between mb-8">
                  <p className="text-gray-600">8 Donations</p>
                  <p className="text-gray-600">Goal: C$50,000</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openDonateModal('Sudan Clinic Campaign')}
                  className="w-full bg-[#2c3e50] text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-[#3a4f63] transition-colors"
                >
                  Donate to Sudan Clinic
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
              Want to Help Build a Healthier Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Your support can help us establish vital healthcare infrastructure and resources where they're needed most.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/donate"
                className="inline-block bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Donate Today
              </Link>
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