'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import Footer from '../../../components/Footer';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Do 100% of the donations go to charity?",
      answer: "United Muslim Fund has a 100% donation policy. Your funds go directly towards the cause. Donations are not used for any administration costs that are incurred including travel, food, and accommodations. This policy ensures 100% optimization of projects."
    },
    {
      question: "Where are my donations going?",
      answer: "100% of your donations will go towards helping those in need around the world. Currently your donations will go towards our programs set up to help with health, education, and support. With your support, we have helped people in Afghanistan, Morocco, Indonesia, Turkey, Canada, and soon, Sudan."
    },
    {
      question: "Can I make my donation in honour of someone?",
      answer: "You can make your donation in someone's name through the comment section in the donation box! However the name of the donor is required to match the name on the card used to donate for security reasons."
    },
    {
      question: "How can I donate?",
      answer: "You can donate to our specific programs: Fill Your Backpack, Fuel Your Health, Fund Your Future. Click on each program to learn more about them and to donate. Or you could provide a general donation here. We thank you for your support."
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
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-gray-600">
                Find answers to common questions about United Muslim Fund
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <h3 className="text-xl font-semibold text-gray-800 pr-8">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#2c3e50]"
                    >
                      <FaChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6">
                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[#2c3e50]">
                Still have questions?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Can't find the answer you're looking for? Please reach out to our friendly team.
              </p>
              <motion.a
                href="/about/contact"
                className="inline-block bg-[#2c3e50] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#3a4f63] transition-colors shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 