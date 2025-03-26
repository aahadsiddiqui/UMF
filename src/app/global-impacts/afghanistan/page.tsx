'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Amiri } from 'next/font/google';
import { FaUtensils, FaGraduationCap, FaHeart, FaHandHoldingHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Footer from '../../../components/Footer';
import DonationModal from '../../../components/DonationModal';

const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic'] 
});

export default function AfghanistanFood() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<string | undefined>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hadith = {
    arabic: "مَنْ أَطْعَمَ مُؤْمِنًا حَتَّى يَشْبَعَ أَطْعَمَهُ اللَّهُ مِنْ ثِمَارِ الْجَنَّةِ",
    english: "Whoever feeds a believer until they are satisfied, Allah will feed them from the fruits of Paradise",
    source: "Sunan al-Tirmidhi 2522",
    narrator: "Narrated by Abu Hurairah (رضي الله عنه)"
  };

  const initiatives = [
    {
      icon: <FaUtensils className="w-8 h-8" />,
      title: "Nutritional Support",
      description: "Providing year-round nourishment to 300 orphans, ensuring they receive balanced and healthy meals daily."
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Educational Integration",
      description: "Partnering with School Time Charity to support children's education alongside nutritional needs."
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Orphan Care",
      description: "Dedicated support program for orphaned children, focusing on their well-being and development."
    },
    {
      icon: <FaHandHoldingHeart className="w-8 h-8" />,
      title: "Community Impact",
      description: "Successfully raised $15,000 in a single night to support our feeding program initiatives."
    }
  ];

  const galleryImages = [
    {
      src: '/afghanistan.jpg',
      title: 'Nourishing Young Minds',
      description: 'Providing daily nutritious meals to support the educational journey of Afghan orphans.'
    },
    {
      src: '/afghanistan2.jpg',
      title: 'School Meal Program',
      description: 'Collaborating with School Time Charity to ensure students receive proper nutrition during school hours.'
    },
    {
      src: '/afghanistan3.jpg',
      title: 'Community Support',
      description: 'Working with local partners to distribute food and essential supplies to orphaned children.'
    },
    {
      src: '/afghanistan4.jpg',
      title: 'Sustainable Impact',
      description: 'Creating lasting change through consistent nutritional support and educational opportunities.'
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
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-16 sm:pt-24 w-full">
        <div className="absolute inset-0">
          <Image
            src="/whoweare3.jpg"
            alt="Afghanistan Food Program"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c3e50]/90 to-[#2c3e50]/70" />
        </div>

        <div className="relative z-10 w-full px-4 py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-white"
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
              Afghanistan Food Program
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12">
              Supporting 300 orphans with year-round nourishment and educational opportunities
            </p>
            <div className={`mb-6 sm:mb-8 ${amiri.className}`}>
              <p className="text-2xl sm:text-3xl mb-2 sm:mb-3">{hadith.arabic}</p>
              <p className="text-base sm:text-lg italic">"{hadith.english}"</p>
              <p className="text-xs sm:text-sm text-gray-300 mt-2">
                {hadith.source} - {hadith.narrator}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openDonateModal('Afghanistan Food Program')}
              className="inline-block bg-white text-[#2c3e50] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Feed a Child
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="py-12 sm:py-20 w-full">
        <div className="px-4 w-full">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4 sm:mb-6">
                Our Impact
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Through our partnership with School Time Charity, we've successfully provided nutritional 
                support to 300 orphans in Afghanistan. This initiative goes beyond just feeding; it's about 
                creating an environment where children can focus on their education and development, knowing 
                their basic needs are met. Our recent fundraising success of $15,000 in a single night 
                demonstrates the community's commitment to supporting these vulnerable children.
              </p>
            </motion.div>

            {/* Initiatives Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-12 sm:mb-16">
              {initiatives.map((initiative, index) => (
                <motion.div
                  key={initiative.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100"
                >
                  <div className="text-[#66e8fd] mb-3 sm:mb-4">
                    {initiative.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#2c3e50] mb-2 sm:mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {initiative.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-12 sm:py-20 bg-gray-50 w-full">
        <div className="px-4 w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2c3e50] text-center mb-8 sm:mb-12"
          >
            Our Work in Afghanistan
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
                  alt={`Afghanistan Food Program ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c3e50] via-transparent to-transparent" />
                
                {/* Navigation Buttons */}
                <button
                  onClick={previousImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2c3e50] p-2 sm:p-3 rounded-full shadow-lg transition-all z-10"
                  aria-label="Previous image"
                >
                  <FaChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2c3e50] p-2 sm:p-3 rounded-full shadow-lg transition-all z-10"
                  aria-label="Next image"
                >
                  <FaChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>

                {/* Description */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white z-10">
                  <motion.h3
                    key={`title-${currentImageIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2"
                  >
                    {galleryImages[currentImageIndex].title}
                  </motion.h3>
                  <motion.p
                    key={`desc-${currentImageIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-base sm:text-lg md:text-xl"
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
      <section className="py-12 sm:py-20 bg-[#2c3e50] text-white w-full">
        <div className="px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Help Us Feed More Children
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Your support can help us expand our reach and provide nourishment to more orphaned children in Afghanistan
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openDonateModal('Afghanistan Food Program')}
              className="inline-block bg-white text-[#2c3e50] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
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