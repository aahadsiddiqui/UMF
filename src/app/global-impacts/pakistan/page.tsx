'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import DonationModal from '../../../components/DonationModal';
import Footer from '../../../components/Footer';

export default function PakistanEducation() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<string | undefined>();

  const images = [
    '/pakistan1.JPG',
    '/pakistan2.JPG',
    '/pakistan3.JPG',
    '/pakistan4.JPG'
  ];

  const openDonateModal = (campaign?: string) => {
    setSelectedCampaign(campaign);
    setIsDonateModalOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Video Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="/pakistan0.MP4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative h-full container mx-auto px-4">
          <motion.div 
            className="h-full flex flex-col justify-center text-white max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Girls Through Education: Fill Your Backpack – Pakistan
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Supporting education and empowering young minds in Pakistan
            </p>
            <motion.button
              onClick={() => openDonateModal('Pakistan Education Campaign')}
              className="bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold inline-block hover:bg-gray-100 transition-colors shadow-lg w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Support This Cause
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative max-w-5xl mx-auto">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentImageIndex]}
                    alt={`Pakistan education initiative ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full text-[#2c3e50] hover:bg-white transition-colors shadow-lg"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full text-[#2c3e50] hover:bg-white transition-colors shadow-lg"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center mt-4 gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-[#2c3e50]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed">
                On January 15, 2025, United Muslim Fund brought its Fill Your Backpack initiative to Pakistan, 
                delivering backpacks filled with essential school supplies to girls at a local school. Education 
                is the foundation of a brighter future, and we are committed to empowering young minds by ensuring 
                they have the tools they need to succeed.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                This project is part of our ongoing mission to support education worldwide, equipping students 
                with the resources to learn, grow, and achieve their dreams. With your support, we can continue 
                making a difference—one backpack at a time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-[#2c3e50] mb-8 text-center">
                Our Impact in Pakistan
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#2c3e50] mb-2">500+</div>
                  <div className="text-gray-600">Backpacks Distributed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#2c3e50] mb-2">3</div>
                  <div className="text-gray-600">Schools Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#2c3e50] mb-2">1,500+</div>
                  <div className="text-gray-600">Lives Impacted</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2c3e50]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Join Us in Transforming Lives Through Education
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Your support can help us continue providing educational resources to students in need.
            </p>
            <motion.button
              onClick={() => openDonateModal('Pakistan Education Campaign')}
              className="bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate Now
            </motion.button>
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