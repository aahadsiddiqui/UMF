'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Amiri } from 'next/font/google';
import { FaHandHoldingHeart, FaHome, FaUtensils, FaHandsHelping, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Footer from '../../../components/Footer';
import DonationModal from '../../../components/DonationModal';

const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic'] 
});

export default function MoroccoRelief() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<string | undefined>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hadith = {
    arabic: "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ",
    english: "Whoever relieves a believer's distress of the distressful aspects of this world, Allah will rescue them from a difficulty of the difficulties of the Hereafter",
    source: "Sahih Muslim 2699",
    narrator: "Narrated by Abu Hurairah (رضي الله عنه)"
  };

  const initiatives = [
    {
      icon: <FaHome className="w-8 h-8" />,
      title: "Emergency Shelter",
      description: "Building temporary shelters and tents for displaced families affected by the earthquake."
    },
    {
      icon: <FaUtensils className="w-8 h-8" />,
      title: "Food Distribution",
      description: "Providing essential food supplies and meals to affected communities."
    },
    {
      icon: <FaHandsHelping className="w-8 h-8" />,
      title: "Basic Necessities",
      description: "Distributing essential items and supplies to those left without homes."
    }
  ];

  const galleryImages = [
    {
      src: '/morocco.jpeg',
      title: 'Emergency Response',
      description: 'Our team on the ground providing immediate relief and support to communities affected by the earthquake.'
    },
    {
      src: '/morocco2.jpg',
      title: 'Community Support',
      description: 'Working closely with local communities to distribute essential supplies and provide emergency assistance.'
    },
    {
      src: '/morocco3.jpg',
      title: 'Medical Aid',
      description: 'Delivering critical medical supplies and healthcare support to those impacted by the disaster.'
    },
    {
      src: '/morocco4.jpg',
      title: 'Shelter Assistance',
      description: 'Setting up temporary shelters and supporting families who have lost their homes.'
    },
    {
      src: '/morocco5.jpg',
      title: 'Relief Distribution',
      description: 'Organizing and distributing emergency relief supplies to affected communities.'
    },
    {
      src: '/morocco6.jpg',
      title: 'Rebuilding Hope',
      description: 'Supporting long-term recovery efforts and helping communities rebuild their lives.'
    }
  ];

  const openDonateModal = (campaign?: string) => {
    setSelectedCampaign(campaign);
    setIsDonateModalOpen(true);
  };

  const previousImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % galleryImages.length);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Video Section */}
      <section className="relative min-h-screen">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/morocco7.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c3e50]/90 to-[#2c3e50]/70" />

        <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Morocco Earthquake Relief
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12">
              Join us in providing immediate relief and support to those affected by the devastating earthquake in Morocco
            </p>
            <div className={`mb-8 ${amiri.className}`}>
              <p className="text-3xl mb-3">{hadith.arabic}</p>
              <p className="text-lg italic">"{hadith.english}"</p>
              <p className="text-sm text-gray-300 mt-2">
                {hadith.source} - {hadith.narrator}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openDonateModal('Morocco Earthquake Relief')}
              className="inline-block bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Donate Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Impact Overview */}
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
                Our Impact
              </h2>
              <p className="text-lg text-gray-600">
                In partnership with the Moulana Tariq Jameel Foundation, we've been on the ground in Morocco 
                providing immediate assistance to earthquake-affected communities. Our team has been working 
                tirelessly to establish temporary shelters, distribute essential supplies, and ensure basic 
                necessities reach those in desperate need.
              </p>
            </motion.div>

            {/* Initiatives Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
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

      {/* Image Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#2c3e50] text-center mb-12"
          >
            Our Work in Morocco
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[16/9]"
              >
                <Image
                  src={galleryImages[currentImageIndex].src}
                  alt={`Morocco Relief Work ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c3e50] via-transparent to-transparent" />
                
                {/* Navigation Buttons */}
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2c3e50] p-3 rounded-full shadow-lg transition-all"
                  aria-label="Previous image"
                >
                  <FaChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2c3e50] p-3 rounded-full shadow-lg transition-all"
                  aria-label="Next image"
                >
                  <FaChevronRight className="w-6 h-6" />
                </button>

                {/* Description */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <motion.h3
                    key={`title-${currentImageIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold mb-2"
                  >
                    {galleryImages[currentImageIndex].title}
                  </motion.h3>
                  <motion.p
                    key={`desc-${currentImageIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-lg md:text-xl"
                  >
                    {galleryImages[currentImageIndex].description}
                  </motion.p>
                </div>
              </motion.div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center space-x-2 mt-4">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'bg-[#2c3e50] w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#2c3e50] text-center mb-12"
          >
            On the Ground
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              '/videos/morocco7.mp4',
              '/videos/morocco8.mp4',
              '/videos/morocco9.mp4'
            ].map((video, index) => (
              <motion.div
                key={video}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-2xl overflow-hidden shadow-lg aspect-video"
              >
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                >
                  <source src={video} type="video/mp4" />
                </video>
              </motion.div>
            ))}
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
              Help Us Make a Difference
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Your support can help provide shelter, food, and essential supplies to those affected by the earthquake
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openDonateModal('Morocco Earthquake Relief')}
              className="inline-block bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Donate Today
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