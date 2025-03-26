'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaArrowRight, FaHandHoldingHeart } from 'react-icons/fa';
import Footer from '../../components/Footer';

export default function LocalImpacts() {
  const initiatives = [
    {
      name: "Women's Shelter Ramadan Care Packages",
      description: "Partnered with Nisa Homes to support Muslim women and children across Canada through care packages and essential supplies during Ramadan.",
      image: "/womenshelter.jpeg",
      link: "/local-impacts/womens-shelter",
      achievements: [
        "Provided essential supplies",
        "Supported women and children",
        "Community collaboration"
      ]
    },
    {
      name: "Toronto Winter Food Drive",
      description: "Distributed over 300 warm meals to families in Thorncliffe Park, working alongside officers from 53 division to address food insecurity in our community.",
      image: "/torontofood.jpeg",
      link: "/local-impacts/food-drive",
      achievements: [
        "300+ warm meals served",
        "Partnership with local police",
        "Community outreach"
      ]
    },
    {
      name: "Community Events",
      description: "Organizing and sponsoring various community events throughout the year, from cultural celebrations to educational workshops.",
      image: "/park1.jpeg",
      link: "/local-impacts/events",
      achievements: [
        "Cultural celebrations",
        "Educational workshops",
        "Community gatherings"
      ]
    },
    {
      name: "Sponsorship Programs",
      description: "Supporting local initiatives and events that align with our mission of community empowerment and positive change.",
      image: "/palestinian.jpg",
      link: "/local-impacts/sponsorships",
      achievements: [
        "Event sponsorships",
        "Youth programs",
        "Community support"
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
              <FaHome className="w-16 h-16 text-[#2c3e50]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#2c3e50]">
              Our Local Impact
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Making a difference in our community, one initiative at a time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2c3e50]">
              Local Community Impact
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Through our local initiatives, we've made significant strides in supporting our community
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-2">300+</div>
                <div className="text-gray-600">Warm Meals Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-2">1,800+</div>
                <div className="text-gray-600">Backpacks Distributed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-2">50+</div>
                <div className="text-gray-600">Events Sponsored</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-2">5,000+</div>
                <div className="text-gray-600">Lives Touched</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={initiative.link}>
                  <div className="relative h-64">
                    <Image
                      src={initiative.image}
                      alt={`${initiative.name} Impact`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold mb-2">{initiative.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      {initiative.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {initiative.achievements.map((achievement, i) => (
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

      {/* Get Involved Section */}
      <section className="py-16 bg-[#2c3e50] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <FaHandHoldingHeart className="w-12 h-12" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Involved
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in making a difference in our local community. Whether through volunteering, sponsorship, or donations, your support matters.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/about/volunteer"
                  className="inline-block bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Volunteer With Us
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/donate"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors shadow-lg"
                >
                  Support Our Cause
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 