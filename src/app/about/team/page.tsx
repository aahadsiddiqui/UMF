'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import Footer from '../../../components/Footer';
import { Amiri } from 'next/font/google';
import Link from 'next/link';

const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic'] 
});

export default function Team() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  const hadiths = [
    {
      arabic: "مَثَلُ الْمُؤْمِنِينَ فِي تَوَادِّهِمْ وَتَرَاحُمِهِمْ وَتَعَاطُفِهِمْ مَثَلُ الْجَسَدِ",
      english: "The believers in their mutual kindness, compassion and sympathy are just like one body",
      source: "Sahih al-Bukhari 6011",
      narrator: "Narrated by An-Nu'man bin Bashir (رضي الله عنه)"
    },
    {
      arabic: "خَيْرُ الأَصْحَابِ عِنْدَ اللَّهِ خَيْرُهُمْ لِصَاحِبِهِ",
      english: "The best of companions in the sight of Allah is the one who is best to his companion",
      source: "Jami' at-Tirmidhi 1944",
      narrator: "Narrated by Abdullah ibn Umar (رضي الله عنه)"
    }
  ];

  const executives = [
    {
      name: "Zubair Hussain",
      position: "President",
      email: "zubair@unitedmuslimfund.org",
      image: "/Zubair.png"
    },
    {
      name: "Telha Chohan",
      position: "Vice President",
      email: "telha@unitedmuslimfund.org",
      image: "/Telha.jpeg"
    },
    {
      name: "Naif Bashar",
      position: "Treasurer",
      email: "naif@unitedmuslimfund.org",
      image: "/Naif.jpeg"
    }
  ];

  const advisors = [
    {
      name: "Mustafa Popalzai",
      position: "Advisory Board Member",
      email: "mustafa@unitedmuslimfund.org",
      bio: "Mustafa Popalzai, a Detective Constable with the Toronto Police Service's 51 Division (Major Crime Unit), views policing as a calling to positively impact lives. Born in Kabul, Afghanistan, his family fled the Taliban to Canada when he was 14, shaping his dedication to community service. Mustafa co-founded Project Hope in 2021, assisting Afghan refugees with guidance and financial support, delivering over $1 million in donations. Project Hope began with Afghan Refugees but now it has expanded to assist newcomers to Canada from all over the world. Recognized with the Humanitarian Award from Carleton University and Community Builder of the Year by United Way, Mustafa has worked in multiple police units during his 10-year career. He encourages others to pursue their dreams relentlessly.",
      image: "/Mustafa.jpeg"
    },
    {
      name: "Vida Babakar",
      position: "Advisory Board Member",
      email: "vida@unitedmuslimfund.org",
      bio: "Vida Babakar is a seasoned banking professional with over a decade of experience in managing IT vendor relationships. At 32, she has successfully balanced a thriving career and family life as a mother of three. Vida has worked with various banks, ensuring efficient vendor management and strategic planning. She joins the United Muslim Fund advisory board to leverage her expertise in management to make a positive impact on the community. Passionate about helping others, Vida aims to give back, gain new skills and experiences, and connect with like-minded individuals who are dedicated to making a difference. Her commitment and experience are invaluable assets to the team.",
      image: "/vida.jpg"
    }
  ];

  return (
    <>
      <main className="min-h-screen bg-white pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            className="absolute inset-0 bg-[#2c3e50] pattern-grid-lg"
          />
          
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="text-center max-w-4xl mx-auto py-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#2c3e50]">
                Our Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-600">
                Meet the dedicated individuals working to make a difference
              </p>
            </motion.div>
          </div>
        </section>

        {/* First Hadith Section */}
        <section className="py-16 bg-[#2c3e50] relative overflow-hidden">
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
                  {hadiths[0].arabic}
                </h3>
              </div>
              <p className="text-2xl font-semibold mb-4">
                "{hadiths[0].english}"
              </p>
              <div className="text-sm text-gray-400">
                <p className="mb-1">{hadiths[0].source}</p>
                <p>{hadiths[0].narrator}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Executive Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-[#2c3e50]"
              {...fadeIn}
            >
              Executive Team
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {executives.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-[300px] relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index === 0}
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{member.name}</h3>
                    <p className="text-xl text-[#2c3e50] mb-4 font-medium">{member.position}</p>
                    <motion.a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center text-gray-600 hover:text-[#2c3e50] transition-colors group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaEnvelope className="mr-2 text-[#2c3e50]" />
                      <span className="text-gray-600 group-hover:text-[#2c3e50] transition-colors">
                        {member.email}
                      </span>
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Board Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-[#2c3e50]"
              {...fadeIn}
            >
              Advisory Board
            </motion.h2>
            
            <div className="space-y-8 max-w-4xl mx-auto">
              {advisors.map((advisor, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 relative h-[400px] md:h-auto">
                      <Image
                        src={advisor.image}
                        alt={advisor.name}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index === 0}
                      />
                    </div>
                    <div className="p-8 md:w-2/3">
                      <h3 className="text-2xl font-bold mb-2 text-gray-800">{advisor.name}</h3>
                      <p className="text-xl text-[#2c3e50] mb-4 font-medium">{advisor.position}</p>
                      <p className="text-gray-600 mb-6 leading-relaxed">{advisor.bio}</p>
                      <motion.a
                        href={`mailto:${advisor.email}`}
                        className="inline-flex items-center text-gray-600 hover:text-[#2c3e50] transition-colors group"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaEnvelope className="mr-2 text-[#2c3e50]" />
                        <span className="text-gray-600 group-hover:text-[#2c3e50] transition-colors">
                          {advisor.email}
                        </span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Second Hadith Section */}
        <section className="py-16 bg-[#1e2a37] relative overflow-hidden">
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
                  {hadiths[1].arabic}
                </h3>
              </div>
              <p className="text-2xl font-semibold mb-4">
                "{hadiths[1].english}"
              </p>
              <div className="text-sm text-gray-400">
                <p className="mb-1">{hadiths[1].source}</p>
                <p>{hadiths[1].narrator}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Join the Team Section */}
        <section className="py-20 bg-[#2c3e50] text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Be part of a dedicated team making a real difference in communities worldwide
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/about/volunteer"
                  className="bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg inline-block"
                >
                  Volunteer With Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 