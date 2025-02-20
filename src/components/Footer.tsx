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
    <footer className="bg-[#1e2a37] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image src="/UMG-Logo.png" alt="Logo" width={150} height={40} className="brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              A youth-driven force for positive change in communities worldwide
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.isEmail ? '_self' : '_blank'}
                  rel={link.isEmail ? '' : 'noopener noreferrer'}
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {Object.entries(footerSections).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4 text-lg">{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          {actionButtons.map((button) => (
            <motion.div
              key={button.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={button.href}
                className={`px-8 py-3 rounded-full font-semibold transition-colors ${
                  button.primary
                    ? 'bg-[#66e8fd] text-[#1e2a37] hover:bg-[#33d7fc]'
                    : 'bg-[#2c3e50] text-white hover:bg-[#3a4f63]'
                }`}
              >
                {button.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} United Muslim Fund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 