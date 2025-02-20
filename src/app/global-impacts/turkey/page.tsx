'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Amiri } from 'next/font/google';
import { FaHome, FaHandHoldingHeart, FaMedkit, FaHandsHelping, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Footer from '../../../components/Footer';
import DonationModal from '../../../components/DonationModal';

const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic'] 
});

export default function TurkeyRelief() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<string | undefined>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hadith = {
    arabic: "مَثَلُ الْمُؤْمِنِينَ فِي تَوَادِّهِمْ وَتَرَاحُمِهِمْ وَتَعَاطُفِهِمْ مَثَلُ الْجَسَدِ",
    english: "The believers in their mutual kindness, compassion and sympathy are just like one body",
    source: "Sahih al-Bukhari 6011",
    narrator: "Narrated by An-Nu'man bin Bashir (رضي الله عنه)"
  };

  const initiatives = [
    {
      icon: <FaHome className="w-8 h-8" />,
      title: "Shelter Support",
      description: "Providing temporary housing and rebuilding homes for families displaced by the earthquake."
    },
    {
      icon: <FaMedkit className="w-8 h-8" />,
      title: "Medical Aid",
      description: "Delivering essential medical supplies and supporting healthcare services in affected areas."
    },
    {
      icon: <FaHandsHelping className="w-8 h-8" />,
      title: "Emergency Relief",
      description: "Distributing food, water, and essential supplies to communities impacted by the disaster."
    },
    {
      icon: <FaHandHoldingHeart className="w-8 h-8" />,
      title: "Long-term Recovery",
      description: "Supporting community rebuilding efforts and sustainable recovery programs."
    }
  ];

  const galleryImages = [
    {
      src: '/turkey1.jpg',
      title: 'Digital Education Support',
      description: 'Providing tablets and educational resources to children affected by the earthquake, ensuring their education continues despite the challenges.'
    },
    {
      src: '/turkey3.jpg',
      title: 'Technology Access',
      description: 'Supporting young students with technology and digital learning tools to maintain their academic progress during recovery.'
    },
    {
      src: '/turkey4.jpg',
      title: 'Community Outreach',
      description: 'Engaging with local communities and distributing essential supplies to families in need.'
    },
    {
      src: '/turkey5.jpg',
      title: 'Educational Programs',
      description: 'Facilitating educational activities and providing learning materials to help children cope with displacement.'
    }
  ];

  const openDonateModal = (campaign?: string) => {
    setSelectedCampaign(campaign);
    setIsDonateModalOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/turkey2.jpg"
            alt="Turkey Earthquake Relief"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c3e50]/90 to-[#2c3e50]/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Turkey Earthquake Relief
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12">
              Supporting communities affected by the devastating earthquakes in Turkey through immediate relief and long-term recovery
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
              onClick={() => openDonateModal('Turkey Earthquake Relief')}
              className="inline-block bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Support Now
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
                Our Response
              </h2>
              <p className="text-lg text-gray-600">
                In the wake of the devastating earthquakes that struck Turkey, we've mobilized resources 
                and partnered with local organizations to provide immediate relief and support long-term 
                recovery efforts. Our comprehensive approach focuses on emergency shelter, medical aid, 
                and essential supplies distribution while also planning for sustainable rebuilding initiatives.
              </p>
            </motion.div>

            {/* Initiatives Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
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
            Our Impact in Turkey
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
                  alt={`Turkey Relief Work ${currentImageIndex + 1}`}
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
              Join Us in Making a Difference
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Your support enables us to continue providing critical aid and support to communities affected by the earthquakes
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openDonateModal('Turkey Earthquake Relief')}
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