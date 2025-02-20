'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Amiri } from 'next/font/google';
import { FaSyringe, FaHospital, FaHandHoldingHeart, FaChild, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Footer from '../../../components/Footer';
import DonationModal from '../../../components/DonationModal';

const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic'] 
});

export default function IndonesiaHealth() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<string | undefined>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hadith = {
    arabic: "مَا أَنْزَلَ اللَّهُ دَاءً إِلَّا أَنْزَلَ لَهُ شِفَاءً",
    english: "Allah has not sent down a disease except that He has also sent down its cure",
    source: "Sahih al-Bukhari 5678",
    narrator: "Narrated by Abu Hurairah (رضي الله عنه)"
  };

  const initiatives = [
    {
      icon: <FaSyringe className="w-8 h-8" />,
      title: "Vaccination Program",
      description: "Successfully administered over 300 vaccines to children in Jakarta and Bali, ensuring protection against preventable diseases."
    },
    {
      icon: <FaHospital className="w-8 h-8" />,
      title: "Surgery Support",
      description: "Funding critical surgeries and medical procedures for those who cannot afford essential healthcare."
    },
    {
      icon: <FaHandHoldingHeart className="w-8 h-8" />,
      title: "Healthcare Access",
      description: "Partnering with Rumah Harapan to provide medical supplies and healthcare services to underserved communities."
    },
    {
      icon: <FaChild className="w-8 h-8" />,
      title: "Child Wellness",
      description: "Distributing hygiene kits, nutritional supplies, and essential items to support children's health and well-being."
    }
  ];

  const galleryImages = [
    {
      src: '/indonesia2.JPG',
      title: 'Vaccination Drive',
      description: 'Our medical team administering vaccines to children in Jakarta, ensuring protection against preventable diseases.'
    },
    {
      src: '/indonesia3.JPG',
      title: 'Community Healthcare',
      description: 'Working with local healthcare providers to deliver essential medical services to remote communities.'
    },
    {
      src: '/indonesia4.JPG',
      title: 'Medical Support',
      description: 'Providing critical medical supplies and equipment to improve healthcare access.'
    },
    {
      src: '/indonesia5.JPG',
      title: 'Child Health Programs',
      description: 'Implementing comprehensive health programs focused on childrens well-being and development.'
    },
    {
      src: '/indonesia6.JPG',
      title: 'Healthcare Education',
      description: 'Conducting health education sessions and awareness programs in local communities.'
    },
    {
      src: '/indonesia7.JPG',
      title: 'Medical Outreach',
      description: 'Extending medical services to remote areas through mobile health clinics and outreach programs.'
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
            src="/indonesia.png"
            alt="Indonesia Health Program"
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
              Indonesia Health Program
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12">
              Improving healthcare access and supporting community well-being across Indonesia
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
              onClick={() => openDonateModal('Indonesia Health Program')}
              className="inline-block bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Support Healthcare
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
                Through our partnership with Rumah Harapan, we've made significant strides in improving 
                healthcare access across Indonesia. Our comprehensive approach includes vaccination programs, 
                surgery funding, and essential medical supply distribution, ensuring that communities receive 
                the care they need for better health outcomes.
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
            Our Work in Indonesia
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
                  alt={`Indonesia Healthcare Work ${currentImageIndex + 1}`}
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
              Help Us Expand Healthcare Access
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Your support enables us to continue providing vital healthcare services and medical support to communities across Indonesia
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openDonateModal('Indonesia Health Program')}
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