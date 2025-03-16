'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaLinkedin, FaFacebook, FaEnvelope, FaYoutube } from 'react-icons/fa';

const footerSections = {
  About: [
    { name: 'Who We Are', href: '/about/who-we-are' },
    { name: 'Our Team', href: '/about/our-team' },
    { name: 'Contact', href: '/about/contact' }
  ],
  'Global Impacts': [
    { name: 'Canada', href: '/global-impacts/canada' },
    { name: 'Morocco', href: '/global-impacts/morocco' },
    { name: 'Turkey', href: '/global-impacts/turkey' }
  ],
  'Local Impacts': [
    { name: 'Sponsorships', href: '/local-impacts/sponsorships' },
    { name: 'Food Bank', href: '/local-impacts/food-bank' },
    { name: 'Community', href: '/local-impacts/community' }
  ],
  Programs: [
    { name: 'Youth Program', href: '/programs/youth' },
    { name: 'Education', href: '/programs/education' },
    { name: 'Healthcare', href: '/programs/healthcare' }
  ]
};

const actionButtons = [
  { name: 'Donate', href: '/donate', primary: true },
  { name: 'Sponsorship', href: '/local-impacts/sponsorships', primary: false },
  { name: 'Volunteer', href: '/about/volunteer', primary: false }
];

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:info@unitedmuslimfund.org',
    icon: <FaEnvelope className="w-6 h-6" />,
    isEmail: true
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/unitedmuslimfund/',
    icon: <FaInstagram className="w-6 h-6" />
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@unitedmuslimfund_',
    icon: <FaTiktok className="w-6 h-6" />
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/unitedmuslimfund/',
    icon: <FaLinkedin className="w-6 h-6" />
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/people/United-Muslim-Fund/61561664792645/',
    icon: <FaFacebook className="w-6 h-6" />
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@unitedmuslimfund-yw8fz',
    icon: <FaYoutube className="w-6 h-6" />
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#2c3e50] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/about" className="hover:text-gray-300 transition-colors">About Us</Link>
              <Link href="/programs" className="hover:text-gray-300 transition-colors">Our Programs</Link>
              <Link href="/donate" className="hover:text-gray-300 transition-colors">Donate</Link>
              <Link href="/about/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Programs</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/programs/fill-your-backpack" className="hover:text-gray-300 transition-colors">Fill Your Backpack</Link>
              <Link href="/programs/fuel-your-health" className="hover:text-gray-300 transition-colors">Fuel Your Health</Link>
              <Link href="/programs/fund-your-future" className="hover:text-gray-300 transition-colors">Fund Your Future</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-2">
              <a href="mailto:info@unitedmuslimfund.org" className="hover:text-gray-300 transition-colors">
                info@unitedmuslimfund.org
              </a>
              <p>Toronto, Ontario</p>
            </div>
          </div>

          {/* Social Links - Updated */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.isEmail ? '_self' : '_blank'}
                  rel={link.isEmail ? '' : 'noopener noreferrer'}
                  className="bg-white text-[#2c3e50] p-3 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.name}
                >
                  {React.cloneElement(link.icon, { className: "w-5 h-5" })}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} United Muslim Fund. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 