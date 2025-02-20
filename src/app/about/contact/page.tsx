'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHandsHelping, FaDonate, FaUsers } from 'react-icons/fa';
import Link from 'next/link';
import Footer from '../../../components/Footer';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setFormStatus('Thank you! We will get back to you soon!');
    setIsSubmitting(false);
  };

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
                Get in touch
              </h1>
              <p className="text-xl md:text-2xl text-gray-600">
                Fill out some info and we will be in touch shortly!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="firstName">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2c3e50] focus:ring-2 focus:ring-[#2c3e50] focus:ring-opacity-20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="lastName">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2c3e50] focus:ring-2 focus:ring-[#2c3e50] focus:ring-opacity-20 transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2c3e50] focus:ring-2 focus:ring-[#2c3e50] focus:ring-opacity-20 transition-colors"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="123-456-7890"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2c3e50] focus:ring-2 focus:ring-[#2c3e50] focus:ring-opacity-20 transition-colors"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2c3e50] focus:ring-2 focus:ring-[#2c3e50] focus:ring-opacity-20 transition-colors resize-none"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-[#2c3e50] text-white py-4 rounded-lg font-semibold hover:bg-[#3a4f63] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {formStatus && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-500 text-center mt-4"
                  >
                    {formStatus}
                  </motion.p>
                )}
              </motion.form>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">Looking to donate?</h3>
                <Link 
                  href="/donate"
                  className="inline-flex items-center text-[#2c3e50] hover:text-[#3a4f63] transition-colors"
                >
                  <FaDonate className="mr-2" />
                  Donate Now
                </Link>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-4">Want to sponsor?</h3>
                <Link 
                  href="/local-impacts/sponsorships"
                  className="inline-flex items-center text-[#2c3e50] hover:text-[#3a4f63] transition-colors"
                >
                  <FaHandsHelping className="mr-2" />
                  Sponsorship
                </Link>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4">Want to join us?</h3>
                <Link 
                  href="/about/volunteer"
                  className="inline-flex items-center text-[#2c3e50] hover:text-[#3a4f63] transition-colors"
                >
                  <FaUsers className="mr-2" />
                  Join Us
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