'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Amiri } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../components/Footer';

const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic'] 
});

export default function Projects() {
  const featuredHadith = {
    arabic: "مَنْ فَرَّجَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا فَرَّجَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ",
    english: "Whoever relieves a believer's hardship in this world, Allah will relieve their hardship on the Day of Judgment",
    source: "Sahih Muslim 2699",
    narrator: "Narrated by Abu Hurairah (رضي الله عنه)"
  };

  const projects = [
    {
      title: "Women's Shelter Ramadan Care Packages",
      description: "Driven by the desire to make a difference, we undertook a project to support the cause of helping women in our local community. We partnered up with Nisa Homes, an organization that provides temporary residence and support to Muslim women and children across Canada.",
      image: "/womenshelter.jpeg",
      link: "/local-impacts/womens-shelter",
      category: "Local Impact"
    },
    {
      title: "Toronto Winter Food Drive",
      description: "On the 12th of February United Muslim Fund was able to hand out more then 300 warm meals to the families here at Thorncliffe Park, with the help of our amazing officers from 53 division. Food insecurity affects 1 in 6 households in Ontario, we need to act now",
      image: "/torontofood.jpeg",
      link: "/local-impacts/food-drive",
      category: "Local Impact"
    },
    {
      title: "Turkey Earthquake Relief",
      description: "Our team personally traveled to Türkiye, extending beyond the act of providing financial aid. We brought an extra measure of help and care, aiming to be more than just givers. In response to the earthquake, we undertook a significant initiative under our education mandate to support children affected by the disaster.",
      image: "/turkey.jpeg",
      link: "/global-impacts/turkey",
      category: "Global Impact"
    },
    {
      title: "Morocco Earthquake Relief",
      description: "In the aftermath of the devastating earthquake in Morocco, the United Muslim Fund joined hands with the Moulana Tariq Jameel Foundation to bring relief directly to those affected.",
      image: "/morocco.jpeg",
      link: "/global-impacts/morocco",
      category: "Global Impact"
    },
    {
      title: "Afghanistan Food Program",
      description: "Partnering with School Time Charity, we are proud to have supported 300 orphans in Afghanistan by providing them with nourishment for an entire year.",
      image: "/afghanistan.jpeg",
      link: "/global-impacts/afghanistan",
      category: "Global Impact"
    },
    {
      title: "Indonesia Health Program",
      description: "Partnering with Rumah Harapan, UMF provided 300 vaccines to kids in Jakarta and Bali as well as funds for surgeries, hygiene kits, food, and toys",
      image: "/indonesia.jpeg",
      link: "/global-impacts/indonesia",
      category: "Global Impact"
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
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
              Our Work
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Making a lasting impact in communities worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hadith Section */}
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
                {featuredHadith.arabic}
              </h3>
            </div>
            <p className="text-2xl font-semibold mb-4">
              "{featuredHadith.english}"
            </p>
            <div className="text-sm text-gray-400">
              <p className="mb-1">{featuredHadith.source}</p>
              <p>{featuredHadith.narrator}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Header */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#2c3e50]">
              Our Impact Projects
            </h2>
            <div className="w-24 h-1 bg-[#3498db] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600">
              From local community support to global humanitarian aid, explore how we're making a difference around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link href={project.link}>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-[#2c3e50] px-4 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2c3e50] mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <span className="text-[#3498db] font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2c3e50] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Help?
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
                className="bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg inline-block"
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