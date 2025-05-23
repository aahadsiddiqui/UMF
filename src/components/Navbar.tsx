'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaUsers, FaGlobeAmericas, FaHome, FaBook, FaUserFriends, FaHandsHelping, FaChartLine, FaEnvelope, FaQuestionCircle, FaSchool, FaUtensils, FaCalendarAlt, FaHandshake, FaGraduationCap, FaHeartbeat, FaPiggyBank, FaHeart } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      title: <span className="flex items-center">
        <FaUsers className={`w-5 h-5 mr-2 ${isScrolled ? 'text-white' : 'text-[#2c3e50]'}`} />
        About
      </span>,
      href: '/about',
      dropdownItems: [
        { name: <span className="flex items-center"><FaGlobeAmericas className="w-4 h-4 mr-2 text-[#2c3e50]" />Who We Are</span>, href: '/about/who-we-are' },
        { name: <span className="flex items-center"><FaUserFriends className="w-4 h-4 mr-2 text-[#2c3e50]" />Team</span>, href: '/about/team' },
        { name: <span className="flex items-center"><FaHandsHelping className="w-4 h-4 mr-2 text-[#2c3e50]" />Volunteer</span>, href: '/about/volunteer' },
        { name: <span className="flex items-center"><FaChartLine className="w-4 h-4 mr-2 text-[#2c3e50]" />Impact Report</span>, href: '/about/impact-report' },
        { name: <span className="flex items-center"><FaEnvelope className="w-4 h-4 mr-2 text-[#2c3e50]" />Contact</span>, href: '/about/contact' },
        { name: <span className="flex items-center"><FaQuestionCircle className="w-4 h-4 mr-2 text-[#2c3e50]" />FAQ</span>, href: '/about/faq' },
      ]
    },
    {
      title: <span className="flex items-center">
        <FaGlobeAmericas className={`w-5 h-5 mr-2 ${isScrolled ? 'text-white' : 'text-[#2c3e50]'}`} />
        Global Impacts
      </span>,
      href: '/global-impacts',
      dropdownItems: [
        { name: <span className="flex items-center"><FaGlobeAmericas className="w-4 h-4 mr-2 text-[#2c3e50]" />Turkey</span>, href: '/global-impacts/turkey' },
        { name: <span className="flex items-center"><FaGlobeAmericas className="w-4 h-4 mr-2 text-[#2c3e50]" />Morocco</span>, href: '/global-impacts/morocco' },
        { name: <span className="flex items-center"><FaGlobeAmericas className="w-4 h-4 mr-2 text-[#2c3e50]" />Afghanistan</span>, href: '/global-impacts/afghanistan' },
        { name: <span className="flex items-center"><FaGlobeAmericas className="w-4 h-4 mr-2 text-[#2c3e50]" />Pakistan</span>, href: '/global-impacts/pakistan' },
        { name: <span className="flex items-center"><FaGlobeAmericas className="w-4 h-4 mr-2 text-[#2c3e50]" />Egypt</span>, href: '/global-impacts/egypt' },
        { name: <span className="flex items-center"><FaGlobeAmericas className="w-4 h-4 mr-2 text-[#2c3e50]" />Indonesia</span>, href: '/global-impacts/indonesia' },
        { name: <span className="flex items-center"><FaGlobeAmericas className="w-4 h-4 mr-2 text-[#2c3e50]" />Canada</span>, href: '/global-impacts/canada' },
        { name: <span className="flex items-center"><FaGlobeAmericas className="w-4 h-4 mr-2 text-[#2c3e50]" />Uganda</span>, href: '/global-impacts/uganda' },
      ]
    },
    {
      title: <span className="flex items-center">
        <FaHome className={`w-5 h-5 mr-2 ${isScrolled ? 'text-white' : 'text-[#2c3e50]'}`} />
        Local Impacts
      </span>,
      href: '/local-impacts',
      dropdownItems: [
        { name: <span className="flex items-center"><FaHome className="w-4 h-4 mr-2 text-[#2c3e50]" />Women's Shelter</span>, href: '/local-impacts/womens-shelter' },
        { name: <span className="flex items-center"><FaUtensils className="w-4 h-4 mr-2 text-[#2c3e50]" />Food Drive</span>, href: '/local-impacts/food-drive' },
        { name: <span className="flex items-center"><FaCalendarAlt className="w-4 h-4 mr-2 text-[#2c3e50]" />Events</span>, href: '/local-impacts/events' },
        { name: <span className="flex items-center"><FaHandshake className="w-4 h-4 mr-2 text-[#2c3e50]" />Sponsorships</span>, href: '/local-impacts/sponsorships' },
      ]
    },
    {
      title: <span className="flex items-center">
        <FaBook className={`w-5 h-5 mr-2 ${isScrolled ? 'text-white' : 'text-[#2c3e50]'}`} />
        Programs
      </span>,
      href: '/programs',
      dropdownItems: [
        { name: <span className="flex items-center"><FaSchool className="w-4 h-4 mr-2 text-[#2c3e50]" />Fill Your Backpack</span>, href: '/programs/fill-your-backpack' },
        { name: <span className="flex items-center"><FaHeartbeat className="w-4 h-4 mr-2 text-[#2c3e50]" />Fuel Your Health</span>, href: '/programs/fuel-your-health' },
        { name: <span className="flex items-center"><FaPiggyBank className="w-4 h-4 mr-2 text-[#2c3e50]" />Fund Your Future</span>, href: '/programs/fund-your-future' },
      ]
    },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#2c3e50] shadow-lg' : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/UMG-Logo.png"
              alt="United Muslim Fund Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`text-lg font-medium transition-colors ${
                    isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-800 hover:text-[#2c3e50]'
                  }`}
                >
                  {item.title}
                </Link>
                
                {/* Dropdown */}
                <div className="absolute left-0 mt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white rounded-xl shadow-lg py-2">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Donate Button */}
            <Link
              href="/donate"
              className="flex items-center bg-white text-[#2c3e50] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <FaHeart className={`w-4 h-4 mr-2 ${isScrolled ? 'text-[#2c3e50]' : 'text-[#2c3e50]'}`} />
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <Link
              href="/donate"
              className="bg-white text-[#2c3e50] px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              <FaHeart className={`inline-block w-4 h-4 mr-1 ${isScrolled ? 'text-[#2c3e50]' : 'text-[#2c3e50]'}`} />
              Donate
            </Link>
            <button
              className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-white hover:bg-white/20' : 'text-[#2c3e50] hover:bg-[#2c3e50]/10'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden fixed top-20 left-0 right-0 max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-6">
                {navItems.map((item) => (
                  <div key={item.href} className="space-y-3">
                    <Link
                      href={item.href}
                      className="text-[#2c3e50] font-semibold text-lg flex items-center gap-2 hover:text-[#3498db] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                    <div className="ml-6 space-y-2 border-l-2 border-gray-200 pl-4">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="block text-gray-600 hover:text-[#2c3e50] transition-colors py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 