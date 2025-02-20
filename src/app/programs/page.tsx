'use client';

import { motion } from 'framer-motion';

export default function Programs() {
  return (
    <main className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-8"
          >
            Our Programs
          </motion.h1>
          {/* Add your programs content here */}
        </div>
      </section>
    </main>
  );
} 