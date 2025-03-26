'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaGlobeAmericas, FaArrowRight } from 'react-icons/fa';
import Footer from '../../components/Footer';

export default function GlobalImpacts() {
  const countries = [
    {
      name: "Turkey",
      description: "Emergency earthquake relief and education support for affected children. Our team personally traveled to provide direct assistance and implement educational initiatives.",
      image: "/turkey2.jpg",
      link: "/global-impacts/turkey",
      achievements: [
        "Distributed emergency supplies",
        "Supported affected children's education",
        "Provided immediate disaster relief"
      ]
    },
    {
      name: "Morocco",
      description: "Partnered with Moulana Tariq Jameel Foundation to provide immediate relief following the devastating earthquake, focusing on community rebuilding and essential aid.",
      image: "/morocco.jpeg",
      link: "/global-impacts/morocco",
      achievements: [
        "Emergency earthquake response",
        "Community rebuilding support",
        "Essential aid distribution"
      ]
    },
    {
      name: "Afghanistan",
      description: "Collaborated with School Time Charity to support 300 orphans with year-long nourishment programs and educational resources.",
      image: "/afghanistan.jpg",
      link: "/global-impacts/afghanistan",
      achievements: [
        "Supported 1000+ orphans",
        "Provided year-long nourishment",
        "Educational support programs"
      ]
    },
    {
      name: "Indonesia",
      description: "Partnered with Rumah Harapan to deliver healthcare initiatives, including 500+ vaccines, surgeries, and essential medical supplies in Jakarta and Bali.",
      image: "/indonesia7.JPG",
      link: "/global-impacts/indonesia",
      achievements: [
        "Delivered 500+ vaccines",
        "Provided medical supplies",
        "Supported pediatric surgeries"
      ]
    },
    {
      name: "Pakistan",
      description: "Supporting local communities through education initiatives and emergency relief efforts, focusing on sustainable development and youth empowerment.",
      image: "/pakistan1.JPG",
      link: "/global-impacts/pakistan",
      achievements: [
        "Educational support programs",
        "Emergency relief distribution",
        "Youth empowerment initiatives"
      ]
    },
    {
      name: "Egypt",
      description: "Working with local partners to provide humanitarian aid and support educational programs, making a lasting impact in Egyptian communities.",
      image: "/egypt2.JPG",
      link: "/global-impacts/egypt",
      achievements: [
        "Humanitarian aid distribution",
        "Educational program support",
        "Community development"
      ]
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
            <div className="flex justify-center mb-6">
              <FaGlobeAmericas className="w-16 h-16 text-[#2c3e50]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#2c3e50]">
              Our Global Impact
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Making a difference across borders, one community at a time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={country.link}>
                  <div className="relative h-64">
                    <Image
                      src={country.image}
                      alt={`${country.name} Impact`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold mb-2">{country.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      {country.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {country.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 rounded-full bg-[#3498db] mr-2" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-[#3498db] font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More <FaArrowRight className="ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2c3e50] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Help Us Make a Difference
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Your support enables us to continue our mission of helping communities worldwide
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/donate"
                className="inline-block bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
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