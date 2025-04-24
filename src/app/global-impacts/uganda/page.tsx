'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Amiri } from 'next/font/google';
import { FaHospital, FaHandHoldingHeart, FaUserMd, FaChevronLeft, FaChevronRight, FaCalendarAlt } from 'react-icons/fa';
import Footer from '../../../components/Footer';
import DonationModal from '../../../components/DonationModal';

const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic'] 
});

export default function UgandaClinic() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<string | undefined>();
  const [currentPhase1Index, setCurrentPhase1Index] = useState(0);
  const [currentPhase2Index, setCurrentPhase2Index] = useState(0);

  const hadith = {
    arabic: "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ",
    english: "Whoever relieves a believer's distress of the distressful aspects of this world, Allah will rescue them from a difficulty of the difficulties of the Hereafter",
    source: "Sahih Muslim 2699",
    narrator: "Narrated by Abu Hurairah (رضي الله عنه)"
  };

  const initiatives = [
    {
      icon: <FaHospital className="w-8 h-8" />,
      title: "Free Healthcare",
      description: "Providing accessible medical services to underserved communities in Uganda, ensuring quality healthcare for all."
    },
    {
      icon: <FaUserMd className="w-8 h-8" />,
      title: "Medical Staff",
      description: "Employing qualified healthcare professionals to deliver essential medical services and care."
    },
    {
      icon: <FaHandHoldingHeart className="w-8 h-8" />,
      title: "Community Support",
      description: "Building strong relationships with local communities to better understand and serve their healthcare needs."
    }
  ];

  const phases = [
    {
      number: 1,
      title: "Clinic Lease Secured",
      date: "January 2025",
      status: "Completed",
      description: "Successfully secured a 6-year lease for the clinic location, establishing a long-term presence in the community.",
      media: {
        images: ["phase1uganda.jpg", "phase1uganda2.jpg", "phase1uganda3.jpg"],
        videos: ["phase1uganda4.mp4", "phase1uganda5.mp4"]
      }
    },
    {
      number: 2,
      title: "Clinic Renovation",
      date: "February 2025",
      status: "In Progress",
      description: "Comprehensive renovation of the clinic space to create a modern, welcoming healthcare facility.",
      media: {
        images: ["phase2uganda.JPG", "phase2uganda2.JPG", "phase2uganda3.JPG", "phase2uganda4.JPG"]
      }
    },
    {
      number: 3,
      title: "Grand Opening",
      date: "July 2025",
      status: "Coming Soon",
      description: "Official launch of the clinic, marking the beginning of our mission to provide accessible healthcare."
    },
    {
      number: 4,
      title: "Future Expansion",
      date: "TBD",
      status: "Planned",
      description: "Plans for expanding our services and reach to help more communities in need."
    }
  ];

  const openDonateModal = (campaign?: string) => {
    setSelectedCampaign(campaign);
    setIsDonateModalOpen(true);
  };

  const nextPhase1Media = () => {
    const totalMedia = phases[0].media.images.length + phases[0].media.videos.length;
    setCurrentPhase1Index((prev) => (prev + 1) % totalMedia);
  };

  const previousPhase1Media = () => {
    const totalMedia = phases[0].media.images.length + phases[0].media.videos.length;
    setCurrentPhase1Index((prev) => (prev - 1 + totalMedia) % totalMedia);
  };

  const nextPhase2Image = () => {
    setCurrentPhase2Index((prev) => (prev + 1) % phases[1].media.images.length);
  };

  const previousPhase2Image = () => {
    setCurrentPhase2Index((prev) => (prev - 1 + phases[1].media.images.length) % phases[1].media.images.length);
  };

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/phase1uganda.jpg"
            alt="Uganda Healthcare Initiative"
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
              Uganda Healthcare Initiative
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12">
              Building a free clinic to provide accessible healthcare services to underserved communities
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
              onClick={() => openDonateModal('Uganda Healthcare Initiative')}
              className="inline-block bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Support Healthcare
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
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
                In partnership with Kids Uganda, we are establishing a free healthcare clinic to serve impoverished 
                communities. Our goal is to provide essential medical services, ensuring that quality healthcare is 
                accessible to those who need it most. Through this initiative, we aim to make a lasting impact on 
                the health and well-being of local communities.
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

      {/* Project Phases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#2c3e50] text-center mb-16"
          >
            Project Timeline
          </motion.h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-[#2c3e50]">Phase {phase.number}</h3>
                      <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
                        phase.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        phase.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {phase.status}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-[#2c3e50] mb-2">{phase.title}</h4>
                    <div className="flex items-center text-gray-600 mb-4">
                      <FaCalendarAlt className="mr-2" />
                      <span>{phase.date}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{phase.description}</p>

                    {/* Media Carousel for Phase 1 */}
                    {phase.number === 1 && phase.media && (
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        {currentPhase1Index < phase.media.images.length ? (
                          <Image
                            src={`/${phase.media.images[currentPhase1Index]}`}
                            alt={`Phase 1 - ${currentPhase1Index + 1}`}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <video
                            className="w-full h-full object-cover"
                            controls
                            src={`/${phase.media.videos[currentPhase1Index - phase.media.images.length]}`}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        <button
                          onClick={previousPhase1Media}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2c3e50] p-3 rounded-full shadow-lg transition-all"
                          aria-label="Previous media"
                        >
                          <FaChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={nextPhase1Media}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2c3e50] p-3 rounded-full shadow-lg transition-all"
                          aria-label="Next media"
                        >
                          <FaChevronRight className="w-6 h-6" />
                        </button>
                      </div>
                    )}

                    {/* Image Carousel for Phase 2 */}
                    {phase.number === 2 && phase.media && (
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={`/${phase.media.images[currentPhase2Index]}`}
                          alt={`Phase 2 - ${currentPhase2Index + 1}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        <button
                          onClick={previousPhase2Image}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2c3e50] p-3 rounded-full shadow-lg transition-all"
                          aria-label="Previous image"
                        >
                          <FaChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={nextPhase2Image}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2c3e50] p-3 rounded-full shadow-lg transition-all"
                          aria-label="Next image"
                        >
                          <FaChevronRight className="w-6 h-6" />
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2c3e50]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us in Making Healthcare Accessible
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Your support helps us provide essential medical services to those who need it most
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openDonateModal('Uganda Healthcare Initiative')}
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