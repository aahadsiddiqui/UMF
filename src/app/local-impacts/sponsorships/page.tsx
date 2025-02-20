'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaGift, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Footer from '../../../components/Footer';

export default function Sponsorships() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const parkImages = [
    '/park1.jpeg',
    '/park2.jpeg',
    '/park3.jpeg',
    '/park4.jpeg',
    '/park5.jpeg'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % parkImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + parkImages.length) % parkImages.length);
  };

  const sponsoredEvents = [
    {
      title: "TMU Palestinian Culture Club Iftar 2023",
      description: "A vibrant celebration of Palestinian culture and community during Ramadan",
      image: "/palestinian.jpg",
      prize: "Giveaway - Apple Watch",
      date: "2023"
    },
    {
      title: "TMU Palestinian Culture Club Iftar 2024",
      description: "Annual gathering bringing together students and community members",
      image: "/palestinian2.jpg",
      prize: "Giveaway - $250 Cash Prize",
      date: "2024"
    },
    {
      title: "Youngstars Hockey Team 2024",
      description: "Supporting young athletes in their pursuit of excellence",
      image: "/hockey.jpg",
      prize: "Team Sponsorship",
      date: "2024"
    }
  ];

  return (
    <>
      <main className="min-h-screen bg-white pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden mb-16">
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
                Want us to sponsor your next event?
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                The United Muslim Fund (UMF) sponsors and supports local community initiatives aimed at empowering organizations for the benefit of communities.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/local-impacts/sponsorships/form"
                  className="bg-[#2c3e50] text-white px-8 py-4 rounded-full text-lg font-semibold inline-block hover:bg-[#3a4f63] transition-colors shadow-md"
                >
                  Apply for Sponsorship
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Image Carousel Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-16 text-[#2c3e50]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Friends of Cornell Park Eid Event 2024
            </motion.h2>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={parkImages[currentImageIndex]}
                      alt={`Park event image ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full text-[#2c3e50] hover:bg-white transition-colors"
              >
                <FaChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full text-[#2c3e50] hover:bg-white transition-colors"
              >
                <FaChevronRight className="w-6 h-6" />
              </button>

              <div className="flex justify-center mt-4 gap-2">
                {parkImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-[#2c3e50]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sponsored Events Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-16 text-[#2c3e50]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Sponsored Events
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {sponsoredEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        console.error(`Error loading image: ${event.image}`);
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-[#2c3e50] mb-2">
                      <FaCalendar className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex items-center text-[#2c3e50]">
                      <FaGift className="mr-2" />
                      <span>{event.prize}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-3xl font-bold mb-8 text-[#2c3e50]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to Apply?
              </motion.h2>
              <p className="text-xl text-gray-600 mb-8">
                By providing financial support, resources, and expertise, UMF fosters collaboration and collective impact. Get in touch to learn more about our sponsorship opportunities.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/about/contact"
                  className="bg-[#2c3e50] text-white px-8 py-4 rounded-full text-lg font-semibold inline-block hover:bg-[#3a4f63] transition-colors shadow-md"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 