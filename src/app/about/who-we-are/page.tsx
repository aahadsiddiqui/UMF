'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Amiri } from 'next/font/google';
import { FaUsers, FaHandHoldingHeart, FaGlobeAmericas, FaSeedling } from 'react-icons/fa';
import Footer from '../../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const amiri = Amiri({ 
  weight: ['400', '700'],
  subsets: ['arabic'] 
});

export default function WhoWeAre() {
  const hadithData = [
    {
      arabic: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ",
      english: "The best of people are those who benefit others",
      source: "Sahih Al-Jami",
      narrator: "Narrated by Jabir (رضي الله عنه)"
    },
    {
      arabic: "مَنْ لا يَرْحَمْ لا يُرْحَمْ",
      english: "Whoever does not show mercy will not be shown mercy",
      source: "Sahih al-Bukhari 6013",
      narrator: "Narrated by Jarir ibn Abdullah (رضي الله عنه)"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Our Beginning",
      description: "Started with a group of Muslim students",
      icon: FaSeedling
    },
    {
      year: "2021",
      title: "First Project",
      description: "Raised $2,000 with Nisa Homes",
      icon: FaHandHoldingHeart
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Extended reach to multiple countries",
      icon: FaGlobeAmericas
    },
    {
      year: "2023",
      title: "Growing Community",
      description: "Building youth-driven initiatives",
      icon: FaUsers
    }
  ];

  const carouselImages = [
    {
      src: "/whoweare1.jpeg",
      title: "Building Communities",
      description: "Working together to create lasting change"
    },
    {
      src: "/whoweare2.png",
      title: "Youth Empowerment",
      description: "Engaging young leaders in community service",
      objectFit: "contain"
    },
    {
      src: "/whoweare3.jpg",
      title: "Global Impact",
      description: "Making a difference across borders"
    },
    {
      src: "/whoweare4.jpeg",
      title: "Community Service",
      description: "Making a difference in local communities"
    },
    {
      src: "/whoweare5.jpeg",
      title: "Global Outreach",
      description: "Extending our impact worldwide"
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

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
              Who We Are
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              A youth-driven force for positive change in communities worldwide
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
                {hadithData[0].arabic}
              </h3>
            </div>
            <p className="text-2xl font-semibold mb-4">
              "{hadithData[0].english}"
            </p>
            <div className="text-sm text-gray-400">
              <p className="mb-1">{hadithData[0].source}</p>
              <p>{hadithData[0].narrator}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#2c3e50]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h2>

          {/* First paragraph */}
          <div className="max-w-4xl mx-auto mb-16">
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              United Muslim Fund started with a simple yet powerful idea: helping people. What began as a small group of concerned Muslim students determined to address persistent global issues has blossomed into an impactful international organization.
            </motion.p>
          </div>

          {/* Image Carousel */}
          <div className="max-w-6xl mx-auto mb-16">
            <motion.div 
              className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {carouselImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: currentImage === index ? 1 : 0,
                    scale: currentImage === index ? 1 : 1.1
                  }}
                  transition={{ duration: 0.7 }}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className={`${image.src === '/whoweare2.png' ? 'object-contain' : 'object-cover'}`}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <motion.h3
                      className="text-3xl font-bold mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ 
                        y: currentImage === index ? 0 : 20,
                        opacity: currentImage === index ? 1 : 0
                      }}
                      transition={{ delay: 0.3 }}
                    >
                      {image.title}
                    </motion.h3>
                    <motion.p
                      className="text-lg text-gray-200"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ 
                        y: currentImage === index ? 0 : 20,
                        opacity: currentImage === index ? 1 : 0
                      }}
                      transition={{ delay: 0.4 }}
                    >
                      {image.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}

              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImage === index ? 'bg-white w-4' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/75 hover:text-white transition-colors"
                onClick={() => setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
              >
                <motion.div
                  className="bg-black/30 p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ←
                </motion.div>
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/75 hover:text-white transition-colors"
                onClick={() => setCurrentImage((prev) => (prev + 1) % carouselImages.length)}
              >
                <motion.div
                  className="bg-black/30 p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  →
                </motion.div>
              </button>
            </motion.div>
          </div>

          {/* Second paragraph */}
          <div className="max-w-4xl mx-auto">
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our first project, a collaboration with Nisa Homes, exceeded all expectations by raising over $2,000 in just one week through grassroots word-of-mouth fundraising. This early success fueled our passion and demonstrated the power of community-driven change.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Impact Images Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {/* Afghanistan Card */}
              <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-xl"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-[400px]">
                  <Image
                    src="/whoweareafghanistan.jpeg"
                    alt="Our impact in Afghanistan"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2c3e50] mb-2">Afghanistan</h3>
                  <p className="text-gray-600">
                    Providing essential aid and support to communities in Afghanistan
                  </p>
                </div>
              </motion.div>

              {/* Indonesia Card */}
              <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-xl"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-[400px]">
                  <Image
                    src="/whoweareindonesia.jpeg"
                    alt="Our impact in Indonesia"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2c3e50] mb-2">Indonesia</h3>
                  <p className="text-gray-600">
                    Supporting educational initiatives and community development in Indonesia
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.div 
              className="mt-16 text-center max-w-4xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Today, United Muslim Fund operates across multiple countries, bringing hope and support to communities in need. Our youth perspective brings fresh energy and innovative solutions to global challenges.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From providing essential aid in Afghanistan to supporting educational initiatives in Indonesia, we're committed to making a lasting impact in communities worldwide. Our approach combines immediate assistance with sustainable development, ensuring that our efforts create long-term positive change.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-white rounded-lg p-6 shadow-lg h-full">
                    <milestone.icon className="w-12 h-12 mx-auto mb-4 text-[#3498db]" />
                    <h3 className="text-2xl font-bold text-[#2c3e50] mb-2">{milestone.year}</h3>
                    <h4 className="text-lg font-semibold text-[#2c3e50] mb-2">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
                {hadithData[1].arabic}
              </h3>
            </div>
            <p className="text-2xl font-semibold mb-4">
              "{hadithData[1].english}"
            </p>
            <div className="text-sm text-gray-400">
              <p className="mb-1">{hadithData[1].source}</p>
              <p>{hadithData[1].narrator}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects CTA Section */}
      <section className="py-20 bg-[#2c3e50] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              See what we have accomplished
            </motion.h2>
            <p className="text-xl text-gray-300 mb-12">
              Explore our initiatives and the impact we've made in communities worldwide
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/projects"
                className="bg-white text-[#2c3e50] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg inline-block"
              >
                Our Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 