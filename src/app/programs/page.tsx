'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaBookOpen, FaHeartbeat, FaChartLine } from 'react-icons/fa';
import Footer from '../../components/Footer';

export default function Programs() {
  const programs = [
    {
      title: "Fill Your Backpack",
      description: "Empowering students with essential educational materials and resources for academic success. Our program provides backpacks filled with school supplies to students in need.",
      image: "/backpack6.png",
      icon: <FaBookOpen className="w-8 h-8" />,
      link: "/programs/fill-your-backpack",
      stats: {
        number: "1,800+",
        label: "Backpacks Distributed"
      },
      achievements: [
        "School supplies distribution",
        "Educational support",
        "Student success initiatives"
      ]
    },
    {
      title: "Fuel Your Health",
      description: "Building healthier communities through medical infrastructure and resources. Our latest campaign focuses on establishing clinics in Uganda and Sudan.",
      image: "/fuelyourhealth.png",
      icon: <FaHeartbeat className="w-8 h-8" />,
      link: "/programs/fuel-your-health",
      stats: {
        number: "500+",
        label: "Vaccines Delivered"
      },
      achievements: [
        "Medical clinics establishment",
        "Clean water access",
        "Nutritious food programs"
      ]
    },
    {
      title: "Fund Your Future",
      description: "Supporting local entrepreneurs through micro-loans and skills development to foster sustainable economic growth in communities.",
      image: "/fundyourfuture.jpeg",
      icon: <FaChartLine className="w-8 h-8" />,
      link: "/programs/fund-your-future",
      stats: {
        number: "C$15,000",
        label: "Current Goal"
      },
      achievements: [
        "Micro-loans provision",
        "Skills training",
        "Economic development"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#2c3e50]">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Making a lasting impact through education, health, and economic empowerment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-20">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 relative">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-[#66e8fd]">{program.icon}</div>
                        <h3 className="text-2xl font-bold">{program.title}</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">{program.stats.number}</span>
                        <span className="text-sm opacity-75">{program.stats.label}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="text-3xl font-bold text-[#2c3e50]">{program.title}</h2>
                  <p className="text-lg text-gray-600">{program.description}</p>
                  <div className="space-y-3">
                    {program.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#66e8fd]" />
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={program.link}
                      className="inline-block bg-[#2c3e50] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#3a4f63] transition-colors shadow-lg"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2c3e50] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Support Our Programs
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Your contribution helps us continue making a difference in education, health, and economic empowerment.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/donate"
                className="inline-block bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Donate Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 