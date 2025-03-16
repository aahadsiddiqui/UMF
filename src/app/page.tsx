'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Amiri } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';
import GlobalImpactMap from '../components/GlobalImpactMap';
import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic'] 
});

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "01.",
      title: "Afghanistan Orphan Relief",
      description: "Feed the hungry, support orphans, build wells.\nUse your Zakat to make a difference.",
      image: "/afghanistan.jpg",
      primaryCta: "Explore Relief",
      primaryLink: "/global-impacts/afghanistan",
      secondaryCta: "Donate",
      secondaryLink: "/donate",
      primaryText: "Explore Relief",
      secondaryText: "Donate"
    },
    {
      id: "02.",
      title: "Uganda Healthcare",
      description: "Support our mission to establish vital healthcare services.\nEvery donation brings healing to those in need.",
      image: "/uganda.jpg?v=1",
      primaryCta: "Donate Now",
      primaryLink: "/donate",
      secondaryCta: "Learn More",
      secondaryLink: "/programs/fuel-your-health",
      primaryText: "Donate Now",
      secondaryText: "Learn More"
    },
    {
      id: "03.",
      title: "Sh. Assim Al Hakeem Tour",
      description: "Join us for an enlightening evening with Sheikh Assim Al Hakeem",
      image: "/assim.jpeg",
      primaryLink: "/local-impacts/events",
      secondaryLink: "/donate",
      primaryText: "Register Now",
      secondaryText: "Donate"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

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
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Mobile View */}
        <div className="md:hidden relative h-full w-full">
          <motion.div
            key={slides[currentSlide].id}
            className="relative h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
            <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6">
              <div className="w-full max-w-lg mx-auto">
                <span className="text-xl font-bold text-white mb-2">
                  {slides[currentSlide].id}
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {slides[currentSlide].title}
                </h1>
                <div className="text-white text-base sm:text-lg mb-6 space-y-2">
                  {slides[currentSlide].description.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <Link
                    href={slides[currentSlide].primaryLink}
                    className="bg-[#2c3e50] text-white px-6 py-3 text-center text-lg font-semibold hover:bg-[#3a4f63] transition-colors rounded-lg w-full"
                  >
                    {slides[currentSlide].primaryCta}
                  </Link>
                  <Link
                    href={slides[currentSlide].secondaryLink}
                    className="bg-white text-[#2c3e50] px-6 py-3 text-center text-lg font-semibold hover:bg-gray-100 transition-colors rounded-lg w-full"
                  >
                    {slides[currentSlide].secondaryCta}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex h-full w-full">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              className="relative h-full cursor-pointer overflow-hidden"
              style={{
                width: index === currentSlide ? '60%' : '20%',
                transition: 'width 0.5s ease-in-out'
              }}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="relative h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
              </div>

              <div className="absolute inset-0 flex items-center">
                <div className="px-6 lg:px-8 max-w-2xl">
                  <motion.div
                    initial={false}
                    animate={{ 
                      opacity: index === currentSlide ? 1 : 0.7,
                      x: index === currentSlide ? 0 : 0
                    }}
                    className="space-y-4"
                  >
                    <span className="text-2xl font-bold text-white block">
                      {slide.id}
                    </span>
                    <h1 className={`font-bold text-white transition-all duration-500 ${
                      index === currentSlide ? 'text-4xl lg:text-5xl xl:text-6xl mb-6' : 'text-2xl mb-2'
                    }`}>
                      {slide.title}
                    </h1>
                    
                    {index === currentSlide && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                      >
                        <div className="text-white text-lg xl:text-xl space-y-2">
                          {slide.description.split('\n').map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-4 pt-4">
                          <Link
                            href={slide.primaryLink}
                            className="bg-[#2c3e50] text-white px-6 lg:px-8 py-3 text-lg font-semibold hover:bg-[#3a4f63] transition-colors inline-block rounded-lg"
                          >
                            {slide.primaryText}
                          </Link>
                          <Link
                            href={slide.secondaryLink}
                            className="bg-white text-[#2c3e50] px-6 lg:px-8 py-3 text-lg font-semibold hover:bg-gray-100 transition-colors inline-block rounded-lg"
                          >
                            {slide.secondaryText}
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrow - Visible on both mobile and desktop */}
        <button
          onClick={nextSlide}
          className="absolute bottom-4 md:bottom-8 right-4 md:right-8 text-white flex items-center gap-2 hover:text-gray-300 transition-colors z-20"
        >
          <span className="text-sm opacity-60">Next</span>
          <FaArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute inset-0 bg-[#2c3e50] pattern-grid-lg"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2c3e50]/30 to-[#2c3e50]" />
        
        {/* Hadith Section - Inside Hero */}
        <motion.div 
          className="w-full max-w-7xl mx-auto px-4 relative z-10 text-center mb-16 pt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={`mb-6 ${amiri.className}`}>
            <h3 className="text-3xl sm:text-4xl md:text-5xl mb-4 leading-relaxed text-black">
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

          {/* Hero Section Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/donate"
                className="w-full sm:w-auto bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-block"
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
                className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#2c3e50] transition-colors shadow-lg inline-block"
              >
                Volunteer
              </Link>
            </motion.div>
          </div>
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

      {/* Global Impact Map Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#2c3e50] mb-4">
              Our Global Impact
            </h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">
              Making a difference across continents, one community at a time
            </p>
          </motion.div>

          {/* Map Container */}
          <div className="relative bg-white rounded-2xl shadow-lg p-2 sm:p-4 md:p-6 mx-auto w-full overflow-hidden">
            <GlobalImpactMap />
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