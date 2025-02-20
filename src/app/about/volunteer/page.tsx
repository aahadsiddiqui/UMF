'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaHandsHelping, FaGlobe, FaHeart, FaUsers } from 'react-icons/fa';
import Link from 'next/link';
import Footer from '../../../components/Footer';

export default function Volunteer() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  const volunteerPositions = [
    {
      title: "Event Coordinator",
      description: "Help organize and manage our community events and fundraising initiatives.",
      commitment: "4-6 hours per week",
      skills: ["Event Planning", "Communication", "Leadership"],
      icon: <FaUsers className="w-6 h-6" />
    },
    {
      title: "Social Media Manager",
      description: "Create engaging content and manage our social media presence.",
      commitment: "3-5 hours per week",
      skills: ["Social Media", "Content Creation", "Marketing"],
      icon: <FaGlobe className="w-6 h-6" />
    },
    {
      title: "Community Outreach",
      description: "Connect with local communities and build partnerships.",
      commitment: "5-7 hours per week",
      skills: ["Networking", "Public Speaking", "Relationship Building"],
      icon: <FaHandsHelping className="w-6 h-6" />
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
                Join Our Mission
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Make a difference in your community by volunteering with United Muslim Fund
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="#positions"
                  className="bg-[#2c3e50] text-white px-8 py-4 rounded-full text-lg font-semibold inline-block hover:bg-[#3a4f63] transition-colors shadow-md"
                >
                  View Positions
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Volunteer Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-16 text-[#2c3e50]"
              {...fadeIn}
            >
              Why Volunteer With Us?
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Make an Impact",
                  description: "Directly contribute to meaningful projects that help communities in need",
                  icon: <FaHeart className="w-8 h-8" />
                },
                {
                  title: "Gain Experience",
                  description: "Develop valuable skills and experience in non-profit work",
                  icon: <FaUsers className="w-8 h-8" />
                },
                {
                  title: "Build Community",
                  description: "Connect with like-minded individuals passionate about making a difference",
                  icon: <FaHandsHelping className="w-8 h-8" />
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-[#2c3e50] mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Available Positions */}
        <section id="positions" className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-16 text-[#2c3e50]"
              {...fadeIn}
            >
              Available Positions
            </motion.h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {volunteerPositions.map((position, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="text-[#2c3e50] mr-4">
                        {position.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{position.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{position.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {position.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">
                        Time Commitment: {position.commitment}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#2c3e50] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#3a4f63] transition-colors"
                        onClick={() => window.location.href = 'mailto:volunteer@unitedmuslimfund.org'}
                      >
                        Apply Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[#2c3e50]">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              className="max-w-3xl mx-auto"
              {...fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl mb-8 text-gray-200">
                Join our team of dedicated volunteers and help us create positive change in communities worldwide.
              </p>
              <motion.a
                href="mailto:volunteer@unitedmuslimfund.org"
                className="inline-block bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 