import React from 'react';
import Navbar from '../components/Navbar';
import DonationBar from '../components/DonationBar';
import { Inter } from 'next/font/google';
import './globals.css';
import 'leaflet/dist/leaflet.css'
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'United Muslim Fund',
  description: 'Non profit organization dedicated to helping people around the world from a youth perspective',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <DonationBar />
        {children}
      </body>
    </html>
  );
} 