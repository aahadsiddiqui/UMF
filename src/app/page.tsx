'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Amiri } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';
import GlobalImpactMap from '../components/GlobalImpactMap';
import { FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic'] 
});

// Custom hook for counting animation
const useCounter = (end: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef);
  const controls = useAnimation();
  const roundToPlace = end >= 1000 ? 100 : 1;

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = (timestamp - startTimestamp) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.round((end * progress) / roundToPlace) * roundToPlace);
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    if (isInView) {
      controls.start({ opacity: 1, scale: 1 });
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, end, duration, controls, roundToPlace]);

  return { count, nodeRef, controls };
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const slides = [
    {
      id: "01.",
      title: "Afghanistan Orphan Relief",
      description: "Feed the hungry, support orphans, build wells.\nUse your Zakat to make a difference.",
      image: "/afghanistan.jpg",
      primaryCta: "Explore Relief",
      primaryLink: "/global-impacts/afghanistan",
      secondaryCta: "Zakaat",
      secondaryLink: "/donate?campaign=afghanistan-zakaat",
      primaryText: "Explore Relief",
      secondaryText: "Zakaat"
    },
    {
      id: "02.",
      title: "Uganda Healthcare",
      description: "Support our mission to establish vital healthcare services.\nEvery donation brings healing to those in need.",
      image: "/uganda-healthcare.jpg",
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
    { 
      number: 200000,
      prefix: "$",
      suffix: "",
      label: "Funds Raised",
      link: "/donate",
      emoji: "💰"
    },
    { 
      number: 15000,
      prefix: "",
      suffix: "+",
      label: "People Helped",
      link: "/donate",
      emoji: "🤝"
    },
    { 
      number: 1800,
      prefix: "",
      suffix: "+",
      label: "Backpacks Given",
      link: "/programs/fill-your-backpack",
      emoji: "🎒"
    },
    { 
      number: 500,
      prefix: "",
      suffix: "+",
      label: "Vaccines Delivered",
      link: "/programs/fuel-your-health",
      emoji: "💉"
    },
    { 
      number: 7,
      prefix: "",
      suffix: "",
      label: "Countries Helped",
      link: "/donate",
      emoji: "🌍"
    }
  ];

  // Add this function for number formatting
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

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
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-300" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`${amiri.className} mb-4`}>
              <h2 className="text-3xl md:text-4xl mb-3 leading-relaxed text-[#2c3e50]">
                من دَلَّ عَلى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ
              </h2>
            </div>
            <p className="text-lg md:text-xl mb-2 text-[#2c3e50]">
              "Whoever guides someone to goodness will have a reward like one who did it"
            </p>
            <div className="text-sm text-gray-600 mb-6">
              <p>Sahih Muslim 1893</p>
              <p>Narrated by Abu Mas'ud Al-Ansari (رضي الله عنه)</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2c3e50] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#3a4f63] transition-colors shadow-lg"
              onClick={() => router.push('/donate')}
            >
              Donate Now
            </motion.button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-[#2c3e50] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#2c3e50] rounded-full mt-2" />
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
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">
              Our Impact By The Numbers
            </h2>
            <div className="w-24 h-1 bg-[#3498db] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto">
            {impactStats.map((stat, index) => {
              const { count, nodeRef, controls } = useCounter(stat.number);
              
              return (
                <Link
                  key={index}
                  href={stat.link}
                  className="group"
                >
                  <motion.div
                    className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-4xl mb-3">{stat.emoji}</div>
                    <motion.div
                      ref={nodeRef}
                      className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-2 group-hover:text-[#3498db] transition-colors"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={controls}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {stat.prefix}
                      {count >= 1000 ? formatNumber(count) : count}
                      {stat.suffix}
                    </motion.div>
                    <p className="text-gray-600 group-hover:text-[#3498db] transition-colors text-lg">
                      {stat.label}
                    </p>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 100% Donation Policy Section */}
      <section className="py-12 md:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-6xl mx-auto relative"
          >
            {/* Background Pattern */}
            <motion.div 
              className="absolute inset-0 bg-[#2c3e50] pattern-grid-lg opacity-5"
              animate={{ 
                backgroundPosition: ["0px 0px", "100px 100px"],
                transition: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
            />

            <div className="bg-[#2c3e50] text-white rounded-2xl p-8 md:p-12 shadow-2xl relative z-10 backdrop-blur-sm">
              <motion.h2 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                100% Donation Policy
              </motion.h2>
              <motion.p 
                className="text-xl md:text-2xl mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Every dollar you donate goes directly to those in need
              </motion.p>
              
              <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                {[
                  {
                    title: "100%",
                    description: "Of your donation reaches the beneficiaries",
                    icon: "💝",
                    hoverColor: "group-hover:text-[#FF6B6B]"
                  },
                  {
                    title: "0%",
                    description: "Administrative fees taken from your donation",
                    icon: "✨",
                    hoverColor: "group-hover:text-[#4ECDC4]"
                  },
                  {
                    title: "Transparent",
                    description: "Full accountability of fund distribution",
                    icon: "🤝",
                    hoverColor: "group-hover:text-[#FFD93D]"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-xl blur-xl group-hover:bg-white/30 transition-all duration-300" />
                    <div className="bg-white/10 rounded-xl p-6 md:p-8 relative h-full border border-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                      <div className="text-4xl md:text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <h3 className={`text-3xl md:text-4xl font-bold mb-3 transition-colors duration-300 ${item.hoverColor}`}>
                        {item.title}
                      </h3>
                      <p className="text-lg md:text-xl text-white/90 group-hover:text-white transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Interactive Call to Action */}
              <motion.div
                className="mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Link href="/donate">
                  <motion.button
                    className="bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold group relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      Make a Difference Today
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#FFD93D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
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