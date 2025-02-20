'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function LocalImpacts() {
  return (
    <main className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-8"
          >
            Local Impacts
          </motion.h1>
          {/* Add your local impacts content here */}
        </div>
      </section>
    </main>
  );
} 