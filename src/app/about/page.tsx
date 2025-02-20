'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Amiri } from 'next/font/google';
import { FaInfoCircle, FaUsers, FaHandsHelping, FaChartLine, FaAddressCard, FaQuestionCircle } from 'react-icons/fa';
import Footer from '../../components/Footer';

const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic'] 
});

interface AboutSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  link: string;
  hadith?: {
    arabic: string;
    english: string;
    source: string;
    narrator: string;
  };
  image: string;
}

export default function About() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const sections: AboutSection[] = [
    {
      id: 'who-we-are',
      title: 'Who We Are',
      icon: <FaInfoCircle className="w-8 h-8" />,
      description: 'Discover our mission to create positive change and empower communities worldwide through youth-driven initiatives.',
      link: '/about/who-we-are',
      hadith: {
        arabic: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ",
        english: "The best of people are those who are most beneficial to people",
        source: "Sahih Al-Jami 3289",
        narrator: "Narrated by Jabir (رضي الله عنه)"
      },
      image: '/whoweare3.jpg'
    },
    {
      id: 'team',
      title: 'Our Team',
      icon: <FaUsers className="w-8 h-8" />,
      description: 'Meet our passionate team of dedicated individuals working together to make a difference in communities worldwide.',
      link: '/about/team',
      hadith: {
        arabic: "يَدُ اللَّهِ مَعَ الْجَمَاعَةِ",
        english: "Allah's hand is with the community",
        source: "Sunan al-Tirmidhi 2166",
        narrator: "Narrated by Ibn Abbas (رضي الله عنه)"
      },
      image: '/Zubair.png'
    },
    {
      id: 'volunteer',
      title: 'Volunteer',
      icon: <FaHandsHelping className="w-8 h-8" />,
      description: 'Join our community of volunteers and contribute to meaningful projects that create lasting impact.',
      link: '/about/volunteer',
      hadith: {
        arabic: "مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ",
        english: "Whoever guides someone to goodness will have a reward like one who did it",
        source: "Sahih Muslim 1893",
        narrator: "Narrated by Abu Mas'ud Al-Ansari (رضي الله عنه)"
      },
      image: '/whoweare1.jpeg'
    },
    {
      id: 'impact-report',
      title: 'Impact Report',
      icon: <FaChartLine className="w-8 h-8" />,
      description: 'Explore the measurable change we\'ve created through our programs and initiatives across the globe.',
      link: '/about/impact-report',
      image: '/UMFImpact.png'
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: <FaAddressCard className="w-8 h-8" />,
      description: 'Reach out to us for collaborations, questions, or to learn more about how you can get involved.',
      link: '/about/contact',
      image: '/contact.jpeg'
    },
    {
      id: 'faq',
      title: 'FAQ',
      icon: <FaQuestionCircle className="w-8 h-8" />,
      description: 'Find answers to commonly asked questions about our organization, programs, and how you can contribute.',
      link: '/about/faq',
      image: '/FAQ.jpg'
    }
  ];

  const featuredHadith = {
    arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ",
    english: "Actions are judged by intentions",
    source: "Sahih al-Bukhari 1",
    narrator: "Narrated by Umar ibn Al-Khattab (رضي الله عنه)"
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Hadith and CTA */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute inset-0 bg-[#2c3e50] pattern-grid-lg"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2c3e50]/30 to-[#2c3e50]" />
        
        {/* Hadith Section */}
        <motion.div 
          className="container mx-auto px-4 relative z-10 text-center mb-16 pt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={`mb-6 ${amiri.className}`}>
            <h3 className="text-4xl md:text-5xl mb-4 leading-relaxed text-white">
              {featuredHadith.arabic}
            </h3>
          </div>
          <p className="text-2xl font-semibold mb-4 text-white">
            "{featuredHadith.english}"
          </p>
          <div className="text-sm text-gray-300">
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
              About Us
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Join us in our mission to create positive change and empower communities worldwide
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link href="/about/who-we-are">
              <motion.button
                className="bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </Link>
            <Link href="/about/volunteer">
              <motion.button
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Involved
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
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

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
                onHoverStart={() => setIsHovered(section.id)}
                onHoverEnd={() => setIsHovered(null)}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-full">
                  <div className="relative h-48">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2c3e50] to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <div className="flex items-center space-x-3">
                        <div className="text-[#66e8fd]">{section.icon}</div>
                        <h2 className="text-2xl font-bold">{section.title}</h2>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{section.description}</p>
                    
                    {section.hadith && (
                      <div className={`mb-6 ${amiri.className}`}>
                        <div className="text-lg text-[#2c3e50] mb-2">
                          {section.hadith.arabic}
                        </div>
                        <p className="text-sm text-gray-600 italic">
                          "{section.hadith.english}"
                        </p>
                        <div className="text-xs text-gray-500 mt-2">
                          {section.hadith.source} - {section.hadith.narrator}
                        </div>
                      </div>
                    )}

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={section.link}
                        className="inline-block w-full text-center bg-[#2c3e50] text-white px-6 py-3 rounded-xl hover:bg-[#3a4f63] transition-colors"
                      >
                        Learn More
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 